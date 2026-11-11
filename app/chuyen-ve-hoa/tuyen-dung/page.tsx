import React from "react";

export default function TuyenDungPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div>
        <span className="text-xs font-bold text-primary uppercase tracking-widest">Cơ hội nghề nghiệp</span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
          Tuyển Dụng Nhân Sự Tại Hoàng Mỹ Flower
        </h1>
      </div>

      <div className="prose prose-emerald max-w-none space-y-6 text-gray-700 leading-relaxed">
        <p>
          Hoàng Mỹ Flower liên tục tìm kiếm những người bạn đồng hành có tình yêu với hoa cỏ và đam mê mang đến cái đẹp cho khách hàng.
        </p>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
          <h2 className="text-lg font-bold text-gray-900">1. Florist Chính (Thợ cắm hoa có tay nghề)</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Kinh nghiệm cắm hoa từ 1 năm trở lên theo phong cách hiện đại.</li>
            <li>Có mắt thẩm mỹ tốt, sáng tạo và cập nhật các xu hướng hoa mới.</li>
            <li>Mức lương: Thỏa thuận theo năng lực + thưởng doanh số.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
          <h2 className="text-lg font-bold text-gray-900">2. Trợ Lý / Phụ Hoa (Được đào tạo)</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Chăm chỉ, cẩn thận, yêu thích hoa tươi.</li>
            <li>Hỗ trợ sơ chế hoa, đóng gói và chuẩn bị phụ liệu cắm hoa.</li>
            <li>Có cơ hội học nghề và nâng cao tay nghề thành Florist chính thức.</li>
          </ul>
        </div>

        <div className="pt-4">
          <p className="font-medium text-gray-900">Cách thức ứng tuyển:</p>
          <p className="text-sm">Gửi CV hoặc hình ảnh sản phẩm đã cắm về số: <strong>0339974745</strong> hoặc email: <strong>nguyenmylb85@gmail.com</strong>.</p>
        </div>
      </div>
    </div>
  );
}
