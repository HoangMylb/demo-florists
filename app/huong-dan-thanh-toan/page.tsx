import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hướng Dẫn Thanh Toán | Hoàng Mỹ",
  description: "Hướng dẫn các phương thức thanh toán tại Hoàng Mỹ Flower",
};

export default function PaymentGuidePage() {
  return (
    <section className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-gray-700 space-y-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Hướng dẫn thanh toán tại Hoàng Mỹ 🌸</h2>
        <section className="p-5" aria-labelledby="payment-methods-heading">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              <div className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-transform transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
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
                    className="lucide lucide-dollar-sign w-6 h-6 text-primary"
                    aria-hidden="true"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900">Tiền Mặt</h3>
                </div>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-medium text-base">Thanh toán trực tiếp tại shop</h4>
                    <p className="mt-1 leading-relaxed">
                      <strong>Địa chỉ: </strong>Hoàng Mỹ Shop Hoa Tươi
                      <br />
                      79 Hồ Văn Huê, Phường Đức Nhuận, Thành Phố Hồ Chí Minh, Việt Nam
                      <br />
                      <strong>Liên hệ: </strong>{" "}
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
                        className="lucide lucide-phone inline w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                      </svg>{" "}
                      <a href="tel:0339974745" className="hover:underline">
                        (+84) 339 974 745
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-transform transform hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
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
                    className="lucide lucide-banknote w-6 h-6 text-primary"
                    aria-hidden="true"
                  >
                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M6 12h.01M18 12h.01"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900">Chuyển Khoản Ngân Hàng</h3>
                </div>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-medium text-base">Thông tin chuyển khoản</h4>
                    <p className="mt-1 leading-relaxed">
                      Ngân Hàng TP Bank
                      <br />
                      <strong>Chủ tài khoản: </strong>HỘ KINH DOANH HOÀNG MỸ - SHOP HOA TƯƠI
                      <br />
                      Số tài khoản: 0339974745
                      <br />
                      <strong>Liên hệ:</strong>{" "}
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
                        className="lucide lucide-phone inline w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                      </svg>{" "}
                      <a href="tel:0339974745" className="hover:underline">
                        (+84) 339 974 745
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p className="mt-12 font-medium text-center italic">
          🌷 Với Hoàng Mỹ, bạn không chỉ nhận được một sản phẩm hoa, mà còn là một <em>trải nghiệm chăm sóc trọn vẹn</em> – nơi cảm xúc của bạn được nâng niu và lan tỏa.
        </p>
      </div>
    </section>
  );
}
