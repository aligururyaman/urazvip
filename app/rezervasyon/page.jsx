import React from 'react';
import Reservation from '../components/reservation/page';

export default function RezervasyonPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Transfer Rezervasyonu
          </h1>
          <p className="text-gray-300">
            Antalya Havalimanı'ndan istediğiniz noktaya güvenli ve konforlu transfer hizmeti
          </p>
        </div>
        <Reservation />
      </div>
    </div>
  );
} 