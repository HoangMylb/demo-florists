import React from "react";
import ProductGridWithPagination from "@/components/ProductGridWithPagination";
import categoryMap from "@/data/categories_data.json";
import products from "@/data/products.json";

export default function BoHoaPage() {
  const boHoaList = (categoryMap as any)["bo-hoa"] || products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="border-b border-gray-100 pb-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Bộ Sưu Tập Bó Hoa Tươi
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Tổng hợp tất cả các mẫu hoa tươi nghệ thuật, hoa sinh nhật, hoa kỷ niệm thiết kế cao cấp Hoàng Mỹ.
        </p>
      </div>

      <ProductGridWithPagination
        products={boHoaList}
        itemsPerPage={12}
      />
    </div>
  );
}
