'use client';
    
import React from 'react';
import { ChevronLeft, ChevronRight, Shield, FileText, Lock } from 'lucide-react';

interface LegalProps {
  type: 'privacy' | 'terms';
  goHome: () => void;
}

export default function Legal({ type, goHome }: LegalProps) {
  const isPrivacy = type === 'privacy';
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 font-sans text-slate-800">
      
      {/* Navegación Superior */}
      <nav className="flex items-center text-sm text-slate-500 mb-8 border-b border-slate-200 pb-4">
        <button onClick={goHome} className="hover:text-[#1a365d] transition-colors flex items-center font-medium">
          <ChevronLeft size={16} className="mr-1" />
          Regresar al Inicio
        </button>
        <ChevronRight size={16} className="mx-2 text-slate-300" />
        <span className="font-bold text-[#1a365d]">
          {isPrivacy ? 'Política de Privacidad' : 'Términos de Uso'}
        </span>
      </nav>

      <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-12 shadow-sm">
        
        {/* Encabezado */}
        <div className="mb-10 border-b border-slate-100 pb-8">
          <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            {isPrivacy ? <Lock size={14} /> : <FileText size={14} />}
            <span>Información Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] font-serif mb-4">
            {isPrivacy ? 'Política de Privacidad y Seguridad' : 'Términos y Condiciones de Uso'}
          </h1>
          <p className="text-slate-500 text-sm">
            Última actualización: {new Date().getFullYear()}
          </p>
        </div>

        {/* Contenido */}
        <div className="prose prose-slate max-w-none text-slate-600">
          
          {isPrivacy ? (
            <>
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
            </>
          ) : (
            <>
              <h3>1. Naturaleza Informativa</h3>
              <p>
                El contenido proporcionado en Visa-VAWA.com es exclusivamente para fines educativos e informativos. <strong>No constituye asesoría legal</strong> ni establece una relación abogado-cliente. Las leyes de inmigración son complejas y están sujetas a cambios; siempre debe consultar a un abogado calificado para su caso específico.
              </p>

              <h3>2. Uso del Sitio</h3>
              <p>
                Usted acepta utilizar este sitio solo para fines legales y de una manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute del sitio por parte de terceros. Se prohíbe cualquier intento de dañar la infraestructura tecnológica o recolectar datos de otros usuarios.
              </p>

              <h3>3. Limitación de Responsabilidad</h3>
              <p>
                Visa-VAWA.com y sus creadores no se hacen responsables de ninguna acción tomada basada en la información contenida en este sitio. No garantizamos que la información esté libre de errores o completamente actualizada al momento de su lectura.
              </p>

              <h3>4. Seguridad del Usuario</h3>
              <p>
                El usuario reconoce que el uso de internet puede dejar rastros digitales. Es responsabilidad exclusiva del usuario tomar precauciones de seguridad (como usar dispositivos seguros o modos de navegación privada) si sospecha que su actividad está siendo monitoreada por un tercero.
              </p>
            </>
          )}

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
  );
}