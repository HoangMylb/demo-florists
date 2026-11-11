"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import coursesData from "@/data/courses.json";

export default function CourseSection() {
  return (
    <section className="py-12 md:py-16 bg-[#fafbfa] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>Đào Tạo Florist Chuyên Nghiệp</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              Các Khóa Học Nghệ Thuật Cắm Hoa
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-xl">
              Từ làm quen cơ bản đến chuyên sâu, trang bị đầy đủ kiến thức hoa và kỹ năng vận hành tiệm hoa thành công.
            </p>
          </div>
          <Link
            href="/chuyen-ve-hoa/khoa-hoc-chuyen-sau"
            prefetch={true}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline self-start md:self-auto"
          >
            Chi tiết các khóa học <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coursesData.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-white text-[11px] font-semibold tracking-wide uppercase shadow-md">
                    {course.level}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium">
                    {course.duration}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif font-bold text-xl text-gray-900 group-hover:text-primary transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-xs text-gray-400 block uppercase font-medium">Học phí trọn gói</span>
                    <span className="text-xl font-bold text-primary font-serif">{course.price}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="https://zalo.me/0339974745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-gray-50 hover:bg-primary hover:text-white text-gray-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-gray-100"
                >
                  Nhận tư vấn & Lịch học
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

