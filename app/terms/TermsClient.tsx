'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, Shield, FileText } from 'lucide-react';

export default function TermsClient() {
  const goHome = () => window.location.href = '/';

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Navegación Superior */}
        <nav className="flex items-center text-sm text-slate-500 mb-8 border-b border-slate-200 pb-4">
          <button onClick={goHome} className="hover:text-[#1a365d] transition-colors flex items-center font-medium">
            <ChevronLeft size={16} className="mr-1" />
            Regresar al Inicio
          </button>
          <ChevronRight size={16} className="mx-2 text-slate-300" />
          <span className="font-bold text-[#1a365d]">Términos de Uso</span>
        </nav>

        <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-12 shadow-sm">
          
          {/* Encabezado */}
          <div className="mb-10 border-b border-slate-100 pb-8">
            <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <FileText size={14} />
              <span>Información Legal</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] font-serif mb-4">
              Términos y Condiciones de Uso
            </h1>
            <p className="text-slate-500 text-sm">
              Última actualización: {new Date().getFullYear()}
            </p>
          </div>

          {/* Contenido */}
          <div className="prose prose-slate max-w-none text-slate-600">
            
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
    </div>
  );
}
