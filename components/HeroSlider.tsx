"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const slides = [
    {
      title: "Tulip",
      subtitle: "Gửi Trao Những Điều Khó Nói Thành Lời",
      buttonText: "CHỌN TÁC PHẨM",
      link: "/category/tulip",
      image: "https://cdn.thofleur.com/hi8vDoMiug92XNS-5wDjAkN7mwHo2mCnOWcp2CZYDQc/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy9Cw7MgaG9hIHR1bGlwIDIvZGNwN3ZtMWRubm9tbmp4aWpiamYuanBn.webp",
    },
    {
      title: "Mẫu Đơn",
      subtitle: "Sang Trọng Đến Từng Cánh Hoa Rung Động",
      buttonText: "KHÁM PHÁ NGAY",
      link: "/category/mau-don",
      image: "https://cdn.thofleur.com/Ci9Sh9rzPFeBb8J1V2AvI17UT6W6sRY25ytg2OetmNs/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy91cGxvYWRzLzIwMjYvMTAvMDFhMTQ3YzEtMDA3ZS03MDM2LWExZDktZmFhMGU2YzRiZDMzLndlYnA.webp",
    },
    {
      title: "Độc Bản Mix",
      subtitle: "Một Tác Phẩm. Một Người. Không Lặp Lại.",
      buttonText: "XEM BỘ SƯU TẬP",
      link: "/category/bo-hoa-mix",
      image: "https://cdn.thofleur.com/CcfdpNJwLEveadS7Ckr8onM3ijFtTCFr87_6VgPbLkU/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy9UaMO0bmcgY8OgbmgvZmtoYTltaHJsZDNhdndneGVzN2guanBn.webp",
    },
    {
      title: "Hoa Hồng",
      subtitle: "Giao Tận Tay, Vẹn Nguyên Từng Nụ Hoa Tươi",
      buttonText: "GỬI TRAO NGAY",
      link: "/category/hoa-hong",
      image: "https://cdn.thofleur.com/qa9CvKy2whAzyQKMGOffkfLCmMgfK8KFgg5fFQ51NtI/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy91cGxvYWRzLzIwMjYvMTAvMDFhMTQ3YTYtYjljZS03ZmZkLWFhYjctMjUyYmJhM2VjMjBjLndlYnA.webp",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-[#faf9f6]">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "inline-block w-2.5 h-2.5 rounded-full bg-gray-300 mx-1 transition-all cursor-pointer",
            bulletActiveClass: "!w-6 !bg-gray-800 !rounded-full",
          }}
          loop={true}
          className="w-full h-[320px] sm:h-[380px] md:h-[460px] lg:h-[500px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-12 items-center bg-[#faf9f6]">
                {/* CỘT TRÁI: Ảnh hoa bên người mẫu/góc nhìn cận cảnh */}
                <div className="relative h-48 sm:h-64 md:h-full md:col-span-5 lg:col-span-4 overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover object-center"
                    unoptimized
                  />
                </div>

                {/* CỘT PHẢI: Khối chữ tối giản thanh lịch như ảnh mẫu */}
                <div className="md:col-span-7 lg:col-span-8 flex flex-col items-center justify-center text-center p-6 md:p-12 lg:p-16 space-y-4">
                  <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-800 font-normal tracking-wide">
                    {slide.title}
                  </h2>
                  <p className="font-serif text-base sm:text-lg md:text-xl text-gray-600 font-light tracking-wide">
                    {slide.subtitle}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={slide.link}
                      prefetch={true}
                      className="inline-block text-xs md:text-sm font-semibold tracking-widest text-gray-800 uppercase pb-1 border-b border-gray-800 hover:text-primary hover:border-primary transition-colors"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
