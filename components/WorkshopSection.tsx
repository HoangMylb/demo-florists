"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import workshopsData from "@/data/workshops.json";

export default function WorkshopSection() {
  return (
    <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Trải Nghiệm Nghệ Thuật</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
            Sự Kiện & Workshop Florist
          </h2>
          <p className="text-sm text-gray-500 mt-1 max-w-xl">
            Không gian trải nghiệm cắm hoa thư giãn cuối tuần, sự kiện tiệc hoa cao cấp và gắn kết tình thân.
          </p>
        </div>
        <Link
          href="/chuyen-ve-hoa/event"
          prefetch={true}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline self-start md:self-auto"
        >
          Xem tất cả sự kiện <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {workshopsData.map((ws, idx) => (
          <Link
            key={idx}
            href={ws.href}
            prefetch={true}
            className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
              <Image
                src={ws.image}
                alt={ws.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4 space-y-1.5">
              <h3 className="font-serif font-bold text-sm md:text-base text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                {ws.title}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                {ws.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

