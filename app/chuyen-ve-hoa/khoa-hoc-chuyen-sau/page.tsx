import React from "react";

export default function KhoaHocPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div>
        <span className="text-xs font-bold text-primary uppercase tracking-widest">Đào tạo nghệ thuật</span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
          Khóa Học Cắm Hoa Chuyên Sâu
        </h1>
      </div>

      <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
        <p>
          Khóa học cắm hoa tại Hoàng Mỹ Flower được thiết kế cho những ai muốn nắm vững nền tảng thẩm mỹ, kỹ thuật phối màu, cấu trúc hoa đương đại và kỹ năng vận hành một shop hoa chuyên nghiệp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
            <h3 className="font-bold text-gray-900">Nội dung đào tạo</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Lý thuyết màu sắc và chất liệu hoa nhập khẩu</li>
              <li>Kỹ thuật bó hoa tròn, bó xòe bay bổng phong cách Hàn Quốc</li>
              <li>Kỹ thuật giỏ hoa, hộp hoa mica nghệ thuật</li>
              <li>Kỹ năng chụp ảnh và tạo concept sản phẩm hoa</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
            <h3 className="font-bold text-gray-900">Quyền lợi học viên</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>100% thực hành trực tiếp với hoa tươi nhập khẩu cao cấp</li>
              <li>Mang toàn bộ sản phẩm hoàn thành về nhà</li>
              <li>Được tư vấn nguồn nhập hoa và dụng cụ uy tín</li>
              <li>Hỗ trợ thực tập thực tế tại tiệm hoa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
