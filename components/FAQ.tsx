import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  q: string; // La pregunta
  a: string; // La respuesta
}

/**
 * FAQItem
 * Componente de acordeón mejorado con estilos visuales más pulidos
 * y mejor feedback visual al interactuar.
 */
export default function FAQItem({ q, a }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`border border-slate-200 rounded-lg mb-3 transition-all duration-200 overflow-hidden ${
        isOpen ? 'bg-blue-50/50 border-blue-200 shadow-sm' : 'bg-white hover:border-blue-300'
      }`}
    >
      <button 
        className="w-full flex justify-between items-start p-5 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <HelpCircle 
            size={20} 
            className={`mt-0.5 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`} 
          />
          <span className={`text-lg font-medium pr-4 transition-colors ${isOpen ? 'text-blue-900' : 'text-slate-800 group-hover:text-blue-700'}`}>
            {q}
          </span>
        </div>
        
        {isOpen ? (
          <ChevronUp className="text-blue-600 flex-shrink-0 transition-transform mt-1" />
        ) : (
          <ChevronDown className="text-slate-400 flex-shrink-0 group-hover:text-blue-500 transition-transform mt-1" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-5 pb-5 pl-12 text-slate-600 leading-relaxed animate-in slide-in-from-top-1 fade-in duration-200 border-t border-blue-100/50 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}