import React from "react";
import ProductGridWithPagination from "@/components/ProductGridWithPagination";
import categoryMap from "@/data/categories_data.json";
import products from "@/data/products.json";

export default function NewArrivalsPage() {
  const newProducts = (categoryMap as any)["tulip"] || products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="border-b border-gray-100 pb-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Hoa Mới Thiết Kế Theo Mùa
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Những mẫu hoa độc đáo, phong cách mới nhất vừa được florist Hoàng Mỹ thiết kế và ra mắt.
        </p>
      </div>

      <ProductGridWithPagination
        products={newProducts}
        itemsPerPage={12}
      />
    </div>
  );
}

