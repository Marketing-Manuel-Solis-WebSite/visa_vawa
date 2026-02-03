'use client';

import React, { useState } from 'react';
import { FileText, Download, EyeOff, CheckCircle, AlertTriangle, ChevronRight, ChevronLeft, Info, ArrowRight, Shield } from 'lucide-react';

interface EvidenceProps {
  t: any;
  goHome: () => void;
}

export default function Evidence({ t, goHome }: EvidenceProps) {
  const [showDownloadAlert, setShowDownloadAlert] = useState(false);

  const handleFakeDownload = (fileName: string) => {
    setShowDownloadAlert(true);
    setTimeout(() => {
      alert(`[DEMO] Descargando: ${fileName}.pdf\n\nRecuerda: ${t.evidence_guide.download_alert}`);
      setShowDownloadAlert(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <button onClick={goHome} className="text-blue-600 hover:underline mb-6 flex items-center space-x-1">
        <ChevronLeft size={16} /> <span>Volver al Inicio</span>
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        <div className="bg-slate-50 p-8 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-4 text-indigo-600">
            <FileText size={32} />
            <h1 className="text-3xl font-bold text-slate-900">{t.evidence_guide.title}</h1>
          </div>
          <p className="text-xl text-slate-600">{t.evidence_guide.subtitle}</p>
        </div>

        <div className="p-8 space-y-12">
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg flex gap-4">
            <EyeOff className="text-amber-700 shrink-0" size={24} />
            <p className="text-amber-800 leading-relaxed font-medium">{t.evidence_guide.intro}</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
              {t.evidence_guide.sec1_title}
            </h2>
            <ul className="grid gap-3">
              {t.evidence_guide.sec1_list.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-teal-600 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{t.evidence_guide.sec2_title}</h2>
            <p className="text-slate-600 mb-4">{t.evidence_guide.sec2_body}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.evidence_guide.sec2_examples.map((ex: string, idx: number) => (
                <div key={idx} className="bg-white p-3 rounded shadow-sm border border-slate-100 text-slate-700 text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {ex}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
              {t.evidence_guide.sec3_title}
            </h2>
            <div className="space-y-4">
              {t.evidence_guide.sec3_tips.map((tip: string, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 mt-1">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-2">{t.evidence_guide.sec4_title}</h2>
            <p className="text-indigo-700 mb-6">{t.evidence_guide.sec4_desc}</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <button 
                onClick={() => handleFakeDownload('Lista_de_Compras')}
                className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200 hover:shadow-md transition text-left flex items-center justify-between group"
              >
                <div>
                  <span className="block font-bold text-slate-800 mb-1">Lista de Compras.pdf</span>
                  <span className="text-xs text-slate-500">Disfraz para registro</span>
                </div>
                <Download className="text-indigo-400 group-hover:text-indigo-600" />
              </button>

              <button 
                onClick={() => handleFakeDownload('Diario_Bienestar')}
                className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200 hover:shadow-md transition text-left flex items-center justify-between group"
              >
                <div>
                  <span className="block font-bold text-slate-800 mb-1">Diario Bienestar.pdf</span>
                  <span className="text-xs text-slate-500">Registro neutral</span>
                </div>
                <Download className="text-indigo-400 group-hover:text-indigo-600" />
              </button>
            </div>

            {showDownloadAlert && (
              <div className="mt-4 bg-red-100 text-red-800 text-sm p-3 rounded flex gap-2 animate-pulse">
                <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                {t.evidence_guide.download_alert}
              </div>
            )}
          </section>

          <div className="text-center pt-8 border-t border-slate-100">
            <p className="text-slate-600 mb-4">¿Necesitas ayuda personalizada?</p>
            <a href="https://manuelsolis.com" target="_blank" rel="noreferrer" className="inline-flex items-center bg-slate-800 text-white font-bold px-8 py-3 rounded-lg hover:bg-slate-700">
              Consulta Legal <ArrowRight size={18} className="ml-2" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}