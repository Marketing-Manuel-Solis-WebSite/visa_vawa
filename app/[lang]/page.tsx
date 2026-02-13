import { Metadata } from 'next';
import { TRANSLATIONS } from '../../data/translations';
import HomeClient from './HomeClient';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

/**
 * DYNAMIC METADATA — Language-aware SEO
 * 
 * Generates proper title, description, canonical, and alternates
 * per language. This eliminates duplicate content issues and
 * ensures Google indexes the correct version for each market.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEnglish = lang === 'en';

  const title = isEnglish
    ? 'VAWA Visa 2026: Complete Guide to I-360 Self-Petition & Green Card for Abuse Survivors'
    : 'Visa VAWA 2026: Guía Completa de Autopetición I-360 y Green Card por Abuso Doméstico';

  const description = isEnglish
    ? 'Expert guide on VAWA visa, I-360 self-petition, Green Card through domestic abuse, VAWA requirements 2026. Confidential resources for men, women, and children. Work permits, derivative status, and immigration waivers.'
    : 'Guía experta sobre Visa VAWA, autopetición I-360, Green Card por abuso doméstico, requisitos VAWA 2026. Recursos confidenciales para hombres, mujeres e hijos. Permiso de trabajo, estatus derivado y perdón migratorio.';

  // Generate FAQPage schema from translations for rich results
  const t = TRANSLATIONS[lang === 'en' ? 'en' : 'es'];
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return {
    title,
    description,
    alternates: {
      canonical: `https://visa-vawa.com/${lang}`,
      languages: {
        es: 'https://visa-vawa.com/es',
        en: 'https://visa-vawa.com/en',
        'x-default': 'https://visa-vawa.com/es',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://visa-vawa.com/${lang}`,
      type: 'website',
      locale: isEnglish ? 'en_US' : 'es_US',
      alternateLocale: isEnglish ? ['es_US'] : ['en_US'],
    },
    other: {
      // Inject FAQPage schema via metadata (alternative to Script tag)
      'script:ld+json': JSON.stringify(faqSchema),
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  const t = TRANSLATIONS[validLang];

  return (
    <>
      {/* FAQPage JSON-LD for rich snippets in Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: t.faq.items.map((item: { q: string; a: string }) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          }),
        }}
      />
      <HomeClient lang={validLang} t={t} />
    </>
  );
}