"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    setLoginError('');

    if (loginData.username === 'admin' && loginData.password === 'admin') {
      // Başarılı giriş
      localStorage.setItem('adminLoggedIn', 'true');
      console.log('Giriş başarılı, yönlendiriliyor...');
      // Hemen yönlendir
      window.location.href = '/admin';
    } else {
      setLoginError('Kullanıcı adı veya şifre hatalı!');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <footer className="bg-gray-900 border-t border-yellow-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Şirket Bilgileri */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">URAZ VİP TRANSFER</h3>
              <p className="text-gray-300 mb-4">
                Antalya Havalimanı'ndan tüm destinasyonlara VIP transfer hizmeti. 
                Lüks araçlar, profesyonel şoförler, 7/24 hizmet.
              </p>
              <div className="flex space-x-4">
                <div className="text-gray-300">
                  <p>📞 +90 242 123 45 67</p>
                  <p>📱 +90 532 123 45 67</p>
                </div>
                <div className="text-gray-300">
                  <p>📧 info@urazvip.com</p>
                  <p>🌐 www.urazvip.com</p>
                </div>
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Ana Sayfa
                  </a>
                </li>
                <li>
                  <a href="/rezervasyon" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Rezervasyon
                  </a>
                </li>
                <li>
                  <a href="/iletisim" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    İletişim
                  </a>
                </li>
                <li>
                  <a href="/hakkimizda" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Hakkımızda
                  </a>
                </li>
              </ul>
            </div>

            {/* Hizmetler */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Hizmetlerimiz</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">VIP Sedan Transfer</li>
                <li className="text-gray-300">VIP SUV Transfer</li>
                <li className="text-gray-300">VIP Van Transfer</li>
                <li className="text-gray-300">Lüks Araç Transfer</li>
                <li className="text-gray-300">7/24 Hizmet</li>
              </ul>
            </div>
          </div>

          {/* Alt Kısım */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2024 URAZ VİP TRANSFER. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button
                onClick={() => setShowLoginModal(true)}
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors"
              >
                Yönetici Girişi
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Yönetici Girişi</h2>
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

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Kullanıcı adınızı girin"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Şifre
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Şifrenizi girin"
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
                Giriş Yap
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer; 