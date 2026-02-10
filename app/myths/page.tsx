'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import Mitos from '@/components/Mitos';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PanicButton from '@/components/PanicButton';
import { TRANSLATIONS } from '@/data/translations';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mitos y Realidades sobre VAWA: Desmintiendo Amenazas de Agresores',
  description: 'Verdades legales sobre VAWA vs. mentiras comunes que usan agresores para mantener control. Información sobre deportación, policía, divorcios y más con referencias legales.',
  keywords: [
    'mitos VAWA',
    'mentiras agresores VAWA',
    'deportación VAWA',
    'VAWA y policía',
    'divorcio VAWA',
    'amenazas inmigración',
    'verdades legales VAWA',
  ],
  openGraph: {
    title: 'Mitos VAWA: La Verdad Legal vs. Amenazas de Control',
    url: 'https://visa-vawa.com/myths',
  },
  alternates: {
    canonical: 'https://visa-vawa.com/myths',
  },
};

export default function MythsPage() {
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
      <Header lang={lang} setLang={(l: string) => setLang(l as 'en' | 'es')} currentView="myths" setView={() => {}} t={t} />
      <PanicButton label={t.panic.label} tooltip={t.panic.tooltip} onPanic={triggerPanic} />
      <Mitos t={t} goHome={goHome} />
      <Footer t={t} setView={() => {}} />
    </div>
  );
}
