import React from "react";
import WhyUsCard from "./WhyUsCard";

const WhyUsRow: React.FC = () => {
  return (
    <div className="row">
      <WhyUsCard
        iconSrc="https://i.ibb.co/DCByV7Z/icon-complete.png"
        title="Mobil Lengkap"
        description="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
      />
      <WhyUsCard
        iconSrc="https://i.ibb.co/jwDnf0t/icon-price.png"
        title="Harga Murah"
        description="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
      />
      <WhyUsCard
        iconSrc="https://i.ibb.co/c1zRLtf/icon-24hrs.png"
        title="Layanan 24 Jam"
        description="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
      />
      <WhyUsCard
        iconSrc="https://i.ibb.co/Wv9y7Bp/icon-professional.png"
        title="Sopir Profesional"
        description="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
      />
    </div>
  );
};

export default WhyUsRow;
