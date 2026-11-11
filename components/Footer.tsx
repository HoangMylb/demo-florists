import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#15271b] text-white/80 pt-16 pb-12 mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <Image
                  src="/hoang-my-logo.jpg"
                  alt="Hoàng Mỹ Flower"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white tracking-wider">
                Hoàng Mỹ
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Mỗi bó hoa từ Hoàng Mỹ là một cam kết danh dự — tươi từng cánh, gửi ảnh thực tế trước khi giao, tốc hành 2 giờ nội thành TP.HCM.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/nguyenmylb85/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
                title="Instagram Hoàng Mỹ Flower"
              >
                <Image src="/social/icons8-instagram.svg" alt="Instagram" width={22} height={22} unoptimized />
              </a>
            </div>
          </div>

          {/* Col 2: Thông tin liên hệ */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wide uppercase">
              Thông tin liên hệ
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>79 Hồ Văn Huê, Phường Đức Nhuận, Thành Phố Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:0339974745" className="hover:text-white transition-colors font-medium cursor-pointer">
                  0339974745
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:nguyenmylb85@gmail.com" className="hover:text-white transition-colors cursor-pointer">
                  nguyenmylb85@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>08:00 — 22:00 (Mỗi ngày)</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Danh mục hoa */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wide uppercase">
              Danh mục hoa tươi
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/bo-hoa" className="hover:text-white transition-colors cursor-pointer">
                  Bó hoa tươi nhập khẩu
                </Link>
              </li>
              <li>
                <Link href="/best-seller" className="hover:text-white transition-colors cursor-pointer">
                  Hoa bán chạy nhất
                </Link>
              </li>
              <li>
                <Link href="/category/bo-hoa-mix" className="hover:text-white transition-colors cursor-pointer">
                  Bó hoa mix nghệ thuật
                </Link>
              </li>
              <li>
                <Link href="/category/hoa-cuoi" className="hover:text-white transition-colors cursor-pointer">
                  Hoa cưới cầm tay cô dâu
                </Link>
              </li>
              <li>
                <Link href="/new" className="hover:text-white transition-colors cursor-pointer">
                  Mẫu hoa mới theo mùa
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Thông tin & Chính sách */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wide uppercase">
              Thông tin &amp; Chính sách
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link 
                  href="/shop-hoa-tuoi-thanh-pho-ho-chi-minh" 
                  className="hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  Shop hoa tươi TP.HCM
                </Link>
              </li>
              <li>
                <Link 
                  href="/cham-soc-khach-hang" 
                  className="hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  Chăm sóc khách hàng
                </Link>
              </li>
              <li>
                <Link 
                  href="/chinh-sach-ban-hang" 
                  className="hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  Chính sách bán hàng
                </Link>
              </li>
              <li>
                <Link 
                  href="/huong-dan-thanh-toan" 
                  className="hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  Hướng dẫn thanh toán
                </Link>
              </li>
              <li>
                <Link 
                  href="/chinh-sach-bao-mat" 
                  className="hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li className="pt-1 border-t border-white/10">
                <Link 
                  href="/lien-he" 
                  className="hover:text-white transition-colors cursor-pointer text-xs text-white/50"
                >
                  Liên hệ hợp tác &amp; Sự kiện
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Hoàng Mỹ Flower. All rights reserved.</p>
          <p>Thiết kế hoa tươi nghệ thuật &amp; Điện hoa hỏa tốc TP. Hồ Chí Minh</p>
        </div>
      </div>
    </footer>
  );
}
