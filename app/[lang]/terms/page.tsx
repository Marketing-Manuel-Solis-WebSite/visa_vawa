import { Metadata } from 'next';
import TermsClient from './TermsClient';
import { TRANSLATIONS } from '../../../data/translations';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso | VISA-VAWA',
  description: 'Términos de uso de VISA-VAWA. Información legal educativa, limitación de responsabilidad y aviso de seguridad para usuarios.',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  const t = TRANSLATIONS[validLang];

  return <TermsClient lang={validLang} t={t} />;
}