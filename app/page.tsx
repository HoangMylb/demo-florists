import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import HeroSlider from "@/components/HeroSlider";
import StoryBar from "@/components/StoryBar";
import ReelsSection from "@/components/ReelsSection";
import WorkshopSection from "@/components/WorkshopSection";
import CourseSection from "@/components/CourseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import products from "@/data/products.json";
import categoryMap from "@/data/categories_data.json";

export default function HomePage() {
  const categories = [
    { name: "Bó Hoa Tươi", count: "120+ mẫu", image: "https://cdn.thofleur.com/CcfdpNJwLEveadS7Ckr8onM3ijFtTCFr87_6VgPbLkU/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy9UaMO0bmcgY8OgbmgvZmtoYTltaHJsZDNhdndneGVzN2guanBn.webp", href: "/bo-hoa" },
    { name: "Giỏ & Hộp Hoa", count: "80+ mẫu", image: "https://cdn.thofleur.com/Gyx1cKJul3oukZ3j3h6P8Jh68123dhtS2sYqvjZ9nno/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy9HaeG7jyBob2EvdHY5dWJ3b2ZqZGNrY2lscWl3NWIuanBn.webp", href: "/category/chau-gio-hoa" },
    { name: "Hoa Tulip", count: "45+ mẫu", image: "https://cdn.thofleur.com/hi8vDoMiug92XNS-5wDjAkN7mwHo2mCnOWcp2CZYDQc/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy9Cw7MgaG9hIHR1bGlwIDIvZGNwN3ZtMWRubm9tbmp4aWpiamYuanBn.webp", href: "/category/tulip" },
    { name: "Bình Hoa Thiết Kế", count: "30+ mẫu", image: "https://cdn.thofleur.com/uLPx99b8FyF7iTgHSAH-ChMTLDHa-qO4w6Tt0WJuaDQ/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy9Cw6xuaCBob2Evb3V5dm5zZWgxdnd0bnJqeGp3bmQuanBn.webp", href: "/category/chau-gio-hoa" },
  ];

  // 12 best seller products maximum
  const bestSellers = products.slice(0, 8);
  // Seasonal products
  const seasonalProducts = ((categoryMap as any)["tulip"] || products).slice(0, 12);

  return (
    <div className="space-y-12 md:space-y-16">
      {/* 1. Hero Section Swiper Carousel */}
      <HeroSlider />

      {/* 2. Story Circular Categories Bar */}
      <StoryBar />

      {/* 3. Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              Mỗi Khoảnh Khắc Xứng Đáng Một Bản Hoa Riêng
            </h2>
            <p className="text-sm text-gray-500 mt-1">Tình yêu, tri ân, khai trương hay tự thưởng — Hoàng Mỹ có mẫu cho bạn</p>
          </div>
          <Link href="/bo-hoa" prefetch={true} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              prefetch={true}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif font-bold text-lg md:text-xl group-hover:text-emerald-300 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-xs text-white/80">{cat.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Best Sellers (Tối đa 12 sản phẩm) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Được Nghìn Trái Tim Tin Chọn
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              Những Thiết Kế Không Bao Giờ Sai
            </h2>
            <p className="text-xs text-gray-400 mt-1">100% hoa tươi tuyển chọn — Gửi ảnh thực tế duyệt trước khi giao</p>
          </div>
          <Link href="/best-seller" prefetch={true} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            Xem toàn bộ <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((prod, idx) => (
            <ProductCard
              key={idx}
              title={prod.title}
              url={prod.url}
              image={prod.image}
              price={prod.price}
            />
          ))}
        </div>
      </section>

      {/* 5. Reels Video Section */}
      <ReelsSection />

      {/* 6. Seasonal & New Arrivals (Tối đa 12 sản phẩm) */}
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                Chỉ Nở Rộ Đẹp Nhất Trong Tuần Này
              </h2>
              <p className="text-sm text-gray-500 mt-1">Số lượng giới hạn theo từng đợt hoa nhập mỗi sớm — Đặt trước để không bỏ lỡ</p>
            </div>
            <Link href="/new" prefetch={true} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
              Xem tất cả <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {seasonalProducts.map((prod: any, idx: number) => (
              <ProductCard
                key={idx}
                title={prod.title}
                url={prod.url}
                image={prod.image}
                price={prod.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Đánh giá khách hàng - Swiper 3 cards với card giữa nổi bật */}
      <TestimonialsSection />

      {/* 8. Sự Kiện & Workshop */}
      <WorkshopSection />

      {/* 9. Các Khóa Học Nghệ Thuật Cắm Hoa */}
      <CourseSection />

      {/* 10. Cam kết dịch vụ chăm sóc khách hàng */}
      <section className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Danh sách chính sách chăm sóc khách hàng"
        >
          {/* Card 1: Giao Hoa Nhanh 24/7 */}
          <div className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-transform transform hover:-translate-y-1">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full mb-4">
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
                className="lucide lucide-truck w-6 h-6"
                aria-hidden="true"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
            </div>
            <h3 className="text-gray-900 text-center font-semibold mb-2">Giao Hoa Nhanh 24/7</h3>
            <p className="text-gray-600 text-sm text-center">
              Hỗ trợ giao hoa nhanh trong vòng 2-4 giờ khi tại TP.HCM và các khu vực lân cận.
            </p>
          </div>

          {/* Card 2: Đảm Bảo Chất Lượng */}
          <div className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-transform transform hover:-translate-y-1">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full mb-4">
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
                className="lucide lucide-shield-check w-6 h-6"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-gray-900 text-center font-semibold mb-2">Đảm Bảo Chất Lượng</h3>
            <p className="text-gray-600 text-sm text-center">
              Hoa tươi Hoàng Mỹ 100% nhập mới mỗi ngày, cam kết chất lượng và đúng mẫu.
            </p>
          </div>

          {/* Card 3: Hỗ Trợ Chỉnh Sửa */}
          <div className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-transform transform hover:-translate-y-1">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full mb-4">
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
                className="lucide lucide-rotate-ccw w-6 h-6"
                aria-hidden="true"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
            </div>
            <h3 className="text-gray-900 text-center font-semibold mb-2">Hỗ Trợ Chỉnh Sửa</h3>
            <p className="text-gray-600 text-sm text-center">
              Chỉnh sửa miễn phí nếu sản phẩm không đạt yêu cầu đã thỏa thuận trước.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
