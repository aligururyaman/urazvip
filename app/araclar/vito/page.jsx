"use client";
import React from "react";
import Link from "next/link";

export default function VitoDetayPage() {
  const ozellikler = [
    "8+1 yolcu kapasitesi",
    "Deri koltuk",
    "USB şarj girişleri",
    "Klima ve dijital kontrol paneli",
    "Geniş bagaj hacmi",
    "Elektrikli kapılar",
    "LED aydınlatma sistemi",
    "Premium ses sistemi"
  ];

  return (
    <div className="min-h-screen bg-black p-10">
      <div className="mb-6">
        <Link href="/araclar" className="inline-block bg-[#FFD700] hover:bg-[#FFC300] text-black font-bold py-2 px-6 rounded-xl shadow-lg transition-all duration-300">
          ← Araçlara Geri Dön
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Mercedes Vito VIP</h1>
      <p className="text-center text-white max-w-2xl mx-auto mb-10">
        Konfor, şıklık ve güvenliği bir araya getiren Mercedes Vito VIP aracımız, transfer hizmetlerinde üst düzey bir yolculuk deneyimi sunar.
        Geniş iç hacmi, zarif tasarımı ve teknolojik donanımlarıyla, hem iş hem özel seyahatlerinizde kusursuz bir sürüş keyfi yaşatır.
      </p>
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Özellikler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ozellikler.map((ozellik, i) => (
            <div key={i} className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors duration-300">
              <div className="text-white text-sm font-medium leading-relaxed">{ozellik}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1,2,3,4,5,6].map(num => (
          <img
            key={num}
            src={`/vito/vito${num}.jpg`}
            alt={`Vito ${num}`}
            className="rounded-xl w-full h-[520px] object-cover border-2 border-gray-800 shadow-[0_8px_40px_8px_rgba(255,191,0,0.25)] transition-transform duration-300 hover:scale-105"
            onError={e => { e.target.style.display = 'none'; }}
          />
        ))}
      </div>
    </div>
  );
} 