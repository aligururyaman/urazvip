"use client"
import React, { useState, useEffect } from 'react';
import { useI18n } from '../../lib/i18nContext';

export default function HakkimizdaPage() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white mb-2">
              Hakkımızda
            </h1>
            <p className="text-gray-300">
              URAZ VİP TRANSFER - Antalya'nın güvenilir transfer hizmeti
            </p>
          </div>

          {/* Placeholder content during SSR */}
          <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Biz Kimiz?
                </h2>
                <p className="text-gray-300 mb-4">
                  URAZ VİP TRANSFER olarak, 2015 yılından bu yana Antalya Havalimanı'ndan şehrin tüm noktalarına VIP transfer hizmeti sunmaktayız.
                </p>
              </div>
              <div className="bg-yellow-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-black mb-4">
                  Neden Bizi Seçmelisiniz?
                </h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    7/24 Hizmet
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">
            {t('about_title')}
          </h1>
          <p className="text-gray-300">
            {t('about_subtitle')}
          </p>
        </div>

        {/* Ana İçerik */}
        <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t('who_we_are')}
              </h2>
              <p className="text-gray-300 mb-4">
                {t('about_text_1')}
              </p>
              <p className="text-gray-300 mb-4">
                {t('about_text_2')}
              </p>
              <p className="text-gray-300">
                {t('about_text_3')}
              </p>
            </div>
            <div className="bg-yellow-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">
                {t('why_choose_us')}
              </h3>
              <ul className="space-y-3 text-black">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('service_24_7_full')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('safe_comfortable_vehicles')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('experienced_drivers')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('affordable_prices')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('on_time_delivery')}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hizmetlerimiz */}
        <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {t('our_services')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">{t('airport_transfer')}</h3>
              <p className="text-gray-300 text-sm">
                {t('airport_transfer_desc')}
              </p>
            </div>

            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">{t('city_transfer')}</h3>
              <p className="text-gray-300 text-sm">
                {t('city_transfer_desc')}
              </p>
            </div>

            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">{t('vip_service')}</h3>
              <p className="text-gray-300 text-sm">
                {t('vip_service_desc')}
              </p>
            </div>

            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">{t('group_transfer')}</h3>
              <p className="text-gray-300 text-sm">
                {t('group_transfer_desc')}
              </p>
            </div>

            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">{t('online_reservation')}</h3>
              <p className="text-gray-300 text-sm">
                {t('online_reservation_desc')}
              </p>
            </div>

            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">{t('secure_payment')}</h3>
              <p className="text-gray-300 text-sm">
                {t('secure_payment_desc')}
              </p>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {t('numbers_with_us')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2 text-yellow-500">8+</div>
              <div className="text-sm text-gray-300">{t('years_experience')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-yellow-500">50K+</div>
              <div className="text-sm text-gray-300">{t('happy_customers')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-yellow-500">25+</div>
              <div className="text-sm text-gray-300">{t('modern_vehicles')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-yellow-500">7/24</div>
              <div className="text-sm text-gray-300">{t('service_24_7')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 