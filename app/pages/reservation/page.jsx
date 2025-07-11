"use client"
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const ReservationContent = () => {
  const searchParams = useSearchParams();
  const [reservationData, setReservationData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    passengers: 1
  });

  useEffect(() => {
    if (searchParams) {
      setReservationData({
        from: searchParams.get('from') || '',
        to: searchParams.get('to') || '',
        date: searchParams.get('date') || '',
        time: searchParams.get('time') || '',
        passengers: parseInt(searchParams.get('passengers')) || 1
      });
    }
  }, [searchParams]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return '';
    return timeString;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Rezervasyon Detayları
            </h1>
            <p className="text-gray-600">
              Transfer rezervasyonunuzu tamamlamak için aşağıdaki bilgileri kontrol edin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Transfer Bilgileri */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Transfer Bilgileri
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nereden:</span>
                  <span className="font-medium">{reservationData.from}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nereye:</span>
                  <span className="font-medium">{reservationData.to}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tarih:</span>
                  <span className="font-medium">{formatDate(reservationData.date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saat:</span>
                  <span className="font-medium">{formatTime(reservationData.time)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Yolcu Sayısı:</span>
                  <span className="font-medium">{reservationData.passengers} Kişi</span>
                </div>
              </div>
            </div>

            {/* İletişim Bilgileri Formu */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                İletişim Bilgileri
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Uçuş Numarası
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Özel Notlar */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Özel Notlar
            </h2>
            <textarea
              rows="4"
              placeholder="Özel istekleriniz veya notlarınız varsa buraya yazabilirsiniz..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-gray-600 transition-colors duration-200"
            >
              Geri Dön
            </Link>
            <button className="flex-1 bg-amber-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-200">
              Rezervasyonu Tamamla
            </button>
          </div>

          {/* Bilgilendirme */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Önemli Bilgiler:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Rezervasyonunuz onaylandıktan sonra e-posta ile bilgilendirileceksiniz</li>
              <li>• Transfer saatinden 15 dakika önce belirtilen noktada hazır olunuz</li>
              <li>• İptal işlemleri için en az 24 saat önceden haber veriniz</li>
              <li>• Ödeme transfer sırasında nakit olarak yapılacaktır</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReservationPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    }>
      <ReservationContent />
    </Suspense>
  );
};

export default ReservationPage; 