'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import Security from '@/components/Security';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PanicButton from '@/components/PanicButton';
import { TRANSLATIONS } from '@/data/translations';

export const metadata: Metadata = {
  title: 'Seguridad Digital VAWA: Navegación Segura y Privacidad Online',
  description: 'Protocolos de seguridad para navegar sin dejar rastro. Detección de stalkerware, modo incógnito, VPN y limpieza de historial para víctimas de violencia doméstica.',
  keywords: [
    'seguridad digital VAWA',
    'navegar seguro',
    'stalkerware',
    'modo incógnito',
    'borrar historial',
    'privacidad online abuso',
    'spyware detección',
  ],
  openGraph: {
    title: 'Guía de Seguridad Digital para Sobrevivientes',
    url: 'https://visa-vawa.com/security',
  },
  alternates: {
    canonical: 'https://visa-vawa.com/security',
  },
};

export default function SecurityPage() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const [panicMode, setPanicMode] = useState(false);
  const t = TRANSLATIONS[lang];

  const triggerPanic = () => {
    setPanicMode(true);
    if (typeof window !== 'undefined') {
      window.location.href = '/weather';
    }
  };

  const goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header lang={lang} setLang={(l: string) => setLang(l as 'en' | 'es')} currentView="security" setView={() => {}} t={t} />
      <PanicButton label={t.panic.label} tooltip={t.panic.tooltip} onPanic={triggerPanic} />
      <Security t={t} goHome={goHome} />
      <Footer t={t} setView={() => {}} />
    </div>
  );
}
