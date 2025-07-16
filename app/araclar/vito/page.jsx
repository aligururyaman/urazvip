"use client";
import React from "react";
import Link from "next/link";
import Head from 'next/head';
import { useI18n } from '../../../lib/i18nContext';

export default function VitoDetayPage() {
  const { t } = useI18n();

  const ozellikler = [
    {
      icon: "👥",
      title: t('vito_capacity'),
      description: t('vito_capacity_desc')
    },
    {
      icon: "🪑",
      title: t('vito_leather_seats'),
      description: t('vito_leather_seats_desc')
    },
    {
      icon: "🔌",
      title: t('vito_usb_charging'),
      description: t('vito_usb_charging_desc')
    },
    {
      icon: "❄️",
      title: t('vito_ac_system'),
      description: t('vito_ac_system_desc')
    },
    {
      icon: "🧳",
      title: t('vito_luggage'),
      description: t('vito_luggage_desc')
    },
    {
      icon: "🚪",
      title: t('vito_electric_doors'),
      description: t('vito_electric_doors_desc')
    },
    {
      icon: "💡",
      title: t('vito_led_lighting'),
      description: t('vito_led_lighting_desc')
    },
    {
      icon: "🎵",
      title: t('vito_premium_sound'),
      description: t('vito_premium_sound_desc')
    }
  ];

  const images = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Head>
        <title>Mercedes Vito VIP | URAZ VİP TRANSFER</title>
        <meta name="description" content="Mercedes Vito VIP ile Antalya'da lüks ve konforlu transfer deneyimi. Geniş iç hacim, premium donanım ve güvenli yolculuk." />
        <meta name="keywords" content="Mercedes Vito, Vito VIP, Antalya transfer, lüks araç, VIP transfer, URAZ VIP" />
        <meta property="og:title" content="Mercedes Vito VIP | URAZ VİP TRANSFER" />
        <meta property="og:description" content="Mercedes Vito VIP ile Antalya'da lüks ve konforlu transfer deneyimi. Geniş iç hacim, premium donanım ve güvenli yolculuk." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urazvip.com/araclar/vito" />
        <meta property="og:image" content="/vito.jpg" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">


        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Mercedes <span className="text-[#FFD700]">Vito VIP</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
              {t('vito_hero_description')}
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
              {t('features')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {ozellikler.map((ozellik, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-[#FFD700]/50 rounded-xl p-4 sm:p-6 text-center hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
                >
                  <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {ozellik.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base mb-2">
                    {ozellik.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {ozellik.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
              {t('gallery')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {images.map(num => (
                <div 
                  key={num} 
                  className="group relative overflow-hidden rounded-xl border border-gray-700/50 hover:border-[#FFD700]/50 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={`/vito/vito${num}.jpg`}
                    alt={`Mercedes Vito ${num}`}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Mercedes Vito VIP</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                {t('make_reservation')}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                {t('vito_cta_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/rezervasyon" 
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFC300] hover:from-[#FFC300] hover:to-[#FFD700] text-black font-bold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/25 transform hover:-translate-y-1"
                >
                  {t('book_now')}
                </Link>
                <Link 
                  href="/araclar" 
                  className="bg-transparent border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black font-bold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  {t('other_vehicles')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 