# Firebase Entegrasyonu - URAZ VIP TRANSFER

Bu proje Firebase Firestore kullanarak rezervasyon yönetimi yapmaktadır.

## Firebase Konfigürasyonu

Firebase konfigürasyonu `lib/firebase.js` dosyasında bulunmaktadır:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyA8Ju9Q3DZsasBBQq-JCeoicwIqhZpm3oo",
  authDomain: "urazvip-f0d2a.firebaseapp.com",
  projectId: "urazvip-f0d2a",
  storageBucket: "urazvip-f0d2a.firebasestorage.app",
  messagingSenderId: "1015021546476",
  appId: "1:1015021546476:web:25bfa92466cad608116ec9",
  measurementId: "G-XBE8FTEV2R"
};
```

## Firebase Servisleri

### 1. Firestore Veritabanı
- **Koleksiyon**: `reservations`
- **Doküman Yapısı**:
  ```javascript
  {
    id: "auto-generated",
    from: "Antalya Havalimanı",
    to: "Alanya",
    date: "2024-01-15",
    time: "14:30",
    passengers: 2,
    status: "Beklemede",
    contactInfo: {
      fullName: "John Doe",
      email: "john@example.com",
      phone: "+905551234567",
      address: "Hotel Address"
    },
    selectedLocation: { /* location data */ },
    createdAt: "timestamp",
    updatedAt: "timestamp"
  }
  ```

### 2. Firebase Servis Fonksiyonları (`lib/firebaseService.js`)

#### Rezervasyon İşlemleri:
- `addReservation(reservationData)` - Yeni rezervasyon ekle
- `getReservations()` - Tüm rezervasyonları getir
- `getReservationsByStatus(status)` - Duruma göre rezervasyonları getir
- `updateReservationStatus(id, newStatus)` - Rezervasyon durumunu güncelle
- `updateReservation(id, updateData)` - Rezervasyonu güncelle
- `deleteReservation(id)` - Rezervasyonu sil
- `getReservationById(id)` - Belirli bir rezervasyonu getir

## Admin Paneli

### Giriş Bilgileri:
- **URL**: `/admin-login`
- **Kullanıcı Adı**: `admin`
- **Şifre**: `urazvip2024`

### Özellikler:
- Rezervasyon listesi görüntüleme
- Rezervasyon durumu güncelleme (Beklemede, Onaylandı, İptal Edildi)
- Rezervasyon silme
- Filtreleme (Tümü, Beklemede, Onay Bekliyor, Onaylandı)
- İstatistikler

## Rezervasyon Süreci

### 1. Rezervasyon Oluşturma
- Kullanıcı ana sayfada rezervasyon formunu doldurur
- Veriler Firebase Firestore'a kaydedilir
- Kullanıcı rezervasyon detay sayfasına yönlendirilir

### 2. İletişim Bilgileri
- Kullanıcı rezervasyon detay sayfasında iletişim bilgilerini ekler
- Rezervasyon durumu "Onay Bekliyor" olarak güncellenir

### 3. Admin Onayı
- Admin panelinden rezervasyonlar görüntülenir
- Admin rezervasyon durumunu güncelleyebilir
- Değişiklikler gerçek zamanlı olarak Firebase'de saklanır

## Güvenlik

### Mevcut Durum:
- Basit admin girişi (hardcoded credentials)
- Firebase güvenlik kuralları yapılandırılmalı

### Önerilen İyileştirmeler:
1. **Firebase Authentication** kullanarak güvenli admin girişi
2. **Firestore Security Rules** ile veri erişim kontrolü
3. **Rate Limiting** ile API koruması
4. **Input Validation** ile veri doğrulama

## Kurulum

1. Firebase projesini oluşturun
2. Firestore veritabanını etkinleştirin
3. Güvenlik kurallarını yapılandırın
4. Konfigürasyon bilgilerini `lib/firebase.js` dosyasına ekleyin

## Güvenlik Kuralları Örneği

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /reservations/{reservationId} {
      allow read, write: if true; // Geçici olarak açık
      // Gerçek uygulamada daha sıkı kurallar kullanın
    }
  }
}
```

## Hata Yönetimi

Tüm Firebase işlemleri try-catch blokları ile korunmuştur:
- Ağ hataları
- Yetkilendirme hataları
- Veri doğrulama hataları
- Firebase servis hataları

## Performans

- Rezervasyonlar `createdAt` alanına göre sıralanır
- Gerçek zamanlı güncellemeler için 5 saniye aralıklarla kontrol
- Sayfalama için hazır altyapı (henüz implement edilmedi)

## Gelecek Geliştirmeler

1. **Firebase Authentication** entegrasyonu
2. **Push Notifications** ile bildirimler
3. **Offline Support** ile çevrimdışı çalışma
4. **Analytics** ile kullanım istatistikleri
5. **Cloud Functions** ile otomatik işlemler 