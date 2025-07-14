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
    },
    {
      name: "Kalkan",
      designation: "Mavi Bayrak & Yat Limanı",
      quote: "Akdeniz'in incisi Kalkan, mavi bayraklı plajları ve lüks yat limanıyla ünlü. Antik Likya yolu ve muhteşem koyları. VIP transfer hizmetimizle Kalkan'ın eşsiz güzelliklerini keşfedin.",
      image: "/kalkan.jpg",
      src: "/kalkan.jpg"
    },
    {
      name: "Lara",
      designation: "Plaj & Lüks Oteller",
      quote: "Antalya'nın en uzun plajı ve lüks oteller bölgesi. Kristal berraklığında deniz ve altın kumlar. VIP araçlarımızla Lara'nın muhteşem plajlarının keyfini çıkarın.",
      image: "/lara.jpg",
      src: "/lara.jpg"
    },
    {
      name: "Kundu",
      designation: "Havalimanı & İş Merkezi",
      quote: "Antalya Havalimanı'na en yakın bölge. İş merkezleri ve lüks oteller. VIP transfer hizmetimizle Kundu'nun stratejik konumundan yararlanın.",
      image: "/kundu.jpg",
      src: "/kundu.jpg"
    },
    {
      name: "Adrasan",
      designation: "Doğa & Sakinlik",
      quote: "Olympos Milli Parkı'nın eteklerinde, muhteşem koy ve doğal güzellikler. Sakin ve huzurlu bir tatil için ideal. VIP transfer hizmetimizle Adrasan'ın doğal cennetini keşfedin.",
      image: "/adrasan.jpg",
      src: "/adrasan.jpg"
    },
    {
      name: "Tekirova",
      designation: "Doğa & Macera",
      quote: "Tahtalı Dağı'nın eteklerinde, doğa yürüyüşü ve macera sporları. Muhteşem manzara ve temiz hava. VIP araçlarımızla Tekirova'nın doğal güzelliklerini yaşayın.",
      image: "/tekirova.jpg",
      src: "/tekirova.jpg"
    },
    {
      name: "Göynük",
      designation: "Plaj & Aile",
      quote: "Aile dostu plajları ve sakin atmosferiyle ünlü. Kristal berraklığında deniz ve altın kumlar. VIP transfer hizmetimizle Göynük'ün huzurlu ortamını keşfedin.",
      image: "/goynuk.jpg",
      src: "/goynuk.jpg"
    },
    {
      name: "Çamyuva",
      designation: "Doğa & Plaj",
      quote: "Çam ağaçları ve denizin buluştuğu nokta. Muhteşem koy ve doğal güzellikler. Lüks oteller ve restoranlar. VIP araçlarımızla Çamyuva'nın doğal cennetini yaşayın.",
      image: "/camyuva.jpg",
      src: "/camyuva.jpg"
    },
    {
      name: "Kiriş",
      designation: "Golf & Lüks",
      quote: "Golf sahaları ve lüks oteller bölgesi. Muhteşem deniz manzarası ve yeşil alanlar. VIP transfer hizmetimizle Kiriş'in lüks dünyasına adım atın.",
      image: "/kiris.jpg",
      src: "/kiris.jpg"
    },
    {
      name: "Mahmutlar",
      designation: "Tarih & Doğa",
      quote: "Alanya'nın doğal güzellikleri ve tarihi kalıntıları. Muhteşem manzara ve temiz hava. VIP araçlarımızla Mahmutlar'ın eşsiz atmosferini keşfedin.",
      image: "/mahmutlar.jpg",
      src: "/mahmutlar.jpg"
    },
    {
      name: "Olympos",
      designation: "Antik Kent & Doğa",
      quote: "Antik Likya kenti ve Olympos Milli Parkı. Yanartaş (Chimera) ve muhteşem doğal güzellikler. VIP transfer hizmetimizle Olympos'un tarihi ve doğal cennetini keşfedin.",
      image: "/olympos.jpg",
      src: "/olympos.jpg"
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