import { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';
import { TRANSLATIONS } from '../../../data/translations';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export const metadata: Metadata = {
  title: 'Política de Privacidad | VISA-VAWA',
  description: 'Política de privacidad de VISA-VAWA. Compromiso de anonimato, ausencia de cookies y protocolos de seguridad para víctimas de violencia doméstica.',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  const t = TRANSLATIONS[validLang];

  return <PrivacyClient lang={validLang} t={t} />;
}