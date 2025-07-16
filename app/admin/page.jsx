"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useI18n } from '../../lib/i18nContext';
import { 
  getReservations, 
  updateReservationStatus, 
  deleteReservation 
} from '../../lib/firebaseService';
import { sendReservationApprovedEmail, sendTestEmail } from '../../lib/emailService';

const AdminPanel = () => {
  const router = useRouter();
  const { t } = useI18n();
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Giriş kontrolü
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (adminLoggedIn === 'true') {
      setIsLoggedIn(true);
      loadReservations();
    } else {
      window.location.replace('/');
    }
  }, []);

  const loadReservations = async () => {
    try {
      const storedReservations = await getReservations();
      setReservations(storedReservations);
    } catch (error) {
      console.error('Rezervasyonlar yüklenirken hata:', error);
    }
  };

  const handleUpdateReservationStatus = async (id, newStatus) => {
    try {
      await updateReservationStatus(id, newStatus);
      
      // Eğer rezervasyon onaylandıysa e-posta gönder
      if (newStatus === 'Onaylandı') {
        const reservation = reservations.find(r => r.id === id);
        if (reservation && reservation.contactInfo?.email) {
          try {
            await sendReservationApprovedEmail(reservation);
            console.log('Onay e-postası gönderildi');
          } catch (emailError) {
            console.error('Onay e-postası gönderilemedi:', emailError);
          }
        }
      }
      
      // Rezervasyonları yeniden yükle
      await loadReservations();
    } catch (error) {
      console.error('Rezervasyon durumu güncellenirken hata:', error);
    }
  };

  const handleDeleteReservation = async (id) => {
    try {
      await deleteReservation(id);
      // Rezervasyonları yeniden yükle
      await loadReservations();
    } catch (error) {
      console.error('Rezervasyon silinirken hata:', error);
    }
  };

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Beklemede':
        return 'bg-yellow-900 text-yellow-300';
      case 'Onay Bekliyor':
        return 'bg-blue-900 text-blue-300';
      case 'Onaylandı':
        return 'bg-green-900 text-green-300';
      case 'İptal Edildi':
        return 'bg-red-900 text-red-300';
      default:
        return 'bg-gray-900 text-gray-300';
    }
  };

  const filteredReservations = reservations.filter(reservation => {
    if (filter === 'all') return true;
    return reservation.status === filter;
  });

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    window.location.replace('/');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">{t('redirecting')}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
            <div></div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {t('brand')} - {t('admin_panel')}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base">
                {t('admin_panel_subtitle')}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
            >
              {t('logout')}
            </button>
          </div>
        </div>

        {/* Filtreler */}
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'all' 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {t('all')} ({reservations.length})
            </button>
            <button
              onClick={() => setFilter('Beklemede')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'Beklemede' 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {t('pending')} ({reservations.filter(r => r.status === 'Beklemede').length})
            </button>
            <button
              onClick={() => setFilter('Onay Bekliyor')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'Onay Bekliyor' 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {t('waiting_approval')} ({reservations.filter(r => r.status === 'Onay Bekliyor').length})
            </button>
            <button
              onClick={() => setFilter('Onaylandı')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'Onaylandı' 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {t('approved')} ({reservations.filter(r => r.status === 'Onaylandı').length})
            </button>
          </div>
        </div>

        {/* Rezervasyon Listesi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Sol Panel - Rezervasyon Listesi */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                {t('reservation_list')}
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {filteredReservations.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">
                    {filter === 'all' ? t('no_reservations_yet') : t('no_reservations_in_status')}
                  </p>
                ) : (
                  filteredReservations.map((reservation) => (
                    <div
                      key={reservation.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedReservation?.id === reservation.id
                          ? 'border-yellow-500 bg-gray-800'
                          : 'border-gray-700 bg-gray-800 hover:border-yellow-500'
                      }`}
                      onClick={() => setSelectedReservation(reservation)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-white">
                            #{reservation.id} - {reservation.to}
                          </h3>
                          <p className="text-sm text-gray-300">
                            {formatDate(reservation.date)} - {formatTime(reservation.time)}
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(reservation.status)}`}>
                          {reservation.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {reservation.passengers} {t('passengers')} • {reservation.from}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Sağ Panel - Rezervasyon Detayları */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                {t('reservation_details')}
              </h2>
              
              {selectedReservation ? (
                <div className="space-y-4">
                  {/* Temel Bilgiler */}
                  <div>
                    <h3 className="font-semibold text-white mb-2">{t('transfer_info')}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{t('reservation_number')}:</span>
                        <span className="text-white">#{selectedReservation.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">{t('from')}:</span>
                        <span className="text-white">{selectedReservation.from}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">{t('to')}:</span>
                        <span className="text-white">{selectedReservation.to}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">{t('date')}:</span>
                        <span className="text-white">{formatDate(selectedReservation.date)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">{t('time')}:</span>
                        <span className="text-white">{formatTime(selectedReservation.time)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">{t('passenger_count')}:</span>
                        <span className="text-white">{selectedReservation.passengers} {t('passengers')}</span>
                      </div>
                    </div>
                  </div>

                  {/* İletişim Bilgileri */}
                  {selectedReservation.contactInfo && (
                    <div>
                      <h3 className="font-semibold text-white mb-2">{t('contact_info')}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-300">{t('full_name')}:</span>
                          <span className="text-white">{selectedReservation.contactInfo.fullName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">{t('email')}:</span>
                          <span className="text-white">{selectedReservation.contactInfo.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">{t('phone')}:</span>
                          <span className="text-white">{selectedReservation.contactInfo.phone}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Durum Güncelleme */}
                  <div>
                    <h3 className="font-semibold text-white mb-2">{t('update_status')}</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => handleUpdateReservationStatus(selectedReservation.id, 'Onaylandı')}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        {t('approve')}
                      </button>
                      <button
                        onClick={() => handleUpdateReservationStatus(selectedReservation.id, 'İptal Edildi')}
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        {t('cancel')}
                      </button>
                      <button
                        onClick={() => handleUpdateReservationStatus(selectedReservation.id, 'Beklemede')}
                        className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors"
                      >
                        {t('pending')}
                      </button>
                    </div>
                  </div>

                  {/* Silme */}
                  <div>
                    <button
                      onClick={() => {
                        if (confirm(t('confirm_delete'))) {
                          handleDeleteReservation(selectedReservation.id);
                          setSelectedReservation(null);
                        }
                      }}
                      className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-900 transition-colors"
                    >
                      {t('delete_reservation')}
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">
                  {t('select_reservation_to_view_details')}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Test E-posta Butonu */}
        <div className="mt-8 mb-4">
          <button
            onClick={async () => {
              try {
                console.log('Test e-postası gönderiliyor...');
                const result = await sendTestEmail();
                console.log('Test sonucu:', result);
                alert(result.message);
              } catch (error) {
                console.error('Test hatası:', error);
                alert(t('test_email_failed') + error.message);
              }
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('send_test_email')}
          </button>
        </div>

        {/* İstatistikler */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">{reservations.length}</div>
            <div className="text-sm text-gray-300">{t('total_reservations')}</div>
          </div>
          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">
              {reservations.filter(r => r.status === 'Beklemede').length}
            </div>
            <div className="text-sm text-gray-300">{t('pending_reservations')}</div>
          </div>
          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">
              {reservations.filter(r => r.status === 'Onay Bekliyor').length}
            </div>
            <div className="text-sm text-gray-300">{t('waiting_approval_reservations')}</div>
          </div>
          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">
              {reservations.filter(r => r.status === 'Onaylandı').length}
            </div>
            <div className="text-sm text-gray-300">{t('approved_reservations')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 