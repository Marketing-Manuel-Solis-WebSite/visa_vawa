import React, { useState } from 'react';
import { Globe, Menu, X, FileText, AlertTriangle, Users, Baby, Lock } from 'lucide-react';

interface HeaderProps {
  lang: string;
  setLang: (lang: string) => void;
  currentView: string;
  setView: (view: string) => void;
  t: any;
}

export default function Header({ lang, setLang, currentView, setView, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper interno para los links
  const NavLink = ({ target, label, icon: Icon }: { target: string; label: string; icon: any }) => (
    <button 
      onClick={() => { setView(target); setMobileMenuOpen(false); }}
      className={`flex items-center space-x-2 py-2 px-3 rounded transition-colors font-medium ${
        currentView === target ? 'text-[#1a365d] bg-slate-100 border-b-2 border-[#1a365d]' : 'text-slate-600 hover:text-[#1a365d] hover:bg-slate-50'
      }`}
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </button>
  );

  return (
    <>
      {/* 1. US GOVERNMENT BANNER STYLE */}
      <div className="bg-[#f0f0f0] border-b border-slate-300 py-1 px-4 text-xs flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Bandera USA Placeholder */}
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="US Flag" className="h-3 w-5 shadow-sm" />
          <span className="text-slate-600 font-medium">Recurso informativo no oficial estilo gubernamental</span>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="font-bold text-[#1a365d] hover:underline flex items-center space-x-1"
          >
            <Globe size={12} />
            <span>{lang === 'en' ? 'Español' : 'English'}</span>
          </button>
        </div>
      </div>

      {/* 2. HEADER MAIN */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo Area */}
          <div 
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => setView('home')}
          >
            {/* LOGO IMAGE PLACEHOLDER */}
            <img 
              src="https://via.placeholder.com/60x60/1a365d/ffffff?text=VAWA" 
              alt="Visa VAWA Logo" 
              className="h-12 w-12 rounded shadow-sm object-cover"
            />
            
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold tracking-tight text-[#1a365d] leading-none font-serif">
                VISA-VAWA
              </h1>
              <div className="w-full h-0.5 bg-[#1a365d] my-1 opacity-20"></div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                Protección Federal & Ayuda Legal
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-2">
            <NavLink target="evidence" label={t.nav.evidence} icon={FileText} />
            <NavLink target="myths" label={t.nav.myths} icon={AlertTriangle} />
            <NavLink target="men" label={t.nav.men} icon={Users} />
            <NavLink target="children" label={t.nav.children} icon={Baby} />
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-[#1a365d]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 p-4 space-y-2 shadow-lg absolute w-full z-50">
            <NavLink target="evidence" label={t.nav.evidence} icon={FileText} />
            <NavLink target="myths" label={t.nav.myths} icon={AlertTriangle} />
            <NavLink target="men" label={t.nav.men} icon={Users} />
            <NavLink target="children" label={t.nav.children} icon={Baby} />
            <button 
              onClick={() => { setView('quiz'); setMobileMenuOpen(false); }}
              className="w-full text-left py-3 px-4 text-white font-bold bg-[#1a365d] rounded flex items-center space-x-2 mt-4 shadow-md"
            >
              <Lock size={18} />
              <span>{t.nav.quiz}</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
}