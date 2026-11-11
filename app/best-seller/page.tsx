import React from "react";
import ProductGridWithPagination from "@/components/ProductGridWithPagination";
import products from "@/data/products.json";

export default function BestSellerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="border-b border-gray-100 pb-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Sản Phẩm Bán Chạy Nhất (Best Seller)
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Các mẫu hoa được yêu thích nhất và được khách hàng đặt nhiều nhất tại Hoàng Mỹ Flower.
        </p>
      </div>

      <ProductGridWithPagination
        products={products}
        itemsPerPage={12}
      />
    </div>
  );
}
