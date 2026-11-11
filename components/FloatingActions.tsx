"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactButtons = [
    {
      href: "tel:0339974745",
      icon: "/social/icons8-phone-white.svg",
      label: "Gọi điện: 0339974745",
      bgClass: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20",
    },
    {
      href: "https://zalo.me/0339974745",
      icon: "/social/icons8-zalo.svg",
      label: "0339974745",
      bgClass: "bg-[#0068FF] hover:bg-[#0068FF]/90 shadow-blue-600/20",
    },
    {
      href: "https://www.instagram.com/nguyenmylb85/",
      icon: "/social/icons8-instagram.svg",
      label: "Instagram",
      bgClass: "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 shadow-pink-500/20",
    },
  ];

  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-3 pointer-events-none">
      <div className="flex flex-col gap-3 pointer-events-auto">
        {contactButtons.map((btn, index) => (
          <a
            key={index}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center ${btn.bgClass} text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer`}
            title={btn.label}
            aria-label={btn.label}
          >
            <div className="relative w-6 h-6 md:w-7 md:h-7">
              <Image
                src={btn.icon}
                alt={btn.label}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </a>
        ))}
      </div>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-primary text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto mt-1 cursor-pointer"
          aria-label="Lên đầu trang"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
