'use client';

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Globe, 
  Menu, 
  X, 
  Phone, 
  Lock, 
  FileText, 
  Scale, 
  Users, 
  Baby, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  Sun, 
  CloudRain, 
  Wind,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

/**
 * ARCHITECTURE NOTE:
 * This single file represents a comprehensive Next.js application structure.
 * It includes Client-Side Routing simulation, Internationalization (i18n),
 * and State Management for the interactive tools.
 */

// --- 1. CONFIGURATION & DATA ---

const SITE_CONFIG = {
  name: "Visa-VAWA.com",
  phone: "1-800-799-SAFE",
  govStyle: true, // Toggles USWDS aesthetics
};

// --- 2. INTERNATIONALIZATION (i18n) DICTIONARY ---

const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      evidence: "Silent Evidence",
      myths: "Myth Busting",
      men: "Male Victims",
      children: "Impact on Children",
      quiz: "Eligibility Quiz",
    },
    hero: {
      title: "A Safe Path Forward Under VAWA",
      subtitle: "Federal protection for survivors of domestic violence by U.S. Citizens or Permanent Residents. Confidential. Independent.",
      cta_primary: "Check Eligibility Anonymously",
      cta_secondary: "Understand Your Rights",
    },
    panic: {
      label: "Quick Exit",
      tooltip: "Leaves this site immediately",
    },
    sections: {
      evidence: {
        title: "The Silent Evidence Guide",
        desc: "How to document abuse without leaving a digital or physical trail.",
        download: "Download Safe-Journal Template (Looks like a Grocery List)",
      },
      myths: {
        title: "Myths of Fear",
        desc: "Debunking the lies abusers tell to keep you under control.",
      },
      men: {
        title: "Silence of Men",
        desc: "VAWA is gender-neutral. 15-20% of applicants are men. You are not alone.",
      },
      children: {
        title: "Protecting the Children",
        desc: "Your application protects your children, even if they were not directly abused.",
      }
    },
    quiz: {
      title: "Anonymous Eligibility Check",
      start: "Start Confidential Check",
      q1: "Is the abuser a U.S. Citizen or Green Card Holder?",
      q2: "What is your relationship to the abuser?",
      q3: "Have you suffered physical battery OR extreme cruelty?",
      result_positive: "You have a high probability of qualifying for VAWA.",
      result_advice: "We recommend a confidential consultation. Your abuser is NOT notified.",
      options: {
        yes: "Yes",
        no: "No",
        unsure: "Unsure",
        spouse: "Spouse (Current or Divorced < 2 yrs)",
        parent: "Parent",
        child: "Child",
        physical: "Physical Abuse",
        emotional: "Emotional/Psychological (Extreme Cruelty)",
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "Will my spouse/abuser know if I apply?",
      a1: "Absolutely not. USCIS is prohibited by law (8 U.S.C. § 1367) from notifying the abuser. All correspondence is sent to a safe address or your attorney.",
      q2: "Can I work while I wait?",
      a2: "Yes. Once your VAWA petition (Form I-360) is approved or prima facie determination is made, you are eligible for an Employment Authorization Document (EAD).",
      q3: "What if I entered the U.S. illegally?",
      a3: "VAWA allows you to 'self-petition' regardless of your entry status. It 'cures' many immigration violations that would otherwise block a green card.",
    },
    footer: {
      disclaimer: "This site provides information about the Violence Against Women Act (VAWA). It is not legal advice. For immediate danger, call 911.",
      copyright: "© 2024 Visa-VAWA.com. All Rights Reserved."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      evidence: "Evidencia Silenciosa",
      myths: "Desmintiendo Mitos",
      men: "Hombres Víctimas",
      children: "Impacto en Hijos",
      quiz: "Quiz de Elegibilidad",
    },
    hero: {
      title: "Un Camino Legal Seguro bajo VAWA",
      subtitle: "Protección federal para sobrevivientes de violencia doméstica por ciudadanos o residentes. Confidencial. Independiente.",
      cta_primary: "Verificar Elegibilidad (Anónimo)",
      cta_secondary: "Conozca sus Derechos",
    },
    panic: {
      label: "Salida Rápida",
      tooltip: "Salir del sitio inmediatamente",
    },
    sections: {
      evidence: {
        title: "Guía de Evidencia Silenciosa",
        desc: "Cómo documentar el abuso sin dejar rastro digital ni físico.",
        download: "Descargar Plantilla de Diario (Parece lista de compras)",
      },
      myths: {
        title: "Mitos del Miedo",
        desc: "Desmintiendo las mentiras que usan los agresores para mantener el control.",
      },
      men: {
        title: "El Silencio de los Hombres",
        desc: "VAWA es neutral en cuanto al género. 15-20% de solicitantes son hombres.",
      },
      children: {
        title: "Protegiendo a los Hijos",
        desc: "Su solicitud protege a sus hijos derivados, incluso si no sufrieron abuso directo.",
      }
    },
    quiz: {
      title: "Verificación Anónima",
      start: "Iniciar Chequeo Confidencial",
      q1: "¿El agresor es Ciudadano de EE.UU. o Residente Permanente?",
      q2: "¿Cuál es su relación con el agresor?",
      q3: "¿Ha sufrido agresión física O crueldad extrema?",
      result_positive: "Tiene una alta probabilidad de calificar para VAWA.",
      result_advice: "Recomendamos una consulta confidencial. Su agresor NO será notificado.",
      options: {
        yes: "Sí",
        no: "No",
        unsure: "No estoy seguro",
        spouse: "Esposo/a (Actual o Divorciado < 2 años)",
        parent: "Padre/Madre",
        child: "Hijo/a",
        physical: "Abuso Físico",
        emotional: "Emocional/Psicológico (Crueldad Extrema)",
      }
    },
    faq: {
      title: "Preguntas Frecuentes",
      q1: "¿Mi esposo/a se enterará si aplico?",
      a1: "Absolutamente no. USCIS tiene prohibido por ley (8 U.S.C. § 1367) notificar al agresor. Toda correspondencia va a una dirección segura o a su abogado.",
      q2: "¿Puedo trabajar mientras espero?",
      a2: "Sí. Una vez aprobada su petición VAWA (I-360) o con determinación prima facie, es elegible para un Permiso de Trabajo (EAD).",
      q3: "¿Qué pasa si entré ilegalmente?",
      a3: "VAWA le permite 'autopeticionar' sin importar su estatus de entrada. 'Cura' muchas violaciones migratorias que bloquearían una Green Card normal.",
    },
    footer: {
      disclaimer: "Este sitio brinda información sobre la Ley de Violencia contra la Mujer (VAWA). No es consejo legal. En peligro inmediato, llame al 911.",
      copyright: "© 2024 Visa-VAWA.com. Todos los derechos reservados."
    }
  }
};

// --- 3. COMPONENTS ---

// 3.1 Weather Decoy Page (Panic Mode)
const WeatherDecoy = () => {
  return (
    <div className="min-h-screen bg-blue-50 font-sans text-gray-700">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">WeatherDaily</h1>
        <div className="flex space-x-4 text-sm">
          <span>Maps</span>
          <span>Radar</span>
          <span>News</span>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">New York, NY</h2>
              <p className="text-gray-500">Tuesday, 10:00 AM</p>
              <div className="mt-4 text-6xl font-light text-gray-800 flex items-center">
                72° <span className="text-lg ml-2 text-gray-400">F</span>
              </div>
              <p className="mt-2 text-blue-500 font-medium">Partly Cloudy</p>
            </div>
            <Sun size={100} className="text-yellow-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <CloudRain className="text-blue-400 mb-2" />
            <span className="font-bold">Humidity</span>
            <span>45%</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <Wind className="text-gray-400 mb-2" />
            <span className="font-bold">Wind</span>
            <span>12 mph NW</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <Sun className="text-orange-400 mb-2" />
            <span className="font-bold">UV Index</span>
            <span>Moderate (4)</span>
          </div>
        </div>
      </main>
    </div>
  );
};

// 3.2 Quiz Component
const Quiz = ({ t, goHome }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
    setStep(step + 1);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-8 my-8">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-slate-800">{t.quiz.title}</h2>
        <button onClick={goHome} className="text-slate-500 hover:text-slate-800">
          <X size={24} />
        </button>
      </div>

      {step === 0 && (
        <div className="text-center">
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <Lock className="w-12 h-12 text-blue-700 mx-auto mb-3" />
            <p className="text-slate-700 mb-4">{t.quiz.result_advice}</p>
          </div>
          <button 
            onClick={() => setStep(1)}
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded shadow transition-all"
          >
            {t.quiz.start}
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="animate-fade-in">
          <h3 className="text-xl font-semibold mb-6">{t.quiz.q1}</h3>
          <div className="space-y-3">
            <button onClick={() => handleAnswer('status', 'citizen')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition">{t.quiz.options.yes}</button>
            <button onClick={() => handleAnswer('status', 'none')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition">{t.quiz.options.no}</button>
            <button onClick={() => handleAnswer('status', 'unsure')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition">{t.quiz.options.unsure}</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in">
          <h3 className="text-xl font-semibold mb-6">{t.quiz.q2}</h3>
          <div className="space-y-3">
            <button onClick={() => handleAnswer('relation', 'spouse')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition">{t.quiz.options.spouse}</button>
            <button onClick={() => handleAnswer('relation', 'parent')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition">{t.quiz.options.parent}</button>
            <button onClick={() => handleAnswer('relation', 'child')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition">{t.quiz.options.child}</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-in">
          <h3 className="text-xl font-semibold mb-6">{t.quiz.q3}</h3>
          <div className="space-y-3">
            <button onClick={() => handleAnswer('abuse', 'both')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition">{t.quiz.options.physical}</button>
            <button onClick={() => handleAnswer('abuse', 'emotional')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition">{t.quiz.options.emotional}</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="animate-fade-in text-center">
           <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
           <h3 className="text-2xl font-bold text-slate-800 mb-2">{t.quiz.result_positive}</h3>
           <p className="text-slate-600 mb-6">{t.quiz.result_advice}</p>
           
           <div className="bg-slate-100 p-4 rounded text-sm text-slate-500 mb-6 text-left">
            <strong>Analysis:</strong><br/>
            Status: {answers.status}<br/>
            Relation: {answers.relation}<br/>
            Type: {answers.abuse}
           </div>

           <button onClick={resetQuiz} className="text-blue-700 underline underline-offset-4">
             Restart Quiz
           </button>
        </div>
      )}
      
      {step > 0 && step < 4 && (
        <div className="mt-6 flex justify-between text-sm text-slate-400">
           <span>Step {step} of 3</span>
        </div>
      )}
    </div>
  );
};

// 3.3 FAQ Accordion
const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-800 pr-4">{q}</span>
        {isOpen ? <ChevronUp className="text-blue-600 flex-shrink-0" /> : <ChevronDown className="text-slate-400 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-600 leading-relaxed animate-fade-in">
          {a}
        </div>
      )}
    </div>
  );
};

// --- 4. MAIN APPLICATION ---

export default function App() {
  const [lang, setLang] = useState('en');
  const [view, setView] = useState('home'); // home, quiz, content pages...
  const [panicMode, setPanicMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  // Sticky Panic Button Logic
  const triggerPanic = () => {
    setPanicMode(true);
    document.title = "Weather Forecast - Daily Updates";
  };

  useEffect(() => {
    // Keyboard shortcut for panic (Escape key 3 times rapidly - simulated here just as single esc for simplicity in demo)
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        triggerPanic();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (panicMode) return <WeatherDecoy />;

  // --- RENDERING HELPERS ---
  
  const NavLink = ({ target, label, icon: Icon }) => (
    <button 
      onClick={() => { setView(target); setMobileMenuOpen(false); }}
      className={`flex items-center space-x-2 py-2 px-3 rounded transition-colors ${
        view === target ? 'text-blue-700 font-bold bg-blue-50' : 'text-slate-600 hover:text-blue-700'
      }`}
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      
      {/* 4.1 US GOVERNMENT BANNER MOCKUP */}
      <div className="bg-slate-100 border-b border-slate-300 py-1 px-4 text-xs flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png" alt="US Flag" className="h-3 w-5" />
          <span className="text-slate-600">An official-style informational resource</span>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="font-bold text-blue-800 hover:underline flex items-center space-x-1"
          >
            <Globe size={12} />
            <span>{lang === 'en' ? 'Español' : 'English'}</span>
          </button>
        </div>
      </div>

      {/* 4.2 HEADER & NAV */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo Area */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setView('home')}
          >
            <div className="bg-blue-900 text-white p-2 rounded-lg">
              <Shield size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">VISA-VAWA</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">DOMESTIC VIOLENCE RELIEF</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-1">
            <NavLink target="evidence" label={t.nav.evidence} icon={FileText} />
            <NavLink target="myths" label={t.nav.myths} icon={AlertTriangle} />
            <NavLink target="men" label={t.nav.men} icon={Users} />
            <NavLink target="children" label={t.nav.children} icon={Baby} />
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t p-4 space-y-2 shadow-lg">
            <NavLink target="evidence" label={t.nav.evidence} icon={FileText} />
            <NavLink target="myths" label={t.nav.myths} icon={AlertTriangle} />
            <NavLink target="men" label={t.nav.men} icon={Users} />
            <NavLink target="children" label={t.nav.children} icon={Baby} />
            <button 
              onClick={() => { setView('quiz'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 text-blue-700 font-bold bg-blue-50 rounded"
            >
              {t.nav.quiz}
            </button>
          </div>
        )}
      </header>

      {/* 4.3 PANIC BUTTON (STICKY) */}
      <button
        onClick={triggerPanic}
        className="fixed bottom-6 right-6 z-50 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center space-x-2 transition-transform transform hover:scale-105 border-4 border-white"
        title={t.panic.tooltip}
        aria-label="Panic Button"
      >
        <X size={20} className="animate-pulse" />
        <span>{t.panic.label}</span>
      </button>

      {/* 4.4 MAIN CONTENT SWITCHER */}
      <main className="flex-grow">
        
        {view === 'quiz' && (
          <div className="bg-slate-50 py-12 px-4">
             <Quiz t={t} goHome={() => setView('home')} />
          </div>
        )}

        {view === 'home' && (
          <>
            {/* HERO SECTION */}
            <div className="bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
              <div className="container mx-auto px-4 py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block bg-blue-800 text-blue-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {t.hero.subtitle.split('.')[2]}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    {t.hero.title}
                  </h2>
                  <p className="text-lg text-blue-100 max-w-lg">
                    {t.hero.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button 
                      onClick={() => setView('quiz')}
                      className="bg-white text-blue-900 font-bold py-3 px-8 rounded hover:bg-blue-50 transition shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Lock size={18} />
                      <span>{t.hero.cta_primary}</span>
                    </button>
                    <button 
                      onClick={() => setView('evidence')}
                      className="border border-white text-white font-medium py-3 px-8 rounded hover:bg-white/10 transition flex items-center justify-center"
                    >
                      {t.hero.cta_secondary}
                    </button>
                  </div>
                </div>
                {/* Abstract calm graphic representation */}
                <div className="hidden md:flex justify-center">
                  <div className="bg-white/10 p-8 rounded-full backdrop-blur-sm border border-white/20">
                    <Shield size={200} className="text-white/80" />
                  </div>
                </div>
              </div>
            </div>

            {/* FEATURES GRID */}
            <div className="container mx-auto px-4 py-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <div 
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer group"
                  onClick={() => setView('evidence')}
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-700 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t.sections.evidence.title}</h3>
                  <p className="text-slate-600 text-sm">{t.sections.evidence.desc}</p>
                </div>

                {/* Card 2 */}
                <div 
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer group"
                  onClick={() => setView('myths')}
                >
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center text-red-700 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <AlertTriangle size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t.sections.myths.title}</h3>
                  <p className="text-slate-600 text-sm">{t.sections.myths.desc}</p>
                </div>

                {/* Card 3 */}
                <div 
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer group"
                  onClick={() => setView('men')}
                >
                  <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-700 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t.sections.men.title}</h3>
                  <p className="text-slate-600 text-sm">{t.sections.men.desc}</p>
                </div>

                {/* Card 4 */}
                <div 
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer group"
                  onClick={() => setView('children')}
                >
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center text-green-700 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Baby size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{t.sections.children.title}</h3>
                  <p className="text-slate-600 text-sm">{t.sections.children.desc}</p>
                </div>
              </div>
            </div>

            {/* FAQ SECTION */}
            <div className="bg-white py-16 border-t border-slate-200">
              <div className="container mx-auto px-4 max-w-3xl">
                <div className="flex items-center space-x-2 mb-8">
                  <HelpCircle className="text-blue-700" />
                  <h2 className="text-3xl font-bold text-slate-900">{t.faq.title}</h2>
                </div>
                <div className="space-y-2">
                  <FAQItem q={t.faq.q1} a={t.faq.a1} />
                  <FAQItem q={t.faq.q2} a={t.faq.a2} />
                  <FAQItem q={t.faq.q3} a={t.faq.a3} />
                </div>
              </div>
            </div>
          </>
        )}

        {/* DETAILED CONTENT PAGES (Simulated) */}
        {view !== 'home' && view !== 'quiz' && (
          <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
            <button onClick={() => setView('home')} className="text-blue-600 hover:underline mb-6 flex items-center space-x-1">
              <ChevronDown className="transform rotate-90" /> 
              <span>Back to Home</span>
            </button>
            
            <article className="prose prose-slate lg:prose-lg max-w-none bg-white p-8 rounded-xl shadow-sm border">
              <h1 className="text-3xl font-bold text-slate-900 mb-4">{t.sections[view]?.title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">{t.sections[view]?.desc}</p>
              
              {/* Dummy Content based on sections */}
              <div className="space-y-6 text-slate-700">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unlike standard immigration processes,
                  VAWA allows you to file for yourself (Self-Petition). This means you do not need the abuser's
                  signature, knowledge, or participation.
                </p>
                
                {view === 'evidence' && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <h4 className="font-bold text-yellow-800 flex items-center space-x-2">
                      <Lock size={16} /> <span>Security Tip</span>
                    </h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Always use a safe computer (library, friend's house). If downloading templates, rename them immediately to something boring like "Grocery_List_Dec.pdf".
                    </p>
                    <button className="mt-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded font-medium hover:bg-yellow-200 transition text-sm flex items-center">
                      <FileText size={16} className="mr-2"/> {t.sections.evidence.download}
                    </button>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-slate-800 mt-8">Legal Basis</h3>
                <p>
                  Under the Violence Against Women Act (VAWA), created in 1994, spouses and children of US Citizens
                  and Permanent Residents can petition for legal status independently.
                </p>
              </div>
            </article>
          </div>
        )}

      </main>

      {/* 4.5 FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
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
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setView('evidence')} className="hover:text-white">Evidence Guide</button></li>
              <li><button onClick={() => setView('quiz')} className="hover:text-white">Eligibility Check</button></li>
              <li><a href="#" className="hover:text-white">Find Legal Aid</a></li>
              <li><a href="#" className="hover:text-white">USCIS Forms (External)</a></li>
            </ul>
          </div>
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
    </div>
  );
}