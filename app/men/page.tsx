'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import Hombres from '@/components/Hombres';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PanicButton from '@/components/PanicButton';
import { TRANSLATIONS } from '@/data/translations';

export const metadata: Metadata = {
  title: 'VAWA para Hombres: Protección Federal Neutral en Género 2026',
  description: 'Guía completa sobre derechos VAWA para hombres víctimas de violencia doméstica. La ley es neutral en género. Requisitos, evidencia y proceso I-360 para sobrevivientes masculinos.',
  keywords: [
    'VAWA para hombres',
    'hombres víctimas violencia doméstica',
    'VAWA neutral género',
    'esposos abusados',
    'padres VAWA',
    'hombres autopetición',
    'men VAWA rights',
  ],
  openGraph: {
    title: 'VAWA para Hombres: Derechos Iguales Bajo la Ley Federal',
    url: 'https://visa-vawa.com/men',
  },
  alternates: {
    canonical: 'https://visa-vawa.com/men',
  },
};

export default function MenPage() {
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
      <Header lang={lang} setLang={(l: string) => setLang(l as 'en' | 'es')} currentView="men" setView={() => {}} t={t} />
      <PanicButton label={t.panic.label} tooltip={t.panic.tooltip} onPanic={triggerPanic} />
      <Hombres t={t} goHome={goHome} />
      <Footer t={t} setView={() => {}} />
    </div>
  );
}
