"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clapperboard, Flame, Sparkles } from "lucide-react";

export default function StoryBar() {
  const stories = [
    {
      title: "Hoa Sinh Nhật",
      href: "/bo-hoa",
      image: "https://cdn.thofleur.com/kt71etHxRosP6ArwSHAZaqCGk5ZBaMEisOJEkN5aJJ0/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy91cGxvYWRzLzIwMjYvMTAvMDFhMTQ4MTAtNWQ0YS03MzRiLTkyMTEtODc5MTNiNjA5MmNhLndlYnA.webp",
      badge: null,
    },
    {
      title: "Hoa Tốt Nghiệp",
      href: "/category/bo-hoa-mix",
      image: "https://cdn.thofleur.com/6oetbr8eHKeDwa6uyXE2haGVEkBBp_d1Y1lUALsGpy8/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy91cGxvYWRzLzIwMjYvMTAvMDFhMTIwZjctMmVkNC03NDMyLTkyNDEtOWJhNzhiOGMwODg5LmpwZWc.webp",
      badge: null,
    },
    {
      title: "Reels Video",
      href: "#reels",
      image: "/hoang-my-logo.jpg",
      badge: "reels",
    },
    {
      title: "Bán Chạy",
      href: "/best-seller",
      image: "https://cdn.thofleur.com/hi8vDoMiug92XNS-5wDjAkN7mwHo2mCnOWcp2CZYDQc/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy9Cw7MgaG9hIHR1bGlwIDIvZGNwN3ZtMWRubm9tbmp4aWpiamYuanBn.webp",
      badge: "hot",
    },
    {
      title: "Hoa Mới Về",
      href: "/new",
      image: "https://cdn.thofleur.com/Gyx1cKJul3oukZ3j3h6P8Jh68123dhtS2sYqvjZ9nno/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy9HaeG7jyBob2EvdHY5dWJ3b2ZqZGNrY2lscWl3NWIuanBn.webp",
      badge: "new",
    },
    {
      title: "Hoa Cưới",
      href: "/category/mau-don",
      image: "https://cdn.thofleur.com/uLPx99b8FyF7iTgHSAH-ChMTLDHa-qO4w6Tt0WJuaDQ/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy9Cw6xuaCBob2Evb3V5dm5zZWgxdnd0bnJqeGp3bmQuanBn.webp",
      badge: null,
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="flex items-center justify-start sm:justify-center gap-5 sm:gap-8 overflow-x-auto no-scrollbar py-2">
        {stories.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="flex flex-col items-center gap-1.5 shrink-0 group cursor-pointer focus:outline-none"
          >
            <div className="relative">
              {/* Outer ring gradient */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-emerald-600 to-primary group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Badge overlay */}
              {item.badge === "reels" && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-black/80 text-white flex items-center justify-center shadow-md">
                  <Clapperboard className="w-3 h-3 text-emerald-400" />
                </div>
              )}
              {item.badge === "hot" && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md">
                  <Flame className="w-3 h-3" />
                </div>
              )}
              {item.badge === "new" && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-3 h-3" />
                </div>
              )}
            </div>

            <span className="text-[11px] sm:text-xs font-medium text-gray-700 group-hover:text-primary transition-colors text-center whitespace-nowrap">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

