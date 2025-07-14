"use client"
import React from "react";
import { useRouter } from "next/navigation";

const TransferCard = ({ title, duration, price, image }) => {
  const router = useRouter();

  const handleReservation = () => {
    router.push('/rezervasyon');
  };

  return (
    <div className="bg-gray-900 border-2 border-yellow-500 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
      {/* Image Section */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <span className="text-gray-400 text-lg font-medium">Fotoğraf</span>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-5 lg:p-6">
        {/* Title and Price */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight flex-1 mr-4">
            {title}
          </h3>
          <div className="text-right flex-shrink-0">
            <p className="text-sm md:text-base text-yellow-400 font-medium">{duration}</p>
            <p className="text-lg md:text-xl lg:text-2xl text-yellow-500 font-bold">{price}</p>
          </div>
        </div>

        {/* Button */}
        <button 
          onClick={handleReservation}
          className="w-full bg-yellow-500 text-black py-3 md:py-4 px-4 md:px-6 rounded-xl font-semibold text-base md:text-lg hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Hemen Yer Ayırt
        </button>
      </div>
    </div>
  );
};

export default TransferCard;
