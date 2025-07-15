"use client"
import React, { useState, useEffect } from 'react';
import AnimatedTestimonials from '../ui/animated-testimonials';
import { useI18n } from '../../../lib/i18nContext';

const Hero = () => {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const vipDestinations = [
    {
      name: "Belek",
      designation: t('belek_designation'),
      quote: t('belek_quote'),
      image: "/belek.jpg",
      src: "/belek.jpg",
      features: ["Golf Sahaları", "Lüks Oteller", "Deniz Manzarası", "VIP Hizmet"]
    },
    {
      name: "Kemer",
      designation: t('kemer_designation'),
      quote: t('kemer_quote'),
      image: "/kemer.jpg",
      src: "/kemer.jpg",
      features: ["Tahtalı Dağı", "Kristal Deniz", "Doğal Koylar", "Lüks Oteller"]
    },
    {
      name: "Kaş",
      designation: t('kas_designation'),
      quote: t('kas_quote'),
      image: "/kas.jpg",
      src: "/kas.jpg",
      features: ["Mavi Yolculuk", "Dalış Noktaları", "Antik Kalıntılar", "Temiz Deniz"]
    },
    {
      name: "Alanya",
      designation: t('alanya_designation'),
      quote: t('alanya_quote'),
      image: "/alanya.jpg",
      src: "/alanya.jpg",
      features: ["Alanya Kalesi", "Kleopatra Plajı", "Dim Çayı", "Tarihi Atmosfer"]
    },
    {
      name: "Side",
      designation: t('side_designation'),
      quote: t('side_quote'),
      image: "/side.jpg",
      src: "/side.jpg",
      features: ["Antik Tiyatro", "Apollo Tapınağı", "Muhteşem Plajlar", "Tarihi Miras"]
    },
    {
      name: "Kalkan",
      designation: t('kalkan_designation'),
      quote: t('kalkan_quote'),
      image: "/kalkan.jpg",
      src: "/kalkan.jpg",
      features: ["Mavi Bayrak Plajlar", "Yat Limanı", "Likya Yolu", "Muhteşem Koylar"]
    },
    {
      name: "Lara",
      designation: t('lara_designation'),
      quote: t('lara_quote'),
      image: "/lara.jpg",
      src: "/lara.jpg",
      features: ["En Uzun Plaj", "Lüks Oteller", "Kristal Deniz", "Altın Kumlar"]
    },
    {
      name: "Kundu",
      designation: t('kundu_designation'),
      quote: t('kundu_quote'),
      image: "/kundu.jpg",
      src: "/kundu.jpg",
      features: ["Havalimanı Yakını", "İş Merkezleri", "Stratejik Konum", "Lüks Oteller"]
    },
    {
      name: "Adrasan",
      designation: t('adrasan_designation'),
      quote: t('adrasan_quote'),
      image: "/adrasan.jpg",
      src: "/adrasan.jpg",
      features: ["Olympos Milli Parkı", "Doğal Koy", "Sakin Atmosfer", "Huzurlu Tatil"]
    },
    {
      name: "Tekirova",
      designation: t('tekirova_designation'),
      quote: t('tekirova_quote'),
      image: "/tekirova.jpg",
      src: "/tekirova.jpg",
      features: ["Doğa Yürüyüşü", "Macera Sporları", "Muhteşem Manzara", "Temiz Hava"]
    },
    {
      name: "Göynük",
      designation: t('goynuk_designation'),
      quote: t('goynuk_quote'),
      image: "/goynuk.jpg",
      src: "/goynuk.jpg",
      features: ["Aile Dostu", "Sakin Atmosfer", "Kristal Deniz", "Huzurlu Ortam"]
    },
    {
      name: "Çamyuva",
      designation: t('camyuva_designation'),
      quote: t('camyuva_quote'),
      image: "/camyuva.jpg",
      src: "/camyuva.jpg",
      features: ["Çam Ağaçları", "Doğal Koy", "Lüks Oteller", "Doğal Cennet"]
    },
    {
      name: "Kiriş",
      designation: t('kiris_designation'),
      quote: t('kiris_quote'),
      image: "/kiris.jpg",
      src: "/kiris.jpg",
      features: ["Golf Sahaları", "Lüks Oteller", "Deniz Manzarası", "Yeşil Alanlar"]
    },
    {
      name: "Mahmutlar",
      designation: t('mahmutlar_designation'),
      quote: t('mahmutlar_quote'),
      image: "/mahmutlar.jpg",
      src: "/mahmutlar.jpg",
      features: ["Doğal Güzellikler", "Tarihi Kalıntılar", "Muhteşem Manzara", "Eşsiz Atmosfer"]
    },
    {
      name: "Olympos",
      designation: t('olympos_designation'),
      quote: t('olympos_quote'),
      image: "/olympos.jpg",
      src: "/olympos.jpg",
      features: ["Antik Likya Kenti", "Olympos Milli Parkı", "Yanartaş", "Doğal Cennet"]
    }
  ];

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
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
  }

  return (
    <div className="w-full">
      {/* Enhanced Header Section */}
      <div className="text-center">

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          {t('vip_destinations_title')}
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          {t('vip_destinations_subtitle')}
        </p>
      </div>

      {/* Enhanced Animated Testimonials */}
      <div className="">
        <AnimatedTestimonials testimonials={vipDestinations} />
      </div>
    </div>
  );
};

export default Hero;