"use client"
import React, { useState } from 'react';
import TransferCard from "../TransferCards";
import Reservation from "../reservation/page";
import locationsData from "../../data/locations.json";

const Cards = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
        Havaalanı Transfer Bölgeleri
      </h1>
      
      {/* Mobile Reservation Toggle */}
      <div className="block lg:hidden mb-8">
        <button
          onClick={() => setIsReservationOpen(!isReservationOpen)}
          className="w-full bg-yellow-500 text-black py-4 px-6 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 flex items-center justify-between shadow-lg"
        >
          <span className="text-lg">Rezervasyon Yap</span>
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isReservationOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Collapsible Reservation Form */}
        <div className={`mt-6 transition-all duration-500 ease-in-out overflow-hidden ${
          isReservationOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <Reservation />
        </div>
      </div>

      {/* Desktop Reservation - Always Visible */}
      <div className="hidden lg:block mb-12">
        <Reservation />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
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
