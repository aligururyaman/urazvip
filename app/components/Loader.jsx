import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <Image src="/logo/logo2.png" alt="Logo" width={240} height={240} className="mb-8" />
      <div className="flex items-center space-x-2">
        <span className="w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: '#bb9840' }}></span>
        <span className="w-4 h-4 rounded-full animate-bounce delay-150" style={{ backgroundColor: '#bb9840' }}></span>
        <span className="w-4 h-4 rounded-full animate-bounce delay-300" style={{ backgroundColor: '#bb9840' }}></span>
      </div>
      <span className="mt-4 font-semibold text-lg" style={{ color: '#bb9840' }}>Yükleniyor...</span>
    </div>
  );
} 