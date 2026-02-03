import React from 'react';
import { Phone, Lock } from 'lucide-react';

interface FooterProps {
  t: any;
  setView: (view: string) => void;
}

export default function Footer({ t, setView }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
        
        {/* Columna 1: Contacto de Emergencia */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Visa-VAWA.com</h4>
          <p className="mb-4">{t.footer.disclaimer}</p>
          <div className="flex items-center space-x-2 text-white">
            <Phone size={16} />
            <span className="font-bold text-lg">911 (Emergency)</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-300 mt-2">
            <Phone size={16} />
            <span>1-800-799-7233 (National Hotline)</span>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-white font-bold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><button onClick={() => setView('evidence')} className="hover:text-white text-left">Evidence Guide</button></li>
            <li><button onClick={() => setView('quiz')} className="hover:text-white text-left">Eligibility Check</button></li>
            <li><a href="#" className="hover:text-white">Find Legal Aid</a></li>
            <li><a href="#" className="hover:text-white">USCIS Forms (External)</a></li>
          </ul>
        </div>

        {/* Columna 3: Privacidad */}
        <div>
          <h4 className="text-white font-bold mb-4">Privacy</h4>
          <p className="mb-4">
            We do not track your IP address. We do not use cookies that persist after you close your browser.
          </p>
          <div className="flex items-center space-x-2">
            <Lock size={14} />
            <span>SSL Secured Connection</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs">
        {t.footer.copyright}
      </div>
    </footer>
  );
}