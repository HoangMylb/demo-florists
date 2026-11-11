import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật | Hoàng Mỹ",
  description: "Chính sách bảo mật tại Hoàng Mỹ Flower",
};

export default function PrivacyPolicyPage() {
  return (
    <section id="privacy-policy" className="bg-background" aria-labelledby="privacy-policy-heading">
      <div className="max-w-4xl mx-auto py-12 px-4 text-gray-700 space-y-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Chính Sách Bảo Mật tại Hoàng Mỹ 🌸</h2>
        <p>Hoàng Mỹ cam kết sẽ bảo mật những thông tin mang tính riêng tư của Khách hàng.</p>
        <h3 className="text-xl font-bold">Không thu thập thông tin cá nhân bắt buộc</h3>
        <p>
          Website của Hoàng Mỹ không yêu cầu bạn phải đăng nhập, không có chức năng đặt hàng trực tuyến hay thanh toán qua mạng. Vì vậy, chúng tôi không lưu trữ bất kỳ dữ liệu cá nhân nào như tài khoản, mật khẩu hay thông tin thẻ tín dụng.
        </p>
        <h3 className="text-xl font-bold">Thông tin bạn chủ động cung cấp</h3>
        <p>
          Trong một số trường hợp, nếu bạn để lại thông tin qua form liên hệ (ví dụ: họ tên, số điện thoại, email), những dữ liệu này chỉ được sử dụng để tư vấn và chăm sóc khách hàng. Chúng tôi cam kết không chia sẻ hoặc bán thông tin này cho bên thứ ba
        </p>
        <h3 className="text-xl font-bold">Cookie và dữ liệu truy cập</h3>
        <p>
          Website của Hoàng Mỹ có thể sử dụng cookie cơ bản để cải thiện trải nghiệm người dùng (ví dụ: ghi nhớ ngôn ngữ, giao diện hiển thị). Tuy nhiên, cookie này không lưu thông tin cá nhân, bạn có thể tắt trong phần cài đặt trình duyệt nếu muốn.
        </p>
        <h3 className="text-xl font-bold">An toàn và minh bạch</h3>
        <p>
          Chúng tôi duy trì hệ thống website ở mức bảo mật an toàn, cập nhật thường xuyên để hạn chế rủi ro từ bên ngoài. Mọi hoạt động liên quan đến dữ liệu đều được thực hiện một cách minh bạch, rõ ràng.
        </p>
        <h3 className="text-xl font-bold">Liên hệ khi có thắc mắc</h3>
        <p>Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật, vui lòng liên hệ với chúng tôi qua:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Hotline: <a href="tel:0339974745" className="hover:underline">0339974745</a>
          </li>
          <li>
            Email: <a href="mailto:nguyenmylb85@gmail.com" className="hover:underline">nguyenmylb85@gmail.com</a>
          </li>
        </ul>
        <p className="mt-6 font-medium text-center italic">
          🌷 Với Hoàng Mỹ, bạn không chỉ nhận được một sản phẩm hoa, mà còn là một <em>trải nghiệm chăm sóc trọn vẹn</em> – nơi cảm xúc của bạn được nâng niu và lan tỏa.
        </p>
      </div>
    </section>
  );
}
