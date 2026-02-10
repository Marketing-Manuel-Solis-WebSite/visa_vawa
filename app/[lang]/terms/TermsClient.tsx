'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PanicButton from '../../../components/PanicButton';
import Legal from '../../../components/Legal';
import WeatherDecoy from '../../../components/WeatherDecoy';

interface TermsClientProps {
  lang: string;
  t: any;
}

export default function TermsClient({ lang, t }: TermsClientProps) {
  const [panicMode, setPanicMode] = useState(false);
  
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
      window.location.href = `/${lang}`;
    }
  };

  // Manejo de tecla ESC para pánico
  useEffect(() => {
    let escCount = 0;
    let escTimer: NodeJS.Timeout;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        escCount++;
        if (escCount === 1) escTimer = setTimeout(() => { escCount = 0; }, 1000);
        if (escCount === 2) { clearTimeout(escTimer); triggerPanic(); }
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      if (escTimer) clearTimeout(escTimer);
    };
  }, []);

  if (panicMode) return <WeatherDecoy />;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header 
        lang={lang} 
        t={t} 
      />
      
      <PanicButton 
        label={t.panic.label} 
        tooltip={t.panic.tooltip} 
        onPanic={triggerPanic} 
      />

      {/* El componente Legal maneja el contenido específico de términos */}
      <main className="flex-grow">
        <Legal type="terms" goHome={goHome} />
      </main>

      <Footer t={t} setView={() => {}} />
    </div>
  );
}