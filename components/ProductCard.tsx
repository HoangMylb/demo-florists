"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductProps {
  title: string;
  url: string;
  image: string;
  price: string;
}

export default function ProductCard({ title, url, image, price }: ProductProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
      <Link href={url} className="relative aspect-[4/5] overflow-hidden bg-gray-50 cursor-pointer">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </Link>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <Link href={url} className="block">
            <h3 className="text-sm md:text-base font-medium text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
          </Link>
        </div>

        <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-50">
          <span className="text-sm md:text-base font-bold text-primary">
            {price}
          </span>
          <Link
            href={url}
            className="text-xs font-semibold text-gray-500 hover:text-primary transition-colors bg-gray-50 hover:bg-primary/10 px-3 py-1.5 rounded-full cursor-pointer"
          >
            Khám phá
          </Link>
        </div>
      </div>
    </div>
  );
}
