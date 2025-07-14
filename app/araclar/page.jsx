"use client";
import Link from "next/link";

const vehicles = [
  {
    name: "Mercedes Vito",
    image: "/vitotanitim.jpg",
    description: "Geniş iç hacim, deri koltuklar, LED aydınlatma.",
    link: "/araclar/vito",
    button: "Vito Detayları"
  },
  {
    name: "Mercedes Sprinter",
    image: "/sprinter-tanitim.jpg",
    description: "Yüksek kapasite, konforlu seyahat, güvenli sürüş.",
    link: "/araclar/sprinter",
    button: "Sprinter Detayları"
  },
  {
    name: "Volkswagen Crafter",
    image: "/vvtanitim.jpg",
    description: "Büyük kapasite, dayanıklı yapı, ekonomik yakıt.",
    link: "/araclar/crafter",
    button: "Crafter Detayları"
  }
];

export default function AraclarPage() {
  return (
    <div className="min-h-screen bg-black p-16">
      {/* Geri Butonu */}
      <div className="flex justify-start mb-6">
        <Link href="/" className="inline-block bg-[#FFD700] hover:bg-[#FFC300] text-black font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 border-2 border-[#FFD700] hover:scale-105">
          ← Anasayfa
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-12 text-center text-white">Araçlarımız</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {vehicles.map((v) => (
          <div
            key={v.name}
            className="relative w-full shadow-2xl group transition-transform duration-300 rounded-xl overflow-hidden bg-black"
            style={{ boxShadow: '0 8px 32px 0 #FFD70055', height: 'calc(100vh - 133px - 3cm)' }}
          >
            {/* Model Başlığı */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 px-6 py-2 rounded-xl border border-[#FFD700] text-white text-lg font-bold z-30 shadow-lg">
              {v.name}
            </div>
            {/* Araç Görseli */}
            <Link href={v.link} className="block h-full">
              <img
                src={v.image}
                alt={v.name}
                className="rounded-xl w-full h-full object-contain bg-black shadow-lg cursor-pointer group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            {/* Alt Kart */}
            <div className="absolute -bottom-20 left-4 right-4 bg-black/90 backdrop-blur-lg border border-[#FFD700] rounded-xl p-4 shadow-xl text-white z-20">
              <h2 className="text-xl font-bold">{v.name} VIP</h2>
              <p className="text-gray-300 mt-2 text-sm">{v.description}</p>
              <Link href={v.link} className="mt-3 bg-[#FFD700] hover:bg-[#FFC300] text-black font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                {v.button}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 