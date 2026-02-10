import { Metadata } from 'next';
import EvidenceClient from './EvidenceClient';

// SEO Metadata para esta página específica
export const metadata: Metadata = {
  title: 'Guía de Evidencia para VAWA: Cómo Documentar Abuso de Forma Segura',
  description: 'Guía completa y confidencial sobre cómo recopilar evidencia para tu petición VAWA (Formulario I-360). Plantillas disfrazadas, estándar de "credibilidad" y protocolos de seguridad digital para sobrevivientes.',
  keywords: [
    'evidencia VAWA',
    'documentar abuso VAWA',
    'I-360 evidencia',
    'pruebas violencia doméstica',
    'crueldad extrema pruebas',
    'cualquier evidencia creíble',
    'affidavit VAWA',
    'declaración personal VAWA',
    'evidencia sin policía',
    'registros médicos VAWA',
  ],
  openGraph: {
    title: 'Guía de Evidencia VAWA: Documentación Segura para I-360',
    description: 'Aprende qué evidencia acepta USCIS para peticiones VAWA y cómo documentar abuso sin exponer tu seguridad.',
    url: 'https://visa-vawa.com/evidence',
    type: 'article',
  },
  alternates: {
    canonical: 'https://visa-vawa.com/evidence',
  },
};

export default function EvidencePage() {
  return <EvidenceClient />;
}