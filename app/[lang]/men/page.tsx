import { Metadata } from 'next';
import MenClient from './MenClient';
import { TRANSLATIONS } from '../../../data/translations';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export const metadata: Metadata = {
  title: 'VAWA para Hombres: Protección Federal Neutral en Género 2026',
  description: 'Guía completa sobre derechos VAWA para hombres víctimas de violencia doméstica. La ley es neutral en género. Requisitos, evidencia y proceso I-360 para sobrevivientes masculinos.',
  keywords: [
    'VAWA para hombres',
    'hombres víctimas violencia doméstica',
    'VAWA neutral género',
    'esposos abusados',
    'padres VAWA',
    'hombres autopetición',
    'men VAWA rights',
  ],
  openGraph: {
    title: 'VAWA para Hombres: Derechos Iguales Bajo la Ley Federal',
    url: 'https://visa-vawa.com/men',
  },
  alternates: {
    canonical: 'https://visa-vawa.com/men',
  },
};

export default async function MenPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  const t = TRANSLATIONS[validLang];

  return <MenClient lang={validLang} t={t} />;
}