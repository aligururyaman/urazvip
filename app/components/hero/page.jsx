"use client"
import React from 'react';
import AnimatedTestimonials from '../ui/animated-testimonials';

const Hero = () => {
  const vipDestinations = [
    {
      name: "Belek",
      designation: "Golf & Lüks Oteller",
      quote: "Antalya'nın en prestijli golf destinasyonu. Lüks oteller, dünya standartlarında golf sahaları ve muhteşem deniz manzarası. VIP transfer hizmetimizle Belek'in lüks dünyasına adım atın.",
      image: "/belek.jpg",
      src: "/belek.jpg"
    },
    {
      name: "Kemer",
      designation: "Doğa & Lüks",
      quote: "Tahtalı Dağı'nın eteklerinde, muhteşem koylar ve kristal berraklığında deniz. Lüks oteller ve doğal güzelliklerin buluştuğu nokta. VIP araçlarımızla Kemer'in büyüleyici atmosferini keşfedin.",
      image: "/kemer.jpg",
      src: "/kemer.jpg"
    },
    {
      name: "Kaş",
      designation: "Mavi Yolculuk & Dalış",
      quote: "Akdeniz'in en temiz suları, antik kalıntılar ve muhteşem koylar. Lüks yat turları ve dalış noktaları. VIP transfer hizmetimizle Kaş'ın eşsiz güzelliklerine ulaşın.",
      image: "/kas.jpg",
      src: "/kas.jpg"
    },
    {
      name: "Alanya",
      designation: "Tarih & Plaj",
      quote: "Kleopatra Plajı, Alanya Kalesi ve Dim Çayı. Tarih ve doğanın mükemmel uyumu. Lüks oteller ve turistik tesisler. VIP araçlarımızla Alanya'nın tarihi atmosferini yaşayın.",
      image: "/alanya.jpg",
      src: "/alanya.jpg"
    },
    {
      name: "Side",
      designation: "Antik Kent & Plaj",
      quote: "Antik tiyatro, Apollo Tapınağı ve muhteşem plajlar. Tarih ve denizin buluştuğu nokta. Lüks oteller ve restoranlar. VIP transfer hizmetimizle Side'nin antik güzelliklerini keşfedin.",
      image: "/side.jpg",
      src: "/side.jpg"
    }
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          VIP Destinasyonlar
        </h2>
        <p className="text-gray-300">
          Antalya'nın en prestijli noktalarına VIP transfer
        </p>
      </div>
      <AnimatedTestimonials testimonials={vipDestinations} />
    </div>
  );
};

export default Hero;