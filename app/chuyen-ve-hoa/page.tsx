import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Calendar } from "lucide-react";

export default function ChuyenVeHoaPage() {
  const articles = [
    {
      title: "Tuyển dụng nhân sự Florist & Vận hành",
      desc: "Gia nhập đội ngũ Hoàng Mỹ Flower với môi trường làm việc sáng tạo, chuyên nghiệp và ngập tràn hương hoa.",
      href: "/chuyen-ve-hoa/tuyen-dung",
      icon: Users
    },
    {
      title: "Khóa học cắm hoa chuyên sâu",
      desc: "Chương trình đào tạo kỹ năng florist từ cơ bản đến nâng cao dành cho người đam mê nghệ thuật hoa tươi.",
      href: "/chuyen-ve-hoa/khoa-hoc-chuyen-sau",
      icon: BookOpen
    },
    {
      title: "Sự kiện & Dự án trang trí hoa tươi",
      desc: "Các dự án trang trí tiệc cưới, sự kiện thương hiệu và không gian nghệ thuật tiêu biểu của Hoàng Mỹ Flower.",
      href: "/chuyen-ve-hoa/event",
      icon: Calendar
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
          Chuyện Về Hoa
        </h1>
        <p className="text-gray-600 text-base">
          Những câu chuyện nghề, kinh nghiệm cắm hoa nghệ thuật và các hoạt động nổi bật tại Hoàng Mỹ Flower.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h2 className="text-xl font-serif font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-50 flex items-center gap-2 text-sm font-semibold text-primary">
                <span>Xem chi tiết</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
