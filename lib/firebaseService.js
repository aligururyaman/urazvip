import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDoc,
  query, 
  orderBy,
  where,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';

// Rezervasyon koleksiyonu referansı
const RESERVATIONS_COLLECTION = 'reservations';

// Yeni rezervasyon ekle
export const addReservation = async (reservationData) => {
  try {
    const docRef = await addDoc(collection(db, RESERVATIONS_COLLECTION), {
      ...reservationData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      status: 'Beklemede'
    });
    return { id: docRef.id, ...reservationData };
  } catch (error) {
    console.error('Rezervasyon eklenirken hata:', error);
    throw error;
  }
};

// Tüm rezervasyonları getir
export const getReservations = async () => {
  try {
    const q = query(
      collection(db, RESERVATIONS_COLLECTION),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const reservations = [];
    querySnapshot.forEach((doc) => {
      reservations.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.() || doc.data().createdAt,
        updatedAt: doc.data().updatedAt?.toDate?.() || doc.data().updatedAt
      });
    });
    return reservations;
  } catch (error) {
    console.error('Rezervasyonlar getirilirken hata:', error);
    throw error;
  }
};

// Duruma göre rezervasyonları getir
export const getReservationsByStatus = async (status) => {
  try {
    const q = query(
      collection(db, RESERVATIONS_COLLECTION),
      where('status', '==', status),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const reservations = [];
    querySnapshot.forEach((doc) => {
      reservations.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.() || doc.data().createdAt,
        updatedAt: doc.data().updatedAt?.toDate?.() || doc.data().updatedAt
      });
    });
    return reservations;
  } catch (error) {
    console.error('Rezervasyonlar getirilirken hata:', error);
    throw error;
  }
};

// Rezervasyon durumunu güncelle
export const updateReservationStatus = async (id, newStatus) => {
  try {
    const reservationRef = doc(db, RESERVATIONS_COLLECTION, id);
    await updateDoc(reservationRef, {
      status: newStatus,
      updatedAt: serverTimestamp()
    });
    return { id, status: newStatus };
  } catch (error) {
    console.error('Rezervasyon durumu güncellenirken hata:', error);
    throw error;
  }
};

// Rezervasyonu güncelle
export const updateReservation = async (id, updateData) => {
  try {
    const reservationRef = doc(db, RESERVATIONS_COLLECTION, id);
    await updateDoc(reservationRef, {
      ...updateData,
      updatedAt: serverTimestamp()
    });
    return { id, ...updateData };
  } catch (error) {
    console.error('Rezervasyon güncellenirken hata:', error);
    throw error;
  }
};

// Rezervasyonu sil
export const deleteReservation = async (id) => {
  try {
    const reservationRef = doc(db, RESERVATIONS_COLLECTION, id);
    await deleteDoc(reservationRef);
    return { id };
  } catch (error) {
    console.error('Rezervasyon silinirken hata:', error);
    throw error;
  }
};

// Belirli bir rezervasyonu getir
export const getReservationById = async (id) => {
  try {
    const reservationRef = doc(db, RESERVATIONS_COLLECTION, id);
    const docSnap = await getDoc(reservationRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate?.() || docSnap.data().createdAt,
        updatedAt: docSnap.data().updatedAt?.toDate?.() || docSnap.data().updatedAt
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Rezervasyon getirilirken hata:', error);
    throw error;
  }
}; 