import { TRANSLATIONS } from '../../data/translations';
import HomeClient from './HomeClient';

// Esta función permite generar las rutas estáticas al hacer build
export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  // Validación de seguridad para el idioma
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  const t = TRANSLATIONS[validLang];

  return <HomeClient lang={validLang} t={t} />;
}