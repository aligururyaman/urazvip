import React from 'react';

export default function IletisimPage() {
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
          {/* İletişim Bilgileri */}
          <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              İletişim Bilgileri
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Telefon</h3>
                <p className="text-gray-300">+90 242 123 45 67</p>
                <p className="text-gray-300">+90 532 123 45 67 (WhatsApp)</p>
              </div>
              </div>

              <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">E-posta</h3>
                <p className="text-gray-300">info@urazvip.com</p>
                <p className="text-gray-300">rezervasyon@urazvip.com</p>
                <p className="text-gray-300">7/24 WhatsApp: +90 532 123 45 67</p>
              </div>
              </div>

              <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Adres</h3>
                <p className="text-gray-300">Antalya Havalimanı</p>
                <p className="text-gray-300">Transfer Merkezi</p>
                <p className="text-gray-300">Antalya, Türkiye</p>
              </div>
              </div>

              <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Çalışma Saatleri</h3>
                <p className="text-gray-300">7/24 Hizmet</p>
                <p className="text-gray-300">Her gün açık</p>
              </div>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Mesaj Gönderin
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Konu
                </label>
                <select className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                  <option value="">Konu seçiniz</option>
                  <option value="rezervasyon">Rezervasyon</option>
                  <option value="bilgi">Bilgi Talebi</option>
                  <option value="sikayet">Şikayet</option>
                  <option value="oneri">Öneri</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Mesajınız
                </label>
                <textarea
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 