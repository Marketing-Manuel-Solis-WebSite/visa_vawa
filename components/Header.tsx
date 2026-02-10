'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X, Lock } from 'lucide-react';

interface HeaderProps {
  lang: string;
  t: any; // Objeto de traducciones
}

export default function Header({ lang, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Función para cambiar de idioma manteniendo la ruta actual
  const getSwitchLangUrl = () => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = lang === 'en' ? 'es' : 'en';
    return segments.join('/');
  };

  // Helper para links de navegación
  const NavLink = ({ target, label }: { target: string; label: string }) => {
    // Verificar si la ruta actual coincide (simple check)
    const isActive = pathname?.includes(target);
    
    return (
      <Link 
        href={`/${lang}/${target === 'home' ? '' : target}`}
        className={`flex items-center py-2 px-4 rounded transition-colors font-medium ${
          isActive 
            ? 'text-[#1a365d] bg-slate-100 border-b-2 border-[#1a365d]' 
            : 'text-slate-600 hover:text-[#1a365d] hover:bg-slate-50'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Banner Superior */}
      <div className="bg-[#f0f0f0] border-b border-slate-300 py-1 px-4 text-xs flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-slate-600 font-medium">Recurso informativo</span>
        </div>
        <div className="flex space-x-4">
          <Link 
            href={getSwitchLangUrl()}
            className="font-bold text-[#1a365d] hover:underline flex items-center space-x-1"
          >
            <Globe size={12} />
            <span>{lang === 'en' ? 'Español' : 'English'}</span>
          </Link>
        </div>
      </div>

      {/* Header Principal */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          <Link href={`/${lang}`} className="flex items-center space-x-4 cursor-pointer">
            <Image 
              src="/visa_ms.png" 
              alt="Visa VAWA Logo" 
              width={56}
              height={56}
              priority
              className="object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold tracking-tight text-[#1a365d] leading-none font-serif">
                VISA-VAWA
              </h1>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex space-x-4">
            <NavLink target="evidence" label={t.nav.evidence} />
            <NavLink target="myths" label={t.nav.myths} />
            <NavLink target="men" label={t.nav.men} />
            <NavLink target="children" label={t.nav.children} />
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-[#1a365d]" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Menú Móvil */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 p-4 space-y-2 shadow-lg absolute w-full z-50">
            <NavLink target="evidence" label={t.nav.evidence} />
            <NavLink target="myths" label={t.nav.myths} />
            <NavLink target="men" label={t.nav.men} />
            <NavLink target="children" label={t.nav.children} />
            <Link 
              href={`/${lang}/quiz`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-3 px-4 text-white font-bold bg-[#1a365d] rounded flex items-center space-x-2 mt-4 shadow-md"
            >
              <Lock size={18} />
              <span>{t.nav.quiz}</span>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}