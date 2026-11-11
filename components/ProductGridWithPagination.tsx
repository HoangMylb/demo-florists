"use client";

import React, { useState, useRef } from "react";
import ProductCard from "@/components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  title: string;
  url: string;
  image: string;
  price: string;
}

interface Props {
  products: Product[];
  itemsPerPage?: number;
}

export default function ProductGridWithPagination({
  products,
  itemsPerPage = 12,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setCurrentPage(newPage);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  if (totalItems === 0) {
    return (
      <div className="py-20 text-center text-gray-500 text-sm">
        Đang cập nhật thêm mẫu mới cho danh mục này...
      </div>
    );
  }

  return (
    <div ref={containerRef} className="space-y-8 scroll-mt-28">
      {/* Grid of 12 products maximum */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {currentProducts.map((prod, idx) => (
          <ProductCard
            key={`${prod.url}-${idx}`}
            title={prod.title}
            url={prod.url}
            image={prod.image}
            price={prod.price}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-1.5 bg-gray-50 p-1.5 rounded-2xl border border-gray-100 shadow-sm">
            {/* Prev Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1 text-gray-600 hover:text-primary hover:bg-white transition-all disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-gray-600"
              aria-label="Trang trước"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Trước</span>
            </button>

            {/* Page number buttons */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, index) =>
                typeof page === "number" ? (
                  <button
                    key={index}
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 rounded-xl text-xs font-semibold transition-all ${
                      currentPage === page
                        ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                        : "text-gray-700 hover:bg-white hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                ) : (
                  <span key={index} className="w-6 text-center text-xs text-gray-400 font-bold select-none">
                    {page}
                  </span>
                )
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1 text-gray-600 hover:text-primary hover:bg-white transition-all disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-gray-600"
              aria-label="Trang sau"
            >
              <span className="hidden sm:inline">Sau</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

