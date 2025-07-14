"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import locationsData from '../../data/locations.json';
import { addReservation } from '../../../lib/firebaseService';

const Reservation = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    from: 'Antalya Havalimanı',
    to: '',
    date: '',
    time: '',
    passengers: 1
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    if (formData.to && formData.date && formData.time) {
      try {
        // Rezervasyon verilerini hazırla
        const reservationData = {
          ...formData,
          selectedLocation: locationsData.find(loc => loc.name === formData.to)
        };

        // Firebase'e rezervasyon ekle
        const result = await addReservation(reservationData);

        // Başarı mesajı göster
        setSubmitMessage('Rezervasyonunuz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.');
        
        // 2 saniye sonra rezervasyon detay sayfasına yönlendir
        setTimeout(() => {
          router.push(`/rezervasyon-detay?id=${result.id}`);
        }, 2000);

      } catch (error) {
        console.error('Rezervasyon hatası:', error);
        setSubmitMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } else {
      setSubmitMessage('Lütfen tüm gerekli alanları doldurun.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-4xl mx-auto shadow-2xl border border-yellow-500">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        VIP Transfer Rezervasyonu
      </h2>
      
      {submitMessage && (
        <div className={`mb-6 p-4 rounded-lg text-center ${
          submitMessage.includes('başarıyla') 
            ? 'bg-green-900 border border-green-500 text-green-300' 
            : 'bg-red-900 border border-red-500 text-red-300'
        }`}>
          {submitMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Transfer Bilgileri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Nereden */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Nereden
            </label>
            <select
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              disabled
            >
              <option value="Antalya Havalimanı">Antalya Havalimanı</option>
            </select>
          </div>

          {/* Nereye */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Nereye
            </label>
            <select
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="">Destinasyon seçiniz</option>
              {locationsData.map((location) => (
                <option key={location.name} value={location.name}>
                  {location.name} - {location.price}
                </option>
              ))}
            </select>
          </div>

          {/* Tarih */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Tarih
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          {/* Saat */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Saat
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Yolcu Sayısı ve Rezervasyon Butonu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Yolcu Sayısı */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Yolcu Sayısı
            </label>
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>
                  {num} Kişi
                </option>
              ))}
            </select>
          </div>

          {/* Rezervasyon Yap Butonu */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-white mb-2">
              &nbsp;
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Rezervasyon Alınıyor...' : 'VIP Transfer Rezervasyonu Yap'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reservation;