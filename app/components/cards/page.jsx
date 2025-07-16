"use client"
import React, { useState, useEffect } from 'react';
import TransferCard from "../TransferCards";
import Reservation from "../reservation/page";
import locationsData from "../../data/locations.js";
import { useI18n } from '../../../lib/i18nContext';

// Euro fiyat ve çok dilli süre tablosu
const euroLocations = [
  { name: "Kundu", price: "25€", durations: { tr: "20 dakika", en: "20 minutes", de: "20 Minuten", ru: "20 минут" } },
  { name: "Lara", price: "25€", durations: { tr: "20 dakika", en: "20 minutes", de: "20 Minuten", ru: "20 минут" } },
  { name: "Serik", price: "40€", durations: { tr: "35 dakika", en: "35 minutes", de: "35 Minuten", ru: "35 минут" } },
  { name: "Belek", price: "40€", durations: { tr: "35 dakika", en: "35 minutes", de: "35 Minuten", ru: "35 минут" } },
  { name: "Kemer", price: "40€", durations: { tr: "1 saat", en: "1 hour", de: "1 Stunde", ru: "1 час" } },
  { name: "Kaş", price: "90€", durations: { tr: "3 saat", en: "3 hours", de: "3 Stunden", ru: "3 часа" } },
  { name: "Beldibi", price: "35€", durations: { tr: "50 dakika", en: "50 minutes", de: "50 Minuten", ru: "50 минут" } },
  { name: "Tekirova", price: "45€", durations: { tr: "1 saat 20 dk", en: "1h 20min", de: "1 Std. 20 Min.", ru: "1 ч 20 мин" } },
  { name: "Göynük", price: "35€", durations: { tr: "55 dakika", en: "55 minutes", de: "55 Minuten", ru: "55 минут" } },
  { name: "Çamyuva", price: "40€", durations: { tr: "1 saat 15 dk", en: "1h 15min", de: "1 Std. 15 Min.", ru: "1 ч 15 мин" } },
  { name: "Kiriş", price: "45€", durations: { tr: "1 saat 20 dk", en: "1h 20min", de: "1 Std. 20 Min.", ru: "1 ч 20 мин" } },
  { name: "Adrasan", price: "55€", durations: { tr: "1 saat 45 dk", en: "1h 45min", de: "1 Std. 45 Min.", ru: "1 ч 45 мин" } },
  { name: "Alanya", price: "65€", durations: { tr: "2 saat", en: "2 hours", de: "2 Stunden", ru: "2 часа" } },
  { name: "Mahmutlar", price: "70€", durations: { tr: "2 saat 15 dk", en: "2h 15min", de: "2 Std. 15 Min.", ru: "2 ч 15 мин" } },
  { name: "Okurcular", price: "60€", durations: { tr: "1 saat 45 dk", en: "1h 45min", de: "1 Std. 45 Min.", ru: "1 ч 45 мин" } },
  { name: "Avsallar", price: "60€", durations: { tr: "1 saat 40 dk", en: "1h 40min", de: "1 Std. 40 Min.", ru: "1 ч 40 мин" } },
  { name: "Gazipaşa", price: "85€", durations: { tr: "2 saat 30 dk", en: "2h 30min", de: "2 Std. 30 Min.", ru: "2 ч 30 мин" } },
  { name: "İncekum", price: "60€", durations: { tr: "1 saat 50 dk", en: "1h 50min", de: "1 Std. 50 Min.", ru: "1 ч 50 мин" } },
  { name: "Kumköy", price: "35€", durations: { tr: "40 dakika", en: "40 minutes", de: "40 Minuten", ru: "40 минут" } },
  { name: "Kızılot", price: "45€", durations: { tr: "1 saat", en: "1 hour", de: "1 Stunde", ru: "1 час" } },
  { name: "Konaklı", price: "65€", durations: { tr: "2 saat", en: "2 hours", de: "2 Stunden", ru: "2 часа" } },
  { name: "Side", price: "40€", durations: { tr: "50 dakika", en: "50 minutes", de: "50 Minuten", ru: "50 минут" } },
  { name: "Türkler", price: "50€", durations: { tr: "1 saat 30 dk", en: "1h 30min", de: "1 Std. 30 Min.", ru: "1 ч 30 мин" } },
  { name: "Kalkan", price: "110€", durations: { tr: "3 saat 15 dk", en: "3h 15min", de: "3 Std. 15 Min.", ru: "3 ч 15 мин" } },
  { name: "Titreyengöl", price: "45€", durations: { tr: "55 dakika", en: "55 minutes", de: "55 Minuten", ru: "55 минут" } },
  { name: "Sorgun", price: "45€", durations: { tr: "55 dakika", en: "55 minutes", de: "55 Minuten", ru: "55 минут" } },
  { name: "Kadriye", price: "30€", durations: { tr: "30 dakika", en: "30 minutes", de: "30 Minuten", ru: "30 минут" } },
  { name: "Manavgat", price: "45€", durations: { tr: "1 saat", en: "1 hour", de: "1 Stunde", ru: "1 час" } },
  { name: "Çolaklı", price: "45€", durations: { tr: "50 dakika", en: "50 minutes", de: "50 Minuten", ru: "50 минут" } },
  { name: "Şehiriçi", price: "25€", durations: { tr: "20 dakika", en: "20 minutes", de: "20 Minuten", ru: "20 минут" } },
  { name: "Konyaaltı", price: "30€", durations: { tr: "30 dakika", en: "30 minutes", de: "30 Minuten", ru: "30 минут" } },
  { name: "Olympos", price: "50€", durations: { tr: "1 saat 45 dk", en: "1h 45min", de: "1 Std. 45 Min.", ru: "1 ч 45 мин" } },
];

const getLocationDataByLang = (lang) => {
  if (lang === 'tr') {
    // Süreyi Türkçe tablodan güncelle
    const sureMap = euroLocations.reduce((acc, cur) => {
      acc[cur.name] = cur.durations[lang];
      return acc;
    }, {});
    return locationsData.map(loc => ({ ...loc, duration: sureMap[loc.name] || loc.duration }));
  } else {
    // Fiyat ve süreyi euro tablosundan al, süreyi seçilen dilde göster
    return locationsData.map(loc => {
      const euroLoc = euroLocations.find(e => e.name === loc.name);
      return {
        ...loc,
        price: euroLoc ? euroLoc.price : loc.price,
        duration: euroLoc ? euroLoc.durations[lang] : loc.duration
      };
    });
  }
};

const Cards = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const { t, language } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-white">
          Havaalanı Transfer Bölgeleri
        </h1>
        
        {/* Desktop Reservation - Always Visible */}
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {locationsData.map((loc) => (
            <TransferCard
              key={loc.name}
              title={loc.name}
              duration={loc.duration}
              price={loc.price}
              image={loc.image}
            />
          ))}
        </div>
      </div>
    );
  }

  const displayLocations = getLocationDataByLang(language);

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-white">
        {t('airport_transfer_regions_title')}
      </h1>
      


      {/* Desktop Reservation - Always Visible */}
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {displayLocations.map((loc) => (
          <TransferCard
            key={loc.name}
            title={loc.name}
            duration={loc.duration}
            price={loc.price}
            image={loc.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
