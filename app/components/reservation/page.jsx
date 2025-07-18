"use client"
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import locationsData from '../../data/locations.js';
import { addReservation } from '../../../lib/firebaseService';
import { sendReservationReceivedEmail } from '../../../lib/emailService';
import { useI18n } from '../../../lib/i18nContext';

const Reservation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t, language } = useI18n();
  const [formData, setFormData] = useState({
    from: 'Antalya Havalimanı',
    to: '',
    date: '',
    time: '',
    passengers: 1,
    email: '',
    fullName: '',
    phone: ''
  });

  // Sayfa açıldığında query parametresinden 'to' varsa otomatik doldur
  React.useEffect(() => {
    const toParam = searchParams.get('to');
    if (toParam && !formData.to) {
      setFormData(prev => ({ ...prev, to: toParam }));
    }
  }, [searchParams, formData.to]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const fromOptions = [
    { value: 'Antalya Havalimanı', label: 'Antalya Havalimanı' },
    { value: 'Şehir İçi', label: 'Şehir İçi' },
  ];

  // İlçeler (şehir içi için)
  const districtOptions = [
    { value: 'Havalimanı', label: 'Havalimanı' },
    { value: 'Diğer', label: 'Diğer' },
    ...locationsData.map(loc => ({ value: loc.name, label: loc.name }))
  ];

  // Euro fiyat tablosu (cards/page.jsx ile aynı)
  const euroLocations = [
    { name: "Kundu", price: "25€" },
    { name: "Lara", price: "25€" },
    { name: "Serik", price: "40€" },
    { name: "Belek", price: "40€" },
    { name: "Kemer", price: "40€" },
    { name: "Kaş", price: "90€" },
    { name: "Beldibi", price: "35€" },
    { name: "Tekirova", price: "45€" },
    { name: "Göynük", price: "35€" },
    { name: "Çamyuva", price: "40€" },
    { name: "Kiriş", price: "45€" },
    { name: "Adrasan", price: "55€" },
    { name: "Alanya", price: "65€" },
    { name: "Mahmutlar", price: "70€" },
    { name: "Okurcular", price: "60€" },
    { name: "Avsallar", price: "60€" },
    { name: "Gazipaşa", price: "85€" },
    { name: "İncekum", price: "60€" },
    { name: "Kumköy", price: "35€" },
    { name: "Kızılot", price: "45€" },
    { name: "Konaklı", price: "65€" },
    { name: "Side", price: "40€" },
    { name: "Türkler", price: "50€" },
    { name: "Kalkan", price: "110€" },
    { name: "Titreyengöl", price: "45€" },
    { name: "Sorgun", price: "45€" },
    { name: "Kadriye", price: "30€" },
    { name: "Manavgat", price: "45€" },
    { name: "Çolaklı", price: "45€" },
    { name: "Şehiriçi", price: "25€" },
    { name: "Konyaaltı", price: "30€" },
    { name: "Olympos", price: "50€" }
  ];

  function getPrice(locationName, language) {
    if (language === 'tr') {
      const loc = locationsData.find(l => l.name === locationName);
      return loc ? loc.price : '';
    } else {
      const euroLoc = euroLocations.find(e => e.name === locationName);
      return euroLoc ? euroLoc.price : '';
    }
  }

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
          contactInfo: {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone
          },
          selectedLocation: locationsData.find(loc => loc.name === formData.to)
        };

        // Firebase'e rezervasyon ekle
        const result = await addReservation(reservationData);

        // E-posta gönder
        if (result.id) {
          try {
            await sendReservationReceivedEmail(result);
          } catch (emailError) {
            console.error('E-posta gönderilemedi:', emailError);
          }
        }

        // Başarı mesajı göster
        setSubmitMessage(t('success'));
        
        // 2 saniye sonra rezervasyon detay sayfasına yönlendir
        setTimeout(() => {
          router.push(`/rezervasyon-detay?id=${result.id}`);
        }, 2000);

      } catch (error) {
        console.error('Rezervasyon hatası:', error);
        setSubmitMessage(t('error'));
      }
    } else {
      setSubmitMessage(t('required'));
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 w-full max-w-4xl mx-auto shadow-2xl border border-yellow-500">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
        {t('vip_reservation')}
      </h2>
      
      {submitMessage && (
        <div className={`mb-6 p-4 rounded-lg text-center ${
          submitMessage.includes('başarıyla') || submitMessage.includes('success') || submitMessage.includes('erfolgreich') || submitMessage.includes('успешно')
            ? 'bg-green-900 border border-green-500 text-green-300' 
            : 'bg-red-900 border border-red-500 text-red-300'
        }`}>
          {submitMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Transfer Bilgileri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Nereden */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('from')}
            </label>
            <select
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              {fromOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Nereye */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('to')}
            </label>
            <select
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="">{t('select_destination')}</option>
              {formData.from === 'Şehir İçi'
                ? districtOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))
                : locationsData.map(location => (
                    <option key={location.name} value={location.name}>
                      {location.name} - {getPrice(location.name, language)}
                    </option>
                  ))}
            </select>
          </div>

          {/* Tarih */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('date')}
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
              {t('time')}
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

        {/* İletişim Bilgileri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Ad Soyad */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('fullName')}
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Adınız ve soyadınız"
            />
          </div>

          {/* E-posta */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('email')}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="E-posta adresiniz"
            />
          </div>

          {/* Telefon */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('phone')}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-yellow-500 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Telefon numaranız"
            />
          </div>
        </div>

        {/* Yolcu Sayısı ve Rezervasyon Butonu */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* Yolcu Sayısı */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              {t('passengers')}
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
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-white mb-2">
              &nbsp;
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Gönderiliyor...' : t('submit')}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reservation;