'use client';

import React, { useState, useEffect } from 'react';
import { 
  Shield, ChevronLeft, Smartphone, Monitor, Wifi, Lock, 
  Eye, AlertTriangle, CheckCircle, Info, ExternalLink, 
  ChevronRight, Phone, KeyRound, Radio 
} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PanicButton from '../../../components/PanicButton';
import WeatherDecoy from '../../../components/WeatherDecoy';

interface SecurityClientProps {
  lang: string;
  t: any;
}

export default function SecurityClient({ lang, t }: SecurityClientProps) {
  const [panicMode, setPanicMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'phone' | 'computer'>('general');
  
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
            <span className="font-bold text-[#1a365d]">Protocolos de Seguridad Digital</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* COLUMNA PRINCIPAL - 8/12 */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Encabezado */}
              <header>
                <div className="inline-flex items-center space-x-2 bg-[#1a365d] text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                  <Shield size={14} />
                  <span>Seguridad Operativa (OPSEC)</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-[#1a365d] font-serif mb-6 leading-tight">
                  Protección de Huella Digital y Dispositivos
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  La violencia digital es real. Si sospechas monitoreo, asume que tu dispositivo está comprometido. Esta guía establece protocolos para minimizar riesgos al buscar ayuda legal.
                </p>
              </header>

              {/* Advertencia Crítica */}
              <div className="bg-slate-50 border-l-4 border-[#1a365d] p-6 rounded-r-lg shadow-sm">
                <div className="flex gap-4">
                  <div className="bg-white p-3 rounded-full border border-slate-200 shrink-0 h-fit shadow-sm">
                    <AlertTriangle className="text-[#1a365d]" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a365d] text-lg mb-2">Advertencia de Seguridad</h3>
                    <p className="text-slate-700 leading-relaxed text-base">
                      <strong>Ninguna medida es 100% infalible</strong> en un dispositivo comprometido. Si el agresor tiene acceso físico a tu teléfono o computadora, o si ha instalado software espía (spyware), puede ver todo lo que haces incluso en modo incógnito. 
                      <span className="block mt-2 font-medium">La opción más segura es siempre usar un dispositivo externo (biblioteca, amigo de confianza) que el agresor no conozca.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Navegación por Pestañas */}
              <div className="border-b border-slate-200">
                <div className="flex space-x-8 overflow-x-auto">
                  {[
                    { id: 'general', label: 'Protocolos Generales', icon: Shield },
                    { id: 'phone', label: 'Seguridad Móvil', icon: Smartphone },
                    { id: 'computer', label: 'Computadoras', icon: Monitor },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`
                        flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap
                        ${activeTab === tab.id 
                          ? 'border-[#1a365d] text-[#1a365d]' 
                          : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}
                      `}
                    >
                      <tab.icon size={18} />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contenido de Pestañas */}
              <div className="py-6 animate-fade-in">
                
                {/* TAB: GENERAL */}
                {activeTab === 'general' && (
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                        <Eye className="mr-2 text-slate-500" />
                        Vectores de Monitoreo Comunes
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { title: "Historial de Navegación", desc: "Registra cada sitio visitado y hora de acceso." },
                          { title: "Keyloggers", desc: "Software que registra cada tecla pulsada (contraseñas, mensajes)." },
                          { title: "Geolocalización", desc: "GPS y metadatos en fotos que revelan tu ubicación exacta." },
                          { title: "Cuentas en la Nube", desc: "Sincronización automática de fotos o notas en dispositivos compartidos." }
                        ].map((item, i) => (
                          <div key={i} className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
                            <h4 className="font-bold text-[#1a365d] mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Estrategias de Mitigación</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
                          <p className="text-sm text-slate-700"><strong>Higiene de Contraseñas:</strong> No uses fechas importantes. Cambia tus claves desde un dispositivo seguro y activa la Autenticación de Dos Factores (2FA) usando una app (como Google Authenticator) en lugar de SMS.</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
                          <p className="text-sm text-slate-700"><strong>Compartimentación:</strong> Crea una cuenta de correo electrónico nueva y secreta para comunicarte con abogados o agencias de ayuda. Nunca la abras en dispositivos compartidos.</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 shrink-0" size={18} />
                          <p className="text-sm text-slate-700"><strong>Limpieza Selectiva:</strong> Borrar <em>todo</em> el historial puede ser sospechoso. Borra solo las entradas específicas de tus búsquedas de ayuda.</p>
                        </li>
                      </ul>
                    </section>
                  </div>
                )}

                {/* TAB: TELÉFONO */}
                {activeTab === 'phone' && (
                  <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-blue-50 p-3 rounded-full shrink-0">
                          <Radio className="text-[#1a365d]" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">Detección de Stalkerware</h3>
                          <p className="text-sm text-slate-600">
                            El "Stalkerware" es software de vigilancia instalado a menudo por parejas abusivas. Señales de alerta incluyen batería que se agota rápido, calentamiento inusual o uso excesivo de datos.
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 border-t border-slate-100 pt-4">
                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Pasos Críticos:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-sm text-slate-700">
                            <span className="font-bold text-[#1a365d]">•</span>
                            <span><strong>Revisar Apps Ocultas:</strong> Busca aplicaciones con nombres genéricos ("System Update", "WiFi Tool") que tengan permisos excesivos (cámara, micrófono, ubicación).</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-slate-700">
                            <span className="font-bold text-[#1a365d]">•</span>
                            <span><strong>Ubicación en Tiempo Real:</strong> Revisa en Google Maps (Compartir ubicación) o "Find My" en iPhone para asegurar que no estás compartiendo tu posición permanentemente.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm text-slate-700">
                            <span className="font-bold text-[#1a365d]">•</span>
                            <span><strong>Teléfono de Emergencia:</strong> Si es posible, adquiere un teléfono prepago barato ("burner phone") y mantenlo oculto y apagado hasta que necesites usarlo.</span>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                )}

                {/* TAB: COMPUTADORA */}
                {activeTab === 'computer' && (
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Navegación Segura en Escritorio</h3>
                      <div className="grid gap-4">
                        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="text-[#1a365d]" size={18} />
                            <h4 className="font-bold text-slate-900">Modo Incógnito / Privado</h4>
                          </div>
                          <p className="text-sm text-slate-700 mb-3">
                            Evita que el navegador guarde historial, cookies y datos de formularios.
                            <span className="block mt-1 font-medium text-red-600 text-xs">NOTA: No oculta tu actividad a tu proveedor de internet ni al administrador de la red Wi-Fi.</span>
                          </p>
                          <div className="flex gap-2 text-xs font-mono text-slate-500">
                            <span className="bg-white px-2 py-1 rounded border border-slate-300">Ctrl + Shift + N (Chrome)</span>
                            <span className="bg-white px-2 py-1 rounded border border-slate-300">Ctrl + Shift + P (Firefox)</span>
                          </div>
                        </div>

                        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Wifi className="text-[#1a365d]" size={18} />
                            <h4 className="font-bold text-slate-900">Seguridad de Red (Wi-Fi)</h4>
                          </div>
                          <p className="text-sm text-slate-700">
                            Si el agresor controla el router de la casa, puede ver los sitios web que visitas (los dominios). Usa una VPN (Red Privada Virtual) si es posible para encriptar tu tráfico, o mejor aún, conéctate desde una red pública segura (biblioteca, café).
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                )}

              </div>

            </div>

            {/* COLUMNA LATERAL (STICKY) - 4/12 */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                
                {/* Widget: Botón de Pánico */}
                <div className="bg-red-50 border border-red-100 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="text-red-600" size={20} />
                    <h3 className="font-bold text-red-700 text-lg font-serif">Salida Rápida</h3>
                  </div>
                  <p className="text-sm text-red-800 leading-relaxed mb-4">
                    Si entra alguien, presiona la tecla <strong>ESC</strong> tres veces o el botón flotante rojo para ir inmediatamente a una página de clima inofensiva.
                  </p>
                </div>

                {/* Widget de Asesoría Legal */}
                <div className="bg-[#1a365d] text-white p-8 rounded-xl text-center shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <KeyRound size={100} />
                  </div>
                  
                  <h4 className="font-bold font-serif text-2xl mb-3 relative z-10">Privacidad Legal</h4>
                  <p className="text-blue-100 text-sm mb-6 relative z-10 leading-relaxed">
                    Toda comunicación con un abogado está protegida por el privilegio abogado-cliente. Es el espacio más seguro para hablar.
                  </p>
                  
                  <a 
                    href="https://manuelsolis.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center w-full bg-white text-[#1a365d] font-bold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors shadow-md relative z-10"
                  >
                    Consulta Segura <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>

                {/* Recursos Técnicos */}
                <div className="border border-slate-200 rounded-xl p-5 bg-white">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Recursos Técnicos</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="https://www.techsafety.org/" target="_blank" className="flex items-center text-[#1a365d] hover:underline">
                        <ExternalLink size={14} className="mr-2" /> Safety Net Project (NNEDV)
                      </a>
                    </li>
                    <li>
                      <a href="https://go.fiu.edu/cyberstalking" target="_blank" className="flex items-center text-[#1a365d] hover:underline">
                        <ExternalLink size={14} className="mr-2" /> Guía Anti-Ciberacoso
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