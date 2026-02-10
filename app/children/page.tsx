'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import Children from '@/components/Children';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PanicButton from '@/components/PanicButton';
import { TRANSLATIONS } from '@/data/translations';

export const metadata: Metadata = {
  title: 'VAWA y Protección de Hijos: Estatus Derivado y CSPA 2026',
  description: 'Guía sobre cómo VAWA protege a tus hijos con estatus derivado. Explicación de CSPA, beneficios (EAD, educación) y protección contra aging out. Proceso I-360 familiar.',
  keywords: [
    'VAWA hijos',
    'estatus derivado VAWA',
    'CSPA VAWA',
    'hijos VAWA',
    'derivative children',
    'VAWA family protection',
    'aging out VAWA',
  ],
  openGraph: {
    title: 'VAWA: Protección Legal para Tus Hijos',
    url: 'https://visa-vawa.com/children',
  },
  alternates: {
    canonical: 'https://visa-vawa.com/children',
  },
};

export default function ChildrenPage() {
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
      <Header lang={lang} setLang={(l: string) => setLang(l as 'en' | 'es')} currentView="children" setView={() => {}} t={t} />
      <PanicButton label={t.panic.label} tooltip={t.panic.tooltip} onPanic={triggerPanic} />
      <Children t={t} goHome={goHome} />
      <Footer t={t} setView={() => {}} />
    </div>
  );
}
