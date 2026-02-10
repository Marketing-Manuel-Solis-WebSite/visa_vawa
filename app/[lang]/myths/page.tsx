import { Metadata } from 'next';
import MythsClient from './MythsClient';
import { TRANSLATIONS } from '../../../data/translations';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export const metadata: Metadata = {
  title: 'Mitos y Realidades sobre VAWA: Desmintiendo Amenazas de Agresores',
  description: 'Verdades legales sobre VAWA vs. mentiras comunes que usan agresores para mantener control. Información sobre deportación, policía, divorcios y más con referencias legales.',
  keywords: [
    'mitos VAWA',
    'mentiras agresores VAWA',
    'deportación VAWA',
    'VAWA y policía',
    'divorcio VAWA',
    'amenazas inmigración',
    'verdades legales VAWA',
  ],
  openGraph: {
    title: 'Mitos VAWA: La Verdad Legal vs. Amenazas de Control',
    url: 'https://visa-vawa.com/myths',
  },
  alternates: {
    canonical: 'https://visa-vawa.com/myths',
  },
};

export default async function MythsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  const t = TRANSLATIONS[validLang];

  return <MythsClient lang={validLang} t={t} />;
}