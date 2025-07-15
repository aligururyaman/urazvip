"use client"
import React, { useState, useEffect } from 'react';
import TransferCard from "../TransferCards";
import Reservation from "../reservation/page";
import locationsData from "../../data/locations.js";
import { useI18n } from '../../../lib/i18nContext';

const Cards = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const { t } = useI18n();
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

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-white">
        {t('airport_transfer_regions_title')}
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
};

export default Cards;
