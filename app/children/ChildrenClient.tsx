'use client';

import React, { useState } from 'react';
import { 
  Baby, ChevronLeft, Shield, GraduationCap, Briefcase, 
  AlertCircle, HeartHandshake, Lock, ExternalLink, ChevronRight, 
  Scale
} from 'lucide-react';
import { TRANSLATIONS } from '../../data/translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PanicButton from '../../components/PanicButton';
import WeatherDecoy from '../../components/WeatherDecoy';

export default function ChildrenClient() {
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
        currentView="children" 
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
            <span className="font-bold text-[#1a365d]">Protección de Menores</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* COLUMNA PRINCIPAL - 8/12 */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Encabezado */}
              <header>
                <div className="inline-flex items-center space-x-2 bg-[#1a365d] text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                  <Shield size={14} />
                  <span>Estatus Derivado y Protección Familiar</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-[#1a365d] font-serif mb-6 leading-tight">
                  Seguridad Legal para tus Hijos bajo VAWA
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  La ley federal reconoce que la violencia doméstica impacta a toda la familia. VAWA ofrece mecanismos específicos para otorgar estatus legal y beneficios a los hijos de víctimas, incluso si ellos no sufrieron abuso físico directo.
                </p>
              </header>

              {/* Sección 1: Vías Legales */}
              <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1a365d] font-serif mb-6 flex items-center">
                  <span className="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans mr-3">1</span>
                  Dos Vías de Protección
                </h2>
                
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1 bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Baby className="text-[#1a365d]" size={20} />
                        Como Derivados
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Si tú eres la víctima principal (cónyuge abusado), puedes incluir a tus hijos solteros menores de 21 años en tu petición I-360.
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                        <li>No requieren petición separada.</li>
                        <li>Reciben Green Card junto contigo.</li>
                        <li>No necesitan haber sido abusados directamente.</li>
                      </ul>
                    </div>

                    <div className="flex-1 bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Shield className="text-[#1a365d]" size={20} />
                        Como Autopeticionarios
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        Si el hijo fue abusado directamente por un padre ciudadano o residente, puede presentar su propia petición VAWA.
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                        <li>Hasta los 21 años (o 25 en ciertos casos de retraso por abuso).</li>
                        <li>Independiente del otro padre.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r">
                    <h3 className="font-bold text-blue-900 mb-2 text-sm uppercase tracking-wide">Protección de Edad (CSPA)</h3>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Bajo la Ley de Protección del Estatus del Menor (CSPA), la edad de tus hijos se "congela" en la fecha que presentas la I-360. Esto evita que pierdan elegibilidad si cumplen 21 años mientras USCIS procesa el caso.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sección 2: Beneficios Tangibles */}
              <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1a365d] font-serif mb-6 flex items-center">
                  <span className="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans mr-3">2</span>
                  Derechos y Beneficios Inmediatos
                </h2>
                <p className="text-slate-600 mb-6">
                  Una vez que se establece un caso <em>prima facie</em> o se aprueba la petición, tus hijos acceden a derechos federales.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="bg-green-100 p-2 rounded text-green-700 shrink-0">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Permiso de Trabajo (EAD)</h3>
                      <p className="text-sm text-slate-600">
                        Los hijos derivados pueden solicitar autorización de empleo bajo la categoría (c)(31) al aprobarse la I-360, permitiéndoles obtener un Número de Seguro Social (SSN).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="bg-blue-100 p-2 rounded text-blue-700 shrink-0">
                      <HeartHandshake size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Acceso a Beneficios Públicos</h3>
                      <p className="text-sm text-slate-600">
                        A diferencia de otros inmigrantes, los beneficiarios de VAWA son considerados "extranjeros calificados" (Qualified Aliens) para ciertos beneficios federales como asistencia de vivienda y alimentaria, sin carga pública.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="bg-purple-100 p-2 rounded text-purple-700 shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Educación Superior</h3>
                      <p className="text-sm text-slate-600">
                        Con la I-360 aprobada o pendiente, en muchos estados califican para matrículas universitarias de residentes (in-state tuition) y ayuda financiera federal (FAFSA) como "battered immigrants".
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sección 3: Custodia y Miedos */}
              <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1a365d] font-serif mb-6 flex items-center">
                  <span className="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-sans mr-3">3</span>
                  Mitos sobre Custodia
                </h2>
                
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <div className="flex gap-4">
                    <AlertCircle className="text-[#1a365d] shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">"Si me voy, me quitará a los niños por no tener papeles"</h3>
                      <p className="text-slate-700 text-sm leading-relaxed mb-4">
                        Este es el miedo más común y una táctica de control. En los Estados Unidos, <strong>el estatus migratorio no determina automáticamente la custodia</strong>. Los tribunales de familia priorizan el "interés superior del menor".
                      </p>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        La violencia doméstica es un factor negativo fuerte contra el agresor en disputas de custodia. Documentar el abuso fortalece tu posición para proteger a tus hijos legalmente.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* COLUMNA LATERAL (STICKY) - 4/12 */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                
                {/* Widget Informativo: Seguridad Escolar */}
                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-slate-200 p-2 rounded text-slate-700">
                      <Lock size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg font-serif">Privacidad Escolar</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Bajo leyes como FERPA, puedes solicitar a la escuela que mantenga tu dirección confidencial si tienes órdenes de protección, evitando que el agresor localice a los niños.
                  </p>
                </div>

                {/* Widget de Asesoría Legal */}
                <div className="bg-[#1a365d] text-white p-8 rounded-xl text-center shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Scale size={100} />
                  </div>
                  
                  <h4 className="font-bold font-serif text-2xl mb-3 relative z-10">Protege su Futuro</h4>
                  <p className="text-blue-100 text-sm mb-6 relative z-10 leading-relaxed">
                    Incluir a tus hijos en tu petición VAWA requiere precisión para asegurar que no "envejezcan" fuera del sistema (Aging Out). Un abogado es vital.
                  </p>
                  
                  <a 
                    href="https://manuelsolis.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center w-full bg-white text-[#1a365d] font-bold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors shadow-md relative z-10"
                  >
                    Consulta Legal Familiar <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>

                {/* Enlaces Rápidos */}
                <div className="border border-slate-200 rounded-xl p-5 bg-white">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Recursos Familiares</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="https://www.childhelp.org/" target="_blank" className="flex items-center text-[#1a365d] hover:underline">
                        <ExternalLink size={14} className="mr-2" /> Childhelp National Hotline
                      </a>
                    </li>
                    <li>
                      <a href="https://studentaid.gov/" target="_blank" className="flex items-center text-[#1a365d] hover:underline">
                        <ExternalLink size={14} className="mr-2" /> Ayuda Federal Estudiantil
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