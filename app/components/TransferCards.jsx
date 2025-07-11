"use client"
import React from "react";
import { useRouter } from "next/navigation";

const TransferCard = ({ title, duration, price, image }) => {
  const router = useRouter();

  const handleReservation = () => {
    router.push('/rezervasyon');
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-[200px] sm:h-[240px] md:h-[270px] bg-gray-900 border border-yellow-500 rounded-2xl overflow-hidden shadow-lg shadow-yellow-500 transition-transform hover:scale-105">
      <div className="h-[50px] sm:h-[90px] md:h-[150px] bg-black">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-200">
            Fotoğraf
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4 h-[180px] sm:h-[200px] flex flex-col">
        <div className="text-white flex flex-row items-center justify-between">
          <h2 className="text-lg sm:text-xl font-semibold mb-1">{title}</h2>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xs sm:text-sm text-yellow-400">{duration}</p>
            <p className="text-xs sm:text-sm text-yellow-400">{price}</p>
          </div>
        </div>
        <button 
          onClick={handleReservation}
          className="mt-2 sm:mt-4 bg-yellow-500 text-black py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-sm sm:text-base hover:bg-yellow-400 transition-transform hover:scale-105"
        >
          Hemen Yer Ayırt
        </button>
      </div>
    </div>
  );
};

export default TransferCard;
