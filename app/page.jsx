import Image from "next/image";
import Hero from "./components/hero/page";
import Cards from "./components/cards/page";
import Reservation from "./components/reservation/page";
import Cars from "./components/cars/page";


export default function Home() {
  return (
   <div className="bg-black">
    {/* Rezervasyon - Üstte tam genişlik */}
    <div className="p-4 sm:p-6 lg:p-14 bg-black">
      <div className="max-w-4xl mx-auto">
        <Reservation />
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
    <div className="p-4 sm:p-6 lg:p-14 bg-black">
      <Cards /> 
    </div>
   </div>
  );
}
