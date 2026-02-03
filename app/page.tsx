'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Lock, FileText, Users, Baby, AlertTriangle, Phone, ChevronRight, Info, Scale } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PanicButton from '../components/PanicButton';
import FAQItem from '../components/FAQ';
import WeatherDecoy from '../components/WeatherDecoy';
import { TRANSLATIONS } from '../data/translations';

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
    document.title = 'VAWA - Protección Federal para Víctimas de Violencia Doméstica | Visa-VAWA.com';
    
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

  // Función auxiliar para manejar setLang
  const handleSetLang = (newLang: string) => {
    if (newLang === 'en' || newLang === 'es') {
      setLang(newLang);
    }
  };

  // Importar componentes dinámicamente según la vista
  const renderView = () => {
    if (currentView === 'quiz') {
      const Quiz = require('../components/Quiz').default;
      return <Quiz t={t} goHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'evidence') {
      const Evidence = require('../components/evidence').default;
      return <Evidence t={t} goHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'myths') {
      const Mitos = require('../components/Mitos').default;
      return <Mitos t={t} goHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'men') {
      const Hombres = require('../components/Hombres').default;
      return <Hombres t={t} goHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'children') {
      const Children = require('../components/Children').default;
      return <Children t={t} goHome={() => setCurrentView('home')} />;
    }
    if (currentView === 'security') {
      const Security = require('../components/Security').default;
      return <Security t={t} goHome={() => setCurrentView('home')} />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      
      <Header lang={lang} setLang={handleSetLang} currentView={currentView} setView={setCurrentView} t={t} />
      
      <PanicButton label={t.panic.label} tooltip={t.panic.tooltip} onPanic={triggerPanic} />

      {/* Renderizar vista dinámica o home */}
      {currentView !== 'home' ? (
        <main className="flex-grow">
          {renderView()}
        </main>
      ) : (
        <>
          {/* HERO SECTION - Estilo Gobierno USA */}
          <section className="bg-gradient-to-b from-slate-800 to-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
              }}></div>
            </div>

            <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
              <div className="max-w-4xl mx-auto">
                
                <div className="inline-flex items-center bg-blue-900/50 backdrop-blur-sm border border-blue-400/30 text-blue-100 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-6">
                  <Shield size={14} className="mr-2" />
                  Información Federal Confidencial
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Un refugio digital: información clara y confidencial para VAWA
                </h1>

                <p className="text-xl md:text-2xl text-blue-100 mb-4 leading-relaxed max-w-3xl">
                  Aquí encuentras guías prácticas y respuestas sin juicio.
                </p>
                <p className="text-lg md:text-xl text-blue-200 mb-8 leading-relaxed max-w-3xl">
                  Si necesitas asesoría legal personalizada, ve a{' '}
                  <a 
                    href="https://manuelsolis.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-white font-semibold transition-colors"
                  >
                    manuelsolis.com
                  </a>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => setCurrentView('quiz')}
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105"
                  >
                    <Lock size={20} className="mr-2" />
                    ¿Califico para VAWA? (Quiz Anónimo)
                  </button>
                  <a
                    href="https://manuelsolis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all"
                  >
                    Hablar con un Abogado
                    <ChevronRight size={20} className="ml-2" />
                  </a>
                </div>

                <div className="bg-blue-900/40 backdrop-blur-sm border-l-4 border-yellow-400 p-4 md:p-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <Info className="text-yellow-400 shrink-0 mt-1" size={24} />
                    <div className="text-blue-50">
                      <p className="font-semibold mb-1">Protección Federal Confidencial</p>
                      <p className="text-sm leading-relaxed">
                        Puedes presentar una autopetición VAWA (Formulario I-360) sin el conocimiento ni consentimiento de la persona abusiva. La ley federal (8 U.S.C. § 1367) prohíbe a USCIS notificar al agresor.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
          </section>

          {/* SECCIÓN DE NAVEGACIÓN PRINCIPAL - Cards */}
          <section className="py-16 bg-white border-t border-slate-200">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
                  Recursos Confidenciales
                </h2>
                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                  Toda la información que necesitas para entender tus derechos y opciones bajo VAWA
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  <button onClick={() => setCurrentView('quiz')} className="group bg-white border-2 border-slate-200 hover:border-blue-500 rounded-xl p-6 transition-all hover:shadow-lg text-left">
                    <div className="bg-blue-100 group-hover:bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <Lock className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      Quiz de Elegibilidad
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Verifica de forma anónima si podrías calificar para VAWA. No guardamos tus respuestas.
                    </p>
                    <span className="text-blue-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                      Comenzar Quiz
                      <ChevronRight size={18} className="ml-1 group-hover:ml-0 transition-all" />
                    </span>
                  </button>

                  <button onClick={() => setCurrentView('evidence')} className="group bg-white border-2 border-slate-200 hover:border-indigo-500 rounded-xl p-6 transition-all hover:shadow-lg text-left">
                    <div className="bg-indigo-100 group-hover:bg-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <FileText className="text-indigo-600 group-hover:text-white transition-colors" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                      Guía de Evidencia Silenciosa
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Cómo documentar el abuso de forma segura, sin dejar rastro digital. Plantillas disfrazadas.
                    </p>
                    <span className="text-indigo-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                      Ver Guía
                      <ChevronRight size={18} className="ml-1 group-hover:ml-0 transition-all" />
                    </span>
                  </button>

                  <button onClick={() => setCurrentView('myths')} className="group bg-white border-2 border-slate-200 hover:border-red-500 rounded-xl p-6 transition-all hover:shadow-lg text-left">
                    <div className="bg-red-100 group-hover:bg-red-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <AlertTriangle className="text-red-600 group-hover:text-white transition-colors" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">
                      Mitos del Miedo
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Desmintiendo las mentiras que usan los agresores para mantener el control. La verdad sobre deportación.
                    </p>
                    <span className="text-red-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                      Leer Más
                      <ChevronRight size={18} className="ml-1 group-hover:ml-0 transition-all" />
                    </span>
                  </button>

                  <button onClick={() => setCurrentView('men')} className="group bg-white border-2 border-slate-200 hover:border-purple-500 rounded-xl p-6 transition-all hover:shadow-lg text-left">
                    <div className="bg-purple-100 group-hover:bg-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <Users className="text-purple-600 group-hover:text-white transition-colors" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                      VAWA para Hombres
                    </h3>
                    <p className="text-slate-600 mb-4">
                      El silencio de los hombres. VAWA es neutral en género: hombres también pueden calificar.
                    </p>
                    <span className="text-purple-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                      Más Información
                      <ChevronRight size={18} className="ml-1 group-hover:ml-0 transition-all" />
                    </span>
                  </button>

                  <button onClick={() => setCurrentView('children')} className="group bg-white border-2 border-slate-200 hover:border-green-500 rounded-xl p-6 transition-all hover:shadow-lg text-left">
                    <div className="bg-green-100 group-hover:bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <Baby className="text-green-600 group-hover:text-white transition-colors" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">
                      VAWA y tus Hijos
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Cómo VAWA puede proteger a tus hijos derivados. Trabajo, escuela y protección familiar.
                    </p>
                    <span className="text-green-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                      Aprender Más
                      <ChevronRight size={18} className="ml-1 group-hover:ml-0 transition-all" />
                    </span>
                  </button>

                  <button onClick={() => setCurrentView('security')} className="group bg-white border-2 border-slate-200 hover:border-orange-500 rounded-xl p-6 transition-all hover:shadow-lg text-left">
                    <div className="bg-orange-100 group-hover:bg-orange-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <Shield className="text-orange-600 group-hover:text-white transition-colors" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-700 transition-colors">
                      Seguridad Digital
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Cómo navegar de forma segura. Protege tu privacidad si compartes dispositivo.
                    </p>
                    <span className="text-orange-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                      Guía de Seguridad
                      <ChevronRight size={18} className="ml-1 group-hover:ml-0 transition-all" />
                    </span>
                  </button>

                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN DE CONFIDENCIALIDAD */}
          <section className="py-16 bg-slate-100 border-y border-slate-200">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                      <Scale className="text-blue-700" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        Protecciones Federales de Confidencialidad
                      </h2>
                      <p className="text-slate-600 text-sm">
                        8 U.S.C. § 1367 - Ley Federal de los Estados Unidos
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                      VAWA está diseñado para que la víctima pueda pedir protección sin depender de la persona agresora.
                    </p>
                    
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-blue-600 shrink-0 mt-1" size={20} />
                        <span>Existen protecciones federales de confidencialidad para sobrevivientes (8 U.S.C. § 1367), y USCIS ha emitido/actualizado guías sobre cómo se aplican estas protecciones.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-blue-600 shrink-0 mt-1" size={20} />
                        <span>USCIS está <strong>prohibido por ley</strong> de notificar al agresor sobre tu autopetición.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-blue-600 shrink-0 mt-1" size={20} />
                        <span>Tu información personal no será compartida con la persona abusiva.</span>
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r">
                      <p className="text-sm text-amber-900 font-medium mb-1">
                        ⚠️ Importante sobre seguridad digital:
                      </p>
                      <p className="text-sm text-amber-800">
                        La confidencialidad legal no evita que una persona agresora que controla tu teléfono/correo descubra cosas por su cuenta. Por eso usamos "Modo Discreto" + recomendaciones de seguridad digital.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Preguntas Frecuentes
                  </h2>
                  <p className="text-slate-600">
                    Respuestas claras a las dudas más comunes sobre VAWA
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-200">
                  <FAQItem 
                    q={t.faq.q1}
                    a={t.faq.a1}
                  />
                  <FAQItem 
                    q={t.faq.q2}
                    a={t.faq.a2}
                  />
                  <FAQItem 
                    q={t.faq.q3}
                    a={t.faq.a3}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* EMERGENCY CONTACT SECTION */}
          <section className="py-12 bg-red-50 border-y border-red-100">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  ¿En Peligro Inmediato?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="tel:911"
                    className="inline-flex items-center bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all"
                  >
                    <Phone size={20} className="mr-2" />
                    Llamar al 911 (Emergencia)
                  </a>
                  <a 
                    href="tel:18007997233"
                    className="inline-flex items-center bg-white border-2 border-red-700 text-red-700 hover:bg-red-50 font-bold py-4 px-8 rounded-lg transition-all"
                  >
                    <Phone size={20} className="mr-2" />
                    1-800-799-7233 (Línea Nacional)
                  </a>
                </div>
                <p className="text-sm text-red-800 mt-4">
                  Estas líneas están disponibles 24/7 y ofrecen servicios en múltiples idiomas
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer t={t} setView={setCurrentView} />

    </div>
  );
}