'use client';

import React, { useState } from 'react';
import { Shield, ChevronLeft, Smartphone, Monitor, Wifi, Lock, Eye, AlertTriangle, CheckCircle, Info, ExternalLink, ChevronRight, Phone } from 'lucide-react';

interface SecurityProps {
  t: any;
  goHome: () => void;
}

export default function Security({ t, goHome }: SecurityProps) {
  const [activeTab, setActiveTab] = useState<'phone' | 'computer' | 'general'>('general');

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <button onClick={goHome} className="text-orange-600 hover:underline mb-6 flex items-center space-x-1">
        <ChevronLeft size={16} /> <span>Volver al Inicio</span>
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-orange-100 p-3 rounded-lg">
            <Shield size={32} className="text-orange-700" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Seguridad Digital</h1>
            <p className="text-xl text-slate-600 mt-2">Cómo navegar de forma más segura</p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-700 shrink-0 mt-1" size={24} />
            <div>
              <p className="text-lg text-red-900 font-semibold mb-2">
                ⚠️ Advertencia Importante
              </p>
              <p className="text-red-800 leading-relaxed">
                Si compartes dispositivo con la persona agresora o sospechas que te está vigilando electrónicamente, <strong>NO hay forma 100% segura</strong> de ocultar tu actividad en ese dispositivo. Lo más seguro es usar un dispositivo que el agresor no pueda acceder (biblioteca, casa de amigo, centro comunitario).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs de Navegación */}
      <div className="bg-white rounded-t-xl border-x border-t border-slate-200 overflow-hidden mb-0">
        <div className="flex border-b border-slate-200">
          <button
            onClick={() => setActiveTab('general')}
            className={`flex-1 py-4 px-6 font-semibold transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'general' 
                ? 'bg-orange-50 text-orange-700 border-b-2 border-orange-600' 
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Shield size={20} />
            General
          </button>
          <button
            onClick={() => setActiveTab('phone')}
            className={`flex-1 py-4 px-6 font-semibold transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'phone' 
                ? 'bg-orange-50 text-orange-700 border-b-2 border-orange-600' 
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Smartphone size={20} />
            Teléfono
          </button>
          <button
            onClick={() => setActiveTab('computer')}
            className={`flex-1 py-4 px-6 font-semibold transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'computer' 
                ? 'bg-orange-50 text-orange-700 border-b-2 border-orange-600' 
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Monitor size={20} />
            Computadora
          </button>
        </div>
      </div>

      {/* Contenido de Tabs */}
      <div className="bg-white rounded-b-xl border-x border-b border-slate-200 p-8">
        
        {/* TAB: GENERAL */}
        {activeTab === 'general' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Principios Básicos de Seguridad Digital</h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">¿Qué puede monitorear un agresor?</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li className="flex items-start gap-2">
                  <Eye className="shrink-0 mt-0.5" size={16} />
                  <span><strong>Historial de navegación:</strong> Qué sitios visitaste y cuándo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="shrink-0 mt-0.5" size={16} />
                  <span><strong>Llamadas y mensajes:</strong> Si tiene acceso a tu teléfono o cuenta</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="shrink-0 mt-0.5" size={16} />
                  <span><strong>Ubicación GPS:</strong> A través de apps o configuración del teléfono</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="shrink-0 mt-0.5" size={16} />
                  <span><strong>Correos y redes sociales:</strong> Si conoce tus contraseñas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="shrink-0 mt-0.5" size={16} />
                  <span><strong>Apps de &quot;control parental&quot;:</strong> Spyware disfrazado</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Haz Esto
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="shrink-0 mt-0.5" size={16} />
                    <span>Usa dispositivos públicos (biblioteca) para búsquedas sensibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="shrink-0 mt-0.5" size={16} />
                    <span>Navega en modo incógnito/privado cuando sea posible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="shrink-0 mt-0.5" size={16} />
                    <span>Cierra sesión completamente después de usar sitios importantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="shrink-0 mt-0.5" size={16} />
                    <span>Cambia contraseñas desde un dispositivo seguro</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-red-600" />
                  Evita Esto
                </h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="shrink-0 mt-0.5" size={16} />
                    <span>Borrar historial de forma obvia (puede levantar sospechas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="shrink-0 mt-0.5" size={16} />
                    <span>Guardar información sensible en dispositivos compartidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="shrink-0 mt-0.5" size={16} />
                    <span>Usar el Wi-Fi de casa para búsquedas de ayuda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="shrink-0 mt-0.5" size={16} />
                    <span>Confiar solo en el modo incógnito (no es invisible)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 p-5 rounded-lg">
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Info size={20} />
                Modo Incógnito: Lo que SÍ y NO hace
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-green-800 mb-2">✅ SÍ oculta:</p>
                  <ul className="space-y-1 text-green-800">
                    <li>• Historial de navegación local</li>
                    <li>• Cookies temporales</li>
                    <li>• Datos de formularios</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-800 mb-2">❌ NO oculta:</p>
                  <ul className="space-y-1 text-red-800">
                    <li>• Tu actividad del proveedor de Internet (ISP)</li>
                    <li>• Sitios que visitaste (desde el router Wi-Fi)</li>
                    <li>• Apps de monitoreo instaladas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: TELÉFONO */}
        {activeTab === 'phone' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Seguridad en el Teléfono</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                <Smartphone size={20} />
                Señales de que tu teléfono está monitoreado
              </h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="shrink-0 mt-0.5" size={16} />
                  <span>Batería se agota más rápido de lo normal</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="shrink-0 mt-0.5" size={16} />
                  <span>Calentamiento excesivo sin uso intenso</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="shrink-0 mt-0.5" size={16} />
                  <span>Apps desconocidas o que no recuerdas instalar</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="shrink-0 mt-0.5" size={16} />
                  <span>Consumo de datos inusualmente alto</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="shrink-0 mt-0.5" size={16} />
                  <span>El agresor &quot;sabe&quot; cosas que no le contaste</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-3">Pasos para Proteger tu Teléfono</h3>
              <div className="space-y-4">
                {[
                  {
                    num: 1,
                    title: 'Cambia tu PIN/Contraseña',
                    desc: 'Usa un código que el agresor no pueda adivinar. Evita fechas de cumpleaños o aniversarios.'
                  },
                  {
                    num: 2,
                    title: 'Revisa Apps Instaladas',
                    desc: 'Ve a Ajustes > Apps. Busca apps desconocidas como "Find My Kids", "Family Locator", etc.'
                  },
                  {
                    num: 3,
                    title: 'Desactiva Compartir Ubicación',
                    desc: 'iPhone: Ajustes > Privacidad > Servicios de Ubicación. Android: Ajustes > Ubicación.'
                  },
                  {
                    num: 4,
                    title: 'Revisa Acceso a Cuentas',
                    desc: 'Cierra sesiones activas en Google/iCloud desde un dispositivo seguro.'
                  },
                  {
                    num: 5,
                    title: 'Considera un Teléfono Secundario',
                    desc: 'Un teléfono barato prepago (burner phone) para llamadas/búsquedas sensibles.'
                  }
                ].map((paso) => (
                  <div key={paso.num} className="flex gap-4 bg-white p-4 rounded-lg border border-blue-200">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                      {paso.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{paso.title}</h4>
                      <p className="text-sm text-slate-700">{paso.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-300 p-5 rounded-lg">
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Lock size={20} />
                Apps Comunes de Spyware Disfrazado
              </h3>
              <p className="text-sm text-amber-800 mb-3">
                Estas apps se venden como &quot;control parental&quot; pero son usadas para vigilancia:
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-amber-900">
                <div className="bg-white p-3 rounded border border-amber-200">• mSpy</div>
                <div className="bg-white p-3 rounded border border-amber-200">• FlexiSPY</div>
                <div className="bg-white p-3 rounded border border-amber-200">• Find My Kids</div>
                <div className="bg-white p-3 rounded border border-amber-200">• Life360</div>
                <div className="bg-white p-3 rounded border border-amber-200">• Qustodio</div>
                <div className="bg-white p-3 rounded border border-amber-200">• Norton Family</div>
              </div>
              <p className="text-xs text-amber-700 mt-3">
                <strong>Nota:</strong> Algunas de estas apps son legítimas para padres, pero pueden ser abusadas. Si encuentras alguna que no instalaste, investiga.
              </p>
            </div>
          </div>
        )}

        {/* TAB: COMPUTADORA */}
        {activeTab === 'computer' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Seguridad en la Computadora</h2>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r">
              <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <Monitor size={20} />
                Navegación Privada en Diferentes Navegadores
              </h3>
              <div className="space-y-3 text-sm text-purple-800">
                <div className="bg-white p-3 rounded border border-purple-200">
                  <p className="font-bold mb-1">Chrome / Edge:</p>
                  <p>Ctrl + Shift + N (Windows) o Cmd + Shift + N (Mac)</p>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200">
                  <p className="font-bold mb-1">Firefox:</p>
                  <p>Ctrl + Shift + P (Windows) o Cmd + Shift + P (Mac)</p>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200">
                  <p className="font-bold mb-1">Safari:</p>
                  <p>Archivo {'->'} Nueva Ventana Privada (o Cmd + Shift + N)</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
              <h3 className="font-bold text-green-900 mb-3">Borrar Historial de Forma Selectiva</h3>
              <p className="text-sm text-green-800 mb-3">
                Si necesitas borrar historial sin que sea obvio:
              </p>
              <div className="space-y-2 text-sm text-green-800">
                <div className="bg-white p-3 rounded border border-green-200">
                  <p className="font-bold mb-1">1. Borra entradas específicas:</p>
                  <p>En vez de borrar todo, ve al historial (Ctrl + H) y borra solo las páginas sensibles (click derecho {'>'} eliminar).</p>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <p className="font-bold mb-1">2. Mezcla con búsquedas normales:</p>
                  <p>Después de buscar ayuda de VAWA, navega sitios normales (noticias, clima, recetas) para que el historial parezca normal.</p>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <p className="font-bold mb-1">3. Usa pestañas privadas desde el inicio:</p>
                  <p>Así no hay nada que borrar después.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Wifi size={20} />
                Cuidado con el Wi-Fi de Casa
              </h3>
              <p className="text-sm text-blue-800 mb-3">
                Si el agresor controla el router Wi-Fi de casa, puede:
              </p>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="shrink-0 mt-0.5" size={16} />
                  <span>Ver qué sitios web visitas (aunque no el contenido si es HTTPS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="shrink-0 mt-0.5" size={16} />
                  <span>Ver qué dispositivos están conectados</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="shrink-0 mt-0.5" size={16} />
                  <span>Bloquear ciertos sitios</span>
                </li>
              </ul>
              <div className="mt-3 p-3 bg-white rounded border border-blue-300">
                <p className="text-sm text-blue-900">
                  <strong>Solución:</strong> Usa datos móviles (no Wi-Fi) para búsquedas sensibles, o usa Wi-Fi público de biblioteca/cafetería.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recursos Externos */}
      <article className="bg-white rounded-xl border border-slate-200 p-8 mt-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <ExternalLink size={24} className="text-blue-600" />
          Recursos Especializados en Seguridad Tecnológica
        </h2>
        
        <div className="space-y-4">
          <a
            href="https://www.techsafety.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-50 border border-blue-200 p-5 rounded-lg hover:shadow-md transition"
          >
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              Safety Net Project
              <ExternalLink size={16} />
            </h3>
            <p className="text-sm text-blue-800">
              Recursos gratuitos sobre seguridad tecnológica para sobrevivientes de violencia doméstica. Guías detalladas sobre privacidad en teléfonos, computadoras y redes sociales.
            </p>
          </a>

          <a
            href="https://www.consumerreports.org/privacy/how-to-check-your-phone-for-stalkerware/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-purple-50 border border-purple-200 p-5 rounded-lg hover:shadow-md transition"
          >
            <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
              Consumer Reports: Detectar Spyware
              <ExternalLink size={16} />
            </h3>
            <p className="text-sm text-purple-800">
              Guía paso a paso de Consumer Reports sobre cómo detectar y eliminar stalkerware de tu teléfono.
            </p>
          </a>
        </div>
      </article>

      {/* CTA Final */}
      <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl shadow-xl p-8 md:p-10 text-white text-center mt-8">
        <h2 className="text-3xl font-bold mb-4">¿Necesitas Ayuda Ahora?</h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Si sospechas vigilancia electrónica, contacta a una línea de ayuda desde un teléfono seguro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:18007997233"
            className="inline-flex items-center justify-center bg-white text-orange-900 hover:bg-orange-50 font-bold py-4 px-8 rounded-lg shadow-lg transition-all"
          >
            <Phone size={20} className="mr-2" />
            1-800-799-7233 (Línea Nacional)
          </a>
          <button
            onClick={goHome}
            className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all"
          >
            Volver al Inicio
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}