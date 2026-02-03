import React, { useState } from 'react';
import { X, Lock, CheckCircle } from 'lucide-react';

interface QuizProps {
  t: any; // Se pasa el objeto de traducción
  goHome: () => void; // Función para cerrar el quiz
}

export default function Quiz({ t, goHome }: QuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
    setStep(step + 1);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-8 my-8">
      {/* Header del Quiz */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-slate-800">{t.quiz.title}</h2>
        <button onClick={goHome} className="text-slate-500 hover:text-slate-800 transition-colors">
          <X size={24} />
        </button>
      </div>

      {/* Intro / Step 0 */}
      {step === 0 && (
        <div className="text-center animate-fade-in">
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <Lock className="w-12 h-12 text-blue-700 mx-auto mb-3" />
            <p className="text-slate-700 mb-4 font-medium">{t.quiz.result_advice}</p>
          </div>
          <button 
            onClick={() => setStep(1)}
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded shadow transition-all"
          >
            {t.quiz.start}
          </button>
        </div>
      )}

      {/* Pregunta 1: Status */}
      {step === 1 && (
        <div className="animate-fade-in">
          <h3 className="text-xl font-semibold mb-6">{t.quiz.q1}</h3>
          <div className="space-y-3">
            <button onClick={() => handleAnswer('status', 'citizen')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition font-medium">{t.quiz.options.yes}</button>
            <button onClick={() => handleAnswer('status', 'none')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition font-medium">{t.quiz.options.no}</button>
            <button onClick={() => handleAnswer('status', 'unsure')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition font-medium">{t.quiz.options.unsure}</button>
          </div>
        </div>
      )}

      {/* Pregunta 2: Relación */}
      {step === 2 && (
        <div className="animate-fade-in">
          <h3 className="text-xl font-semibold mb-6">{t.quiz.q2}</h3>
          <div className="space-y-3">
            <button onClick={() => handleAnswer('relation', 'spouse')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition font-medium">{t.quiz.options.spouse}</button>
            <button onClick={() => handleAnswer('relation', 'parent')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition font-medium">{t.quiz.options.parent}</button>
            <button onClick={() => handleAnswer('relation', 'child')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition font-medium">{t.quiz.options.child}</button>
          </div>
        </div>
      )}

      {/* Pregunta 3: Tipo de Abuso */}
      {step === 3 && (
        <div className="animate-fade-in">
          <h3 className="text-xl font-semibold mb-6">{t.quiz.q3}</h3>
          <div className="space-y-3">
            <button onClick={() => handleAnswer('abuse', 'both')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition font-medium">{t.quiz.options.physical}</button>
            <button onClick={() => handleAnswer('abuse', 'emotional')} className="w-full text-left p-4 border rounded hover:bg-slate-50 transition font-medium">{t.quiz.options.emotional}</button>
          </div>
        </div>
      )}

      {/* Resultados */}
      {step === 4 && (
        <div className="animate-fade-in text-center">
           <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
           <h3 className="text-2xl font-bold text-slate-800 mb-2">{t.quiz.result_positive}</h3>
           <p className="text-slate-600 mb-6">{t.quiz.result_advice}</p>
           
           <div className="bg-slate-100 p-4 rounded text-sm text-slate-500 mb-6 text-left font-mono">
            <strong>Internal Analysis:</strong><br/>
            Status: {answers.status}<br/>
            Relation: {answers.relation}<br/>
            Type: {answers.abuse}
           </div>

           <button onClick={resetQuiz} className="text-blue-700 underline underline-offset-4 hover:text-blue-900">
             Restart Quiz
           </button>
        </div>
      )}
      
      {/* Barra de progreso simple */}
      {step > 0 && step < 4 && (
        <div className="mt-6 flex justify-between text-sm text-slate-400">
           <span>Step {step} of 3</span>
           <div className="flex gap-1">
             <div className={`h-2 w-2 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
             <div className={`h-2 w-2 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
             <div className={`h-2 w-2 rounded-full ${step >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
           </div>
        </div>
      )}
    </div>
  );
}