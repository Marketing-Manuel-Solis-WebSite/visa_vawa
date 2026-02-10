import { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso | VISA-VAWA',
  description: 'Términos de uso de VISA-VAWA. Información legal educativa, limitación de responsabilidad y aviso de seguridad para usuarios.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsClient />;
}