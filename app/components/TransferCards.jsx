"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from '../../lib/i18nContext';

const TransferCard = ({ title, duration, price, image }) => {
  const router = useRouter();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleReservation = () => {
    router.push(`/rezervasyon?to=${encodeURIComponent(title)}`);
  };

  // Don't render translated content until mounted
  if (!mounted) {
    return (
      <div className="w-full bg-gray-900 border border-yellow-500 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        {/* Image Section */}
        <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-black relative overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span className="text-sm">Fotoğraf</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-4 md:p-5">
          {/* Title and Price */}
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white leading-tight flex-1 mr-2">
              {title}
            </h3>
            <div className="text-right flex-shrink-0">
              <p className="text-xs sm:text-sm text-yellow-400">{duration}</p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-500 font-bold">{price}</p>
            </div>
          </div>

          {/* Button */}
          <button 
            onClick={handleReservation}
            className="w-full bg-yellow-500 text-black py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm md:text-base font-medium hover:bg-yellow-400 transition-colors duration-200"
          >
            Hemen Yer Ayırt
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-900 border border-yellow-500 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      {/* Image Section */}
      <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-black relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-sm">{t('photo')}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-4 md:p-5">
        {/* Title and Price */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white leading-tight flex-1 mr-2">
            {title}
          </h3>
          <div className="text-right flex-shrink-0">
            <p className="text-xs sm:text-sm text-yellow-400">{duration}</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-500 font-bold">{price}</p>
          </div>
        </div>

        {/* Button */}
        <button 
          onClick={handleReservation}
          className="w-full bg-yellow-500 text-black py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm md:text-base font-medium hover:bg-yellow-400 transition-colors duration-200"
        >
          {t('book_now')}
        </button>
      </div>
    </div>
  );
};

export default TransferCard;
