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
        {/* Menü ve tema butonu */}
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