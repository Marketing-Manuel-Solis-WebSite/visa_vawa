import React, { useState } from 'react';
import { Shield, Globe, Menu, X, FileText, AlertTriangle, Users, Baby, Lock } from 'lucide-react';

interface HeaderProps {
  lang: string;
  setLang: (lang: string) => void;
  currentView: string;
  setView: (view: string) => void;
  t: any; // En producción, idealmente importarías el tipo Translation
}

export default function Header({ lang, setLang, currentView, setView, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper interno para los links
  const NavLink = ({ target, label, icon: Icon }: { target: string; label: string; icon: any }) => (
    <button 
      onClick={() => { setView(target); setMobileMenuOpen(false); }}
      className={`flex items-center space-x-2 py-2 px-3 rounded transition-colors ${
        currentView === target ? 'text-blue-700 font-bold bg-blue-50' : 'text-slate-600 hover:text-blue-700'
      }`}
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </button>
  );

  return (
    <>
      {/* 1. US GOVERNMENT BANNER STYLE */}
      <div className="bg-slate-100 border-b border-slate-300 py-1 px-4 text-xs flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Nota: En un proyecto real, usa <Image /> de Next.js para la bandera */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png" alt="US Flag" className="h-3 w-5" />
          <span className="text-slate-600">An official-style informational resource</span>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="font-bold text-blue-800 hover:underline flex items-center space-x-1"
          >
            <Globe size={12} />
            <span>{lang === 'en' ? 'Español' : 'English'}</span>
          </button>
        </div>
      </div>

      {/* 2. HEADER MAIN */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo Area */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setView('home')}
          >
            <div className="bg-blue-900 text-white p-2 rounded-lg">
              <Shield size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">VISA-VAWA</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">DOMESTIC VIOLENCE RELIEF</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-1">
            <NavLink target="evidence" label={t.nav.evidence} icon={FileText} />
            <NavLink target="myths" label={t.nav.myths} icon={AlertTriangle} />
            <NavLink target="men" label={t.nav.men} icon={Users} />
            <NavLink target="children" label={t.nav.children} icon={Baby} />
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t p-4 space-y-2 shadow-lg">
            <NavLink target="evidence" label={t.nav.evidence} icon={FileText} />
            <NavLink target="myths" label={t.nav.myths} icon={AlertTriangle} />
            <NavLink target="men" label={t.nav.men} icon={Users} />
            <NavLink target="children" label={t.nav.children} icon={Baby} />
            <button 
              onClick={() => { setView('quiz'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 text-blue-700 font-bold bg-blue-50 rounded flex items-center space-x-2"
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