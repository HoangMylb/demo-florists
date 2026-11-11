"use client";

import React, { useState } from "react";

export default function CustomerCarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="w-full py-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Danh sách chính sách chăm sóc khách hàng">
          {/* Card 1: Giao Hoa Nhanh 24/7 */}
          <div className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-transform transform hover:-translate-y-1">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-6 h-6" aria-hidden="true">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
            </div>
            <h3 className="text-gray-900 text-center font-semibold mb-2">Giao Hoa Nhanh 24/7</h3>
            <p className="text-gray-600 text-sm text-center">Hỗ trợ giao hoa nhanh trong vòng 2-4 giờ khi tại TP.HCM và các khu vực lân cận.</p>
          </div>

          {/* Card 2: Đảm Bảo Chất Lượng */}
          <div className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-transform transform hover:-translate-y-1">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-6 h-6" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-gray-900 text-center font-semibold mb-2">Đảm Bảo Chất Lượng</h3>
            <p className="text-gray-600 text-sm text-center">Hoa tươi Hoàng Mỹ 100% nhập mới mỗi ngày, cam kết chất lượng và đúng mẫu.</p>
          </div>

          {/* Card 3: Hỗ Trợ Chỉnh Sửa */}
          <div className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-transform transform hover:-translate-y-1">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw w-6 h-6" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
            </div>
            <h3 className="text-gray-900 text-center font-semibold mb-2">Hỗ Trợ Chỉnh Sửa</h3>
            <p className="text-gray-600 text-sm text-center">Chỉnh sửa miễn phí nếu sản phẩm không đạt yêu cầu đã thỏa thuận trước.</p>
          </div>
        </div>
      </div>

      <section className="max-w-4xl mx-auto py-12 px-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center">Chăm sóc khách hàng tại Hoàng Mỹ 🌸</h2>
        <p className="mb-4">
          Tại <strong>Hoàng Mỹ</strong>, chúng mình tin rằng hoa không chỉ là món quà, mà còn là cách để gửi gắm tình cảm và lưu giữ những khoảnh khắc đẹp trong cuộc sống. Vì vậy, dịch vụ chăm sóc khách hàng luôn được đặt lên hàng đầu – từ lúc bạn tìm hiểu, đặt hoa cho đến khi hoa được trao tận tay người nhận.
        </p>
        <h3 className="text-xl font-medium mt-6 mb-2 font-semibold">Luôn lắng nghe và thấu hiểu</h3>
        <p className="mb-4">
          Chúng mình hiểu rằng mỗi bó hoa, mỗi giỏ hoa đều mang một câu chuyện riêng. Đội ngũ Hoàng Mỹ luôn sẵn sàng lắng nghe mong muốn của bạn để tư vấn loại hoa, kiểu dáng và thông điệp phù hợp nhất.
        </p>
        <h3 className="text-xl font-medium mt-6 mb-2 font-semibold">Tư vấn tận tình – đồng hành cùng bạn</h3>
        <p className="mb-4">
          Bạn có thể chưa rành về các loài hoa hay cách giữ hoa tươi lâu? Đừng lo, chúng mình sẽ giải thích một cách nhẹ nhàng, gần gũi để bạn dễ dàng lựa chọn. Chúng mình muốn bạn cảm thấy thoải mái và an tâm như đang trò chuyện với một người bạn am hiểu về hoa.
        </p>
        <h3 className="text-xl font-medium mt-6 mb-2 font-semibold">Hỗ trợ nhanh chóng – dù là chi tiết nhỏ nhất</h3>
        <p className="mb-4">
          Từ việc điều chỉnh đơn hàng, đổi thời gian giao, đến những yêu cầu đặc biệt như ghi thiệp hay phối màu theo ý thích – Hoàng Mỹ luôn cố gắng đáp ứng nhanh chóng và chu đáo.
        </p>
        <h3 className="text-xl font-medium mt-6 mb-2 font-semibold">Dịch vụ sau khi giao hoa</h3>
        <p className="mb-4">
          Không chỉ dừng lại ở việc giao hoa, chúng mình còn hướng dẫn bạn cách chăm sóc hoa để giữ được vẻ đẹp tươi mới lâu hơn. Một chút nước sạch, một vài bí quyết nhỏ… sẽ giúp bó hoa của bạn bền và rạng rỡ thêm vài ngày.
        </p>
        <p className="mt-6 font-medium text-center italic">
          🌷 Với Hoàng Mỹ, bạn không chỉ nhận được một sản phẩm hoa, mà còn là một <em>trải nghiệm chăm sóc trọn vẹn</em> – nơi cảm xúc của bạn được nâng niu và lan tỏa.
        </p>
      </section>

      {/* Accordion FAQ */}
      <div className="w-full bg-white py-8 px-8 rounded-2xl shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">Câu Hỏi Thường Gặp</h2>
        <div className="space-y-4">
          {/* FAQ 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => toggleFaq(0)}
              className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span className="font-medium text-gray-900">Shop có những hình thức giao hàng nào?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openFaq === 0 ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openFaq === 0 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 text-gray-600 leading-relaxed">
                Chúng tôi hỗ trợ giao hàng hỏa tốc trong nội thành TP.HCM (2–4 giờ).
              </div>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => toggleFaq(1)}
              className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span className="font-medium text-gray-900">Thời gian đổi trả sản phẩm là bao lâu?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openFaq === 1 ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openFaq === 1 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 text-gray-600 leading-relaxed">
                Khi nhận hàng nếu sản phẩm có tình trạng hư hỏng, khách hàng có thể liên hệ ngay cho Hoàng Mỹ để shop kiểm tra tình trạng, xử lý và đổi trả.
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => toggleFaq(2)}
              className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span className="font-medium text-gray-900">Làm thế nào để đặt hoa theo thiết kế riêng?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openFaq === 2 ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openFaq === 2 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 text-gray-600 leading-relaxed">
                Bạn chỉ cần liên hệ Hotline hoặc chat trực tiếp trên fanpage với CSKH, cung cấp yêu cầu và hình ảnh mẫu, chúng mình sẽ tư vấn và gửi mẫu tham khảo trước khi thực hiện.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
