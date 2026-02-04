import React, { useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, Lock, FileText, AlertTriangle, 
  Users, Baby, Shield, Clock, DollarSign, Heart, Folder 
} from 'lucide-react';

interface ResourceCarouselProps {
  t: any;
  setView: (view: string) => void;
}

export default function ResourceCarousel({ t, setView }: ResourceCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 340; // Ancho aproximado de tarjeta + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const cards = [
    { id: 'quiz', icon: Lock, title: t.cards.quiz_title, desc: t.cards.quiz_desc },
    { id: 'evidence', icon: FileText, title: t.cards.evidence_title, desc: t.cards.evidence_desc },
    { id: 'myths', icon: AlertTriangle, title: t.cards.myths_title, desc: t.cards.myths_desc },
    { id: 'men', icon: Users, title: t.cards.men_title, desc: t.cards.men_desc },
    { id: 'children', icon: Baby, title: t.cards.children_title, desc: t.cards.children_desc },
    { id: 'security', icon: Shield, title: t.cards.security_title, desc: t.cards.security_desc },
    // Nuevas tarjetas
    { id: 'process', icon: Clock, title: t.cards.process_title, desc: t.cards.process_desc },
    { id: 'financial', icon: DollarSign, title: t.cards.financial_title, desc: t.cards.financial_desc },
    { id: 'emotional', icon: Heart, title: t.cards.emotional_title, desc: t.cards.emotional_desc },
    { id: 'documents', icon: Folder, title: t.cards.docs_title, desc: t.cards.docs_desc },
  ];

  return (
    <div className="relative group">
      {/* Botón Izquierda */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white border border-slate-200 p-3 rounded-full shadow-lg text-[#1a365d] hover:scale-110 transition-transform opacity-0 group-hover:opacity-100 hidden md:flex"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Contenedor Scroll */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 px-2 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card) => (
          <div 
            key={card.id}
            className="flex-none w-[300px] md:w-[340px] snap-center"
          >
            <button 
              onClick={() => setView(card.id)} 
              className="w-full h-full group/card bg-white border border-slate-200 hover:border-[#1a365d] p-8 rounded-xl shadow-sm hover:shadow-xl transition-all text-left relative overflow-hidden flex flex-col justify-between min-h-[320px]"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 group-hover/card:bg-[#1a365d] transition-colors duration-300"></div>
              
              <div>
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover/card:bg-[#1a365d]/10 transition-colors">
                  <card.icon size={32} className="text-[#1a365d] group-hover/card:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover/card:text-blue-700">
                  {card.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center text-[#1a365d] font-bold text-xs uppercase tracking-widest opacity-80 group-hover/card:opacity-100">
                <span className="border-b-2 border-transparent group-hover/card:border-[#1a365d] pb-0.5 transition-all">Ver Recurso</span>
                <ChevronRight size={14} className="ml-1 group-hover/card:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Botón Derecha */}
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white border border-slate-200 p-3 rounded-full shadow-lg text-[#1a365d] hover:scale-110 transition-transform opacity-0 group-hover:opacity-100 hidden md:flex"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}