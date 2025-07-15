"use client"
import React, { useState, useEffect } from 'react';
import AnimatedTestimonials from '../ui/animated-testimonials';
import { useI18n } from '../../../lib/i18nContext';

const Cars = () => {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const vipVehicles = [
    {
      name: t('vito_name'),
      designation: t('vito_home_designation'),
      quote: t('vito_home_quote'),
      image: "/vito.jpg",
      src: "/vito.jpg"
    },
    {
      name: t('sprinter_name'),
      designation: t('sprinter_home_designation'),
      quote: t('sprinter_home_quote'),
      image: "/sprinter.jpg",
      src: "/sprinter.jpg"
    },
    {
      name: t('crafter_name'),
      designation: t('crafter_home_designation'),
      quote: t('crafter_home_quote'),
      image: "/crafter.jpg",
      src: "/crafter.jpg"
    }
  ];

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            VIP Araç Filosu
          </h2>
          <p className="text-gray-300">
            Lüks ve konforun mükemmel uyumu
          </p>
        </div>
        <AnimatedTestimonials testimonials={[
          {
            name: "Mercedes Vito",
            designation: "9+1 Kişilik | Konforlu VIP Minivan",
            quote: "Mercedes Vito, 9+1 kişilik kapasitesiyle küçük gruplar ve aileler için ideal. Geniş iç hacmi, konforlu koltukları ve lüks donanımıyla şehir içi ve havalimanı transferlerinde üst düzey rahatlık sunar.",
            image: "/vito.jpg",
            src: "/vito.jpg"
          },
          {
            name: "Mercedes Sprinter",
            designation: "Orta: 10+1 | Ekstra Uzun: 18+1 Kişilik",
            quote: "Mercedes Sprinter, orta ve ekstra uzun versiyonlarıyla kalabalık gruplar için mükemmel bir seçimdir. Geniş bagaj hacmi, ferah iç mekan ve yüksek yolcu kapasitesiyle konforlu yolculuklar sağlar.",
            image: "/sprinter.jpg",
            src: "/sprinter.jpg"
          },
          {
            name: "Volkswagen Crafter",
            designation: "18+1 veya 20+1 Kişilik | Büyük Grup Minibüsü",
            quote: "Volkswagen Crafter, 18+1 ve 20+1 kişilik seçenekleriyle büyük gruplar için idealdir. Modern tasarımı, geniş iç hacmi ve güvenlik donanımlarıyla uzun yolculuklarda konfor ve güven sunar.",
            image: "/crafter.jpg",
            src: "/crafter.jpg"
          }
        ]} />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          {t('vip_fleet_title')}
        </h2>
        <p className="text-gray-300">
          {t('vip_fleet_subtitle')}
        </p>
      </div>
      <AnimatedTestimonials testimonials={vipVehicles} />
    </div>
  );
};

export default Cars; 