import emailjs from '@emailjs/browser';

// EmailJS konfigürasyonu
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // EmailJS'den alınacak
  TEMPLATE_ID_RESERVATION: 'YOUR_TEMPLATE_ID_RESERVATION', // Rezervasyon alındı şablonu
  TEMPLATE_ID_APPROVED: 'YOUR_TEMPLATE_ID_APPROVED', // Onaylandı şablonu
  USER_ID: 'YOUR_USER_ID' // EmailJS'den alınacak
};

// EmailJS'i başlat
emailjs.init(EMAILJS_CONFIG.USER_ID);

// Rezervasyon alındığında e-posta gönder
export const sendReservationReceivedEmail = async (reservationData) => {
  try {
    const templateParams = {
      to_email: reservationData.contactInfo?.email || '',
      to_name: reservationData.contactInfo?.fullName || 'Değerli Müşterimiz',
      reservation_id: reservationData.id,
      from_location: reservationData.from,
      to_location: reservationData.to,
      date: reservationData.date,
      time: reservationData.time,
      passengers: reservationData.passengers,
      tracking_link: `${window.location.origin}/rezervasyon-detay?id=${reservationData.id}`,
      message: `Rezervasyonunuz başarıyla alınmıştır. Takip etmek için: ${window.location.origin}/rezervasyon-detay?id=${reservationData.id}`
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_RESERVATION,
      templateParams
    );

    console.log('Rezervasyon e-postası gönderildi:', response);
    return { success: true, message: 'E-posta başarıyla gönderildi' };
  } catch (error) {
    console.error('E-posta gönderilirken hata:', error);
    return { success: false, message: 'E-posta gönderilemedi' };
  }
};

// Rezervasyon onaylandığında e-posta gönder
export const sendReservationApprovedEmail = async (reservationData) => {
  try {
    const templateParams = {
      to_email: reservationData.contactInfo?.email || '',
      to_name: reservationData.contactInfo?.fullName || 'Değerli Müşterimiz',
      reservation_id: reservationData.id,
      from_location: reservationData.from,
      to_location: reservationData.to,
      date: reservationData.date,
      time: reservationData.time,
      passengers: reservationData.passengers,
      message: 'Rezervasyonunuz onaylanmıştır! Transfer saatinden 15 dakika önce belirtilen noktada hazır olunuz.'
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_APPROVED,
      templateParams
    );

    console.log('Onay e-postası gönderildi:', response);
    return { success: true, message: 'Onay e-postası başarıyla gönderildi' };
  } catch (error) {
    console.error('Onay e-postası gönderilirken hata:', error);
    return { success: false, message: 'Onay e-postası gönderilemedi' };
  }
};

// Test e-postası gönder
export const sendTestEmail = async () => {
  try {
    const templateParams = {
      to_email: 'test@example.com',
      to_name: 'Test Kullanıcı',
      message: 'Bu bir test e-postasıdır.'
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_RESERVATION,
      templateParams
    );

    console.log('Test e-postası gönderildi:', response);
    return { success: true, message: 'Test e-postası başarıyla gönderildi' };
  } catch (error) {
    console.error('Test e-postası gönderilirken hata:', error);
    return { success: false, message: 'Test e-postası gönderilemedi' };
  }
}; 