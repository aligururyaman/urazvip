"use client"
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getReservationById, updateReservation } from '../../lib/firebaseService';

const ReservationDetailContent = () => {
  const searchParams = useSearchParams();
  const [reservationData, setReservationData] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const reservationId = searchParams.get('id');
    if (reservationId) {
      const loadReservation = async () => {
        try {
                  const reservation = await getReservationById(reservationId);
        if (reservation) {
          console.log('Rezervasyon verisi:', reservation);
          console.log('İletişim bilgileri:', reservation.contactInfo);
          setReservationData(reservation);
        }
        } catch (error) {
          console.error('Rezervasyon yüklenirken hata:', error);
        }
      };
      
      loadReservation();
      
      // Her 5 saniyede bir rezervasyon durumunu kontrol et
      const interval = setInterval(loadReservation, 5000);
      return () => clearInterval(interval);
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

  if (!reservationData) {
    return (
      <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Rezervasyon Bulunamadı</h1>
          <Link href="/" className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              VIP Transfer Rezervasyon Detayları
            </h1>
            <p className="text-gray-300">
              Rezervasyon numaranız: <span className="text-yellow-500 font-bold">#{reservationData.id}</span>
            </p>
          </div>

          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg text-center ${
              submitMessage.includes('başarıyla') 
                ? 'bg-green-900 border border-green-500 text-green-300' 
                : 'bg-red-900 border border-red-500 text-red-300'
            }`}>
              {submitMessage}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Transfer Bilgileri */}
            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Transfer Bilgileri
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Nereden:</span>
                  <span className="font-medium text-white">{reservationData.from}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Nereye:</span>
                  <span className="font-medium text-white">{reservationData.to}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Tarih:</span>
                  <span className="font-medium text-white">{formatDate(reservationData.date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saat:</span>
                  <span className="font-medium text-white">{formatTime(reservationData.time)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Yolcu Sayısı:</span>
                  <span className="font-medium text-white">{reservationData.passengers} Kişi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Araç Tipi:</span>
                  <span className="font-medium text-white">{reservationData.vehicleType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Buluşma Noktası:</span>
                  <span className="font-medium text-white">{reservationData.pickupLocation}</span>
                </div>
                {reservationData.flightNumber && (
                  <div className="flex justify-between">
                    <span className="text-gray-300">Uçuş Numarası:</span>
                    <span className="font-medium text-white">{reservationData.flightNumber}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-300">Durum:</span>
                  <span className={`font-medium px-2 py-1 rounded ${
                    reservationData.status === 'Onay Bekliyor' 
                      ? 'bg-yellow-900 text-yellow-300' 
                      : 'bg-blue-900 text-blue-300'
                  }`}>
                    {reservationData.status}
                  </span>
                </div>
              </div>
            </div>

            {/* İletişim Bilgileri */}
            <div className="bg-gray-800 border border-yellow-500 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                İletişim Bilgileri
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Ad Soyad:</span>
                  <span className="font-medium text-white">{reservationData.contactInfo?.fullName || reservationData.fullName || 'Belirtilmemiş'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">E-posta:</span>
                  <span className="font-medium text-white">{reservationData.contactInfo?.email || reservationData.email || 'Belirtilmemiş'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Telefon:</span>
                  <span className="font-medium text-white">{reservationData.contactInfo?.phone || reservationData.phone || 'Belirtilmemiş'}</span>
                </div>
                <div className="mt-4 p-3 bg-blue-900 border border-blue-500 rounded text-blue-300 text-sm">
                  ✓ Rezervasyonunuz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
                </div>
              </div>
            </div>
          </div>

          {/* Özel Notlar */}
          {reservationData.specialRequests && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                Özel İstekler
              </h2>
              <div className="bg-gray-800 border border-yellow-500 rounded-lg p-4">
                <p className="text-gray-300">{reservationData.specialRequests}</p>
              </div>
            </div>
          )}

          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-gray-700 transition-colors duration-200"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/rezervasyon"
              className="flex-1 bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold text-center hover:bg-yellow-400 transition-colors duration-200"
            >
              Yeni Rezervasyon
            </Link>
          </div>

          {/* Bilgilendirme */}
          <div className="mt-8 p-4 bg-blue-900 border border-blue-500 rounded-lg">
            <h3 className="font-semibold text-blue-300 mb-2">Önemli Bilgiler:</h3>
            <ul className="text-sm text-blue-200 space-y-1">
              <li>• Rezervasyonunuz onaylandıktan sonra e-posta ile bilgilendirileceksiniz</li>
              <li>• Transfer saatinden 15 dakika önce belirtilen noktada hazır olunuz</li>
              <li>• İptal işlemleri için en az 24 saat önceden haber veriniz</li>
              <li>• Ödeme transfer sırasında nakit olarak yapılacaktır</li>
              <li>• VIP araçlarımız klimalı ve konforlu seyahat garantisi sunar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReservationDetailPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Yükleniyor...</p>
        </div>
      </div>
    }>
      <ReservationDetailContent />
    </Suspense>
  );
};

export default ReservationDetailPage; 