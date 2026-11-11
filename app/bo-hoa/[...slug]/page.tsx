import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Truck, 
  Camera, 
  Sparkles, 
  HeartHandshake,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import boHoaProducts from "@/data/bo_hoa_products.json";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const paths = Object.keys(boHoaProducts).map((url) => {
    // url is like "/bo-hoa/bo-hoa-mao-luong" or "/bo-hoa/bo-hoa-mix/bo-hoa-mix-105"
    const parts = url.replace(/^\/bo-hoa\//, "").split("/").filter(Boolean);
    return { slug: parts };
  });
  return paths;
}

export async function generateMetadata({ params }: Props) {
  const currentPath = "/bo-hoa/" + params.slug.join("/");
  const product = (boHoaProducts as Record<string, any>)[currentPath];

  if (!product) {
    const rawName = params.slug[params.slug.length - 1].replace(/-/g, " ");
    const fallbackTitle = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    return {
      title: `${fallbackTitle} | Hoàng Mỹ Flower TP.HCM`,
      description: `Mẫu hoa tươi ${fallbackTitle} thiết kế nghệ thuật cao cấp tại Hoàng Mỹ Flower. Giao hoa hỏa tốc trong 2h.`,
    };
  }

  return {
    title: `${product.title} | Hoàng Mỹ Flower TP.HCM`,
    description: product.description || `Mẫu hoa tươi ${product.title} thiết kế cao cấp tại Hoàng Mỹ Flower.`,
    openGraph: {
      title: `${product.title} | Hoàng Mỹ Flower`,
      description: product.description,
      images: product.image ? [product.image] : [],
    },
  };
}

export default function BoHoaDetailPage({ params }: Props) {
  const currentPath = "/bo-hoa/" + params.slug.join("/");
  const productsMap = boHoaProducts as Record<string, any>;
  let product = productsMap[currentPath];

  // If not found in exact path, try case-insensitive or partial match
  if (!product) {
    const matchKey = Object.keys(productsMap).find(
      (k) => k.toLowerCase() === currentPath.toLowerCase()
    );
    if (matchKey) {
      product = productsMap[matchKey];
    }
  }

  // If still not found, trigger the custom 404 page
  if (!product) {
    notFound();
  }

  // Sub-variants of this collection (e.g., if on /bo-hoa/bo-hoa-mao-luong, find /bo-hoa/bo-hoa-mao-luong/*)
  const subVariants = Object.values(productsMap).filter(
    (p) => p.url.startsWith(currentPath + "/") && p.url !== currentPath
  );

  // Related products (from other collections)
  const allList = Object.values(productsMap);
  const relatedProducts = allList
    .filter((p) => p.url !== currentPath && !p.url.startsWith(currentPath + "/"))
    .slice(10, 18);

  const displayImage = product.image || "https://cdn.thofleur.com/VKUPU-U_rMM_kHsjdhml1TpBdWAFHer5JaZHoj5cThI/resize:fit:1280:0/czM6Ly90aG9mbGV1ci1maWxlcy91cGxvYWRzLzIwMjYvMDQvMDE5ZGE0ZGQtOTZlNy03ZjUzLThlMzAtM2ZhYWU0M2MzYjEwLmpwZWc.webp";

  return (
    <div className="bg-[#faf9f6] min-h-screen py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
          <Link href="/" prefetch={true} className="hover:text-primary transition-colors cursor-pointer">
            Trang chủ
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/bo-hoa" prefetch={true} className="hover:text-primary transition-colors cursor-pointer">
            Bó hoa tươi
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-semibold text-gray-800 line-clamp-1">{product.title}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/bo-hoa"
            prefetch={true}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-primary transition-colors py-1.5 px-3.5 rounded-full bg-white border border-gray-200/80 shadow-sm hover:shadow cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Quay lại danh mục Bó Hoa
          </Link>
        </div>

        {/* Main Product Showcase: 2-Column Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          
          {/* CỘT TRÁI: Ảnh sản phẩm lớn sắc nét */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-md">
              <Image
                src={displayImage}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                unoptimized
              />
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                <span className="px-3 py-1 rounded-full bg-emerald-600/90 text-white text-[11px] font-semibold backdrop-blur-sm shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Thiết kế độc bản
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 text-white text-[11px] font-semibold backdrop-blur-sm shadow-sm">
                  Hoa tươi loại 1
                </span>
              </div>
            </div>

            {/* Thumbnail preview if sub-variants exist */}
            {subVariants.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2">Các góc nhìn / mẫu biến thể:</p>
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {subVariants.slice(0, 5).map((variant, idx) => (
                    <Link
                      key={idx}
                      href={variant.url}
                      className="relative w-16 h-20 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-primary transition-all shrink-0 cursor-pointer"
                    >
                      <Image
                        src={variant.image}
                        alt={variant.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CỘT PHẢI: Thông tin, Giá, Đặt hàng & Cam kết */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3">
                Hoàng Mỹ Flower Boutique
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {product.title}
              </h1>
              <div className="flex items-center gap-2 mt-2.5 text-xs text-gray-500">
                <div className="flex text-amber-400">★★★★★</div>
                <span className="font-semibold text-gray-700">5.0</span>
                <span>•</span>
                <span>Thiết kế thủ công độc quyền</span>
              </div>
            </div>

            {/* Giá sản phẩm */}
            <div className="p-4 rounded-2xl bg-[#faf9f6] border border-gray-100 flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-primary font-serif">
                {product.price}
              </span>
              <span className="text-xs text-gray-400 line-through">
                {product.price !== "Liên hệ" ? `${(parseInt(product.price.replace(/\D/g, "") || "1250000") * 1.15).toLocaleString("vi-VN")} ₫` : ""}
              </span>
              <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-100/60 px-2 py-0.5 rounded-full ml-auto">
                Đang có sẵn hoa
              </span>
            </div>

            {/* Mô tả sản phẩm */}
            <div className="space-y-2 text-sm text-gray-600 leading-relaxed border-t border-b border-gray-100 py-4">
              <h3 className="font-semibold text-gray-800 text-xs uppercase tracking-wider">Mô tả tác phẩm:</h3>
              <p>
                {product.description ||
                  `Mẫu hoa tươi ${product.title} được tạo mẫu và cắm tỉ mỉ bởi nghệ nhân cắm hoa của Hoàng Mỹ. Tone màu hài hòa, sang trọng, thích hợp cho sinh nhật, kỷ niệm, ngày lễ hoặc tỏ tình.`}
              </p>
              <ul className="text-xs text-gray-500 space-y-1 pt-1 list-disc list-inside">
                <li>Bao gồm giấy gói cao cấp chuẩn phong cách Hàn Quốc / Châu Âu.</li>
                <li>Tặng kèm thiệp chúc mừng hoặc biển chúc mừng thiết kế riêng.</li>
                <li>Hỗ trợ tư vấn phối màu hoa theo sở thích của người nhận.</li>
              </ul>
            </div>

            {/* CTAs Nổi Bật: Zalo & Hotline */}
            <div className="space-y-3 pt-2">
              <p className="text-xs text-gray-500 text-center sm:text-left">
                Đặt mẫu hoa này ngay để nhận hoa tươi hỏa tốc:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://zalo.me/0339974745`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#0068FF] hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Nhắn Zalo Đặt Hoa</span>
                </a>

                <a
                  href="tel:0339974745"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-primary hover:bg-[#2b4131] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Gọi 0339974745</span>
                </a>
              </div>
            </div>

            {/* Cam kết vàng của Hoàng Mỹ Flower */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              {[
                { icon: Truck, title: "Giao Nhanh 2H", desc: "Nội thành TP.HCM" },
                { icon: Camera, title: "Gửi Ảnh Trước", desc: "Xác nhận trước khi giao" },
                { icon: HeartHandshake, title: "Hoa Tươi Loại 1", desc: "Tươi lâu 3-5 ngày" },
                { icon: ShieldCheck, title: "Đổi Mới 100%", desc: "Nếu hoa lỗi, dập nát" },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">{title}</h4>
                    <p className="text-[10px] text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Danh sách các mẫu biến thể con trong cùng bộ sưu tập (nếu có) */}
        {subVariants.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-gray-900">
                  Các Mẫu Biến Thể {product.title}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">Chọn mẫu thiết kế và phối màu bạn ưng ý nhất</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {subVariants.map((item, idx) => (
                <ProductCard
                  key={idx}
                  title={item.title}
                  url={item.url}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        )}

        {/* Mẫu hoa tươi gợi ý khác */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-gray-900">
                  Tác Phẩm Hoa Tươi Cùng Bộ Sưu Tập
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">Các thiết kế hoa tươi được chọn mua nhiều nhất</p>
              </div>
              <Link
                href="/bo-hoa"
                prefetch={true}
                className="text-xs font-semibold text-primary hover:underline cursor-pointer"
              >
                Xem tất cả ({allList.length}) →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((item, idx) => (
                <ProductCard
                  key={idx}
                  title={item.title}
                  url={item.url}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
