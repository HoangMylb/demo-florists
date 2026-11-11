"use client";

import React from "react";
import Link from "next/link";
import { Home, Compass, Phone, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#faf9f6] via-white to-[#faf9f6]">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* Artistic 404 Badge */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#1c3b28]/5 border-2 border-dashed border-[#1c3b28]/20 flex items-center justify-center">
            <Compass className="w-12 h-12 sm:w-14 sm:h-14 text-primary animate-pulse" />
          </div>
          <span className="absolute -bottom-2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold tracking-widest uppercase shadow-md">
            Lỗi 404
          </span>
        </div>

        {/* Heading & Details */}
        <div className="space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c3b28] tracking-tight">
            Trang Không Tồn Tại
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto leading-relaxed">
            Rất tiếc, trang bạn đang tìm kiếm không tồn tại, đường dẫn có thể đã được thay đổi hoặc tạm thời chưa cập nhật trên hệ thống Hoàng Mỹ Flower.
          </p>
        </div>

        {/* Action Button: Về Trang Chủ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            prefetch={true}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-primary hover:bg-[#2b4131] text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Về Trang Chủ</span>
          </Link>

          <Link
            href="/bo-hoa"
            prefetch={true}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold border border-gray-200 transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span>Xem Bó Hoa Tươi</span>
          </Link>
        </div>

        {/* Helpful links recommendation */}
        <div className="pt-8 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Hoặc bạn có thể tham khảo các danh mục phổ biến:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "Bán Chạy", href: "/best-seller" },
              { label: "Hoa Mới Về", href: "/new" },
              { label: "Hoa Tulip", href: "/category/tulip" },
              { label: "Hoa Hồng", href: "/category/hoa-hong" },
              { label: "Hoa Mẫu Đơn", href: "/category/mau-don" },
              { label: "Giỏ & Chậu Hoa", href: "/category/chau-gio-hoa" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-600 bg-gray-50 hover:bg-primary/10 hover:text-primary transition-colors border border-gray-100 cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
            <span>Cần hỗ trợ gấp? Gọi ngay hotline:</span>
            <a
              href="tel:0339974745"
              className="font-bold text-primary hover:underline cursor-pointer"
            >
              0339974745
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

