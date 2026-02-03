"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Sayfa değiştiğinde veya linke tıklandığında menüyü kapat
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Menü açıkken arka planın kaymasını engelle (UX iyileştirmesi)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { path: '/kurumsal', label: 'Kurumsal' },
    { path: '/hizmetler', label: 'Hizmetlerimiz' },
    { path: '/surdurulebilirlik', label: 'Sürdürülebilirlik' },
    { path: '/teknoloji', label: 'Teknoloji & Ar-Ge' },
  ];

  // Logo ve metinleri büyütülmüş bileşen
  const LogoComponent = () => (
    <Link 
      href="/" 
      className={`flex items-center gap-3 transition-opacity duration-300 ${
        isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
         <span className="text-white font-bold text-xl">BK</span>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-2xl font-bold text-primary tracking-tight">
          Bilal Kılıç
        </span>
        <span className="text-base font-semibold text-accent uppercase tracking-wider">
          Enerji
        </span>
      </div>
    </Link>
  );

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-neutral-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <LogoComponent />

        {/* Masaüstü Menü */}
        <div className="hidden md:flex gap-8 text-sm font-bold text-neutral-800">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className="hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/iletisim" 
            className="hidden sm:block px-7 py-3 bg-primary text-white text-sm font-bold rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 active:scale-95"
          >
            Bize Ulaşın
          </Link>

          {/* Mobil Menü Butonu (Hamburger) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className={`p-2 text-primary transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
              aria-label="Menüyü Aç"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* --- KAYDIRILABİLİR (SCROLL) BUZLU CAM MOBİL PANEL --- */}
      <div
        className={`fixed inset-0 h-screen w-full bg-white/95 backdrop-blur-2xl z-[60] transform transition-transform duration-500 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Panel Üst Kısmı (Sadece Kapatma Butonu) */}
        <div className="flex justify-end items-center p-6 h-24">
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 text-primary hover:rotate-90 transition-transform duration-300"
            aria-label="Menüyü Kapat"
          >
            <X size={40} />
          </button>
        </div>
        
        {/* Menü İçeriği: Çok zoom yapıldığında dikeyde kaydırılabilir */}
        <nav className="flex flex-col items-center py-12 space-y-10 min-h-[calc(100vh-96px)]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-3xl font-extrabold tracking-tight transition-all duration-300 px-8 py-3 rounded-2xl ${
                pathname === link.path 
                  ? 'text-accent bg-accent/10 scale-110' 
                  : 'text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <Link
            href="/iletisim"
            className="bg-primary text-white font-bold text-xl px-14 py-5 rounded-full mt-6 shadow-2xl shadow-primary/30 active:scale-95 transition-all"
          >
            Bize Ulaşın
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
