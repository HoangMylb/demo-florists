import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Hoàng Mỹ - Shop Hoa Tươi Cao Cấp TP.HCM | Giao Nhanh 2h",
  description: "Tiệm hoa tươi thiết kế cao cấp Hoàng Mỹ tại TP.HCM. Bó hoa hồng, cẩm tú cầu, hoa tulip, kệ hoa khai trương giao hỏa tốc 2h.",
  icons: {
    icon: "/hoang-my-logo.jpg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.facebook.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              a, a:hover, a:active, a *, a *:hover,
              button, button:hover, button:active, button *, button *:hover,
              [role="button"], [role="button"]:hover, [role="button"] *,
              [onclick], [onclick]:hover, [onclick] *,
              .cursor-pointer, .cursor-pointer:hover, .cursor-pointer *,
              input[type="submit"], input[type="button"], input[type="reset"],
              input[type="checkbox"], input[type="radio"],
              select, select *,
              summary, summary *,
              label, label *,
              .swiper-pagination-bullet, .swiper-button-prev, .swiper-button-next {
                cursor: pointer !important;
              }
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
