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
    <nav className="bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-xl shadow-yellow-500/50 py-3 sm:py-4 px-4 sm:px-6">
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
        {/* Menü (mobile) */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex flex-col items-center space-y-3 py-4 z-50 md:hidden animate-fade-in">
            <li>
              <a href="/rezervasyon" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-base" onClick={() => setMenuOpen(false)}>Rezervasyon</a>
            </li>
            <li>
              <a href="/iletisim" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-base" onClick={() => setMenuOpen(false)}>İletişim</a>
            </li>
            <li>
              <a href="/hakkimizda" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-base" onClick={() => setMenuOpen(false)}>Hakkımızda</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar