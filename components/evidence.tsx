'use client';

import React, { useState } from 'react';
import { 
  FileText, Download, EyeOff, CheckCircle, AlertTriangle, 
  ChevronRight, ChevronLeft, Info, ArrowRight, Shield, 
  Lock, Scale, BookOpen, FileCheck 
} from 'lucide-react';

interface EvidenceProps {
  t: any;
  goHome: () => void;
}

export default function Evidence({ t, goHome }: EvidenceProps) {
  const [showDownloadAlert, setShowDownloadAlert] = useState(false);

  const handleFakeDownload = (fileName: string) => {
    setShowDownloadAlert(true);
    setTimeout(() => {
      alert(`[DEMO] Descargando: ${fileName}.pdf\n\nALERTA DE SEGURIDAD: En un caso real, asegúrate de cambiar el nombre de este archivo inmediatamente o imprimirlo y borrarlo.`);
      setShowDownloadAlert(false);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 font-sans text-slate-800">
      
      {/* Navegación Superior */}
      <nav className="flex items-center text-sm text-slate-500 mb-8 border-b border-slate-200 pb-4">
        <button onClick={goHome} className="hover:text-[#1a365d] transition-colors flex items-center font-medium">
          <ChevronLeft size={16} className="mr-1" />
          Regresar al Inicio
        </button>
        <ChevronRight size={16} className="mx-2 text-slate-300" />
        <span className="font-bold text-[#1a365d]">Guía Oficial de Evidencia</span>
      </nav>

      <div className="grid lg:grid-cols-12 gap-10">
        
        {/* COLUMNA PRINCIPAL (CONTENIDO) - Ocupa 8/12 columnas */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Encabezado */}
          <header>
            <div className="inline-flex items-center space-x-2 bg-[#1a365d] text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
              <Scale size={14} />
              <span>Estándar Legal: "Any Credible Evidence"</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#1a365d] font-serif mb-6 leading-tight">
              Cómo construir un caso sólido sin ponerte en riesgo
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              La ley VAWA reconoce que los abusadores suelen destruir documentos o impedir el acceso a ellos. Por eso, USCIS utiliza un estándar flexible llamado <strong>"Cualquier Evidencia Creíble"</strong>. No necesitas un reporte policial para ganar tu caso.
            </p>
          </header>

          {/* Alerta de Seguridad */}
          <div className="bg-slate-100 border-l-8 border-[#1a365d] p-6 rounded-r-lg shadow-sm">
            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-full border border-slate-200 shrink-0 h-fit shadow-sm">
                <EyeOff className="text-[#1a365d]" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-[#1a365d] text-lg mb-2">Protocolo de Seguridad Digital</h3>
                <p className="text-slate-700 leading-relaxed text-base">
                  Recopilar pruebas puede ser peligroso. Si vives con tu agresor, <strong>no guardes evidencia en este dispositivo</strong>. Utiliza un correo electrónico secreto al que solo tú tengas acceso, una caja de seguridad en el banco, o deja copias físicas con una persona de total confianza fuera de tu hogar.
                </p>
              </div>
            </div>
          </div>

          {/* SECCIÓN 1: TIPOS DE EVIDENCIA */}
          <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4">
              <div className="bg-[#1a365d] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold font-serif text-xl">1</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] font-serif">
                Categorías de Evidencia Aceptada
              </h2>
            </div>

            <div className="space-y-8">
              {/* Categoría A */}
              <div>
                <h3 className="flex items-center text-xl font-bold text-slate-900 mb-4">
                  <FileCheck className="mr-2 text-blue-700" />
                  A. Evidencia de Abuso (No requiere policía)
                </h3>
                <p className="text-slate-600 mb-4 text-lg">
                  El abuso no es solo físico. USCIS acepta pruebas de <em>"Crueldad Extrema"</em> (abuso psicológico, financiero o emocional).
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Órdenes de restricción (incluso si expiraron)",
                    "Registros médicos de lesiones o visitas por ansiedad/estrés",
                    "Mensajes de texto o emails con amenazas o insultos",
                    "Fotos de lesiones, objetos rotos o daños en la casa",
                    "Cartas de consejeros, psicólogos o trabajadores sociales",
                    "Testimonios de refugios de violencia doméstica"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-slate-50 p-3 rounded border border-slate-100 text-sm md:text-base">
                      <CheckCircle size={18} className="text-green-600 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-slate-100" />

              {/* Categoría B */}
              <div>
                <h3 className="flex items-center text-xl font-bold text-slate-900 mb-4">
                  <BookOpen className="mr-2 text-blue-700" />
                  B. Tu Declaración Personal (Affidavit)
                </h3>
                <p className="text-slate-600 mb-4 text-lg">
                  Esta es a menudo <strong>la pieza más importante</strong> de tu caso. Es tu oportunidad de contar tu historia con tus propias palabras.
                </p>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Qué debe incluir tu declaración:</h4>
                  <ul className="space-y-2 text-blue-800 text-base">
                    <li>• <strong>El Cortejo:</strong> Cómo se conocieron y cómo empezó la relación (para probar que fue de buena fe).</li>
                    <li>• <strong>El Cambio:</strong> Cuándo empezó a cambiar el comportamiento de tu pareja.</li>
                    <li>• <strong>Incidentes Detallados:</strong> Describe incidentes específicos de abuso (fechas aproximadas, qué pasó, cómo te sentiste).</li>
                    <li>• <strong>Efectos:</strong> Cómo el abuso ha afectado tu salud, trabajo y bienestar.</li>
                  </ul>
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* Categoría C */}
              <div>
                <h3 className="flex items-center text-xl font-bold text-slate-900 mb-4">
                  <Shield className="mr-2 text-blue-700" />
                  C. Evidencia de "Buena Fe" y Convivencia
                </h3>
                <p className="text-slate-600 mb-4 text-lg">
                  Debes probar que el matrimonio no fue por papeles y que vivieron juntos en algún momento.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <strong className="block text-[#1a365d] mb-2">Pruebas de Residencia Común:</strong>
                    <ul className="text-sm space-y-1 list-disc list-inside text-slate-700">
                      <li>Contratos de alquiler conjuntos</li>
                      <li>Recibos de servicios (luz, agua)</li>
                      <li>Correspondencia dirigida a ambos</li>
                      <li>Documentos escolares de los hijos</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <strong className="block text-[#1a365d] mb-2">Pruebas de Matrimonio Real:</strong>
                    <ul className="text-sm space-y-1 list-disc list-inside text-slate-700">
                      <li>Fotos de la boda y eventos familiares</li>
                      <li>Cuentas bancarias conjuntas</li>
                      <li>Pólizas de seguro compartidas</li>
                      <li>Declaraciones de impuestos conjuntas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 2: ESTRATEGIAS CUANDO NO HAY DOCUMENTOS */}
          <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
              <div className="bg-[#1a365d] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold font-serif text-xl">2</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] font-serif">
                ¿Qué hago si no tengo documentos?
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 mb-6">
              Es común que el agresor controle todos los papeles. Si no tienes acceso a certificados de nacimiento o matrimonio, existen estrategias legales:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col h-full bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Solicitud de Récords Públicos</h4>
                <p className="text-slate-700 text-sm flex-grow">
                  Muchos documentos (como actas de matrimonio o divorcio, y escrituras de propiedad) son registros públicos en EE. UU. Se pueden solicitar copias en la corte local o la oficina del condado sin que tu pareja se entere.
                </p>
              </div>
              
              <div className="flex flex-col h-full bg-slate-50 p-5 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Cartas de Testigos (Affidavits)</h4>
                <p className="text-slate-700 text-sm flex-grow">
                  Si no hay papeles, las declaraciones juradas de personas que conocían la relación (vecinos, pastores, amigos) pueden servir como prueba secundaria para demostrar que vivían juntos.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* COLUMNA LATERAL (STICKY) - Ocupa 4/12 columnas */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* Contenedor Sticky */}
          <div className="sticky top-24 space-y-6">
            
            {/* Widget de Plantillas Disfrazadas */}
            <div className="bg-[#f1f5f9] border border-slate-300 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#1a365d] p-2 rounded text-white">
                  <FileText size={20} />
                </div>
                <h3 className="font-bold text-[#1a365d] text-lg font-serif">Plantillas Disfrazadas</h3>
              </div>
              
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Descarga estas herramientas diseñadas para parecer documentos cotidianos (como una lista del supermercado) pero estructuradas para ayudarte a registrar incidentes de abuso con fechas y detalles.
              </p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => handleFakeDownload('Lista_Supermercado_Log')}
                  className="w-full bg-white hover:bg-white p-4 rounded-lg border border-slate-300 hover:border-[#1a365d] hover:shadow-md transition-all text-left group"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-800 group-hover:text-[#1a365d]">Lista de Compras.pdf</span>
                    <Download size={18} className="text-slate-400 group-hover:text-[#1a365d]" />
                  </div>
                  <span className="text-xs text-slate-500 block">Apariencia: Lista de víveres</span>
                </button>

                <button 
                  onClick={() => handleFakeDownload('Diario_Escolar_Log')}
                  className="w-full bg-white hover:bg-white p-4 rounded-lg border border-slate-300 hover:border-[#1a365d] hover:shadow-md transition-all text-left group"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-800 group-hover:text-[#1a365d]">Notas Escolares.pdf</span>
                    <Download size={18} className="text-slate-400 group-hover:text-[#1a365d]" />
                  </div>
                  <span className="text-xs text-slate-500 block">Apariencia: Apuntes de clase</span>
                </button>
              </div>

              {showDownloadAlert && (
                <div className="mt-4 bg-slate-800 text-white text-xs p-4 rounded-lg flex gap-3 items-start animate-fade-in shadow-lg">
                  <AlertTriangle size={16} className="shrink-0 mt-0.5 text-yellow-400" />
                  <p className="font-medium">{t.evidence_guide.download_alert}</p>
                </div>
              )}
            </div>

            {/* Widget de Asesoría Legal */}
            <div className="bg-[#1a365d] text-white p-8 rounded-xl text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Scale size={100} />
              </div>
              
              <h4 className="font-bold font-serif text-2xl mb-3 relative z-10">¿Caso Complejo?</h4>
              <p className="text-blue-100 text-sm mb-6 relative z-10 leading-relaxed">
                Un abogado puede evaluar la fuerza de tu evidencia actual y ayudarte a obtener récords públicos sin alertar a tu pareja.
              </p>
              
              <a 
                href="https://manuelsolis.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center w-full bg-white text-[#1a365d] font-bold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors shadow-md relative z-10"
              >
                Análisis de Caso Confidencial <ArrowRight size={18} className="ml-2" />
              </a>
            </div>

            {/* Nota de pie */}
            <div className="text-center px-4">
              <p className="text-xs text-slate-400">
                Este sitio es puramente informativo y no constituye consejo legal.
              </p>
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
}