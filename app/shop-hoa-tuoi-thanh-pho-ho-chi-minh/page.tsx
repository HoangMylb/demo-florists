import React from "react";
import fs from "fs";
import path from "path";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop hoa tươi TP.HCM | Hoàng Mỹ Flower",
  description: "Cửa hàng hoa tươi Hoàng Mỹ tại Thành Phố Hồ Chí Minh. Dịch vụ đặt hoa tươi giao nhanh tận nơi uy tín, chuyên nghiệp.",
};

export default function ShopHoaTuoiHcmPage() {
  const filePath = path.join(process.cwd(), "data/shop_hoa_tuoi_hcm.html");
  const htmlContent = fs.readFileSync(filePath, "utf-8");

  return (
    <main
      className="bg-white text-foreground"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
