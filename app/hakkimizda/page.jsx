import React from 'react';

export default function HakkimizdaPage() {
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

        {/* Ana İçerik */}
        <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Biz Kimiz?
              </h2>
              <p className="text-gray-300 mb-4">
                URAZ VİP TRANSFER olarak, 2015 yılından bu yana Antalya Havalimanı'ndan 
                şehrin tüm noktalarına VIP transfer hizmeti sunmaktayız. Mercedes, BMW 
                ve diğer lüks araç markalarından oluşan filomuzla premium hizmet kalitesi 
                sağlıyoruz.
              </p>
              <p className="text-gray-300 mb-4">
                Deneyimli ve profesyonel şoförlerimiz, klimalı lüks araçlarımız ve 
                müşteri memnuniyeti odaklı hizmet anlayışımızla, seyahatlerinizi 
                unutulmaz kılıyoruz. 7/24 hizmet veriyoruz.
              </p>
              <p className="text-gray-300">
                Antalya'nın en güvenilir VIP transfer şirketi olarak, misafirlerimizin 
                güvenliği, konforu ve memnuniyeti bizim için her şeyden önce gelir. 
                Her yolculukta lüks ve konforu bir arada sunuyoruz.
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
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Güvenli ve Konforlu Araçlar
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deneyimli Sürücüler
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Uygun Fiyat Garantisi
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Zamanında Teslimat
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hizmetlerimiz */}
        <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Hizmetlerimiz
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Havalimanı Transferi</h3>
              <p className="text-gray-300 text-sm">
                Antalya Havalimanı'ndan şehrin tüm noktalarına güvenli transfer hizmeti
              </p>
            </div>

            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Şehir İçi Transfer</h3>
              <p className="text-gray-300 text-sm">
                Antalya içinde otel, restoran ve turistik noktalar arası transfer
              </p>
            </div>

            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">VIP Hizmet</h3>
              <p className="text-gray-300 text-sm">
                Lüks araçlarla premium transfer deneyimi
              </p>
            </div>

            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Grup Transferi</h3>
              <p className="text-gray-300 text-sm">
                Büyük gruplar için minibüs ve otobüs hizmeti
              </p>
            </div>

            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Online Rezervasyon</h3>
              <p className="text-gray-300 text-sm">
                7/24 online rezervasyon sistemi ile kolay booking
              </p>
            </div>

            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Güvenli Ödeme</h3>
              <p className="text-gray-300 text-sm">
                Güvenli ödeme seçenekleri ve fiyat garantisi
              </p>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Rakamlarla Biz
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2 text-yellow-500">8+</div>
              <div className="text-sm text-gray-300">Yıllık Deneyim</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-yellow-500">50K+</div>
              <div className="text-sm text-gray-300">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-yellow-500">25+</div>
              <div className="text-sm text-gray-300">Modern Araç</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-yellow-500">7/24</div>
              <div className="text-sm text-gray-300">Hizmet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 