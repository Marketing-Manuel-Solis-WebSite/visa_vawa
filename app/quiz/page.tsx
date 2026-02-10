import { Metadata } from 'next';
import QuizClient from './QuizClient';

export const metadata: Metadata = {
  title: 'Quiz de Elegibilidad VAWA: Verifica si Calificas (100% Anónimo)',
  description: 'Herramienta anónima y confidencial para verificar si cumples los requisitos federales para autopetición VAWA (Form I-360). Sin registro, sin guardar datos. Resultados inmediatos.',
  keywords: [
    'quiz VAWA',
    'elegibilidad VAWA',
    'califico para VAWA',
    'requisitos VAWA test',
    'verificar elegibilidad I-360',
    'VAWA eligibility quiz',
    'test anónimo VAWA',
    'puedo aplicar VAWA',
  ],
  openGraph: {
    title: 'Quiz de Elegibilidad VAWA: Verifica si Calificas (Anónimo)',
    description: 'Evaluación gratuita y confidencial de tus requisitos para VAWA. Sin guardar información personal.',
    url: 'https://visa-vawa.com/quiz',
    type: 'website',
  },
  alternates: {
    canonical: 'https://visa-vawa.com/quiz',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QuizPage() {
  return <QuizClient />;
}