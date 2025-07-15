import React from "react";
import { useI18n } from '../../../lib/i18nContext';

const OurServices = () => {
  const { t } = useI18n();
  return (
    <div className="p-4 sm:p-6 lg:p-14">
      <div className="max-w-7xl mx-auto">
        <div className="p-6 mb-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            {t('our_services')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">{t('airport_transfer')}</h3>
              <p className="text-gray-300 text-base">{t('airport_transfer_desc')}</p>
            </div>
            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">{t('city_transfer')}</h3>
              <p className="text-gray-300 text-base">{t('city_transfer_desc')}</p>
            </div>
            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                {/* VIP Hizmet için taç ikonu */}
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
                  <circle cx="12" cy="19" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">{t('vip_service')}</h3>
              <p className="text-gray-300 text-base">{t('vip_service_desc')}</p>
            </div>
            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                {/* Güvenli ödeme için kilit/ödeme ikonu */}
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="8" rx="2" strokeWidth="2" stroke="currentColor" fill="none" />
                  <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth="2" stroke="currentColor" fill="none" />
                  <circle cx="12" cy="15" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">{t('secure_payment')}</h3>
              <p className="text-gray-300 text-base">{t('secure_payment_desc')}</p>
            </div>
            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">{t('group_transfer')}</h3>
              <p className="text-gray-300 text-base">{t('group_transfer_desc')}</p>
            </div>
            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-white mb-2">{t('online_reservation')}</h3>
              <p className="text-gray-300 text-base">{t('online_reservation_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices; 