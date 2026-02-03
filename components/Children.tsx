'use client';

import React from 'react';
import { Baby, ChevronLeft, Shield, Heart, GraduationCap, Briefcase, AlertCircle, CheckCircle, Info, ExternalLink, ChevronRight } from 'lucide-react';

interface ChildrenProps {
  t: any;
  goHome: () => void;
}

export default function Children({ t, goHome }: ChildrenProps) {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <button onClick={goHome} className="text-green-600 hover:underline mb-6 flex items-center space-x-1">
        <ChevronLeft size={16} /> <span>Volver al Inicio</span>
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-green-100 p-3 rounded-lg">
            <Baby size={32} className="text-green-700" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Tus Hijos Importan</h1>
            <p className="text-xl text-slate-600 mt-2">Cómo VAWA puede proteger a la familia</p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-r mb-6">
          <p className="text-lg text-green-900 leading-relaxed">
            Tu autopetición VAWA no solo te protege a ti. <strong>También puede proteger a tus hijos</strong>, incluso si ellos no fueron directamente abusados.
          </p>
        </div>
      </div>

      {/* SECCIÓN A: Protección Migratoria para Hijos Derivados */}
      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-blue-100 p-3 rounded-lg shrink-0">
            <Shield size={28} className="text-blue-700" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Protección Migratoria para Hijos Derivados
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Cuando presentas una autopetición VAWA, puedes incluir a tus hijos como "derivados" en ciertos casos.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r">
            <h3 className="font-bold text-blue-900 mb-3 text-lg">¿Quiénes califican como hijos derivados?</h3>
            <ul className="space-y-2 text-blue-900">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 shrink-0 mt-1" size={18} />
                <span><strong>Hijos biológicos</strong> solteros menores de 21 años</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 shrink-0 mt-1" size={18} />
                <span><strong>Hijastros</strong> (en casos de matrimonio con el agresor)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 shrink-0 mt-1" size={18} />
                <span><strong>Hijos adoptados</strong> (bajo ciertas condiciones)</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-amber-700 shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Importante: Timing y "Aging Out"</h3>
                <p className="text-amber-800 text-sm mb-3">
                  El momento de presentar tu petición VAWA es crucial. Los hijos deben ser <strong>solteros y menores de 21 años</strong> al momento de la presentación.
                </p>
                <p className="text-amber-800 text-sm">
                  Existe protección contra "aging out" bajo el Child Status Protection Act (CSPA) que puede aplicar en casos VAWA. Consulta con un abogado sobre tu situación específica.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info size={20} className="text-blue-600" />
                Si el agresor es tu cónyuge:
              </h3>
              <p className="text-sm text-slate-700">
                Puedes incluir a tus hijos (biológicos o hijastros) como derivados en tu petición I-360.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info size={20} className="text-blue-600" />
                Si el agresor es tu padre/madre:
              </h3>
              <p className="text-sm text-slate-700">
                Como hijo/a víctima, puedes incluir a tus propios hijos menores como derivados.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* SECCIÓN B: Trabajo y Escuela */}
      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-purple-100 p-3 rounded-lg shrink-0">
            <Briefcase size={28} className="text-purple-700" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Trabajo y Escuela para Tus Hijos
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Una vez aprobada tu autopetición VAWA, tus hijos derivados pueden acceder a beneficios importantes.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r">
            <div className="flex items-start gap-3">
              <Briefcase className="text-green-700 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-green-900 mb-2 text-lg">Autorización de Empleo (EAD)</h3>
                <p className="text-green-800 mb-2">
                  Cuando tu autopetición VAWA (I-360) es aprobada o recibes una determinación "prima facie", tus hijos derivados pueden solicitar:
                </p>
                <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                  <li>Permiso de trabajo (Employment Authorization Document - EAD)</li>
                  <li>Categoría de elegibilidad: (c)(31) para VAWA principal aprobado</li>
                  <li>Válido típicamente por 2 años, renovable</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r">
            <div className="flex items-start gap-3">
              <GraduationCap className="text-blue-700 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-lg">Acceso a Educación</h3>
                <p className="text-blue-800 mb-2">
                  Con estatus derivado VAWA aprobado, tus hijos pueden:
                </p>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Inscribirse en escuelas públicas (K-12 siempre es un derecho)</li>
                  <li>Acceder a educación superior con posibilidad de matrícula estatal (varía por estado)</li>
                  <li>Solicitar ayuda financiera federal en algunos casos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 p-5 rounded-lg">
            <p className="text-sm text-slate-700">
              <strong>Nota:</strong> La elegibilidad específica para beneficios varía según el estado y la situación. USCIS proporciona instrucciones detalladas en el formulario I-765 (Solicitud de Autorización de Empleo) bajo la categoría VAWA.
            </p>
          </div>
        </div>
      </article>

      {/* SECCIÓN C: Trauma y Seguridad */}
      <article className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl border-2 border-pink-200 p-8 md:p-10 mb-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-pink-100 p-3 rounded-lg shrink-0">
            <Heart size={28} className="text-pink-700" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Trauma y Bienestar de los Hijos
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Los niños que presencian violencia doméstica también son víctimas, aunque no sean golpeados directamente.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border-l-4 border-pink-500 p-5 rounded-r">
            <h3 className="font-bold text-pink-900 mb-3 text-lg">Señales de Trauma en Niños</h3>
            <p className="text-pink-800 mb-3 text-sm">
              Aunque cada niño reacciona diferente, algunas señales comunes incluyen:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Regresión en el desarrollo (mojar la cama, chuparse el dedo)',
                'Pesadillas o problemas para dormir',
                'Ansiedad, miedo excesivo o estar siempre alerta',
                'Cambios en el rendimiento escolar',
                'Agresividad o retraimiento social',
                'Dolores físicos sin causa médica (dolores de cabeza, estómago)'
              ].map((señal, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <AlertCircle className="text-pink-600 shrink-0 mt-0.5" size={16} />
                  <span>{señal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-pink-200 p-5 rounded-lg">
            <h3 className="font-bold text-pink-900 mb-3 flex items-center gap-2">
              <Heart size={20} className="text-pink-600" />
              Cuándo Buscar Ayuda Profesional
            </h3>
            <p className="text-sm text-slate-700 mb-3">
              Considera terapia o consejería para tus hijos si:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <ChevronRight className="text-pink-600 shrink-0 mt-0.5" size={16} />
                <span>Muestran cambios significativos en comportamiento o estado de ánimo</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-pink-600 shrink-0 mt-0.5" size={16} />
                <span>Expresan miedo constante o tienen flashbacks</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-pink-600 shrink-0 mt-0.5" size={16} />
                <span>Tienen dificultades en la escuela o con amistades</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="text-pink-600 shrink-0 mt-0.5" size={16} />
                <span>Normalizan o imitan comportamientos violentos</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-100 border border-blue-300 p-5 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Info size={20} />
              Recursos de Apoyo para Familias
            </h3>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2">
                <ChevronRight className="shrink-0 mt-0.5" size={16} />
                <span><strong>Línea Nacional:</strong> 1-800-799-7233 (también ofrece recursos para niños)</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="shrink-0 mt-0.5" size={16} />
                <span><strong>Childhelp National Child Abuse Hotline:</strong> 1-800-422-4453</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="shrink-0 mt-0.5" size={16} />
                <span><strong>Centros locales:</strong> Muchos refugios de violencia doméstica ofrecen terapia infantil</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* Plan de Seguridad Familiar */}
      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Plan de Seguridad Familiar</h2>
        
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r">
            <h3 className="font-bold text-green-900 mb-2">Si decides quedarte (por ahora):</h3>
            <ul className="text-sm text-green-800 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="shrink-0 mt-0.5" size={16} />
                <span>Identifica lugares seguros en la casa donde ir durante un altercado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="shrink-0 mt-0.5" size={16} />
                <span>Enseña a tus hijos a llamar al 911 y cuándo hacerlo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="shrink-0 mt-0.5" size={16} />
                <span>Ten una palabra clave que signifique "peligro" que tus hijos entiendan</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r">
            <h3 className="font-bold text-amber-900 mb-2">Si planeas irte:</h3>
            <ul className="text-sm text-amber-800 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="shrink-0 mt-0.5" size={16} />
                <span>Guarda copias de documentos importantes en lugar seguro (certificados de nacimiento, pasaportes, registros escolares)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="shrink-0 mt-0.5" size={16} />
                <span>Prepara una "bolsa de escape" con artículos esenciales para tus hijos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="shrink-0 mt-0.5" size={16} />
                <span>Identifica dónde podrías quedarte (refugio, familia, amigo de confianza)</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* CTA Final */}
      <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-2xl shadow-xl p-8 md:p-10 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Protege a Tu Familia</h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Un abogado especializado en VAWA puede ayudarte a entender cómo incluir y proteger a tus hijos en tu petición.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="https://manuelsolis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-green-900 hover:bg-green-50 font-bold py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Consulta Legal Confidencial
            <ExternalLink size={20} className="ml-2" />
          </a>
          <button
            onClick={goHome}
            className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all"
          >
            Volver al Inicio
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-green-200">
          <Shield size={16} />
          <span>Tus hijos merecen un futuro seguro</span>
        </div>
      </div>
    </div>
  );
}