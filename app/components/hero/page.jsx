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
      designation: t("belek_designation") || "Golf Sahaları, Lüks Oteller, Deniz Manzarası, VIP Hizmet",
      quote: t("belek_description"),
      image: "/belek.jpg",
      src: "/belek.jpg"
    },
    {
      name: "Kemer",
      designation: t("kemer_designation") || "Tahtalı Dağı, Kristal Deniz, Doğal Koylar, Lüks Oteller",
      quote: t("kemer_description"),
      image: "/kemer.jpg",
      src: "/kemer.jpg"
    },
    {
      name: "Kaş",
      designation: t("kas_designation") || "Mavi Yolculuk, Dalış Noktaları, Antik Kalıntılar, Temiz Deniz",
      quote: t("kas_description"),
      image: "/kas.jpg",
      src: "/kas.jpg"
    },
    {
      name: "Alanya",
      designation: t("alanya_designation") || "Alanya Kalesi, Kleopatra Plajı, Dim Çayı, Tarihi Atmosfer",
      quote: t("alanya_description"),
      image: "/alanya.jpg",
      src: "/alanya.jpg"
    },
    {
      name: "Side",
      designation: t("side_designation") || "Antik Tiyatro, Apollo Tapınağı, Muhteşem Plajlar, Tarihi Miras",
      quote: t("side_description"),
      image: "/side.jpg",
      src: "/side.jpg"
    },
    {
      name: "Kalkan",
      designation: t("kalkan_designation") || "Mavi Bayrak Plajlar, Yat Limanı, Likya Yolu, Muhteşem Koylar",
      quote: t("kalkan_description"),
      image: "/kalkan.jpg",
      src: "/kalkan.jpg"
    },
    {
      name: "Lara",
      designation: t("lara_designation") || "En Uzun Plaj, Lüks Oteller, Kristal Deniz, Altın Kumlar",
      quote: t("lara_description"),
      image: "/lara.jpg",
      src: "/lara.jpg"
    },
    {
      name: "Kundu",
      designation: t("kundu_designation") || "Havalimanı Yakını, İş Merkezleri, Stratejik Konum, Lüks Oteller",
      quote: t("kundu_description"),
      image: "/kundu.jpg",
      src: "/kundu.jpg"
    },
    {
      name: "Adrasan",
      designation: t("adrasan_designation") || "Olympos Milli Parkı, Doğal Koy, Sakin Atmosfer, Huzurlu Tatil",
      quote: t("adrasan_description"),
      image: "/adrasan.jpg",
      src: "/adrasan.jpg"
    },
    {
      name: "Tekirova",
      designation: t("tekirova_designation") || "Doğa Yürüyüşü, Macera Sporları, Muhteşem Manzara, Temiz Hava",
      quote: t("tekirova_description"),
      image: "/tekirova.jpg",
      src: "/tekirova.jpg"
    },
    {
      name: "Göynük",
      designation: t("goynuk_designation") || "Aile Dostu, Sakin Atmosfer, Kristal Deniz, Huzurlu Ortam",
      quote: t("goynuk_description"),
      image: "/goynuk.jpg",
      src: "/goynuk.jpg"
    },
    {
      name: "Çamyuva",
      designation: t("camyuva_designation") || "Çam Ağaçları, Doğal Koy, Lüks Oteller, Doğal Cennet",
      quote: t("camyuva_description"),
      image: "/camyuva.jpg",
      src: "/camyuva.jpg"
    },
    {
      name: "Kiriş",
      designation: t("kiris_designation") || "Golf Sahaları, Lüks Oteller, Deniz Manzarası, Yeşil Alanlar",
      quote: t("kiris_description"),
      image: "/kiris.jpg",
      src: "/kiris.jpg"
    },
    {
      name: "Mahmutlar",
      designation: t("mahmutlar_designation") || "Doğal Güzellikler, Tarihi Kalıntılar, Muhteşem Manzara, Eşsiz Atmosfer",
      quote: t("mahmutlar_description"),
      image: "/mahmutlar.jpg",
      src: "/mahmutlar.jpg"
    },
    {
      name: "Olympos",
      designation: t("olympos_designation") || "Antik Likya Kenti, Olympos Milli Parkı, Yanartaş, Doğal Cennet",
      quote: t("olympos_description"),
      image: "/olympos.jpg",
      src: "/olympos.jpg"
    }
  ];

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            {t('vip_destinations_title') || 'VIP Destinasyonlar'}
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

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
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