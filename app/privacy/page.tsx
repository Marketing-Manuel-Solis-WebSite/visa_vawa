'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Lock } from 'lucide-react';
import { TRANSLATIONS } from '../../data/translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PanicButton from '../../components/PanicButton';
import WeatherDecoy from '../../components/WeatherDecoy';

export default function PrivacyClient() {
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
        currentView="privacy" 
        setView={() => {}} 
        t={t} 
      />
      
      <PanicButton 
        label={t.panic.label} 
        tooltip={t.panic.tooltip} 
        onPanic={triggerPanic} 
      />

      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Navegación Superior */}
          <nav className="flex items-center text-sm text-slate-500 mb-8 border-b border-slate-200 pb-4">
            <button onClick={goHome} className="hover:text-[#1a365d] transition-colors flex items-center font-medium">
              <ChevronLeft size={16} className="mr-1" />
              Regresar al Inicio
            </button>
            <ChevronRight size={16} className="mx-2 text-slate-300" />
            <span className="font-bold text-[#1a365d]">Política de Privacidad</span>
          </nav>

          <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-12 shadow-sm">
            
            {/* Encabezado */}
            <div className="mb-10 border-b border-slate-100 pb-8">
              <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Lock size={14} />
                <span>Información Legal</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] font-serif mb-4">
                Política de Privacidad y Seguridad
              </h1>
              <p className="text-slate-500 text-sm">
                Última actualización: {new Date().getFullYear()}
              </p>
            </div>

            {/* Contenido */}
            <div className="prose prose-slate max-w-none text-slate-600">
              
              <h3>1. Compromiso de Anonimato</h3>
              <p>
                La seguridad de nuestros usuarios es nuestra máxima prioridad. Este sitio ha sido diseñado para no recopilar información de identificación personal (PII) de manera proactiva. No requerimos registro de usuarios, nombres reales ni direcciones de correo electrónico para acceder a la información educativa.
              </p>

              <h3>2. Ausencia de Rastreadores (Cookies)</h3>
              <p>
                Para proteger a las víctimas de violencia doméstica que pueden estar siendo monitoreadas, este sitio minimiza el uso de cookies persistentes. Utilizamos almacenamiento local temporal solo para el funcionamiento técnico de la sesión actual (como el idioma seleccionado), el cual se borra al cerrar la pestaña o usar el Botón de Pánico.
              </p>

              <h3>3. Botón de Pánico y Limpieza</h3>
              <p>
                Al activar el "Botón de Pánico", el sitio está programado para intentar limpiar el almacenamiento local de la sesión y redirigir inmediatamente a una página neutral. Sin embargo, no podemos borrar el historial de navegación de su proveedor de internet o del dispositivo mismo. Recomendamos encarecidamente el uso del modo "Incógnito" o "Privado".
              </p>

              <h3>4. Enlaces a Terceros</h3>
              <p>
                Este sitio contiene enlaces a organizaciones externas (como Manuel Solis Law Firm o Líneas Nacionales de Ayuda). Al hacer clic en estos enlaces, usted estará sujeto a las políticas de privacidad de esos sitios externos.
              </p>

            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
              <button 
                onClick={goHome}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors flex items-center"
              >
                <Shield size={18} className="mr-2" />
                Volver a la Página Principal
              </button>
            </div>

          </div>
        </div>
      </main>

      <Footer t={t} setView={() => {}} />
    </div>
  );
}