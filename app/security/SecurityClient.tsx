import { Metadata } from 'next';
import SecurityClient from './SecurityClient';

export const metadata: Metadata = {
  title: 'Seguridad Digital VAWA: Navegación Segura y Privacidad Online',
  description: 'Protocolos de seguridad para navegar sin dejar rastro. Detección de stalkerware, modo incógnito, VPN y limpieza de historial para víctimas de violencia doméstica.',
  keywords: [
    'seguridad digital VAWA',
    'navegar seguro',
    'stalkerware',
    'modo incógnito',
    'borrar historial',
    'privacidad online abuso',
    'spyware detección',
  ],
  openGraph: {
    title: 'Guía de Seguridad Digital para Sobrevivientes',
    url: 'https://visa-vawa.com/security',
  },
  alternates: {
    canonical: 'https://visa-vawa.com/security',
  },
};

export default function SecurityPage() {
  return <SecurityClient />;
}