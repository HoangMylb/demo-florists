import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
          Liên Hệ Với Hoàng Mỹ Flower
        </h1>
        <p className="text-gray-600 text-base">
          Chúng tôi luôn sẵn sàng lắng nghe và tư vấn mẫu hoa ưng ý nhất cho ngày đặc biệt của bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-gray-50 p-8 rounded-3xl space-y-6 border border-gray-100">
          <h2 className="text-xl font-serif font-bold text-gray-900">
            Thông Tin Tiệm Hoa
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">Địa chỉ shop:</strong>
                <span>xxxx</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">Số điện thoại:</strong>
                <a href="tel:0339974745" className="text-primary hover:underline font-medium">0339974745</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">Gmail:</strong>
                <a href="mailto:nguyenmylb85@gmail.com" className="text-primary hover:underline font-medium">nguyenmylb85@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Instagram className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">Instagram:</strong>
                <a href="https://www.instagram.com/nguyenmylb85/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">@nguyenmylb85</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900">Thời gian mở cửa:</strong>
                <span>xxxx</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-xl font-serif font-bold text-gray-900">
            Gửi Yêu Cầu Tư Vấn Nhanh
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Họ và tên</label>
              <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Số điện thoại</label>
              <input type="tel" placeholder="0339 974 745" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Ghi chú hoặc loại hoa cần tư vấn</label>
              <textarea rows={4} placeholder="Ví dụ: Cần 1 bó hoa sinh nhật bạn gái tone hồng nhẹ giao chiều nay..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-primary focus:outline-none"></textarea>
            </div>
            <button type="button" className="w-full py-3.5 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover transition-colors">
              Gửi thông tin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
