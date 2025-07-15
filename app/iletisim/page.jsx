"use client"
import React, { useState, useEffect } from 'react';
import { useI18n } from '../../lib/i18nContext';

export default function IletisimPage() {
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
              İletişim
            </h1>
            <p className="text-gray-300">
              Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Placeholder content during SSR */}
            <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                İletişim Bilgileri
              </h2>
            </div>
            <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Mesaj Gönderin
              </h2>
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
            {t('contact_title')}
          </h1>
          <p className="text-gray-300">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t('contact_info')}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <a href="tel:05439430719" className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors duration-200">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{t('phone_label')}</h3>
                    <p className="text-gray-300 group-hover:underline">0 543 943 07 19</p>
                  </div>
                </a>
              </div>

              {/* WhatsApp Butonu */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.607 1.938 6.563L4 29l7.688-1.969C13.393 28.332 14.68 28.5 16 28.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 23c-1.18 0-2.34-.156-3.453-.463l-.246-.066-4.563 1.172 1.219-4.438-.16-.25C6.844 19.07 6 17.08 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.406-7.594c-.297-.148-1.758-.867-2.031-.965-.273-.098-.473-.148-.672.148-.199.297-.77.965-.945 1.164-.174.199-.348.223-.645.074-.297-.148-1.254-.463-2.39-1.477-.883-.789-1.48-1.762-1.652-2.059-.172-.297-.018-.457.13-.605.133-.133.297-.348.445-.523.148-.176.197-.297.297-.496.098-.199.049-.371-.025-.52-.074-.148-.672-1.625-.922-2.227-.242-.582-.488-.504-.672-.512l-.574-.01c-.199 0-.52.074-.793.371-.273.297-1.04 1.016-1.04 2.477 0 1.461 1.065 2.875 1.213 3.074.148.199 2.098 3.203 5.086 4.367.711.305 1.266.488 1.699.625.715.227 1.367.195 1.883.117.574-.086 1.758-.719 2.008-1.414.25-.695.25-1.289.176-1.414-.074-.125-.27-.199-.566-.348z"/>
                  </svg>
                </div>
                <a
                  href="https://wa.me/+905439430719"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition-colors duration-200 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-center"
                >
                  {t('whatsapp_line')}
                </a>
              </div>

              <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">{t('email_label')}</h3>
                <p className="text-gray-300">info@urazvip.com</p>
                <p className="text-gray-300">rezervasyon@urazvip.com</p>
              </div>
              </div>

              <div className="flex items-start space-x-4">
                <a href="https://www.google.com/maps/search/?api=1&query=Antalya+Havalimanı+Antalya+Türkiye" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors duration-200">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{t('address_label')}</h3>
                    <p className="text-gray-300 group-hover:underline">Antalya Havalimanı</p>
                    <p className="text-gray-300 group-hover:underline">Antalya, Türkiye</p>
                  </div>
                </a>
              </div>

              <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">{t('working_hours')}</h3>
                <p className="text-gray-300">{t('service_24_7')}</p>
                <p className="text-gray-300">{t('open_everyday')}</p>
              </div>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t('send_message')}
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t('fullName')}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t('subject')}
                </label>
                <select className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                  <option value="">{t('subject_select')}</option>
                  <option value="rezervasyon">{t('subject_reservation')}</option>
                  <option value="bilgi">{t('subject_info')}</option>
                  <option value="sikayet">{t('subject_complaint')}</option>
                  <option value="oneri">{t('subject_suggestion')}</option>
                  <option value="diger">{t('subject_other')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t('message')}
                </label>
                <textarea
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder={t('message_placeholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                {t('send_message_btn')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 