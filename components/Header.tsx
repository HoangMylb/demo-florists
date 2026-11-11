"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, Menu, X, ChevronDown } from "lucide-react";
import menuData from "@/data/menu.json";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Left categories from menuData
  const mainCategories = menuData.filter((item) => item.href !== "/");

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-200">
      {/* Chiều rộng full-width với padding 32px (px-8 = 2rem) cả 2 bên trái phải */}
      <div className="w-full px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">

          {/* BÊN TRÁI: Các category để chọn (Desktop) / Menu burger (Mobile) */}
          <div className="flex items-center gap-6 flex-1">
            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary transition-colors focus:outline-none lg:hidden cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation Categories */}
            <nav className="hidden lg:flex items-center space-x-6">
              {mainCategories.slice(0, 4).map((item, idx) => (
                <div key={idx} className="relative group">
                  <Link
                    href={item.href}
                    prefetch={true}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2 cursor-pointer"
                  >
                    {item.name}
                    {item.sub && (
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown menu */}
                  {item.sub && (
                    <div className="absolute top-full left-0 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.sub.map((subItem, sIdx) => (
                        <Link
                          key={sIdx}
                          href={subItem.href}
                          prefetch={true}
                          className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Ở GIỮA: Logo chính Hoàng Mỹ */}
          <div className="flex-shrink-0 flex items-center justify-center text-center">
            <Link href="/" prefetch={true} className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-md border-2 border-[#1c3b28]/10 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/hoang-my-logo.jpg"
                  alt="Hoàng Mỹ Flower"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-serif text-2xl font-bold tracking-wider text-[#1c3b28] group-hover:opacity-90 transition-opacity">
                  Hoàng Mỹ
                </span>
                <span className="text-[9px] tracking-widest text-gray-400 uppercase font-light -mt-0.5">
                  Floral Design & Boutique
                </span>
              </div>
            </Link>
          </div>

          {/* BÊN PHẢI: Chuyện về hoa, Tuyển dụng, Liên hệ và Icon Grid (Đã loại bỏ Giỏ hàng) */}
          <div className="flex items-center justify-end gap-6 flex-1">
            {/* Desktop Navigation - Bên phải */}
            <nav className="hidden lg:flex items-center space-x-6">
              {/* Chuyện về hoa (Dropdown: Tuyển dụng, Khóa học, Sự kiện) */}
              <div className="relative group">
                <Link
                  href="/chuyen-ve-hoa"
                  prefetch={true}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  Chuyện về hoa
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary transition-transform group-hover:rotate-180" />
                </Link>

                <div className="absolute top-full right-0 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <Link
                    href="/chuyen-ve-hoa/tuyen-dung"
                    prefetch={true}
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer"
                  >
                    Tuyển dụng
                  </Link>
                  <Link
                    href="/chuyen-ve-hoa/khoa-hoc-chuyen-sau"
                    prefetch={true}
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer"
                  >
                    Khóa học chuyên sâu
                  </Link>
                  <Link
                    href="/chuyen-ve-hoa/event"
                    prefetch={true}
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer"
                  >
                    Sự kiện
                  </Link>
                </div>
              </div>

              {/* Liên hệ */}
              <Link
                href="/lien-he"
                prefetch={true}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2 cursor-pointer"
              >
                Liên hệ
              </Link>
            </nav>

            {/* Grid Icon */}
            <Link
              href="/bo-hoa"
              prefetch={true}
              className="pl-2 py-2 pr-0 text-gray-700 hover:text-primary transition-colors cursor-pointer"
              aria-label="Tất cả danh mục"
              title="Tất cả danh mục"
            >
              <LayoutGrid className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 pt-2 pb-6 space-y-3">
          {menuData.map((item, idx) => (
            <div key={idx} className="border-b border-gray-50 pb-2">
              <Link
                href={item.href}
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-gray-800 hover:text-primary py-1"
              >
                {item.name}
              </Link>
              {item.sub && (
                <div className="pl-4 mt-1 space-y-1 border-l-2 border-primary/20">
                  {item.sub.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      href={sub.href}
                      prefetch={true}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-gray-600 hover:text-primary py-1.5"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
