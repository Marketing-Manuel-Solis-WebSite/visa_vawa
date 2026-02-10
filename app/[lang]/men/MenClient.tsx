'use client';

import React, { useState } from 'react';
import { 
  Users, ChevronLeft, ExternalLink, CheckCircle, 
  Info, ChevronRight, AlertCircle, Scale, Shield, Gavel, FileText 
} from 'lucide-react';
import { TRANSLATIONS } from '../../../data/translations';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PanicButton from '../../../components/PanicButton';
import WeatherDecoy from '../../../components/WeatherDecoy';

export default function MenClient() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const [panicMode, setPanicMode] = useState(false);
  
  const t = TRANSLATIONS[lang];

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
      window.location.href = '/';
    }
  };

  if (panicMode) return <WeatherDecoy />;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header 
        lang={lang} 
        setLang={(l: string) => setLang(l as 'en' | 'es')} 
        currentView="men" 
        setView={() => {}} 
        t={t} 
      />
      
      <PanicButton 
        label={t.panic.label} 
        tooltip={t.panic.tooltip} 
        onPanic={triggerPanic} 
      />

      <main className="flex-grow py-12">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Navegación Superior */}
          <nav className="flex items-center text-sm text-slate-500 mb-8 border-b border-slate-200 pb-4">
            <button onClick={goHome} className="hover:text-[#1a365d] transition-colors flex items-center font-medium">
              <ChevronLeft size={16} className="mr-1" />
              Regresar al Inicio
            </button>
            <ChevronRight size={16} className="mx-2 text-slate-300" />
            <span className="font-bold text-[#1a365d]">Protección VAWA para Hombres</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* COLUMNA PRINCIPAL - 8/12 */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Encabezado */}
              <header>
                <div className="inline-flex items-center space-x-2 bg-[#1a365d] text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                  <Scale size={14} />
                  <span>Neutralidad de Género</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-[#1a365d] font-serif mb-6 leading-tight">
                  La Ley Federal Protege a Todas las Víctimas
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  A pesar de su nombre ("Violence Against Women Act"), el lenguaje de la ley es explícitamente neutral. Los hombres abusados por ciudadanas o residentes permanentes tienen <strong>exactamente los mismos derechos migratorios</strong> que las mujeres.
                </p>
              </header>

              {/* Sección 1: La Realidad Estadística */}
              <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1a365d] font-serif mb-6 flex items-center">
                  <span className="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans mr-3">1</span>
                  Realidad Legal y Estadística
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="text-[#1a365d]" size={24} />
                      <span className="font-bold text-2xl text-slate-900">40%</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      De las víctimas de violencia física severa por parte de una pareja íntima son hombres (Fuente: CDC).
                    </p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="text-[#1a365d]" size={24} />
                      <span className="font-bold text-2xl text-slate-900">Neutral</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      USCIS no distingue por género al adjudicar casos. Los requisitos de evidencia son idénticos.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r">
                  <h3 className="font-bold text-blue-900 mb-2 text-sm uppercase tracking-wide">Marco Legal</h3>
                  <p className="text-blue-800 text-base leading-relaxed">
                    "Ninguna persona en los Estados Unidos será excluida de participar, negada los beneficios o sometida a discriminación... por motivos de sexo."
                    <span className="block mt-2 text-xs font-mono text-blue-600">— VAWA Reauthorization Act of 2013</span>
                  </p>
                </div>
              </section>

              {/* Sección 2: Tipos de Abuso Específicos */}
              <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1a365d] font-serif mb-6 flex items-center">
                  <span className="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans mr-3">2</span>
                  Manifestaciones de Abuso en Hombres
                </h2>
                <p className="text-slate-600 mb-6">
                  Los agresores de hombres suelen utilizar tácticas específicas que explotan estereotipos de género y el sistema legal.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                    <div className="bg-red-100 p-2 rounded text-red-700 shrink-0">
                      <Gavel size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Manipulación del Sistema Legal</h3>
                      <p className="text-sm text-slate-600">
                        Amenazar con llamar a la policía y acusarte falsamente de agresión, sabiendo que las autoridades a menudo asumen que el hombre es el agresor ("bias" policial).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                    <div className="bg-red-100 p-2 rounded text-red-700 shrink-0">
                      <AlertCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Humillación y Emasculación</h3>
                      <p className="text-sm text-slate-600">
                        Ataques verbales constantes sobre tu masculinidad, capacidad de proveer ("failure to provide"), o desempeño sexual, diseñados para destruir tu autoestima.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                    <div className="bg-red-100 p-2 rounded text-red-700 shrink-0">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Aislamiento y Control Financiero</h3>
                      <p className="text-sm text-slate-600">
                        Impedirte enviar dinero a tu familia en tu país de origen, controlar tu sueldo, o aislarte de amigos bajo el pretexto de celos excesivos.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sección 3: Barreras y Soluciones */}
              <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1a365d] font-serif mb-6 flex items-center">
                  <span className="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans mr-3">3</span>
                  Superando las Barreras de Evidencia
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">El Problema Común</h3>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex-grow">
                      <p className="text-slate-700 text-sm">
                        "No tengo reportes policiales porque tenía miedo de que me arrestaran a mí en lugar de a ella."
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <h3 className="font-bold text-[#1a365d] mb-3 text-sm uppercase tracking-wide">La Solución Legal</h3>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex-grow">
                      <p className="text-blue-900 text-sm">
                        USCIS entiende este sesgo. Tu declaración detallada (affidavit) explicando <em>por qué</em> no llamaste a la policía es evidencia válida. También testimonios de compañeros de trabajo o vecinos.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* COLUMNA LATERAL (STICKY) - 4/12 */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                
                {/* Widget Informativo: Hombres y Paternidad */}
                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-slate-200 p-2 rounded text-slate-700">
                      <Info size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg font-serif">Protección Parental</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Muchos hombres temen perder el contacto con sus hijos si se separan. VAWA permite incluir a tus hijos en tu petición, protegiéndolos también a ellos.
                  </p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-xs text-slate-500 font-medium">
                      El estatus legal te da mejores herramientas para luchar por la custodia en tribunales familiares.
                    </p>
                  </div>
                </div>

                {/* Widget de Asesoría Legal */}
                <div className="bg-[#1a365d] text-white p-8 rounded-xl text-center shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Scale size={100} />
                  </div>
                  
                  <h4 className="font-bold font-serif text-2xl mb-3 relative z-10">Rompe el Estigma</h4>
                  <p className="text-blue-100 text-sm mb-6 relative z-10 leading-relaxed">
                    Buscar ayuda legal no es debilidad; es una estrategia inteligente para asegurar tu futuro y el de tu familia. Miles de hombres han obtenido su residencia así.
                  </p>
                  
                  <a 
                    href="https://manuelsolis.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center w-full bg-white text-[#1a365d] font-bold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors shadow-md relative z-10"
                  >
                    Consulta Confidencial <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>

                {/* Enlaces Rápidos */}
                <div className="border border-slate-200 rounded-xl p-5 bg-white">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Recursos para Hombres</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="https://www.thehotline.org/resources/men-can-be-victims-of-abuse-too/" target="_blank" className="flex items-center text-[#1a365d] hover:underline">
                        <ExternalLink size={14} className="mr-2" /> The Hotline: Men Can Be Victims
                      </a>
                    </li>
                    <li>
                      <a href="https://1in6.org/" target="_blank" className="flex items-center text-[#1a365d] hover:underline">
                        <ExternalLink size={14} className="mr-2" /> 1in6: Apoyo para hombres
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer t={t} setView={() => {}} />
    </div>
  );
}