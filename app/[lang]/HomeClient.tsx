'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Lock, FileText, Users, Baby, AlertTriangle, ChevronRight, Info, Scale, ExternalLink, EyeOff, FileCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PanicButton from '@/components/PanicButton';
import FAQItem from '@/components/FAQ';
import WeatherDecoy from '@/components/WeatherDecoy';

interface HomeClientProps {
  lang: string;
  t: any; // Traducciones
}

export default function HomeClient({ lang, t }: HomeClientProps) {
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
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      
      {/* Pasamos lang y t al Header */}
      <Header lang={lang} t={t} />
      
      <PanicButton label={t.panic.label} tooltip={t.panic.tooltip} onPanic={triggerPanic} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-[#1a365d] text-white relative overflow-hidden">
          <div className="container mx-auto px-6 py-20 md:py-24 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 text-blue-200 mb-4 font-semibold tracking-wider text-xs uppercase">
                <Shield size={16} />
                <span>Recurso Informativo Federal</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl font-light">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                {/* Nota: Actualizamos los Links para incluir el idioma */}
                <Link
                  href={`/${lang}/quiz`}
                  className="inline-flex items-center justify-center bg-white text-[#1a365d] hover:bg-slate-100 font-bold py-4 px-8 rounded shadow-md transition-all text-lg"
                >
                  <Lock size={20} className="mr-2" />
                  {t.hero.cta_primary}
                </Link>
                <a
                  href="https://manuelsolis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-transparent border border-white text-white hover:bg-[#2c4a7c] font-semibold py-4 px-8 rounded transition-all text-lg"
                >
                  {t.hero.cta_secondary}
                  <ExternalLink size={20} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN DE NAVEGACIÓN */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <Link href={`/${lang}/quiz`} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                  <Lock size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-xl font-bold text-[#1a365d] mb-3">{t.cards.quiz_title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{t.cards.quiz_desc}</p>
              </Link>

              <Link href={`/${lang}/evidence`} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                  <FileText size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-xl font-bold text-[#1a365d] mb-3">{t.cards.evidence_title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{t.cards.evidence_desc}</p>
              </Link>

              <Link href={`/${lang}/men`} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                  <Users size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-xl font-bold text-[#1a365d] mb-3">{t.cards.men_title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{t.cards.men_desc}</p>
              </Link>

               <Link href={`/${lang}/myths`} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                  <AlertTriangle size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-xl font-bold text-[#1a365d] mb-3">{t.cards.myths_title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{t.cards.myths_desc}</p>
              </Link>

               <Link href={`/${lang}/children`} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                  <Baby size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-xl font-bold text-[#1a365d] mb-3">{t.cards.children_title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{t.cards.children_desc}</p>
              </Link>

               <Link href={`/${lang}/security`} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                  <Shield size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-xl font-bold text-[#1a365d] mb-3">{t.cards.security_title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{t.cards.security_desc}</p>
              </Link>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">{t.faq.title}</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              {t.faq.items.map((item: any, index: number) => (
                <div key={index} className="h-full">
                  <FAQItem q={item.q} a={item.a} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} setView={() => {}} />
    </div>
  );
}