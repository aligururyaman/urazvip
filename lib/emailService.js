// EmailJS CDN'den yüklendiği için global emailjs kullanıyoruz
const getEmailJS = () => {
  if (typeof window !== 'undefined' && window.emailjs) {
    return window.emailjs;
  }
  return null;
};

// EmailJS konfigürasyonu (artık .env dosyasından okunuyor)
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID_RESERVATION: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_RESERVATION || '',
  TEMPLATE_ID_APPROVED: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_APPROVED || '',
  USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '',
  PRIVATE_KEY: process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY || '',
  DEFAULT_EMAIL: process.env.NEXT_PUBLIC_EMAILJS_DEFAULT_EMAIL || ''
};

// Rezervasyon alındığında e-posta gönder
export const sendReservationReceivedEmail = async (reservationData) => {
  try {
    console.log('=== REZERVASYON E-POSTA BAŞLADI ===');
    
    if (typeof window === 'undefined') {
      throw new Error('Window objesi bulunamadı (SSR)');
    }
    
    if (!window.emailjs) {
      throw new Error('EmailJS yüklenmemiş');
    }

    const templateParams = {
      // EmailJS template parametreleri
      to_email: reservationData.contactInfo?.email || EMAILJS_CONFIG.DEFAULT_EMAIL,
      to_name: reservationData.contactInfo?.fullName || 'Değerli Müşterimiz',
      name: reservationData.contactInfo?.fullName || 'Değerli Müşterimiz',
      title: `${reservationData.from} - ${reservationData.to} Transfer`,
      reservation_id: reservationData.id,
      from_location: reservationData.from,
      to_location: reservationData.to,
      from: reservationData.from,
      to: reservationData.to,
      date: reservationData.date,
      time: reservationData.time,
      passengers: reservationData.passengers,
      tracking_link: `${window.location.origin}/rezervasyon-detay?id=${reservationData.id}`,
      message: `Rezervasyonunuz başarıyla alınmıştır. Takip etmek için: ${window.location.origin}/rezervasyon-detay?id=${reservationData.id}`,
      
      // Alternatif parametreler
      email: reservationData.contactInfo?.email || EMAILJS_CONFIG.DEFAULT_EMAIL,
      user_email: reservationData.contactInfo?.email || EMAILJS_CONFIG.DEFAULT_EMAIL,
      recipient_email: reservationData.contactInfo?.email || EMAILJS_CONFIG.DEFAULT_EMAIL,
      reply_to: EMAILJS_CONFIG.DEFAULT_EMAIL,
      from_email: EMAILJS_CONFIG.DEFAULT_EMAIL
    };

    console.log('E-posta gönderiliyor...', templateParams);
    console.log('to_email değeri:', templateParams.to_email);
    console.log('to_email tipi:', typeof templateParams.to_email);
    console.log('to_email boş mu:', !templateParams.to_email);

    const response = await window.emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_RESERVATION,
      templateParams
    );

    console.log('Rezervasyon e-postası gönderildi:', response);
    return { success: true, message: 'E-posta başarıyla gönderildi' };
  } catch (error) {
    console.error('E-posta gönderilirken hata:', error);
    console.error('Hata detayları:', {
      message: error.message,
      text: error.text,
      status: error.status,
      stack: error.stack
    });
    return { success: false, message: `E-posta gönderilemedi: ${error.message || error.text || 'Bilinmeyen hata'}` };
  }
};

// Rezervasyon onaylandığında e-posta gönder
export const sendReservationApprovedEmail = async (reservationData) => {
  try {
    const templateParams = {
      to_email: reservationData.contactInfo?.email || EMAILJS_CONFIG.DEFAULT_EMAIL,
      to_name: reservationData.contactInfo?.fullName || 'Değerli Müşterimiz',
      reservation_id: reservationData.id,
      from_location: reservationData.from,
      to_location: reservationData.to,
      date: reservationData.date,
      time: reservationData.time,
      passengers: reservationData.passengers,
      message: 'Rezervasyonunuz onaylanmıştır! Transfer saatinden 15 dakika önce belirtilen noktada hazır olunuz.',
      reply_to: EMAILJS_CONFIG.DEFAULT_EMAIL,
      from_email: EMAILJS_CONFIG.DEFAULT_EMAIL
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
    console.log('=== EMAILJS TEST BAŞLADI ===');
    
    // EmailJS'in yüklenip yüklenmediğini kontrol et
    if (typeof window === 'undefined') {
      throw new Error('Window objesi bulunamadı (SSR)');
    }
    
    console.log('Window objesi mevcut');
    console.log('window.emailjs:', window.emailjs);
    
    if (!window.emailjs) {
      throw new Error('EmailJS yüklenmemiş');
    }
    
    console.log('EmailJS yüklendi');
    console.log('EmailJS konfigürasyonu:', EMAILJS_CONFIG);
    
    const templateParams = {
      to_email: EMAILJS_CONFIG.DEFAULT_EMAIL, // Gerçek e-posta adresi
      to_name: 'Test Kullanıcı',
      name: 'Test Kullanıcı',
      title: 'Test Rezervasyonu',
      from: 'Antalya Havalimanı',
      to: 'Alanya',
      date: '2024-01-15',
      time: '14:30',
      passengers: 2,
      reservation_id: 'TEST123',
      tracking_link: 'https://example.com',
      reply_to: EMAILJS_CONFIG.DEFAULT_EMAIL,
      from_email: EMAILJS_CONFIG.DEFAULT_EMAIL
    };

    console.log('Template parametreleri:', templateParams);
    console.log('E-posta gönderiliyor...');

    // Basit test için sadece gerekli parametreleri gönderelim
    const simpleParams = {
      to_email: EMAILJS_CONFIG.DEFAULT_EMAIL,
      name: 'Test Kullanıcı',
      message: 'Bu bir test e-postasıdır.',
      reply_to: EMAILJS_CONFIG.DEFAULT_EMAIL,
      from_email: EMAILJS_CONFIG.DEFAULT_EMAIL
    };

    console.log('Basit parametreler:', simpleParams);

    const response = await window.emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_RESERVATION,
      simpleParams
    );

    console.log('Test e-postası gönderildi:', response);
    return { success: true, message: 'Test e-postası başarıyla gönderildi' };
  } catch (error) {
    console.error('=== EMAILJS TEST HATASI ===');
    console.error('Hata:', error);
    console.error('Hata tipi:', typeof error);
    console.error('Hata mesajı:', error.message);
    console.error('Hata stack:', error.stack);
    console.error('Hata detayları:', {
      message: error.message,
      text: error.text,
      status: error.status,
      name: error.name
    });
    return { success: false, message: `Test e-postası gönderilemedi: ${error.message || 'Bilinmeyen hata'}` };
  }
}; 