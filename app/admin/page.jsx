"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  getReservations, 
  updateReservationStatus, 
  deleteReservation 
} from '../../lib/firebaseService';

const AdminPanel = () => {
  const router = useRouter();
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
          <h1 className="text-2xl font-bold mb-4">Yönlendiriliyor...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                URAZ VİP TRANSFER - Admin Paneli
              </h1>
              <p className="text-gray-300">
                Rezervasyon yönetimi ve onay işlemleri
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Çıkış Yap
            </button>
          </div>
        </div>

        {/* Filtreler */}
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'all' 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              Tümü ({reservations.length})
            </button>
            <button
              onClick={() => setFilter('Beklemede')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'Beklemede' 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              Beklemede ({reservations.filter(r => r.status === 'Beklemede').length})
            </button>
            <button
              onClick={() => setFilter('Onay Bekliyor')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'Onay Bekliyor' 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              Onay Bekliyor ({reservations.filter(r => r.status === 'Onay Bekliyor').length})
            </button>
            <button
              onClick={() => setFilter('Onaylandı')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'Onaylandı' 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              Onaylandı ({reservations.filter(r => r.status === 'Onaylandı').length})
            </button>
          </div>
        </div>

        {/* Rezervasyon Listesi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sol Panel - Rezervasyon Listesi */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Rezervasyon Listesi
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {filteredReservations.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">
                    {filter === 'all' ? 'Henüz rezervasyon yok' : 'Bu durumda rezervasyon yok'}
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
                        {reservation.passengers} Kişi • {reservation.from}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Sağ Panel - Rezervasyon Detayları */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Rezervasyon Detayları
              </h2>
              
              {selectedReservation ? (
                <div className="space-y-4">
                  {/* Temel Bilgiler */}
                  <div>
                    <h3 className="font-semibold text-white mb-2">Transfer Bilgileri</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Rezervasyon No:</span>
                        <span className="text-white">#{selectedReservation.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Nereden:</span>
                        <span className="text-white">{selectedReservation.from}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Nereye:</span>
                        <span className="text-white">{selectedReservation.to}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Tarih:</span>
                        <span className="text-white">{formatDate(selectedReservation.date)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Saat:</span>
                        <span className="text-white">{formatTime(selectedReservation.time)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Yolcu Sayısı:</span>
                        <span className="text-white">{selectedReservation.passengers} Kişi</span>
                      </div>
                    </div>
                  </div>

                  {/* İletişim Bilgileri */}
                  {selectedReservation.contactInfo && (
                    <div>
                      <h3 className="font-semibold text-white mb-2">İletişim Bilgileri</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Ad Soyad:</span>
                          <span className="text-white">{selectedReservation.contactInfo.fullName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">E-posta:</span>
                          <span className="text-white">{selectedReservation.contactInfo.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Telefon:</span>
                          <span className="text-white">{selectedReservation.contactInfo.phone}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Durum Güncelleme */}
                  <div>
                    <h3 className="font-semibold text-white mb-2">Durum Güncelle</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => handleUpdateReservationStatus(selectedReservation.id, 'Onaylandı')}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Onayla
                      </button>
                      <button
                        onClick={() => handleUpdateReservationStatus(selectedReservation.id, 'İptal Edildi')}
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        İptal Et
                      </button>
                      <button
                        onClick={() => handleUpdateReservationStatus(selectedReservation.id, 'Beklemede')}
                        className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors"
                      >
                        Beklemede
                      </button>
                    </div>
                  </div>

                  {/* Silme */}
                  <div>
                    <button
                      onClick={() => {
                        if (confirm('Bu rezervasyonu silmek istediğinizden emin misiniz?')) {
                          handleDeleteReservation(selectedReservation.id);
                          setSelectedReservation(null);
                        }
                      }}
                      className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-900 transition-colors"
                    >
                      Rezervasyonu Sil
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">
                  Detayları görmek için bir rezervasyon seçin
                </p>
              )}
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">{reservations.length}</div>
            <div className="text-sm text-gray-300">Toplam Rezervasyon</div>
          </div>
          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">
              {reservations.filter(r => r.status === 'Beklemede').length}
            </div>
            <div className="text-sm text-gray-300">Beklemede</div>
          </div>
          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">
              {reservations.filter(r => r.status === 'Onay Bekliyor').length}
            </div>
            <div className="text-sm text-gray-300">Onay Bekliyor</div>
          </div>
          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">
              {reservations.filter(r => r.status === 'Onaylandı').length}
            </div>
            <div className="text-sm text-gray-300">Onaylandı</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 