"use client"
import React from 'react';
import Reservation from '../components/reservation/page';
import { useI18n } from '../../lib/i18nContext';

export default function RezervasyonPage() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {t('reservation_title')}
          </h1>
          <p className="text-gray-300">
            {t('reservation_subtitle')}
          </p>
        </div>
        <Reservation />
      </div>
    </div>
  );
} 