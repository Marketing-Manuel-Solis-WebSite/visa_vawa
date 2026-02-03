import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  q: string; // La pregunta
  a: string; // La respuesta
}

/**
 * FAQItem
 * Un componente de acordeón individual para la sección de preguntas frecuentes.
 * Soporta animación básica de apertura/cierre.
 */
export default function FAQItem({ q, a }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-slate-800 pr-4 group-hover:text-blue-700 transition-colors">
          {q}
        </span>
        {isOpen ? (
          <ChevronUp className="text-blue-600 flex-shrink-0 transition-transform" />
        ) : (
          <ChevronDown className="text-slate-400 flex-shrink-0 group-hover:text-blue-500 transition-transform" />
        )}
      </button>
      
      {isOpen && (
        <div className="pb-4 text-slate-600 leading-relaxed animate-in slide-in-from-top-2 duration-200">
          {a}
        </div>
      )}
    </div>
  );
}