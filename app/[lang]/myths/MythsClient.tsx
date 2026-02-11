'use client';

import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, ChevronRight, ChevronLeft, CheckCircle, 
  X, Scale, Info, ExternalLink, BookOpen, ShieldAlert, Gavel 
} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PanicButton from '../../../components/PanicButton';
import WeatherDecoy from '../../../components/WeatherDecoy';

interface Mito {
  id: number;
  categoria: string;
  mito: string;
  realidad: string;
  explicacion: string;
  estatuto: string;
}

interface MythsClientProps {
  lang: string;
  t: any;
}

export default function MythsClient({ lang, t }: MythsClientProps) {
  const [panicMode, setPanicMode] = useState(false);
  const [activeMito, setActiveMito] = useState<number | null>(1);
  
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
      window.location.href = `/${lang}`;
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

  const mitos: Mito[] = [
    {
      id: 1,
      categoria: "Interacción Policial",
      mito: "Si llamo a la policía por violencia doméstica, me entregarán a ICE y seré deportado/a.",
      realidad: "Las víctimas de violencia doméstica pueden tener protecciones de confidencialidad bajo la ley federal y opciones migratorias humanitarias, como VAWA, Visa U o Visa T.",
      explicacion: "La ley federal 8 U.S.C. § 1367 prohíbe que USCIS y otras agencias federales de inmigración compartan información de víctimas de abuso. En situaciones de emergencia, muchos departamentos de policía local priorizan la seguridad pública y la atención a la víctima. Las políticas sobre cooperación con inmigración pueden variar según la ciudad o el estado, y cada caso es diferente.",
      estatuto: "Referencia: 8 U.S.C. § 1367 (Confidencialidad)"
    },
    {
      id: 2,
      categoria: "Estatus Civil",
      mito: "Si me divorcio antes de que me den los papeles, mi caso se muere automáticamente.",
      realidad: "La ley VAWA permite presentar una autopetición incluso después del divorcio, siempre que se haga dentro de los 2 años posteriores a la finalización legal del matrimonio.",
      explicacion: "No es necesario permanecer en un matrimonio abusivo para buscar opciones migratorias. Si puedes demostrar que el matrimonio fue real y que el divorcio estuvo relacionado con la violencia o crueldad, puedes seguir siendo elegible bajo VAWA dentro de ese período.",
      estatuto: "Referencia: INA § 204(a)(1)(A)(iii)(II)"
    },
    {
      id: 3,
      categoria: "Género",
      mito: "Las leyes de protección como VAWA son exclusivamente para mujeres.",
      realidad: "El lenguaje de la ley es neutral en cuanto al género; los hombres tienen los mismos derechos.",
      explicacion: "Aunque se llama 'Violence Against Women Act' por su origen histórico, la ley federal aplica equitativamente. Hombres abusados por ciudadanas o residentes permanentes califican bajo los mismos estándares de evidencia.",
      estatuto: "Referencia: VAWA Reauthorization Act of 2013"
    },
    {
      id: 4,
      categoria: "Evidencia",
      mito: "Sin moretones, huesos rotos o reporte policial, USCIS no creerá que hubo abuso.",
      realidad: "La definición legal incluye 'Crueldad Extrema' (abuso psicológico y emocional).",
      explicacion: "El control coercitivo, aislamiento, intimidación, abuso económico y amenazas de deportación constituyen 'batería o crueldad extrema'. No se requiere un reporte policial físico si hay otras pruebas creíbles.",
      estatuto: "Referencia: 8 CFR § 204.2(c)(1)(vi)"
    },
    {
      id: 5,
      categoria: "Carga Pública",
      mito: "Si pido ayudas del gobierno o voy a un refugio, me negarán la Green Card por ser 'Carga Pública'.",
      realidad: "Los autopeticionarios de VAWA están exentos de la regla de Carga Pública.",
      explicacion: "A diferencia de peticiones familiares tradicionales, los solicitantes de VAWA pueden acceder a beneficios públicos necesarios (como refugios, estampillas de comida en ciertos estados, o atención médica de emergencia) sin que esto afecte negativamente su caso migratorio.",
      estatuto: "Referencia: INA § 212(a)(4)(E)(i)"
    },
    {
      id: 6,
      categoria: "Entrada Ilegal",
      mito: "Entré por el cerro (sin inspección), así que no hay forma de arreglar sin salir del país.",
      realidad: "VAWA ofrece un camino para ajustar estatus dentro de EE. UU. incluso con entrada ilegal.",
      explicacion: "Algunas personas con una autopetición VAWA aprobada pueden ser elegibles para solicitar el Ajuste de Estatus (Residencia Permanente) desde Estados Unidos, sin necesidad de salir del país, lo que en ciertos casos permite evitar los castigos migratorios de 3 y 10 años.",
      estatuto: "Referencia: INA § 245(a) & USCIS Policy Manual"
    }
  ];

  if (panicMode) return <WeatherDecoy />;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header 
        lang={lang} 
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
            <span className="font-bold text-[#1a365d]">Desmintiendo Mitos Legales</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* COLUMNA PRINCIPAL - 8/12 */}
            <div className="lg:col-span-8 space-y-8">
              
              <header>
                <div className="inline-flex items-center space-x-2 bg-[#1a365d] text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                  <ShieldAlert size={14} />
                  <span>Contra-Información</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-[#1a365d] font-serif mb-6 leading-tight">
                  Mitos de Control vs. Realidad Legal
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Los agresores utilizan la desinformación como arma para mantener el control. Aquí contrastamos las amenazas comunes con los estatutos federales vigentes.
                </p>
              </header>

              <div className="space-y-6">
                {mitos.map((item) => (
                  <article 
                    key={item.id} 
                    className={`border rounded-xl transition-all duration-300 overflow-hidden shadow-sm ${
                      activeMito === item.id 
                        ? 'border-[#1a365d] bg-white ring-1 ring-[#1a365d]/20' 
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    {/* Cabecera del Mito */}
                    <button 
                      onClick={() => setActiveMito(activeMito === item.id ? null : item.id)}
                      className="w-full text-left"
                    >
                      <div className="p-6 flex gap-4 items-start">
                        <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-sm shrink-0 ${
                          activeMito === item.id ? 'bg-[#1a365d] text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {item.id}
                        </div>
                        <div className="flex-grow">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 block">
                            {item.categoria}
                          </span>
                          <h3 className={`text-lg font-bold pr-8 ${
                            activeMito === item.id ? 'text-[#1a365d]' : 'text-slate-700'
                          }`}>
                            "{item.mito}"
                          </h3>
                        </div>
                        <ChevronRight 
                          className={`shrink-0 transition-transform duration-300 text-slate-400 ${
                            activeMito === item.id ? 'rotate-90 text-[#1a365d]' : ''
                          }`} 
                        />
                      </div>
                    </button>

                    {/* Contenido Expandible (Realidad) */}
                    {activeMito === item.id && (
                      <div className="px-6 pb-8 animate-fade-in">
                        
                        {/* Tarjeta de Realidad */}
                        <div className="bg-slate-50 border-l-4 border-[#1a365d] p-5 rounded-r-lg mb-5">
                          <h4 className="flex items-center gap-2 font-bold text-[#1a365d] mb-2 uppercase text-sm tracking-wide">
                            <Scale size={16} />
                            La Realidad Legal
                          </h4>
                          <p className="text-lg font-medium text-slate-900 leading-snug">
                            {item.realidad}
                          </p>
                        </div>

                        <div className="pl-4 border-l border-slate-200 ml-2 space-y-4">
                          <div>
                            <h5 className="font-bold text-slate-800 text-sm mb-1">Explicación Detallada:</h5>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {item.explicacion}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-100 py-2 px-3 rounded w-fit">
                            <BookOpen size={12} />
                            {item.estatuto}
                          </div>
                        </div>

                      </div>
                    )}
                  </article>
                ))}
              </div>

            </div>

            {/* COLUMNA LATERAL (STICKY) - 4/12 */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                
                {/* Widget Informativo */}
                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-slate-200 p-2 rounded text-slate-700">
                      <Info size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg font-serif">¿Por qué mienten?</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    El control es la herramienta principal del agresor. Al mantenerte en la oscuridad sobre tus derechos federales, aseguran tu dependencia y silencio.
                  </p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-xs text-slate-500 font-medium">
                      Recuerda: La policía local no deporta, pero las políticas varían por estado y cada caso es diferente.
                    </p>
                  </div>
                </div>

                {/* Widget de Asesoría */}
                <div className="bg-[#1a365d] text-white p-8 rounded-xl text-center shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Gavel size={100} />
                  </div>
                  
                  <h4 className="font-bold font-serif text-2xl mb-3 relative z-10">Verifica tu Caso</h4>
                  <p className="text-blue-100 text-sm mb-6 relative z-10 leading-relaxed">
                    Cada situación migratoria es única. No te bases solo en información general. Un abogado puede confirmar qué excepciones aplican a ti.
                  </p>
                  
                  <a 
                    href="https://manuelsolis.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center w-full bg-white text-[#1a365d] font-bold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors shadow-md relative z-10"
                  >
                    Consulta Legal Confidencial <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>

                {/* Enlaces Rápidos */}
                <div className="border border-slate-200 rounded-xl p-5 bg-white">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Recursos Oficiales</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="https://www.uscis.gov/humanitarian/battered-spouse-children-parents" target="_blank" className="flex items-center text-[#1a365d] hover:underline">
                        <ExternalLink size={14} className="mr-2" /> USCIS: Información para víctimas
                      </a>
                    </li>
                    <li>
                      <a href="https://www.thehotline.org/" target="_blank" className="flex items-center text-[#1a365d] hover:underline">
                        <ExternalLink size={14} className="mr-2" /> The National Domestic Violence Hotline
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