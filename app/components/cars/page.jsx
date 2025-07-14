"use client"
import React from 'react';
import AnimatedTestimonials from '../ui/animated-testimonials';

const Cars = () => {
  const vipVehicles = [
    {
      name: "Mercedes Vito",
      designation: "9+1 Kişilik | Konforlu VIP Minivan",
      quote: "Mercedes Vito, 9+1 kişilik kapasitesiyle küçük gruplar ve aileler için ideal. Geniş iç hacmi, konforlu koltukları ve lüks donanımıyla şehir içi ve havalimanı transferlerinde üst düzey rahatlık sunar.",
      image: "/vito.jpg", // Fotoğrafı public/vito.jpg olarak ekleyebilirsin
      src: "/vito.jpg"
    },
    {
      name: "Mercedes Sprinter",
      designation: "Orta: 10+1 | Ekstra Uzun: 18+1 Kişilik",
      quote: "Mercedes Sprinter, orta ve ekstra uzun versiyonlarıyla kalabalık gruplar için mükemmel bir seçimdir. Geniş bagaj hacmi, ferah iç mekan ve yüksek yolcu kapasitesiyle konforlu yolculuklar sağlar.",
      image: "/sprinter.jpg", // Fotoğrafı public/sprinter.jpg olarak ekleyebilirsin
      src: "/sprinter.jpg"
    },
    {
      name: "Volkswagen Crafter",
      designation: "18+1 veya 20+1 Kişilik | Büyük Grup Minibüsü",
      quote: "Volkswagen Crafter, 18+1 ve 20+1 kişilik seçenekleriyle büyük gruplar için idealdir. Modern tasarımı, geniş iç hacmi ve güvenlik donanımlarıyla uzun yolculuklarda konfor ve güven sunar.",
      image: "/crafter.jpg", // Fotoğrafı public/crafter.jpg olarak ekleyebilirsin
      src: "/crafter.jpg"
    }
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          VIP Araç Filosu
        </h2>
        <p className="text-gray-300">
          Lüks ve konforun mükemmel uyumu
        </p>
      </div>
      <AnimatedTestimonials testimonials={vipVehicles} />
    </div>
  );
};

export default Cars; 