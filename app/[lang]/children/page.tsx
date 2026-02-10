import { Metadata } from 'next';
import ChildrenClient from './ChildrenClient';

export const metadata: Metadata = {
  title: 'VAWA y Protección de Hijos: Estatus Derivado y CSPA 2026',
  description: 'Guía sobre cómo VAWA protege a tus hijos con estatus derivado. Explicación de CSPA, beneficios (EAD, educación) y protección contra aging out. Proceso I-360 familiar.',
  keywords: [
    'VAWA hijos',
    'estatus derivado VAWA',
    'CSPA VAWA',
    'hijos VAWA',
    'derivative children',
    'VAWA family protection',
    'aging out VAWA',
  ],
  openGraph: {
    title: 'VAWA: Protección Legal para Tus Hijos',
    url: 'https://visa-vawa.com/children',
  },
  alternates: {
    canonical: 'https://visa-vawa.com/children',
  },
};

export default function ChildrenPage() {
  return <ChildrenClient />;
}