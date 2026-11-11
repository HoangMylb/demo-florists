"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Play,
  Volume2,
  VolumeX,
  Eye,
  Heart,
  MessageCircle,
  Phone,
  Clapperboard,
  ExternalLink,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import reelsData from "@/data/reels.json";

interface Reel {
  reelId: string;
  description: string;
  length: number;
  permalinkUrl: string;
  thumbnailUrl: string;
  publishedAt: string;
  plays: number;
  likes: number;
  comments: number;
  shares: number;
}

function formatNumber(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return "Hôm nay";
  if (days < 7) return `${days} ngày trước`;
  if (days < 30) return `${Math.floor(days / 7)} tuần trước`;
  return `${Math.floor(days / 30)} tháng trước`;
}

function cleanDescription(text: string): string {
  if (!text) return "";
  return text
    .replace(/𝐓𝐡𝐨̛\s*𝐅𝐥𝐞𝐮𝐫/gi, "𝐇𝐨𝐚̀𝐧𝐠 𝐌𝐲̃")
    .replace(/Thơ\s*Fleur/gi, "Hoàng Mỹ")
    .replace(/@thofleur/gi, "@hoangmy")
    .replace(/thofleur/gi, "hoangmy");
}

export default function ReelsSection() {
  const reels = reelsData as Reel[];
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const activeReel = reels[activeIndex];

  // Navigation lock ref
  const isNavigating = useRef(false);
  const dragStartY = useRef(0);
  const currentDragY = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play with 100% sound whenever activeIndex changes
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.currentTime = 0;
    v.muted = false;
    setIsMuted(false);

    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        })
        .catch(() => {
          // Nếu trình duyệt chưa có tương tác đầu tiên khi mới mở trang, tạm chạy mute rồi tự bật tiếng ngay khi chạm/click bất kỳ đâu
          v.muted = true;
          setIsMuted(true);
          v.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        });
    }
  }, [activeIndex]);

  // Tự động mở tiếng 100% ngay khi người dùng có bất kỳ tương tác nào trên trang
  useEffect(() => {
    const unlockAudio = () => {
      const v = videoRef.current;
      if (v && v.muted) {
        v.muted = false;
        setIsMuted(false);
        v.play().catch(() => {});
      }
    };
    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  const togglePlayPause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.muted) {
      v.muted = false;
      setIsMuted(false);
      v.play().catch(() => {});
      setIsPlaying(true);
      return;
    }
    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Navigate next / prev with smooth throttle
  const navigate = useCallback(
    (dir: "next" | "prev") => {
      if (isNavigating.current) return;
      isNavigating.current = true;
      setDragOffset(0);

      setActiveIndex((prev) => {
        const next = dir === "next" ? prev + 1 : prev - 1;
        if (next < 0 || next >= reels.length) {
          isNavigating.current = false;
          return prev;
        }
        return next;
      });

      // Scroll thumbnail in left list into view (chỉ cuộn nội bộ khung danh sách, tuyệt đối không làm cuộn trang web)
      if (listRef.current) {
        const container = listRef.current;
        const targetIdx =
          dir === "next"
            ? Math.min(activeIndex + 1, reels.length - 1)
            : Math.max(activeIndex - 1, 0);
        const item = container.children[targetIdx + 1] as HTMLElement;
        if (item) {
          const itemTop = item.offsetTop;
          const itemBottom = itemTop + item.offsetHeight;
          const viewTop = container.scrollTop;
          const viewBottom = viewTop + container.clientHeight;
          if (itemTop < viewTop) {
            container.scrollTo({ top: Math.max(0, itemTop - 8), behavior: "smooth" });
          } else if (itemBottom > viewBottom) {
            container.scrollTo({
              top: itemBottom - container.clientHeight + 8,
              behavior: "smooth",
            });
          }
        }
      }

      setTimeout(() => {
        isNavigating.current = false;
      }, 550);
    },
    [activeIndex, reels.length]
  );

  // Native wheel event listener for TikTok-style scroll
  useEffect(() => {
    let wheelAccumulator = 0;
    let wheelTimer: NodeJS.Timeout | null = null;

    const handleWheelAction = (deltaY: number) => {
      wheelAccumulator += deltaY;

      if (wheelTimer) clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => {
        wheelAccumulator = 0;
      }, 200);

      if (Math.abs(wheelAccumulator) >= 15) {
        if (wheelAccumulator > 0) {
          navigate("next");
        } else {
          navigate("prev");
        }
        wheelAccumulator = 0;
      }
    };

    const handleWindowWheel = (e: WheelEvent) => {
      const el = playerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (
        e.clientX >= rect.left - 16 &&
        e.clientX <= rect.right + 28 &&
        e.clientY >= rect.top - 32 &&
        e.clientY <= rect.bottom + 12
      ) {
        // Chặn cuộn trang web khi con trỏ chuột đang nằm trong khung video ở giữa
        e.preventDefault();
        e.stopPropagation();
        handleWheelAction(e.deltaY);
      }
    };

    window.addEventListener("wheel", handleWindowWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWindowWheel);
      if (wheelTimer) clearTimeout(wheelTimer);
    };
  }, [navigate]);

  // Keyboard Up/Down navigation like TikTok
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }
      if (e.key === "ArrowDown") {
        navigate("next");
      } else if (e.key === "ArrowUp") {
        navigate("prev");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  // Pointer Drag handlers (supports both mouse drag and touch swipe seamlessly)
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartY.current = e.clientY;
    currentDragY.current = e.clientY;
    // Capture pointer
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    currentDragY.current = e.clientY;
    const diff = currentDragY.current - dragStartY.current;
    // Limit drag offset preview
    setDragOffset(Math.max(-100, Math.min(100, diff)));
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = currentDragY.current - dragStartY.current;
    setDragOffset(0);

    if (diff < -45) {
      navigate("next");
    } else if (diff > 45) {
      navigate("prev");
    } else if (Math.abs(diff) < 10) {
      togglePlayPause();
    }
  };

  return (
    <section id="reels" className="py-12 md:py-16 bg-[#1c3b28] scroll-mt-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1.5">
              <Clapperboard className="w-4 h-4" />
              <span>Góc Nhìn Florist</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
              Hoàng Mỹ — Video &amp; Reels Hoa Tươi
            </h2>
            <p className="text-sm text-white/50 mt-1">
              Cận cảnh những tác phẩm hoa tươi được tạo ra mỗi ngày.
            </p>
          </div>
          <a
            href="https://www.instagram.com/nguyenmylb85/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors shrink-0"
          >
            Xem thêm trên Instagram <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* TikTok-style 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_300px] gap-4 lg:gap-5 items-start">
          {/* ── CỘT TRÁI: Danh sách video (ẩn scrollbar) ── */}
          <div
            ref={listRef}
            className="relative hidden lg:flex flex-col gap-2 max-h-[700px] overflow-y-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold px-2 mb-1 shrink-0">
              Danh sách video
            </p>
            {reels.map((reel, idx) => (
              <button
                key={reel.reelId}
                onClick={() => {
                  setActiveIndex(idx);
                }}
                className={`group flex items-center gap-3 p-2 rounded-xl text-left transition-all duration-200 shrink-0 ${
                  activeIndex === idx
                    ? "bg-white/15 ring-1 ring-emerald-400/50"
                    : "hover:bg-white/8"
                }`}
              >
                {/* Thumbnail nhỏ */}
                <div className="relative w-12 h-16 rounded-lg overflow-hidden shrink-0 bg-black">
                  <Image
                    src={reel.thumbnailUrl}
                    alt={reel.description.slice(0, 30)}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    unoptimized
                  />
                  {activeIndex === idx && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Play className="w-2.5 h-2.5 fill-white text-white translate-x-px" />
                      </div>
                    </div>
                  )}
                </div>
                {/* Meta */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs font-medium leading-snug line-clamp-2 transition-colors ${
                      activeIndex === idx ? "text-white" : "text-white/55 group-hover:text-white/90"
                    }`}
                  >
                    {cleanDescription(reel.description.split("\n")[0]) || `Video #${idx + 1}`}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1 text-[10px] text-white/35">
                    <Eye className="w-3 h-3 text-emerald-400" />
                    <span>{formatNumber(reel.plays)}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ── CỘT GIỮA: TikTok 9:16 Video Player với Vuốt / Drag & Scroll ── */}
          <div className="flex flex-col items-center gap-2">
            {/* Hướng dẫn thao tác TikTok */}
            <div className="flex items-center gap-1.5 text-white/40 text-[11px] mb-1">
              <ChevronUp className="w-3.5 h-3.5 animate-bounce" />
              <span>Cuộn chuột hoặc kéo/vuốt lên xuống để chuyển video</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>

            {/* Khung tương tác Player (capture Mouse Drag + Wheel + Touch) */}
            <div className="relative w-full max-w-[340px] mx-auto">
              {/* Progress dots bên phải */}
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-20">
                {reels.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-2 h-5 bg-emerald-400"
                        : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                    }`}
                    aria-label={`Video ${i + 1}`}
                  />
                ))}
              </div>

              {/* Player Screen 9:16 */}
              <div
                ref={playerRef}
                className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10 select-none touch-none"
                style={{
                  transform: `translateY(${dragOffset}px)`,
                  transition: isDragging ? "none" : "transform 0.3s ease-out",
                }}
              >
                {/* Poster Thumbnail nền sẵn sàng tức thì tránh chớp đen */}
                <div className="absolute inset-0 w-full h-full bg-black z-0">
                  <Image
                    src={activeReel.thumbnailUrl}
                    alt={activeReel.description.slice(0, 30)}
                    fill
                    className="object-cover opacity-90"
                    priority
                    unoptimized
                  />
                </div>

                {/* Native HTML5 Video Player: Auto-play tức thì, không bị lớp Play của Facebook chặn, tự phát 100% có âm thanh khi chuyển video */}
                <div
                  className="absolute inset-0 w-full h-full z-10 cursor-pointer select-none"
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >
                  <video
                    ref={videoRef}
                    key={activeReel.reelId}
                    src={`/reels/${activeReel.reelId}.mp4`}
                    poster={activeReel.thumbnailUrl}
                    autoPlay
                    loop
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />

                  {/* Chỉ hiển thị icon Play nhỏ gọn khi người dùng chủ động bấm tạm dừng */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/25 shadow-xl">
                        <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Top Overlay Branded Header */}
                <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-30 flex items-center justify-between px-3 pointer-events-auto select-none">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-400/60 shadow-sm shrink-0">
                      <Image src="/hoang-my-logo.jpg" alt="Hoàng Mỹ" fill className="object-cover" unoptimized />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-serif font-bold text-white leading-tight">Hoàng Mỹ Flower</span>
                      <span className="text-[9px] text-emerald-300">Reels hoa tươi</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={toggleMute}
                      className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white flex items-center justify-center border border-white/15 transition-colors cursor-pointer"
                      title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
                      aria-label={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </button>
                    <span className="text-[10px] text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full font-semibold border border-white/10">
                      {activeIndex + 1} / {reels.length}
                    </span>
                    {activeReel.plays > 0 && (
                      <div className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white flex items-center gap-1">
                        <Eye className="w-3 h-3 text-emerald-400" />
                        {formatNumber(activeReel.plays)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Next/Prev floating arrows */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2 pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("prev");
                    }}
                    disabled={activeIndex === 0}
                    className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-lg"
                    title="Video trước (Phím mũi tên lên)"
                    aria-label="Video trước"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("next");
                    }}
                    disabled={activeIndex === reels.length - 1}
                    className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-lg"
                    title="Video tiếp theo (Phím mũi tên xuống)"
                    aria-label="Video tiếp theo"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Overlay Info Bar */}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/85 via-black/50 to-transparent z-30 flex items-end justify-between p-3 pointer-events-none">
                  <p className="text-xs text-white/90 font-medium line-clamp-1 pr-2">
                    {cleanDescription(activeReel.description.split("\n")[0]) || "Hoàng Mỹ Flower"}
                  </p>
                  <a
                    href="https://www.instagram.com/nguyenmylb85/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto shrink-0 px-2.5 py-1 rounded-md bg-white/20 hover:bg-white/30 backdrop-blur-sm text-[10px] text-white font-medium flex items-center gap-1 transition-colors cursor-pointer"
                    title="Xem thêm trên Instagram"
                  >
                    <ExternalLink className="w-3 h-3" /> Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile: horizontal scroll danh sách video nhỏ */}
            <div
              className="lg:hidden flex gap-2 overflow-x-auto pb-2 w-full max-w-[340px] mt-2"
              style={{ scrollbarWidth: "none" } as React.CSSProperties}
            >
              {reels.map((reel, idx) => (
                <button
                  key={reel.reelId}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative shrink-0 w-14 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeIndex === idx
                      ? "border-emerald-400"
                      : "border-transparent opacity-55 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={reel.thumbnailUrl}
                    alt={`video ${idx + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ── CỘT PHẢI: Chi tiết video ── */}
          <div
            className="bg-[#15271b] rounded-2xl p-5 border border-white/8 flex flex-col gap-5 lg:max-h-[700px] overflow-y-auto"
            style={{ scrollbarWidth: "none" } as React.CSSProperties}
          >
            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-emerald-400/50 shrink-0">
                <Image src="/hoang-my-logo.jpg" alt="Hoàng Mỹ" fill className="object-cover" unoptimized />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-white leading-tight">Hoàng Mỹ Flower</h3>
                <p className="text-[10px] text-emerald-300 mt-0.5">Thiết kế hoa tươi nghệ thuật</p>
              </div>
              <a
                href="https://www.instagram.com/nguyenmylb85/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-[10px] font-semibold text-white/40 hover:text-emerald-300 transition-colors"
              >
                Theo dõi
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: Eye, label: "Lượt xem", value: formatNumber(activeReel.plays), color: "text-emerald-300" },
                { icon: Heart, label: "Yêu thích", value: formatNumber(activeReel.likes), color: "text-rose-400" },
                { icon: MessageCircle, label: "Bình luận", value: formatNumber(activeReel.comments), color: "text-sky-300" },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                  <Icon className={`w-4 h-4 mx-auto mb-1 ${color}`} />
                  <div className="text-sm font-bold text-white">{value}</div>
                  <div className="text-[9px] text-white/35 mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-2">Mô tả</p>
              <p className="text-xs text-white/80 whitespace-pre-line leading-relaxed line-clamp-6">
                {cleanDescription(activeReel.description) || "Tác phẩm hoa tươi Hoàng Mỹ"}
              </p>
            </div>

            {/* Timestamp */}
            <div className="text-[11px] text-white/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              {timeAgo(activeReel.publishedAt)}
            </div>

            {/* CTAs */}
            <div className="border-t border-white/10 pt-4 space-y-2.5">
              <p className="text-[11px] text-white/40 text-center leading-relaxed">
                Thích mẫu hoa này? Liên hệ ngay để đặt hoa hỏa tốc:
              </p>
              <a
                href="https://zalo.me/0339974745"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" /> Nhắn Zalo tư vấn
              </a>
              <a
                href="tel:0339974745"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" /> Gọi 0339974745
              </a>
              <a
                href="https://www.instagram.com/nguyenmylb85/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-xs font-semibold transition-opacity shadow-md cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Xem Reels trên Instagram Hoàng Mỹ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
