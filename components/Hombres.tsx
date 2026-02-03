'use client';

import React from 'react';
import { Users, ChevronLeft, Phone, ExternalLink, CheckCircle, Info, ChevronRight, AlertCircle } from 'lucide-react';

interface HombresProps {
  t: any;
  goHome: () => void;
}

export default function Hombres({ t, goHome }: HombresProps) {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <button onClick={goHome} className="text-purple-600 hover:underline mb-6 flex items-center space-x-1">
        <ChevronLeft size={16} /> <span>Volver al Inicio</span>
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Users size={32} className="text-purple-700" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">El Silencio de los Hombres</h1>
            <p className="text-xl text-slate-600 mt-2">VAWA también es para ti</p>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-r mb-6">
          <p className="text-lg text-purple-900 leading-relaxed">
            El abuso en pareja puede afectar a <strong>cualquier persona</strong>. Hombres también pueden ser víctimas y calificar para VAWA.
          </p>
        </div>
      </div>

      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">La Realidad del Abuso Hacia Hombres</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-r">
            <p className="text-3xl font-bold text-purple-900 mb-1">15-20%</p>
            <p className="text-sm text-purple-700">de peticiones VAWA son de hombres</p>
          </div>
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 rounded-r">
            <p className="text-3xl font-bold text-indigo-900 mb-1">1 de 7</p>
            <p className="text-sm text-indigo-700">hombres experimenta violencia física severa</p>
          </div>
          <div className="bg-cyan-50 border-l-4 border-cyan-600 p-5 rounded-r">
            <p className="text-3xl font-bold text-cyan-900 mb-1">Neutral</p>
            <p className="text-sm text-cyan-700">VAWA es neutral en género</p>
          </div>
        </div>
      </article>

      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Cómo se Manifiesta el Abuso</h2>
        <div className="grid gap-5">
          {[
            { title: 'Violencia Física', desc: 'Golpes, uso de armas, ataques sorpresivos.' },
            { title: 'Control Migratorio', desc: 'Amenazas de reportarte, destruir documentos.' },
            { title: 'Humillación', desc: 'Burlas sobre masculinidad, ridiculización pública.' },
            { title: 'Control Económico', desc: 'Controlar dinero, sabotear empleo.' },
            { title: 'Aislamiento Social', desc: 'Alejarte de familia/amigos, vigilancia.' },
            { title: 'Amenazas con Hijos', desc: 'Usar hijos como arma emocional.' }
          ].map((tipo, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="bg-purple-100 p-2 rounded-lg">
                <AlertCircle size={20} className="text-purple-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{tipo.title}</h3>
                <p className="text-sm text-slate-700">{tipo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 p-8 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Barreras que Enfrentan los Hombres</h2>
        <div className="space-y-4">
          {[
            { barrera: 'Estigma Social', detalle: '"Los hombres no son víctimas" hace que sientan vergüenza.' },
            { barrera: 'Miedo a no ser Creídos', detalle: 'Preocupación de que no tomen en serio su situación.' },
            { barrera: 'Miedo a Perder Hijos', detalle: 'Sistemas que históricamente favorecen a madres.' },
            { barrera: 'Falta de Recursos', detalle: 'Menos refugios específicos para hombres.' },
            { barrera: 'Presión Cultural', detalle: 'Expectativas de "ser fuerte".' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border-l-4 border-amber-500 p-5 rounded-r">
              <h3 className="font-bold text-amber-900 mb-2">{item.barrera}</h3>
              <p className="text-slate-700 text-sm">{item.detalle}</p>
            </div>
          ))}
        </div>
      </article>

      <div className="bg-indigo-900 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">No Estás Solo</h2>
        <p className="text-xl text-indigo-100 mb-8">Miles de hombres han usado VAWA exitosamente.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://manuelsolis.com" target="_blank" rel="noreferrer" className="inline-flex items-center bg-white text-indigo-900 font-bold py-4 px-8 rounded-lg">
            Consulta Legal <ExternalLink size={20} className="ml-2" />
          </a>
          <button onClick={goHome} className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg">
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
}