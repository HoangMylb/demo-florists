import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính Sách Bán Hàng | Hoàng Mỹ",
  description: "Điều khoản mua hàng và chính sách bán hàng của Hoàng Mỹ Flower",
};

export default function SalesPolicyPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 text-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-center">Chính Sách Bán Hàng tại Hoàng Mỹ 🌸</h2>
      <p className="mb-4">
        Tại <strong>Hoàng Mỹ</strong>, chúng mình mong muốn mang đến cho khách hàng không chỉ những đóa hoa tươi đẹp mà còn là trải nghiệm mua sắm đáng tin cậy, thoải mái và minh bạch. Chính sách bán hàng của chúng mình được xây dựng dựa trên sự tôn trọng và chăm sóc khách hàng.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2 font-semibold">Sản phẩm và hình ảnh</h3>
      <p className="mb-4">Tất cả sản phẩm hoa tươi đều được thiết kế và cắm thủ công bởi đội ngũ của Hoàng Mỹ.</p>
      <p className="mb-4">
        Hình ảnh trên website mang tính minh họa. Do đặc thù hoa tươi theo mùa, màu sắc hoặc kiểu dáng có thể có sự thay đổi nhẹ, nhưng chúng tôi luôn cam kết giữ tinh thần và giá trị thẩm mỹ đúng như mẫu.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2 font-semibold">Giá bán và thanh toán</h3>
      <p className="mb-4">
        Giá niêm yết trên website là giá trọn gói, đã bao gồm hoa, phụ kiện đi kèm (nếu có) và công cắm
      </p>
      <p className="mb-4">
        Chúng tôi thông báo rõ ràng giá trước khi xác nhận đơn hàng. Khách hàng hoàn toàn yên tâm, không phát sinh chi phí ẩn.
      </p>
      <p className="mb-4">Hình thức thanh toán: tiền mặt, chuyển khoản ngân hàng</p>

      <h3 className="text-xl font-medium mt-6 mb-2 font-semibold">Giao hàng</h3>
      <p className="mb-4">Nội thành TP.HCM: Giao hỏa tốc trong 2–4 giờ.</p>
      <p className="mb-4">
        Chúng tôi luôn cố gắng giao đúng hẹn, nếu có phát sinh chậm trễ sẽ thông báo trước cho khách hàng.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2 font-semibold">Đổi trả và bảo hành</h3>
      <p className="mb-4">
        Khách hàng có thể yêu cầu đổi hoặc trả miễn phí nếu hoa không đạt chất lượng hoặc không đúng mẫu đã cam kết.
      </p>
      <p className="mb-4">
        Trường hợp đổi trả, Hoàng Mỹ sẽ nhanh chóng xử lý và hỗ trợ khách hàng đến khi hài lòng.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2 font-semibold">Chăm sóc sau bán hàng</h3>
      <p className="mb-4">
        Sau khi nhận hoa, khách hàng sẽ được hướng dẫn cách chăm sóc hoa tươi lâu hơn (cắt gốc, thay nước, vị trí đặt hoa...).
      </p>
      <p className="mb-4">
        Đội ngũ CSKH luôn sẵn sàng tư vấn, đồng hành cùng bạn trong suốt quá trình sử dụng sản phẩm.
      </p>

      <p className="mt-6 font-medium text-center italic">
        🌷 Với Hoàng Mỹ, bạn không chỉ nhận được một sản phẩm hoa, mà còn là một <em>trải nghiệm chăm sóc trọn vẹn</em> – nơi cảm xúc của bạn được nâng niu và lan tỏa.
      </p>
    </section>
  );
}
