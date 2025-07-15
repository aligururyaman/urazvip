"use client";
import Link from "next/link";
import { useI18n } from '../../lib/i18nContext';
import Head from 'next/head';

export default function AraclarPage() {
  const { t } = useI18n();

  const vehicles = [
    {
      name: t('vito_name'),
      image: "/vitotanitim.jpg",
      description: t('vito_description'),
      link: "/araclar/vito",
      button: t('vito_button')
    },
    {
      name: t('sprinter_name'),
      image: "/sprinter-tanitim.jpg",
      description: t('sprinter_description'),
      link: "/araclar/sprinter",
      button: t('sprinter_button')
    },
    {
      name: t('crafter_name'),
      image: "/vvtanitim.jpg",
      description: t('crafter_description'),
      link: "/araclar/crafter",
      button: t('crafter_button')
    }
  ];

  return (
    <>
      <Head>
        <title>Araç Filomuz | URAZ VİP TRANSFER</title>
        <meta name="description" content="URAZ VİP TRANSFER araç filosu: Mercedes Vito, Sprinter, Crafter ve daha fazlası. Lüks ve konforlu transfer araçlarımızı inceleyin." />
        <meta name="keywords" content="Araçlar, araç filosu, Mercedes Vito, Sprinter, Crafter, lüks araç, transfer aracı" />
        <meta property="og:title" content="Araç Filomuz | URAZ VİP TRANSFER" />
        <meta property="og:description" content="URAZ VİP TRANSFER araç filosu: Mercedes Vito, Sprinter, Crafter ve daha fazlası. Lüks ve konforlu transfer araçlarımızı inceleyin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urazvip.com/araclar" />
        <meta property="og:image" content="/logo.jpg" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Header Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
              {t('vehicles_title')}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              {t('vehicles_subtitle')}
            </p>
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <div
                key={vehicle.name}
                className="relative group transition-all duration-500 hover:scale-105"
              >
                {/* Vehicle Card */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-[#FFD700]/50 transition-all duration-300"
                     style={{ 
                       boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.1)',
                       minHeight: '400px',
                       height: 'clamp(400px, 60vh, 600px)'
                     }}>
                  

                  {/* Vehicle Image */}
                  <Link href={vehicle.link} className="block h-full">
                    <div className="relative h-full w-full overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>

                  {/* Info Card */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-sm border-t border-[#FFD700]/30 p-4 sm:p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="space-y-3 sm:space-y-4">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                        {vehicle.name} <span className="text-[#FFD700]">{t('vip_label')}</span>
                      </h2>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {vehicle.description}
                      </p>
                      <Link 
                        href={vehicle.link} 
                        className="inline-block bg-gradient-to-r from-[#FFD700] to-[#FFC300] hover:from-[#FFC300] hover:to-[#FFD700] text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/25 transform hover:-translate-y-1"
                      >
                        {vehicle.button}
                      </Link>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              {t('vehicles_cta_text')}
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 