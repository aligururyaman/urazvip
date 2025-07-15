"use client"
import React, { useState, useEffect } from 'react'

const HamburgerIcon = ({ open }) => (
  <div className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer md:hidden">
    <span className={`block h-1 w-7 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span className={`block h-1 w-7 bg-white rounded my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
    <span className={`block h-1 w-7 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initial theme from localStorage or system
    const getInitialTheme = () => {
      if (typeof window === "undefined") return "light";
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    };
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, mounted]);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  if (!mounted) return null;

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-xl shadow-yellow-500/50 py-3 sm:py-4 px-4 sm:px-6 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-['Montserrat'] cursor-pointer hover:text-gray-200 transition-colors duration-200">
          <a href="/">URAZ VİP TRANSFER</a>
        </div>
        {/* Menü ve tema butonu ve WhatsApp */}
        <div className="flex items-center gap-2">
          {/* Hamburger icon (mobile) */}
          <div className="md:hidden">
            <button onClick={handleMenuToggle} aria-label="Menüyü Aç/Kapat" className="focus:outline-none">
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
          {/* Masaüstü menü */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            <li>
              <a href="/araclar" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-base lg:text-lg">Araçlarımız</a>
            </li>
            <li>
              <a href="/rezervasyon" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-base lg:text-lg">Rezervasyon</a>
            </li>
            <li>
              <a href="/iletisim" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-base lg:text-lg">İletişim</a>
            </li>
            <li>
              <a href="/hakkimizda" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-base lg:text-lg">Hakkımızda</a>
            </li>
          </ul>
          {/* WhatsApp Button - sağda */}
          <a
            href="https://wa.me/+905439430719"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile iletişime geç"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-colors duration-200 shadow-lg ml-2"
          >
            <svg viewBox="0 0 32 32" fill="currentColor" width="22" height="22" className="text-white">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.36 7.11L4 29l7.13-2.33A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.56-1.5l-.4-.23-4.23 1.38 1.38-4.13-.26-.42A9.97 9.97 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3s.99 2.67 1.13 2.85c.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
            </svg>
            <span className="hidden sm:inline font-semibold text-white">7/24 WhatsApp</span>
          </a>
        </div>
      </div>
      
      {/* Mobil Menü - Fixed pozisyon ile en üstte */}
      {menuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-black/50 z-50 md:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-xl">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center mb-4">
                <div className="text-xl font-extrabold text-white">Menü</div>
                <button onClick={() => setMenuOpen(false)} className="text-white text-2xl font-bold">
                  ×
                </button>
              </div>
              <ul className="flex flex-col space-y-4 pb-4">
                <li>
                  <a href="/araclar" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-lg block py-2" onClick={() => setMenuOpen(false)}>Araçlarımız</a>
                </li>
                <li>
                  <a href="/rezervasyon" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-lg block py-2" onClick={() => setMenuOpen(false)}>Rezervasyon</a>
                </li>
                <li>
                  <a href="/iletisim" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-lg block py-2" onClick={() => setMenuOpen(false)}>İletişim</a>
                </li>
                <li>
                  <a href="/hakkimizda" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-lg block py-2" onClick={() => setMenuOpen(false)}>Hakkımızda</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar