import React from "react";
import Link from "next/link";
import ProductGridWithPagination from "@/components/ProductGridWithPagination";
import categoryMap from "@/data/categories_data.json";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

const titles: Record<string, string> = {
  "bo-hoa-mix": "Bó Hoa Mix Tươi Nhập Khẩu",
  "hoa-hong": "Hoa Hồng Ecuador & Hoa Hồng Cao Cấp",
  "tulip": "Hoa Tulip Hà Lan Tươi Đẹp",
  "cam-chuong": "Hoa Cẩm Chướng Tinh Tế",
  "mau-don": "Hoa Mẫu Đơn Sang Trọng",
  "gio-tam-giac": "Giỏ Hoa Tam Giác Nghệ Thuật",
  "chau-gio-hoa": "Chậu Giỏ Hoa Khai Trương & Kỷ Niệm",
  "ke-hoa": "Kệ Hoa Chúc Mừng Sự Kiện",
};

export async function generateStaticParams() {
  return [
    { slug: "bo-hoa-mix" },
    { slug: "hoa-hong" },
    { slug: "tulip" },
    { slug: "cam-chuong" },
    { slug: "mau-don" },
    { slug: "gio-tam-giac" },
    { slug: "chau-gio-hoa" },
    { slug: "ke-hoa" },
  ];
}

export default function CategoryPage({ params }: Props) {
  const { slug } = params;
  const pageTitle = titles[slug] || "Bộ Sưu Tập Hoa Tươi";
  const rawProducts = (categoryMap as any)[slug] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-2 mb-6">
        <Link
          href="/"
          prefetch={true}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-primary transition-colors py-1 px-3 rounded-full bg-gray-50 hover:bg-primary/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Trang chủ
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-xs text-gray-400 font-medium">{pageTitle}</span>
      </div>

      <div className="border-b border-gray-100 pb-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          {pageTitle}
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Khám phá những thiết kế hoa hoa độc đáo theo phong cách nghệ thuật được tuyển chọn kỹ lưỡng.
        </p>
      </div>

      <ProductGridWithPagination
        products={rawProducts}
        itemsPerPage={12}
      />
    </div>
  );
}
