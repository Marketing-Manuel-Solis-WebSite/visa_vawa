import { Metadata } from 'next';
import SecurityClient from './SecurityClient';
import { TRANSLATIONS } from '../../../data/translations';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

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

export default async function SecurityPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  const t = TRANSLATIONS[validLang];

  return <SecurityClient lang={validLang} t={t} />;
}