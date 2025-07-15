"use client"
import Image from "next/image";
import Hero from "./components/hero/page";
import Cards from "./components/cards/page";
import Reservation from "./components/reservation/page";
import Cars from "./components/cars/page";
import { useState } from "react";
import { useI18n } from '../lib/i18nContext';

export default function Home() {
  const [showReservation, setShowReservation] = useState(false);
  const { t } = useI18n();
  
  return (
   <div className="bg-black">
    {/* Rezervasyon - Üstte tam genişlik, açılır/kapanır */}
    <div className="p-4 sm:p-6 lg:p-14 bg-black">
      <div className="max-w-4xl mx-auto">
        <button
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg transition-colors duration-200 text-lg sm:text-xl mb-4 flex items-center justify-center gap-2"
          onClick={() => setShowReservation((prev) => !prev)}
          aria-expanded={showReservation}
          aria-controls="reservation-panel"
        >
          {showReservation ? t('reservation_form_close') : t('reservation_form_open')}
          <span className={`transform transition-transform duration-300 ${showReservation ? "rotate-180" : "rotate-0"}`}>
            ▼
          </span>
        </button>
        <div
          id="reservation-panel"
          className={`overflow-hidden transition-all duration-500 ${showReservation ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <Reservation />
        </div>
      </div>
    </div>
    
    {/* Hero ve Cars - Alt kısım */}
    <div className="p-4 sm:p-6 lg:p-14 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div>
            <Hero />
          </div>
          <div>
            <Cars />
          </div>
        </div>
      </div>
    </div>
    
    {/* Transfer Bölgeleri */}
    <div className="p-4 sm:p-6 lg:p-14 bg-black">
      <Cards /> 
    </div>
   </div>
  );
}
