"use client";

import React, { useState } from "react";
import { Sparkles, HeartHandshake, Droplets, SunMedium, Scissors, HelpCircle, X } from "lucide-react";

export default function FlowerCareSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF9E5]/70 border border-amber-200/60 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100/80 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Bí Quyết Từ Florist</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                Hướng Dẫn Giữ Hoa Tươi Bền Lâu
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hoàng Mỹ Flower chia sẻ cẩm nang chăm sóc hoa tươi đúng cách tại nhà, giúp bó hoa và giỏ hoa của bạn luôn rạng rỡ và tươi lâu trên 3 - 5 ngày.
              </p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="shrink-0 px-6 py-3.5 rounded-2xl bg-primary text-white font-medium text-xs tracking-wider uppercase hover:bg-primary-hover transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              Xem Hướng Dẫn Chi Tiết
            </button>
          </div>

          {/* Quick tips summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-amber-200/50">
            <div className="flex items-start gap-3 bg-white/60 p-4 rounded-2xl">
              <SunMedium className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-xs text-gray-900 uppercase">Nhiệt độ thích hợp</h4>
                <p className="text-xs text-gray-600 mt-0.5">Đặt hoa nơi thoáng mát 23-25°C, tránh gió máy lạnh trực tiếp.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/60 p-4 rounded-2xl">
              <Droplets className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-xs text-gray-900 uppercase">Cấp nước mỗi ngày</h4>
                <p className="text-xs text-gray-600 mt-0.5">Thay nước bình hoặc châm thêm nước vào xốp cắm định kỳ sáng/chiều.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/60 p-4 rounded-2xl">
              <Scissors className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-xs text-gray-900 uppercase">Cắt vát gốc hoa</h4>
                <p className="text-xs text-gray-600 mt-0.5">Cắt xéo gốc 45 độ mỗi lần thay nước để hoa hút nước tốt hơn.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#FFFDF7] rounded-3xl overflow-hidden shadow-2xl border border-amber-200 p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary uppercase tracking-wide">
                Chăm Sóc Hoa Tươi
              </h3>
              <p className="text-xs text-gray-500 italic mt-1.5">
                Cảm ơn bạn đã tin chọn Hoàng Mỹ Flower làm bạn đồng hành trao gửi yêu thương!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bó hoa */}
              <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-[11px] font-semibold uppercase">
                  Đối với Bó Hoa
                </span>
                <ul className="space-y-2 text-xs text-gray-700 leading-relaxed list-disc pl-4 marker:text-primary">
                  <li>Tháo bỏ giấy gói và phần bọc ẩm gốc hoa, cắm hoa vào bình nước sạch.</li>
                  <li>Trưng hoa nơi thoáng gió, mát mẻ (23 - 25°C), tránh luồng gió máy lạnh phả thẳng.</li>
                  <li>Cắt vát gốc 45° và thay nước mỗi ngày để ngăn vi khuẩn phát triển.</li>
                  <li>Phun sương nhẹ lên cánh hoa vào sáng sớm cho hoa luôn tươi mọng.</li>
                </ul>
              </div>

              {/* Giỏ / Hộp hoa */}
              <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-[11px] font-semibold uppercase">
                  Đối với Giỏ / Hộp Hoa
                </span>
                <ul className="space-y-2 text-xs text-gray-700 leading-relaxed list-disc pl-4 marker:text-primary">
                  <li>Châm thêm nửa chén nước sạch nhẹ nhàng vào mút xốp cắm mỗi buổi sáng.</li>
                  <li>Tránh để hộp/giỏ hoa gần nơi có nhiệt độ cao hoặc có ánh nắng gắt.</li>
                  <li>Nhặt bỏ các cánh hoa héo bên ngoài để tránh lây sang các hoa khác.</li>
                  <li>Dùng bình xịt tia sương phun nhẹ lên tán lá và cánh hoa.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center text-[11px] text-gray-400 font-serif uppercase tracking-widest">
              Hoàng Mỹ Flower — Trao Gửi Yêu Thương Tinh Tế
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

