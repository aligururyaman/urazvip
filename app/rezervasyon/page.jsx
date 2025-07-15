"use client"
import React from 'react';
import Reservation from '../components/reservation/page';
import { useI18n } from '../../lib/i18nContext';
import Head from 'next/head';

export default function RezervasyonPage() {
  const { t } = useI18n();
  
  return (
    <>
      <Head>
        <title>Rezervasyon | URAZ VİP TRANSFER</title>
        <meta name="description" content="Antalya Havalimanı ve şehirlerarası VIP transfer rezervasyonunuzu kolayca oluşturun. Güvenli ve hızlı rezervasyon imkanı." />
        <meta name="keywords" content="Rezervasyon, Antalya transfer rezervasyon, VIP transfer, hızlı rezervasyon, URAZ VIP" />
        <meta property="og:title" content="Rezervasyon | URAZ VİP TRANSFER" />
        <meta property="og:description" content="Antalya Havalimanı ve şehirlerarası VIP transfer rezervasyonunuzu kolayca oluşturun. Güvenli ve hızlı rezervasyon imkanı." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urazvip.com/rezervasyon" />
        <meta property="og:image" content="/logo.jpg" />
      </Head>
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
    </>
  );
} 