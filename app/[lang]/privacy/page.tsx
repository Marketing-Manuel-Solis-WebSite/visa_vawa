'use client';

import React, { useState } from 'react';
import { TRANSLATIONS } from '@/data/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PanicButton from '@/components/PanicButton';
import Legal from '@/components/Legal'; 
import WeatherDecoy from '@/components/WeatherDecoy';

export default function PrivacyClient() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const [panicMode, setPanicMode] = useState(false);
  
  const t = TRANSLATIONS[lang];

  const triggerPanic = () => {
    setPanicMode(true);
    if (typeof window !== 'undefined') {
        sessionStorage.clear();
        localStorage.clear();
        document.title = "Weather Forecast - WeatherDaily";
        window.history.replaceState(null, '', '/weather');
    }
  };

  const goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  if (panicMode) return <WeatherDecoy />;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header 
        lang={lang} 
        setLang={(l: string) => setLang(l as 'en' | 'es')} 
        currentView="privacy" 
        setView={() => {}} 
        t={t} 
      />
      
      <PanicButton 
        label={t.panic.label} 
        tooltip={t.panic.tooltip} 
        onPanic={triggerPanic} 
      />

      {/* Usamos el componente Legal reutilizable */}
      <main className="flex-grow">
        <Legal type="privacy" goHome={goHome} />
      </main>

      <Footer t={t} setView={() => {}} />
    </div>
  );
}