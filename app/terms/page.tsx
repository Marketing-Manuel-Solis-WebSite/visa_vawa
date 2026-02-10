'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import Legal from '@/components/Legal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PanicButton from '@/components/PanicButton';
import { TRANSLATIONS } from '@/data/translations';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso | VISA-VAWA',
  description: 'Términos de uso de VISA-VAWA. Información legal educativa, limitación de responsabilidad y aviso de seguridad para usuarios.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const [panicMode, setPanicMode] = useState(false);
  const t = TRANSLATIONS[lang];

  const triggerPanic = () => {
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
      <Header lang={lang} setLang={(l: string) => setLang(l as 'en' | 'es')} currentView="terms" setView={() => {}} t={t} />
      <PanicButton label={t.panic.label} tooltip={t.panic.tooltip} onPanic={triggerPanic} />
      <Legal type="terms" goHome={goHome} />
      <Footer t={t} setView={() => {}} />
    </div>
  );
}
