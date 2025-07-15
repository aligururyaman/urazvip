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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Araçlarımız
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Lüks ve konforu bir araya getiren premium araç filomuzla hizmetinizdeyiz
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
                      {vehicle.name} <span className="text-[#FFD700]">VIP</span>
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
            Detaylı bilgi için araçlarımızdan birini seçin
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 