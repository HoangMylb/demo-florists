"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TestimonialItem {
  id: number;
  name: string;
  occasion: string;
  avatar: string;
  review: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Phan Thanh Triển",
    occasion: "Tặng kỷ niệm yêu nhau",
    avatar: "/avatars/avatar-1.jpg",
    review:
      "Cái shop này nói chuyện bị dễ thương lắm á, khâu CSKH rất rất tốt. Tiện đường tới lấy từ các bạn nhân viên tới chị chủ đều nhiệt tình mời vô nhà ngồi, tận tình hỏi về tới đâu để gói hoa lại cho chắc. Giữa 1 rừng tiệm hoa thì Hoàng Mỹ luôn là lựa chọn đầu tiên.",
  },
  {
    id: 2,
    name: "Duy Nguyễn",
    occasion: "Tặng người yêu",
    avatar: "/avatars/avatar-2.jpg",
    review:
      "Shop tư vấn nhiệt tình siêu dễ thương luôn, đúng mẫu, hoa tươi rói, lần thứ 2 đặt đơn của shop rồi rất uy tín luôn nha. Lúc giao hoa shipper gọi dạ thưa lễ phép cẩn thận cực kỳ.",
  },
  {
    id: 3,
    name: "Phuong Tran",
    occasion: "Tặng người yêu",
    avatar: "/avatars/avatar-3.jpg",
    review:
      "Ai chê thế hệ cột nhà gia nhập thị trường lao động chứ tui mê nha. Nhân viên tư vấn cà rỡn mà nhiệt tình, dễ thương, đúng hoa đúng hẹn. Hoa tươi, shop chăm chút chọn từng hoa hay sao ấy, cả bó nhưng hoa nào cũng vẹn nguyên.",
  },
  {
    id: 4,
    name: "Ngọc Ánh",
    occasion: "Tặng sinh nhật mẹ",
    avatar: "/avatars/avatar-4.jpg",
    review:
      "Lần đầu tiên đặt hoa mà mẹ mình khen nức nở cả ngày. Hoa giao đến còn đọng sương tươi mới, giấy gói sang trọng chuẩn gu Hàn Quốc, có cả thiệp viết tay nắn nót. Cảm ơn Hoàng Mỹ vì sự chu đáo!",
  },
  {
    id: 5,
    name: "Hoàng Bách",
    occasion: "Chúc mừng khai trương đối tác",
    avatar: "/avatars/avatar-5.jpg",
    review:
      "Bình hoa thiết kế sang trọng, vượt ngoài mong đợi của công ty mình. Đối tác nhận xong chụp hình gửi cảm ơn liền. Đặt hoa gấp trong 2 tiếng mà shop chụp ảnh thực tế duyệt trước khi giao siêu mượt mà.",
  },
  {
    id: 6,
    name: "Thảo My",
    occasion: "Tự thưởng bản thân",
    avatar: "/avatars/avatar-6.jpg",
    review:
      "Tuần nào mình cũng ghé Hoàng Mỹ để rước một em về phòng làm việc. Nhìn hoa tươi nở mỗi sáng thấy yêu đời hẳn ra, độ bền hoa phải trên 4-5 ngày luôn á. Cực kỳ ưng ý cách cắm hoa đương đại ở đây.",
  },
  {
    id: 7,
    name: "Mai Linh",
    occasion: "Hoa cưới cầm tay cô dâu",
    avatar: "/avatars/avatar-7.jpg",
    review:
      "Mình đặt hoa cưới cầm tay và hoa cài áo ở Hoàng Mỹ, nhận hoa mà xúc động vì quá tỉ mỉ và xinh xắn. Hoa giữ tươi nguyên vẹn suốt cả buổi lễ từ sáng đến tối. Cảm ơn shop rất nhiều!",
  },
  {
    id: 8,
    name: "Quốc Huy",
    occasion: "Tặng người yêu sinh nhật",
    avatar: "/avatars/avatar-8.jpg",
    review:
      "Dịch vụ giao hoa hỏa tốc 2h của shop cực kỳ chuẩn. Mình ở nước ngoài đặt tặng bạn gái ở TP.HCM, shop gửi ảnh chụp hoa thực tế trước khi đi giao, viết thiệp tay rất đẹp. Bạn gái mình nhận được cực kỳ bất ngờ.",
  },
  {
    id: 9,
    name: "Thu Trang",
    occasion: "Hoa trang trí phòng khách",
    avatar: "/avatars/avatar-9.jpg",
    review:
      "Bình hoa cắm tone pastel nhã nhặn, sang trọng cực kỳ. Mua về trang trí phòng khách ai ghé thăm cũng tấm tắc khen. Nhân viên tư vấn chọn hoa theo phong thủy rất có tâm.",
  },
  {
    id: 10,
    name: "Đức Thành",
    occasion: "Kỷ niệm ngày cưới",
    avatar: "/avatars/avatar-10.jpg",
    review:
      "Đã đặt hoa ở đây lần thứ 3 rồi, lần nào cũng ưng ý tuyệt đối. Bó hoa hồng Ecuador cánh dày, form dáng hiện đại chứ không bị sến. Giá cả tương xứng hoàn toàn với chất lượng.",
  },
];

export default function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeRealIndex, setActiveRealIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-[#faf5f2] relative overflow-hidden">
      {/* Decorative floral blush background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="h-px w-10 bg-gray-300"></span>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
              HOÀNG MỸ FLOWER
            </span>
            <span className="h-px w-10 bg-gray-300"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-800 tracking-wide uppercase">
            KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI
          </h2>

          <p className="text-sm md:text-base text-gray-600 mt-2.5 font-light max-w-xl mx-auto">
            Những lời góp ý vô cùng quý giá mà khách hàng đã để lại cho{" "}
            <span className="text-amber-600 font-medium">Hoàng Mỹ</span>.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-2 sm:px-6">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveRealIndex(swiper.realIndex);
            }}
            initialSlide={0}
            slidesPerView={1.15}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            loopAdditionalSlides={4}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.6,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="!overflow-visible py-12"
          >
            {testimonials.map((item, index) => {
              return (
                <SwiperSlide key={item.id} className="!h-auto pt-12 pb-6">
                  {({ isActive }) => (
                    <div
                      className={`relative h-full flex flex-col items-center text-center bg-white rounded-2xl sm:rounded-3xl pt-14 pb-8 px-6 sm:px-8 transition-all duration-500 cursor-pointer ${
                        isActive
                          ? "scale-100 md:scale-105 shadow-xl shadow-gray-200/80 border border-primary/20 opacity-100 z-20"
                          : "scale-95 md:scale-90 shadow-sm border border-gray-100 opacity-60 hover:opacity-85 z-10"
                      }`}
                      onClick={() => {
                        if (!isActive && swiperRef.current) {
                          swiperRef.current.slideToLoop(index);
                        }
                      }}
                    >
                      {/* Avatar Floating Over Top Center */}
                      <div
                        className={`absolute -top-10 left-1/2 -translate-x-1/2 rounded-full overflow-hidden transition-all duration-500 shadow-md ${
                          isActive
                            ? "w-20 h-20 border-4 border-white ring-2 ring-primary/40 shadow-lg"
                            : "w-16 h-16 border-4 border-white"
                        }`}
                      >
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      {/* Customer Name */}
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                        {item.name}
                      </h3>

                      {/* Occasion / Relationship */}
                      <p className="text-xs sm:text-sm text-blue-600 font-medium mt-1">
                        ( {item.occasion} )
                      </p>

                      {/* 5 Star Rating */}
                      <div className="flex items-center justify-center gap-1 mt-3 mb-3.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      {/* Customer Review Content */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light line-clamp-5">
                        {item.review}
                      </p>

                      {/* Bottom Active Pill indicator */}
                      <div
                        className={`mt-6 h-1 rounded-full transition-all duration-500 ${
                          isActive ? "w-12 bg-amber-500" : "w-6 bg-gray-200"
                        }`}
                      />
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Left Arrow Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-4 z-30 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg flex items-center justify-center text-gray-700 hover:text-primary hover:border-primary/40 transition-all hover:scale-110 hidden sm:flex"
            aria-label="Đánh giá trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-4 z-30 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg flex items-center justify-center text-gray-700 hover:text-primary hover:border-primary/40 transition-all hover:scale-110 hidden sm:flex"
            aria-label="Đánh giá tiếp theo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeRealIndex
                  ? "w-8 h-2.5 bg-amber-500"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Chuyển tới đánh giá ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
