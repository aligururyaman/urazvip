"use client"
import React from 'react';
import AnimatedTestimonials from '../ui/animated-testimonials';

const Cars = () => {
  const vipVehicles = [
    {
      name: "VIP Sedan",
      designation: "Mercedes E-Class / BMW 5 Series",
      quote: "Lüks ve konforun mükemmel uyumu. 1-3 yolcu için ideal, şık tasarım ve premium hizmet. Klimalı, WiFi destekli, profesyonel şoför ile Antalya'nın en prestijli transfer deneyimi.",
      image: "/vip-sedan.jpg",
      src: "/vip-sedan.jpg"
    },
    {
      name: "VIP SUV",
      designation: "Mercedes GLE / BMW X5",
      quote: "Geniş ve konforlu SUV deneyimi. 1-6 yolcu kapasitesi, bagaj alanı geniş, yüksek konfor seviyesi. Uzun yolculuklar için mükemmel seçim, lüks iç mekan ve güvenlik özellikleri.",
      image: "/vip-suv.jpg",
      src: "/vip-suv.jpg"
    },
    {
      name: "VIP Van",
      designation: "Mercedes Vito / VW Caravelle",
      quote: "Büyük gruplar için ideal çözüm. 1-8 yolcu kapasitesi, geniş bagaj alanı, konforlu koltuklar. Aile ve grup seyahatleri için mükemmel, profesyonel hizmet kalitesi.",
      image: "/vip-van.jpg",
      src: "/vip-van.jpg"
    },
    {
      name: "Lüks Sedan",
      designation: "Mercedes S-Class / BMW 7 Series",
      quote: "Ultra lüks sedan deneyimi. 1-3 yolcu için en üst düzey konfor, premium malzemeler, gelişmiş teknoloji. VIP misafirler için özel hizmet, şoför ve araç kalitesi garantisi.",
      image: "/luxury-sedan.jpg",
      src: "/luxury-sedan.jpg"
    },
    {
      name: "Lüks SUV",
      designation: "Mercedes GLS / Range Rover",
      quote: "Ultra lüks SUV deneyimi. 1-6 yolcu kapasitesi, en üst düzey konfor ve güvenlik. Premium hizmet kalitesi, özel şoför, lüks iç mekan ve gelişmiş teknoloji özellikleri.",
      image: "/luxury-suv.jpg",
      src: "/luxury-suv.jpg"
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