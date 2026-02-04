'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Lock, FileText, Users, Baby, AlertTriangle, ChevronRight, Info, Scale, ExternalLink } from 'lucide-react';

// Importaciones
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PanicButton from '@/components/PanicButton';
import FAQItem from '@/components/FAQ';
import WeatherDecoy from '@/components/WeatherDecoy';
import { TRANSLATIONS } from '@/data/translations';

// Importaciones de vistas
import Quiz from '@/components/Quiz';
import Evidence from '@/components/evidence';
import Mitos from '@/components/Mitos';
import Hombres from '@/components/Hombres';
import Children from '@/components/Children';
import Security from '@/components/Security';

export default function HomePage() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const [panicMode, setPanicMode] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const t = TRANSLATIONS[lang];

  const triggerPanic = () => {
    setPanicMode(true);
    sessionStorage.clear();
    localStorage.clear();
    document.title = "Weather Forecast - WeatherDaily";
    window.history.replaceState(null, '', '/weather');
  };

  useEffect(() => {
    document.title = 'VAWA - Protección Federal | Visa-VAWA.com';
    
    let escCount = 0;
    let escTimer: NodeJS.Timeout;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        escCount++;
        if (escCount === 1) {
          escTimer = setTimeout(() => { escCount = 0; }, 1000);
        }
        if (escCount === 2) {
          clearTimeout(escTimer);
          triggerPanic();
        }
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      if (escTimer) clearTimeout(escTimer);
    };
  }, []);

  if (panicMode) return <WeatherDecoy />;

  const handleSetLang = (newLang: string) => {
    if (newLang === 'en' || newLang === 'es') {
      setLang(newLang);
    }
  };

  const renderView = () => {
    if (currentView === 'quiz') {
      return <Quiz t={t} goHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'evidence') {
      return <Evidence t={t} goHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'myths') {
      return <Mitos t={t} goHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'men') {
      return <Hombres t={t} goHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'children') {
      return <Children t={t} goHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'security') {
      return <Security t={t} goHome={() => setCurrentView('home')} />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      
      <Header lang={lang} setLang={handleSetLang} currentView={currentView} setView={setCurrentView} t={t} />
      
      <PanicButton label={t.panic.label} tooltip={t.panic.tooltip} onPanic={triggerPanic} />

      {currentView !== 'home' ? (
        <main className="flex-grow bg-slate-50">
          {renderView()}
        </main>
      ) : (
        <>
          {/* HERO SECTION */}
          <section className="bg-[#1a365d] text-white relative overflow-hidden">
            <div className="container mx-auto px-6 py-20 md:py-24 relative z-10">
              <div className="max-w-4xl">
                
                <div className="inline-flex items-center space-x-2 text-blue-200 mb-4 font-semibold tracking-wider text-xs uppercase">
                  <Shield size={16} />
                  <span>Recurso Informativo Federal</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif tracking-tight">
                  Información Confidencial sobre <br/> Protecciones VAWA
                </h1>

                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl font-light">
                  Guías prácticas y herramientas seguras para entender sus derechos bajo la Ley de Violencia contra la Mujer, sin importar su género.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button
                    onClick={() => setCurrentView('quiz')}
                    className="inline-flex items-center justify-center bg-white text-[#1a365d] hover:bg-slate-100 font-bold py-4 px-8 rounded shadow-md transition-all text-lg"
                  >
                    <Lock size={20} className="mr-2" />
                    Verificar Elegibilidad (Anónimo)
                  </button>
                  <a
                    href="https://manuelsolis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-transparent border border-white text-white hover:bg-[#2c4a7c] font-semibold py-4 px-8 rounded transition-all text-lg"
                  >
                    Asesoría Legal
                    <ExternalLink size={20} className="ml-2" />
                  </a>
                </div>

                <div className="bg-[#2c4a7c] p-4 rounded border-l-4 border-white inline-block max-w-3xl">
                  <div className="flex items-start gap-3">
                    <Info className="text-white shrink-0 mt-1" size={20} />
                    <p className="text-sm text-white leading-relaxed">
                      <strong>Protección 8 U.S.C. § 1367:</strong> La ley federal prohíbe estrictamente a las autoridades notificar al agresor sobre cualquier petición VAWA. Su búsqueda de ayuda es confidencial.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* SECCIÓN DE NAVEGACIÓN PRINCIPAL */}
          <section className="py-20 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-6">
              
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-4">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold text-[#1a365d] mb-2 font-serif">
                    Recursos y Guías
                  </h2>
                  <p className="text-slate-600 text-lg">
                    Seleccione una categoría para acceder a información segura.
                  </p>
                </div>
              </div>

              {/* GRID */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Card 1 */}
                <button onClick={() => setCurrentView('quiz')} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-[#1a365d] transition-colors"></div>
                  <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                    <Lock size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover:underline decoration-2 underline-offset-4">
                    Quiz de Elegibilidad
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Herramienta anónima para verificar si su situación cumple con los requisitos federales para la autopetición.
                  </p>
                  <span className="text-[#1a365d] font-bold text-sm uppercase tracking-wide flex items-center">
                    Comenzar <ChevronRight size={16} className="ml-1" />
                  </span>
                </button>

                {/* Card 2 */}
                <button onClick={() => setCurrentView('evidence')} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-[#1a365d] transition-colors"></div>
                  <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                    <FileText size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover:underline decoration-2 underline-offset-4">
                    Guía de Evidencia
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Protocolos para documentar abuso sin dejar rastro digital. Plantillas de registro disfrazadas.
                  </p>
                  <span className="text-[#1a365d] font-bold text-sm uppercase tracking-wide flex items-center">
                    Leer Guía <ChevronRight size={16} className="ml-1" />
                  </span>
                </button>

                {/* Card 3 */}
                <button onClick={() => setCurrentView('myths')} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-[#1a365d] transition-colors"></div>
                  <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                    <AlertTriangle size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover:underline decoration-2 underline-offset-4">
                    Mitos y Realidades
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Información legal para desmentir amenazas de deportación y control utilizadas por agresores.
                  </p>
                  <span className="text-[#1a365d] font-bold text-sm uppercase tracking-wide flex items-center">
                    Ver Detalles <ChevronRight size={16} className="ml-1" />
                  </span>
                </button>

                {/* Card 4 */}
                <button onClick={() => setCurrentView('men')} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-[#1a365d] transition-colors"></div>
                  <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                    <Users size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover:underline decoration-2 underline-offset-4">
                    VAWA para Hombres
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    La ley es neutral en género. Información específica para hombres víctimas de abuso.
                  </p>
                  <span className="text-[#1a365d] font-bold text-sm uppercase tracking-wide flex items-center">
                    Acceder <ChevronRight size={16} className="ml-1" />
                  </span>
                </button>

                {/* Card 5 */}
                <button onClick={() => setCurrentView('children')} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-[#1a365d] transition-colors"></div>
                  <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                    <Baby size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover:underline decoration-2 underline-offset-4">
                    Protección de Menores
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Estatus derivado para hijos y protecciones familiares bajo la ley actual.
                  </p>
                  <span className="text-[#1a365d] font-bold text-sm uppercase tracking-wide flex items-center">
                    Leer Más <ChevronRight size={16} className="ml-1" />
                  </span>
                </button>

                {/* Card 6 */}
                <button onClick={() => setCurrentView('security')} className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-[#1a365d] transition-colors"></div>
                  <div className="mb-6 text-[#1a365d] group-hover:scale-110 transition-transform origin-left">
                    <Shield size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover:underline decoration-2 underline-offset-4">
                    Seguridad Digital
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Protocolos de navegación segura y limpieza de historial para proteger su privacidad.
                  </p>
                  <span className="text-[#1a365d] font-bold text-sm uppercase tracking-wide flex items-center">
                    Ver Protocolos <ChevronRight size={16} className="ml-1" />
                  </span>
                </button>

              </div>
            </div>
          </section>

          {/* SECCIÓN DE CONFIDENCIALIDAD */}
          <section className="py-20 bg-white border-b border-slate-200">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded border border-slate-200 p-10 shadow-sm relative">
                  {/* Decorativo */}
                  <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#1a365d]"></div>
                  
                  <div className="flex items-start gap-6">
                    <div className="hidden md:block bg-slate-100 p-4 rounded-full">
                      <Scale className="text-[#1a365d]" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-[#1a365d] mb-4 font-serif">
                        Marco Legal de Confidencialidad
                      </h2>
                      <p className="text-slate-500 text-sm mb-6 font-mono bg-slate-50 inline-block px-2 py-1 border border-slate-200">
                        REFERENCIA: 8 U.S.C. § 1367
                      </p>
                      
                      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p>
                          El Congreso de los Estados Unidos diseñó VAWA para permitir que las víctimas busquen estatus legal sin la cooperación, conocimiento o control de la persona abusiva.
                        </p>
                        <p>
                          Bajo la ley federal, el Servicio de Ciudadanía e Inmigración (USCIS):
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-[#1a365d]">
                          <li><strong>No puede</strong> aceptar información del agresor para denegar su caso.</li>
                          <li><strong>No puede</strong> notificar al agresor que usted ha presentado una solicitud.</li>
                          <li>Debe mantener toda la información en estricta confidencialidad.</li>
                        </ul>
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                        <Info className="text-slate-400" size={24} />
                        <p className="text-sm text-slate-500 italic">
                          La confidencialidad legal no reemplaza la seguridad digital. Asegúrese de navegar en modo incógnito si comparte dispositivos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ SECTION - Diseño Mejorado */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-2 text-[#1a365d] bg-blue-50 px-4 py-1.5 rounded-full mb-4 font-medium text-sm border border-blue-100">
                    <Info size={16} />
                    <span>Base de Conocimiento</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4 font-serif">
                    Preguntas Frecuentes
                  </h2>
                  <div className="w-20 h-1.5 bg-[#1a365d] mx-auto rounded"></div>
                  <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
                    Respuestas directas a las dudas más comunes sobre el proceso VAWA, seguridad y elegibilidad.
                  </p>
                </div>

                {/* FAQ Grid Layout para pantallas grandes */}
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {t.faq.items.map((item: any, index: number) => (
                    <div key={index} className="h-full">
                      <FAQItem q={item.q} a={item.a} />
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <p className="text-slate-500 text-sm">
                    ¿No encuentra su pregunta? <a href="https://manuelsolis.com" target="_blank" className="text-[#1a365d] font-bold underline hover:text-blue-700">Consulte a un abogado</a> para un análisis de su caso.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* EMERGENCY CONTACT */}
          <section className="py-12 bg-white border-t border-slate-200">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto border border-red-200 bg-red-50 rounded p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                <div>
                  <h2 className="text-2xl font-bold text-[#1a365d] mb-2 flex items-center gap-2">
                    <AlertTriangle className="text-red-700" size={24} />
                    Línea Nacional de Emergencia
                  </h2>
                  <p className="text-slate-700">
                    Disponible 24/7. Confidencial y seguro.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <a 
                    href="tel:911"
                    className="inline-flex items-center justify-center bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded transition-all min-w-[140px] shadow-sm"
                  >
                    Llamar 911
                  </a>
                  <a 
                    href="tel:18007997233"
                    className="inline-flex items-center justify-center bg-white border border-red-700 text-red-700 hover:bg-red-50 font-bold py-3 px-6 rounded transition-all shadow-sm"
                  >
                    1-888-676-1238
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer t={t} setView={setCurrentView} />

    </div>
  );
}