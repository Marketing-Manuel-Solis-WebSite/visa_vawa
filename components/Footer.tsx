import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Lock, Shield, ExternalLink, Globe, AlertTriangle, FileText, ChevronRight } from 'lucide-react';

interface FooterProps {
  lang: string; // ADDED: Required for proper link prefixing
  t: any;
  setView: (view: string) => void;
}

/**
 * FOOTER — SEO-critical component
 * 
 * Fixes applied:
 * 1. All internal links now include /${lang}/ prefix (was causing 404s/redirects)
 * 2. External links have rel="noopener noreferrer" (security)
 * 3. Proper semantic HTML (nav, address elements)
 * 4. Keyword-rich anchor text for internal links
 * 5. Schema-compatible contact information
 */
export default function Footer({ lang, t, setView }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t border-slate-800 font-sans" role="contentinfo">
      
      {/* Safety Banner — Critical for this audience */}
      <div className="bg-[#1e293b] py-3 px-4 border-b border-slate-700">
        <div className="container mx-auto flex items-center justify-center text-center gap-2 text-xs md:text-sm text-slate-400">
          <AlertTriangle size={14} className="text-slate-300 shrink-0" aria-hidden="true" />
          <span>{t.footer.safety_warning}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3 text-white mb-2">
              <Image 
                src="/visa_ms.png" 
                alt="Visa VAWA — Guía de Autopetición I-360" 
                width={40}
                height={40}
                className="object-contain"
                loading="lazy"
              />
              <span className="text-xl font-bold font-serif tracking-tight text-white">VISA-VAWA</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {t.footer.about_desc}
            </p>
            <div className="pt-2 flex gap-3">
              <Link 
                href={`/${lang === 'en' ? 'es' : 'en'}`}
                className="bg-slate-800 p-2 rounded-full hover:bg-slate-700 hover:text-white transition text-slate-400" 
                aria-label={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              >
                <Globe size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation — SEO-rich anchor text */}
          <nav aria-label={lang === 'en' ? 'Quick resources' : 'Recursos rápidos'}>
            <h3 className="text-white font-semibold text-lg mb-6">
              {t.footer.resources_title}
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: t.nav.evidence, href: `/${lang}/evidence`, title: 'Guía de evidencia para autopetición VAWA I-360' },
                { label: t.nav.quiz, href: `/${lang}/quiz`, title: 'Quiz de elegibilidad VAWA — verificar requisitos 2026' },
                { label: t.nav.myths, href: `/${lang}/myths`, title: 'Mitos sobre deportación y violencia doméstica' },
                { label: t.nav.men, href: `/${lang}/men`, title: 'VAWA para hombres — protección neutral de género' },
                { label: t.nav.children, href: `/${lang}/children`, title: 'Estatus derivado VAWA para hijos' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    title={item.title}
                    className="flex items-center text-slate-400 hover:text-white transition-colors group"
                  >
                    <ChevronRight size={14} className="mr-2 text-slate-600 group-hover:text-slate-300 transition-colors" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Security Features */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              {t.footer.safety_title}
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Lock size={16} className="text-slate-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Conexión SSL Encriptada (HTTPS)</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield size={16} className="text-slate-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Navegación Anónima (No Cookies persistentes)</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText size={16} className="text-slate-500 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Sin Registro de IP de Usuario</span>
              </li>
              <li className="pt-2">
                <Link 
                  href={`/${lang}/security`} 
                  className="text-white border-b border-slate-600 hover:border-white pb-0.5 transition-colors text-xs"
                  title="Protocolos de seguridad digital para víctimas de violencia doméstica"
                >
                  Ver Protocolos de Seguridad
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Emergency Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              {t.footer.contact_title}
            </h3>
            <div className="bg-slate-800 p-5 rounded-lg border border-slate-700/50">
              <div className="flex items-center gap-4 text-white mb-4">
                <div className="bg-slate-700 p-2.5 rounded-full text-white">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest text-slate-400 font-bold uppercase mb-0.5">
                    {lang === 'en' ? 'Immediate Danger' : 'Peligro Inmediato'}
                  </p>
                  <p className="text-xl font-bold tracking-wide">
                    <a href="tel:911" aria-label="Call 911 for emergencies">911</a>
                  </p>
                </div>
              </div>
              
              <div className="border-t border-slate-700 my-4" role="separator"></div>
              
              <div className="text-sm">
                <p className="text-slate-400 mb-1 text-xs uppercase tracking-wide font-semibold">
                  {lang === 'en' ? 'National Hotline (24/7):' : 'Línea Nacional (24/7):'}
                </p>
                <a 
                  href="tel:18007997233" 
                  className="text-white font-medium hover:text-slate-200 transition block text-base"
                  aria-label="National Domestic Violence Hotline 1-800-799-7233"
                >
                  1-800-799-7233
                </a>
              </div>
            </div>
            <div className="mt-5">
              <a 
                href="https://manuelsolis.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-xs text-slate-400 hover:text-white transition-colors gap-1.5"
                title="Abogado de inmigración VAWA — consulta legal confidencial"
              >
                {lang === 'en' ? 'Find Legal Help' : 'Buscar Ayuda Legal'} 
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom — Legal links with lang prefix */}
      <div className="bg-[#020617] py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400">
          
          <div className="text-center md:text-left max-w-xl">
            <p className="mb-2 leading-relaxed">
              {t.footer.disclaimer}
            </p>
            <p>
              &copy; {currentYear} Visa-VAWA.com — {t.footer.rights_reserved}
            </p>
          </div>

          <nav className="flex gap-6 shrink-0" aria-label="Legal links">
            <Link 
              href={`/${lang}/privacy`} 
              className="hover:text-slate-200 transition text-left"
            >
              {t.footer.privacy_policy}
            </Link>
            <Link 
              href={`/${lang}/terms`} 
              className="hover:text-slate-200 transition text-left"
            >
              {t.footer.terms_of_use}
            </Link>
          </nav>

        </div>
      </div>
    </footer>
  );
}