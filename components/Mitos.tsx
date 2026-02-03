'use client';

import React, { useState } from 'react';
import { AlertTriangle, ChevronRight, ChevronLeft, CheckCircle, X, Scale, Info, ExternalLink } from 'lucide-react';

interface MitosProps {
  t: any;
  goHome: () => void;
}

interface Mito {
  id: number;
  titulo: string;
  mito: string;
  realidad: string;
  detalles: string[];
  fuente?: string;
  cta: string;
}

export default function Mitos({ t, goHome }: MitosProps) {
  const [expandedMito, setExpandedMito] = useState<number | null>(null);

  const mitos: Mito[] = [
    {
      id: 1,
      titulo: 'Mito #1',
      mito: '"Si llamas a la policía, te deportan"',
      realidad: 'La violencia doméstica es un crimen federal sin importar tu estatus migratorio.',
      detalles: [
        'La policía local NO "deporta" — la deportación es un proceso federal separado.',
        'Existen protecciones federales de confidencialidad para sobrevivientes (8 U.S.C. § 1367).',
        'El contexto local importa. Habla con una organización local de violencia doméstica.',
      ],
      fuente: '8 U.S.C. § 1367',
      cta: 'Si estás en peligro, llama al 911 o a la Línea Nacional: 1-800-799-7233'
    },
    {
      id: 2,
      titulo: 'Mito #2',
      mito: '"Si te divorcias, pierdes los papeles"',
      realidad: 'VAWA permite autopetición incluso después del divorcio (dentro de 2 años).',
      detalles: [
        'Si presentas VAWA mientras casado, el divorcio posterior generalmente NO destruye tu caso.',
        'Cada caso depende de fechas y evidencia específica.',
      ],
      fuente: 'USCIS Policy Manual, Vol. 6',
      cta: 'Consulta con un abogado especializado en VAWA.'
    },
    {
      id: 3,
      titulo: 'Mito #3',
      mito: '"VAWA es solo para mujeres"',
      realidad: 'VAWA es neutral en género. Hombres también pueden calificar.',
      detalles: [
        'Aproximadamente 15-20% de peticiones VAWA son de hombres.',
        'Los requisitos son los mismos para todos los géneros.',
      ],
      fuente: 'VAWA Reauthorization Act',
      cta: 'Visita nuestra sección sobre VAWA para Hombres.'
    },
    {
      id: 4,
      titulo: 'Mito #4',
      mito: '"Si no hay golpes, no hay caso"',
      realidad: 'VAWA cubre "extreme cruelty" — incluye abuso psicológico y control.',
      detalles: [
        'Amenazas de deportación, control financiero, aislamiento son formas de extreme cruelty.',
        'USCIS considera "cualquier evidencia creíble".',
      ],
      fuente: 'USCIS Policy Manual - Battery/Extreme Cruelty',
      cta: 'Lee nuestra Guía de Evidencia Silenciosa.'
    },
    {
      id: 5,
      titulo: 'Mito #5',
      mito: '"Si entraste sin papeles, no puedes arreglar"',
      realidad: 'VAWA tiene excepciones para entrada sin inspección, pero hay matices.',
      detalles: [
        'VAWA ofrece excepciones específicas, pero pueden existir otras barreras.',
        'Puede requerir análisis legal detallado y en algunos casos waivers.',
      ],
      fuente: 'INA § 245(a) & USCIS Guidance',
      cta: 'Esto es complejo. Habla con un abogado ANTES de tomar decisiones.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <button onClick={goHome} className="text-red-600 hover:underline mb-6 flex items-center space-x-1">
        <ChevronLeft size={16} /> <span>Volver al Inicio</span>
      </button>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
          <AlertTriangle className="text-red-600" size={36} />
          Mitos del Miedo
        </h1>
        <p className="text-xl text-slate-600">Lo que dicen los agresores vs. la realidad legal</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
        <Info className="text-blue-600 mb-2" size={24} />
        <p className="text-slate-700">Muchos agresores usan el miedo migratorio para controlar. VAWA existe precisamente para romper este ciclo.</p>
      </div>

      <div className="space-y-6">
        {mitos.map((mito) => (
          <article key={mito.id} className="bg-white rounded-xl shadow-sm border-2 border-slate-200 hover:border-red-400 transition-all overflow-hidden">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-slate-200 p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      {mito.id}
                    </span>
                    <h3 className="text-sm font-semibold text-red-700 uppercase">{mito.titulo}</h3>
                  </div>
                  <div className="bg-white border-l-4 border-red-600 p-4 rounded-r mb-3">
                    <p className="text-lg font-bold text-slate-900 flex items-start gap-2">
                      <X className="text-red-600 shrink-0 mt-1" size={20} />
                      {mito.mito}
                    </p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                    <p className="text-lg font-bold text-slate-900 flex items-start gap-2">
                      <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                      {mito.realidad}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedMito(expandedMito === mito.id ? null : mito.id)}
                  className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium shrink-0"
                >
                  {expandedMito === mito.id ? 'Ocultar' : 'Ver Detalles'}
                </button>
              </div>
            </div>

            {expandedMito === mito.id && (
              <div className="p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Scale className="text-blue-600" size={20} />
                  La Realidad Legal:
                </h4>
                <ul className="space-y-3 mb-4">
                  {mito.detalles.map((detalle, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                      <ChevronRight className="text-blue-600 shrink-0 mt-1" size={18} />
                      <span className="text-slate-800">{detalle}</span>
                    </li>
                  ))}
                </ul>
                {mito.fuente && (
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
                    <p className="text-sm text-blue-900"><strong>Fuente Legal:</strong> {mito.fuente}</p>
                  </div>
                )}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                  <p className="text-sm text-amber-900 font-medium">{mito.cta}</p>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-12 bg-blue-900 rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">¿Tienes Preguntas sobre Tu Caso?</h2>
        <a href="https://manuelsolis.com" target="_blank" rel="noreferrer" className="inline-flex items-center bg-white text-blue-900 font-bold py-4 px-8 rounded-lg">
          Consulta Legal <ExternalLink size={20} className="ml-2" />
        </a>
      </div>
    </div>
  );
}