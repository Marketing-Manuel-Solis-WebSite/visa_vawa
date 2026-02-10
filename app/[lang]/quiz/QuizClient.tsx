'use client';

import React, { useState, useEffect } from 'react';
import { X, Lock, CheckCircle, AlertTriangle, ChevronRight, ChevronLeft, HelpCircle, ArrowRight } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PanicButton from '../../../components/PanicButton';
import WeatherDecoy from '../../../components/WeatherDecoy';

interface QuizAnswers {
  safe?: string;
  relation?: string;
  status?: string;
  cohabitation?: string;
  abuseType?: string[];
  evidence?: string[];
  arrests?: string;
}

interface QuizClientProps {
  lang: string;
  t: any;
}

export default function QuizClient({ lang, t }: QuizClientProps) {
  const [panicMode, setPanicMode] = useState(false);
  
  const [step, setStep] = useState<number | 'unsafe'>(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  
  const triggerPanic = () => {
    setPanicMode(true);
    if (typeof window !== 'undefined') {
        sessionStorage.clear();
        localStorage.clear();
        document.title = "Weather Forecast - WeatherDaily";
        window.history.replaceState(null, '', '/weather');
    }
  };

  const goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `/${lang}`;
    }
  };

  // Manejo de tecla ESC para pánico
  useEffect(() => {
    let escCount = 0;
    let escTimer: NodeJS.Timeout;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        escCount++;
        if (escCount === 1) escTimer = setTimeout(() => { escCount = 0; }, 1000);
        if (escCount === 2) { clearTimeout(escTimer); triggerPanic(); }
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      if (escTimer) clearTimeout(escTimer);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const handleOption = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (key === 'safe' && value === 'no') {
      setStep('unsafe');
    } else {
      nextStep();
    }
  };

  const toggleCheck = (key: string, value: string) => {
    setAnswers(prev => {
      const current = (prev[key as keyof QuizAnswers] as string[]) || [];
      return current.includes(value)
        ? { ...prev, [key]: current.filter((item: string) => item !== value) }
        : { ...prev, [key]: [...current, value] };
    });
  };

  const nextStep = () => setStep(prev => (typeof prev === 'number' ? prev + 1 : prev));
  const prevStep = () => setStep(prev => (typeof prev === 'number' && prev > 0 ? prev - 1 : 0));
  const resetQuiz = () => { setStep(0); setAnswers({}); };

  const getResult = (): 'likely' | 'possible' | 'review' => {
    const { relation, status, cohabitation, abuseType } = answers;
    const hasQualifying = ['spouse', 'parent', 'child'].includes(relation || '');
    const hasStatus = ['citizen', 'resident'].includes(status || '');
    const hasCohabitation = cohabitation === 'yes';
    const hasAbuse = (abuseType?.length || 0) > 0;
    
    if (hasQualifying && hasStatus && hasCohabitation && hasAbuse) return 'likely';
    else if (hasQualifying || hasStatus) return 'possible';
    return 'review';
  };

  const OptionButton = ({ onClick, children, icon: Icon }: any) => (
    <button onClick={onClick} className="w-full text-left p-4 border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 rounded-lg transition-all font-medium text-slate-800 flex items-center justify-between group">
      <span>{children}</span>
      {Icon && <Icon className="text-slate-400 group-hover:text-blue-600 transition-colors" size={20} />}
    </button>
  );

  const CheckboxOption = ({ checked, onChange, children }: any) => (
    <label className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${checked ? 'bg-blue-50 border-blue-500' : 'border-slate-200 hover:bg-slate-50'}`}>
      <input type="checkbox" className="mt-0.5 h-5 w-5 text-blue-600 rounded" checked={checked} onChange={onChange} />
      <span className="text-slate-800 font-medium">{children}</span>
    </label>
  );

  if (panicMode) return <WeatherDecoy />;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header 
        lang={lang} 
        t={t} 
      />
      
      <PanicButton 
        label={t.panic.label} 
        tooltip={t.panic.tooltip} 
        onPanic={triggerPanic} 
      />

      <main className="flex-grow py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 p-6 my-8">
          
          {step === 'unsafe' && (
            <div className="text-center py-12 animate-fade-in">
              <AlertTriangle size={64} className="text-red-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Tu Seguridad es lo Primero</h2>
              <p className="text-slate-600 max-w-md mx-auto mb-8">{t.quiz.unsafe_msg}</p>
              <button onClick={goHome} className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold">Salir Ahora</button>
            </div>
          )}

          {typeof step === 'number' && (
            <>
              <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-800">{t.quiz.title}</h2>
                <button onClick={goHome}><X className="text-slate-400 hover:text-slate-600" /></button>
              </div>

              {step > 0 && step < 7 && (
                <div className="mb-6">
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${(step / 6) * 100}%` }}></div>
                  </div>
                  <button onClick={prevStep} className="text-xs text-slate-400 mt-2 flex items-center hover:text-slate-600">
                    <ChevronLeft size={12} /> Atrás
                  </button>
                </div>
              )}

              <div className="animate-fade-in">
                
                {step === 0 && (
                  <div className="text-center space-y-6">
                    <h3 className="text-xl font-semibold">{t.quiz.intro_safety_title}</h3>
                    <p className="text-slate-600">{t.quiz.intro_safety_msg}</p>
                    <div className="space-y-3">
                      <OptionButton onClick={() => handleOption('safe', 'yes')} icon={ChevronRight}>{t.quiz.btn_safe}</OptionButton>
                      <OptionButton onClick={() => handleOption('safe', 'no')} icon={AlertTriangle}>{t.quiz.btn_unsafe}</OptionButton>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-800">{t.quiz.q1}</h3>
                    {['spouse', 'parent', 'child', 'other'].map(k => (
                      <OptionButton key={k} onClick={() => handleOption('relation', k)} icon={ChevronRight}>
                        {t.quiz.options[k as keyof typeof t.quiz.options]}
                      </OptionButton>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-800">{t.quiz.q2}</h3>
                    {['citizen', 'resident', 'unsure'].map(k => (
                      <OptionButton key={k} onClick={() => handleOption('status', k)} icon={ChevronRight}>
                        {t.quiz.options[k as keyof typeof t.quiz.options]}
                      </OptionButton>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-800">{t.quiz.q3}</h3>
                    <OptionButton onClick={() => handleOption('cohabitation', 'yes')} icon={ChevronRight}>{t.quiz.options.yes}</OptionButton>
                    <OptionButton onClick={() => handleOption('cohabitation', 'no')} icon={ChevronRight}>{t.quiz.options.no}</OptionButton>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-800">{t.quiz.q4}</h3>
                    <div className="space-y-2">
                      {t.quiz.checklist_abuse.map((item: string) => (
                        <CheckboxOption key={item} checked={answers.abuseType?.includes(item) || false} onChange={() => toggleCheck('abuseType', item)}>{item}</CheckboxOption>
                      ))}
                    </div>
                    <button onClick={nextStep} disabled={!answers.abuseType?.length} className="w-full bg-slate-800 text-white py-3 rounded-lg font-bold mt-4 disabled:opacity-50">
                      Siguiente <ChevronRight size={16} className="inline" />
                    </button>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-800">{t.quiz.q5}</h3>
                    <div className="space-y-2">
                      {t.quiz.checklist_evidence.map((item: string) => (
                        <CheckboxOption key={item} checked={answers.evidence?.includes(item) || false} onChange={() => toggleCheck('evidence', item)}>{item}</CheckboxOption>
                      ))}
                    </div>
                    <button onClick={nextStep} className="w-full bg-slate-800 text-white py-3 rounded-lg font-bold mt-4">
                      Siguiente <ChevronRight size={16} className="inline" />
                    </button>
                  </div>
                )}

                {step === 6 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-800">{t.quiz.q6}</h3>
                    {['yes', 'no', 'skip'].map(k => (
                      <OptionButton key={k} onClick={() => handleOption('arrests', k)} icon={ChevronRight}>
                        {t.quiz.options[k as keyof typeof t.quiz.options]}
                      </OptionButton>
                    ))}
                  </div>
                )}

                {step === 7 && (
                  <div className="text-center space-y-6">
                    {getResult() === 'likely' ? <CheckCircle size={64} className="text-green-600 mx-auto" /> : <HelpCircle size={64} className="text-slate-400 mx-auto" />}
                    <h2 className="text-2xl font-bold text-slate-800">{getResult() === 'likely' ? t.quiz.result_positive : t.quiz.result_review}</h2>
                    <p className="text-slate-600">{getResult() === 'likely' ? t.quiz.result_advice_positive : t.quiz.result_advice_review}</p>
                    {answers.arrests === 'yes' && (
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 text-left">
                        <AlertTriangle className="inline mr-2" size={16} />
                        <span className="text-sm text-amber-900">{t.quiz.arrest_warning}</span>
                      </div>
                    )}
                    <a href="https://manuelsolis.com" target="_blank" rel="noreferrer" className="block w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 rounded-lg">
                      Consulta con Abogado <ArrowRight size={18} className="inline ml-2" />
                    </a>
                    <button onClick={resetQuiz} className="text-slate-500 hover:text-slate-800">Reiniciar Quiz</button>
                  </div>
                )}
                
              </div>
            </>
          )}
        </div>
      </main>

      <Footer t={t} setView={() => {}} />
    </div>
  );
}