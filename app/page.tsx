'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, FileText, Users, Baby, AlertTriangle, ChevronRight, Info, Scale, ExternalLink, EyeOff, FileCheck } from 'lucide-react';

// Importaciones
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PanicButton from '@/components/PanicButton';
import FAQItem from '@/components/FAQ';
import WeatherDecoy from '@/components/WeatherDecoy';
import { TRANSLATIONS } from '@/data/translations';

export default function HomePage() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const [panicMode, setPanicMode] = useState(false);

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

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      
      <Header lang={lang} setLang={handleSetLang} currentView="home" setView={() => {}} t={t} />
      
      <PanicButton label={t.panic.label} tooltip={t.panic.tooltip} onPanic={triggerPanic} />

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
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center bg-white text-[#1a365d] hover:bg-slate-100 font-bold py-4 px-8 rounded shadow-md transition-all text-lg"
              >
                <Lock size={20} className="mr-2" />
                Verificar Elegibilidad (Anónimo)
              </Link>
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

          {/* GRID DE RECURSOS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 - Quiz */}
            <Link href="/quiz" className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
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
            </Link>

            {/* Card 2 - Evidencia */}
            <Link href="/evidence" className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
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
            </Link>

            {/* Card 3 - Mitos */}
            <Link href="/myths" className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
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
            </Link>

            {/* Card 4 - Hombres */}
            <Link href="/men" className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
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
            </Link>

            {/* Card 5 - Menores */}
            <Link href="/children" className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
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
            </Link>

            {/* Card 6 - Seguridad */}
            <Link href="/security" className="group bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden">
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
            </Link>

          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONFIDENCIALIDAD EXPANDIDA */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-[#1a365d] mb-2 font-serif flex items-center gap-3">
                    <Scale className="text-[#1a365d]" size={32} />
                    Marco Legal de Confidencialidad
                  </h2>
                  <p className="text-slate-600">
                    La seguridad de su información no es una cortesía, es un mandato federal.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-100 text-blue-800 px-4 py-2 rounded text-sm font-mono font-medium shadow-sm">
                  REFERENCIA: 8 U.S.C. § 1367
                </div>
              </div>
              
              <div className="p-8 md:p-10 space-y-8">
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                  <p className="text-lg">
                    El Congreso de los Estados Unidos diseñó la Ley de Violencia contra la Mujer (VAWA) con una premisa fundamental: <strong>ninguna víctima debe verse obligada a permanecer con su agresor por miedo a la deportación.</strong> Para garantizar esto, se creó el estatuto 8 U.S.C. § 1367, uno de los mandatos de privacidad más estrictos en la ley federal.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#1a365d] transition-colors">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 mb-4 shadow-sm text-[#1a365d]">
                      <EyeOff size={20} />
                    </div>
                    <h3 className="font-bold text-[#1a365d] mb-2">1. Prohibición de Divulgación</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      El Departamento de Seguridad Nacional (DHS), el Departamento de Estado y el Departamento de Justicia <strong>no pueden divulgar</strong> a nadie (especialmente al agresor) que usted ha presentado una solicitud VAWA.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#1a365d] transition-colors">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 mb-4 shadow-sm text-[#1a365d]">
                      <FileCheck size={20} />
                    </div>
                    <h3 className="font-bold text-[#1a365d] mb-2">2. Prohibición de Uso Adverso</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Las autoridades <strong>no pueden basar una decisión</strong> de deportación o denegación de beneficios únicamente en información proporcionada por el abusador. USCIS sabe que los agresores a menudo mienten para manipular el sistema.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#1a365d] transition-colors">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 mb-4 shadow-sm text-[#1a365d]">
                      <Shield size={20} />
                    </div>
                    <h3 className="font-bold text-[#1a365d] mb-2">3. Prohibición de Ejecución</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      La ley prohíbe acciones de ejecución migratoria (arrestos o redadas) en lugares protegidos como refugios de violencia doméstica, centros de crisis por violación o tribunales familiares, basándose en "tips" del agresor.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-8 space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-2"></span>
                        Unidad Especializada (HART Center)
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Sus documentos no van a una oficina local regular. Las peticiones VAWA son procesadas centralizadamente por el <strong>Centro de Servicios de Vermont (VSC)</strong> o el nuevo <strong>Centro HART</strong>. Los oficiales allí reciben capacitación especializada en dinámicas de violencia doméstica.
                      </p>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-2"></span>
                        Sanciones para Funcionarios
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        La violación de la sección 1367 no se toma a la ligera. Cualquier empleado del gobierno que divulgue voluntariamente información protegida enfrenta medidas disciplinarias severas y multas civiles de hasta <strong>$5,000 dólares por violación</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-4">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <Lock size={18} />
                      Estrategia de "Dirección Segura" (Safe Address)
                    </h4>
                    <p className="text-sm text-blue-800 leading-relaxed mb-0">
                      Para evitar que correspondencia de USCIS llegue a su casa y alerte al agresor, usted tiene derecho a usar una <strong>Dirección Segura</strong> alternativa en todos sus formularios. Puede ser un apartado postal (P.O. Box) o, lo más recomendable, la oficina de su abogado.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
                  <Info className="text-slate-400 shrink-0" size={24} />
                  <p className="text-sm text-slate-500 italic">
                    <strong>Nota Importante:</strong> Aunque la confidencialidad legal es robusta frente al gobierno y terceros, no protege su dispositivo personal. Si el agresor tiene acceso a su teléfono, asegúrese de borrar el historial o navegar en modo incógnito.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
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
                1-800-799-7233
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} setView={() => {}} />

    </div>
  );
}