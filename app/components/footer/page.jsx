"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useI18n } from '../../../lib/i18nContext';

const Footer = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { t } = useI18n();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = () => {
    setLoginError('');

    if (loginData.username === 'admin' && loginData.password === 'admin') {
      // Başarılı giriş
      localStorage.setItem('adminLoggedIn', 'true');
      console.log('Giriş başarılı, yönlendiriliyor...');
      // Hemen yönlendir
      window.location.href = '/admin';
    } else {
      setLoginError(t('login_error'));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <footer className="bg-gray-900 border-t border-yellow-500 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Placeholder content during SSR */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{t('brand')}</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                {t('footer_company_description')}
              </p>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
              © 2024 {t('brand')}. {t('all_rights_reserved')}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <>
      <footer className="bg-gray-900 border-t border-yellow-500 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Şirket Bilgileri */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{t('brand')}</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                {t('footer_company_description')}
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                <div className="text-gray-300 text-sm sm:text-base">
                  <p>📞 <a href="tel:05439430719" className="hover:underline">0 543 943 07 19</a></p>
                  <p>
                     <span className="inline-block align-middle mr-1">
                       <svg viewBox="0 0 32 32" fill="currentColor" width="18" height="18" className="text-green-500 inline">
                         <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.36 7.11L4 29l7.13-2.33A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.56-1.5l-.4-.23-4.23 1.38 1.38-4.13-.26-.42A9.97 9.97 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3s.99 2.67 1.13 2.85c.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
                       </svg>
                     </span>
                     <a href="https://wa.me/+905439430719" target="_blank" rel="noopener noreferrer" className="hover:underline">{t('whatsapp_line_24_7')}</a>
                  </p>
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  <p>📧 info@urazvip.com</p>
                  <p>📧 rezervasyon@urazvip.com</p>
                  <p>📍 <a href="https://www.google.com/maps/search/?api=1&query=Antalya+Havalimanı+Antalya+Türkiye" target="_blank" rel="noopener noreferrer" className="hover:underline">Antalya Havalimanı, Antalya, Türkiye</a></p>
                </div>
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">{t('quick_links')}</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('home_page')}
                  </a>
                </li>
                <li>
                  <a href="/rezervasyon" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('menu_reservation')}
                  </a>
                </li>
                <li>
                  <a href="/iletisim" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('menu_contact')}
                  </a>
                </li>
                <li>
                  <a href="/hakkimizda" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('menu_about')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Hizmetler */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">{t('our_services')}</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="text-gray-300">{t('city_transfer')}</li>
                <li className="text-gray-300">{t('airport_transfer_service')}</li>
                <li className="text-gray-300">{t('mercedes_vito_vip')}</li>
                <li className="text-gray-300">{t('mercedes_sprinter_vip')}</li>
                <li className="text-gray-300">{t('volkswagen_crafter_vip')}</li>
                <li className="text-gray-300">{t('luxury_car_transfer')}</li>
                <li className="text-gray-300">{t('intercity_transfer')}</li>
                <li className="text-gray-300">{t('service_24_7')}</li>
              </ul>
            </div>
          </div>

          {/* Alt Kısım */}
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
              © 2024 {t('brand')}. {t('all_rights_reserved')}
            </div>
            <div className="flex space-x-4 mt-3 sm:mt-0">
              <button
                onClick={() => setShowLoginModal(true)}
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors"
              >
                {t('admin_login')}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 sm:p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white">{t('admin_login_title')}</h2>
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setLoginData({ username: '', password: '' });
                  setLoginError('');
                }}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t('username')}
                </label>
                <input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder={t('username_placeholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t('password')}
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder={t('password_placeholder')}
                />
              </div>

              {loginError && (
                <div className="bg-red-900 border border-red-500 text-red-300 p-3 rounded-lg text-sm">
                  {loginError}
                </div>
              )}

              <button
                type="button"
                onClick={handleLogin}
                className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                {t('login')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer; 