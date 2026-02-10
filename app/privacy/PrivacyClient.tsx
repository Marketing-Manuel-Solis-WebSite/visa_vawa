import { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: 'Política de Privacidad | VISA-VAWA',
  description: 'Política de privacidad de VISA-VAWA. Compromiso de anonimato, ausencia de cookies y protocolos de seguridad para víctimas de violencia doméstica.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}