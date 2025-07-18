"use client"
import Hero from "./components/hero/page";
import Cards from "./components/cards/page";
import Reservation from "./components/reservation/page";
import Cars from "./components/cars/page";
import OurServices from "./components/our-services/OurServices";
import { useState } from "react";
import { useI18n } from '../lib/i18nContext';
import Head from 'next/head';

export default function Home() {
  const [showReservation, setShowReservation] = useState(false);
  const { t } = useI18n();

  return (
   <div className="bg-black">
    <Head>
      <title>URAZ VİP TRANSFER - Antalya Havalimanı VIP Transfer Hizmeti</title>
      <meta name="description" content="Antalya Havalimanı'ndan tüm lokasyonlara VIP transfer hizmeti. Lüks araçlar, profesyonel şoförler, 7/24 hizmet. Lüks araç filosu ile konforlu seyahat." />
      <meta name="keywords" content="Antalya VIP transfer, Antalaya VİP, antalya belek transfer, havalimanı transfer, antalya vip, vip antalya, vip transfer, havaalanı vip, airport vip, airport vip transfer, airport transfer, vip araç, lüks araç, Mercedes, BMW, Antalya transfer, özel şoför, 7/24 transfer, URAZ VIP, antalya kundu transfer, antalya lara transfer, antalya serik transfer, antalya belek transfer, antalya kemer transfer, antalya kaş transfer, antalya beldibi transfer, antalya tekirova transfer, antalya göynük transfer, antalya çamyuva transfer, antalya kiriş transfer, antalya adrasan transfer, antalya alanya transfer, antalya mahmutlar transfer, antalya okurcular transfer, antalya avsallar transfer, antalya gazipaşa transfer, antalya incekum transfer, antalya kumköy transfer, antalya kızılot transfer, antalya konaklı transfer, antalya side transfer, antalya türkler transfer, antalya kalkan transfer, antalya titreyengöl transfer, antalya sorgun transfer, antalya kadriye transfer, antalya manavgat transfer, antalya çolaklı transfer, antalya şehiriçi transfer, antalya konyaaltı transfer, antalya olympos transfer, antalya airport vip transfer, antalya airport private transfer, antalya airport luxury car transfer, antalya airport shuttle, antalya airport to hotel transfer, antalya airport to city center vip car, antalya airport to belek transfer, antalya airport taxi, antalya airport limousine service, antalya airport chauffeur service, antalya airport minivan transfer, antalya airport family transfer, antalya airport group transfer, antalya airport executive transfer, antalya airport mercedes vito transfer, antalya airport sprinter transfer, antalya airport shuttle service, antalya airport pickup service, antalya vip car rental with driver, antalya private driver, antalya luxury car hire, antalya city transfer, antalya hotel transfer, antalya to kemer vip transfer, antalya to kemer private car, antalya to kemer taxi, antalya to kemer shuttle, antalya to kemer limousine, antalya to kemer minivan, antalya to kemer chauffeur service, antalya to kemer luxury transfer, antalya to kemer airport transfer, vip transfer antalya, private transfer antalya, luxury transfer antalya, antalya airport transportation, antalya airport shuttle booking, antalya airport transfer prices, antalya airport transfer reviews, best vip transfer antalya, antalya airport to city center, antalya airport to old town transfer, antalya airport to resort transfer, antalya airport to side transfer, antalya airport to alanya transfer, antalya airport to kemer transfer, antalya airport to lara transfer, antalya airport to belek transfer, antalya airport to hotel shuttle, antalya airport to holiday village transfer, antalya havalimanı vip transfer, antalya havalimanı özel araç, antalya havalimanı lüks transfer, antalya havalimanı otel transferi, antalya havalimanı şehir merkezi transfer, antalya havalimanı taksi, antalya havalimanı şoförlü araç, antalya havalimanı minibüs transferi, Flughafen Antalya VIP Transfer, Antalya Flughafen privater Transfer, Antalya Flughafen Luxusauto Transfer, Antalya Flughafen Shuttle, Antalya Flughafen zum Hotel Transfer, Antalya Flughafen ins Stadtzentrum VIP Auto, Antalya Flughafen nach Belek Transfer, Antalya Flughafen Taxi, Antalya Flughafen Limousinenservice, Antalya Flughafen Chauffeurservice, Antalya Flughafen Minivan Transfer, Antalya Flughafen Familien Transfer, Antalya Flughafen Gruppen Transfer, Antalya Flughafen Executive Transfer, Antalya Flughafen Mercedes Vito Transfer, Antalya Flughafen Sprinter Transfer, Antalya Flughafen Shuttle Service, Antalya Flughafen Abholservice, Antalya VIP Autovermietung mit Fahrer, Antalya privater Fahrer, Antalya Luxusauto mieten, Antalya Stadttransfer, Antalya Hoteltransfer, Antalya nach Kemer VIP Transfer, Antalya nach Kemer privates Auto, Antalya nach Kemer Taxi, Antalya nach Kemer Shuttle, Antalya nach Kemer Limousine, Antalya nach Kemer Minivan, Antalya nach Kemer Chauffeurservice, Antalya nach Kemer Luxus Transfer, Antalya nach Kemer Flughafen Transfer, VIP Transfer Antalya, privater Transfer Antalya, Luxus Transfer Antalya, Antalya Flughafen Transport, Antalya Flughafen Shuttle Buchung, Antalya Flughafen Transfer Preise, Antalya Flughafen Transfer Bewertungen, bester VIP Transfer Antalya, Antalya Flughafen ins Stadtzentrum, Antalya Flughafen in die Altstadt Transfer, Antalya Flughafen ins Resort Transfer, Antalya Flughafen nach Side Transfer, Antalya Flughafen nach Alanya Transfer, Antalya Flughafen nach Kemer Transfer, Antalya Flughafen nach Lara Transfer, Antalya Flughafen nach Belek Transfer, Antalya Flughafen zum Hotel Shuttle, Antalya Flughafen zum Feriendorf Transfer, Анталия аэропорт вип трансфер, Анталия аэропорт частный трансфер, Анталия аэропорт трансфер на люксовом авто, Анталия аэропорт шаттл, Анталия аэропорт трансфер в отель, Анталия аэропорт в центр города вип авто, Анталия аэропорт в Белек трансфер, Анталия аэропорт такси, Анталия аэропорт лимузин сервис, Анталия аэропорт шофер сервис, Анталия аэропорт минивэн трансфер, Анталия аэропорт семейный трансфер, Анталия аэропорт групповой трансфер, Анталия аэропорт executive трансфер, Анталия аэропорт Mercedes Vito трансфер, Анталия аэропорт Sprinter трансфер, Анталия аэропорт шаттл сервис, Анталия аэропорт встреча, Анталия вип аренда авто с водителем, Анталия частный водитель, Анталия аренда люксового авто, Анталия трансфер по городу, Анталия трансфер в отель, Анталия в Кемер вип трансфер, Анталия в Кемер частное авто, Анталия в Кемер такси, Анталия в Кемер шаттл, Анталия в Кемер лимузин, Анталия в Кемер минивэн, Анталия в Кемер шофер сервис, Анталия в Кемер люкс трансфер, Анталия в Кемер трансфер в аэропорт, вип трансфер Анталия, частный трансфер Анталия, люкс трансфер Анталия, Анталия аэропорт транспорт, Анталия аэропорт бронирование шаттла, Анталия аэропорт цены на трансфер, Анталия аэропорт отзывы о трансфере, лучший вип трансфер Анталия, Анталия аэропорт в центр города, Анталия аэропорт в старый город трансфер, Анталия аэропорт в курорт трансфер, Анталия аэропорт в Сиде трансфер, Анталия аэропорт в Аланью трансфер, Анталия аэропорт в Кемер трансфер, Анталия аэропорт в Лара трансфер, Анталия аэропорт в Белек трансфер, Анталия аэропорт в отель шаттл, Анталия аэропорт в туристическую деревню трансфер" />
      <meta property="og:title" content="URAZ VİP TRANSFER - Antalya Havalimanı VIP Transfer Hizmeti" />
      <meta property="og:description" content="Antalya Havalimanı'ndan tüm destinasyonlara VIP transfer hizmeti. Lüks araçlar, profesyonel şoförler, 7/24 hizmet." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://urazviptransfer.com/" />
      <meta property="og:image" content="/logo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="URAZ VİP TRANSFER - Antalya Havalimanı VIP Transfer Hizmeti" />
      <meta name="twitter:description" content="Antalya Havalimanı'ndan tüm destinasyonlara VIP transfer hizmeti. Lüks araçlar, profesyonel şoförler, 7/24 hizmet." />
      <meta name="twitter:image" content="/logo.jpg" />
    </Head>
    {/* Rezervasyon - Üstte tam genişlik, açılır/kapanır */}
    <div className="p-4 sm:p-6 lg:p-14 bg-black">
      <div className="max-w-4xl mx-auto">
        <button
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg transition-colors duration-200 text-lg sm:text-xl mb-4 flex items-center justify-center gap-2"
          onClick={() => setShowReservation((prev) => !prev)}
          aria-expanded={showReservation}
          aria-controls="reservation-panel"
        >
          {showReservation ? t('reservation_form_close') : t('reservation_form_open')}
          <span className={`transform transition-transform duration-300 ${showReservation ? "rotate-180" : "rotate-0"}`}>
            ▼
          </span>
        </button>
        <div
          id="reservation-panel"
          className={`overflow-hidden transition-all duration-500 ${showReservation ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <Reservation />
        </div>
      </div>
    </div>
    {/* Hero ve Cars - Alt kısım */}
    <div className="p-4 sm:p-6 lg:p-14 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div>
            <Hero />
          </div>
          <div>
            <Cars />
          </div>
        </div>
      </div>
    </div>
    {/* Transfer Bölgeleri */}
    <OurServices />
    <Cards />
   </div>
  );
}
