import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
import Script from "next/script";

/**
 * FONT STRATEGY — Optimized for CLS 0 and LCP
 * - Lora: Serif display font for headings (distinctive, professional)
 * - Source Sans 3: Clean body text, excellent readability
 * - display: 'swap' prevents FOIT (Flash of Invisible Text)
 * - preload: only latin subset to minimize font payload
 */
const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/**
 * METADATA — Keyword-saturated but natural
 * Template pattern ensures every page inherits base SEO
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://visa-vawa.com"),

  title: {
    template: "%s | Visa VAWA 2026 — Green Card por Abuso Doméstico",
    default:
      "Visa VAWA 2026: Guía Completa de Autopetición I-360 para Green Card por Abuso",
  },

  description:
    "Guía experta y confidencial sobre Visa VAWA, autopetición I-360, Green Card por abuso doméstico y requisitos VAWA 2026. Recursos para hombres, mujeres e hijos de sobrevivientes. Información sobre perdón migratorio, permiso de trabajo y estatus derivado.",

  keywords: [
    "Visa VAWA",
    "VAWA 2026",
    "Green Card por abuso",
    "residencia por maltrato",
    "abogado de inmigración VAWA",
    "VAWA para hombres",
    "I-360 autopetición",
    "perdón migratorio",
    "permiso de trabajo VAWA",
    "requisitos VAWA 2026",
    "estatus derivado para hijos",
    "violencia doméstica inmigración",
    "crueldad extrema USCIS",
    "VAWA self petition",
    "green card domestic violence",
    "VAWA eligibility",
    "VAWA for men",
  ],

  openGraph: {
    type: "website",
    siteName: "VISA-VAWA",
    title: "Visa VAWA 2026: Autopetición I-360 y Green Card por Abuso",
    description:
      "Recursos confidenciales para sobrevivientes de violencia doméstica. Guía completa sobre Visa VAWA, requisitos 2026, permiso de trabajo y estatus derivado para hijos.",
    locale: "es_US",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Visa VAWA 2026 — Guía de Autopetición I-360",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Visa VAWA 2026: Green Card por Abuso — Guía Completa",
    description:
      "Autopetición I-360, requisitos VAWA 2026, permiso de trabajo y protección para hijos. Recursos confidenciales.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // Add your verification codes here when ready
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },

  category: "Legal Services",
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = lang === "en" || lang === "es" ? lang : "es";
  const isEnglish = validLang === "en";

  /**
   * STRUCTURED DATA — Multiple schema types for rich results
   * 1. Organization — brand entity
   * 2. LegalService — specific service type (triggers rich snippets)
   * 3. WebSite — enables sitelinks search box
   */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VISA-VAWA",
    url: "https://visa-vawa.com",
    logo: "https://visa-vawa.com/icon.png",
    description: isEnglish
      ? "Confidential VAWA immigration resources for domestic violence survivors seeking Green Card through I-360 self-petition."
      : "Recursos confidenciales de inmigración VAWA para sobrevivientes de violencia doméstica buscando Green Card mediante autopetición I-360.",
    sameAs: ["https://manuelsolis.com"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Legal Consultation",
      url: "https://manuelsolis.com",
      availableLanguage: ["English", "Spanish"],
    },
  };

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: isEnglish
      ? "VAWA Visa Self-Petition Guide — I-360 Green Card for Abuse Survivors"
      : "Guía de Autopetición Visa VAWA — I-360 Green Card por Abuso",
    description: isEnglish
      ? "Free informational resource about VAWA visa, I-360 self-petition process, requirements for 2026, work permits, derivative status for children, and immigration relief for domestic violence survivors."
      : "Recurso informativo gratuito sobre Visa VAWA, proceso de autopetición I-360, requisitos VAWA 2026, permiso de trabajo, estatus derivado para hijos y alivio migratorio por violencia doméstica.",
    url: `https://visa-vawa.com/${validLang}`,
    serviceType: "Immigration Legal Information",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    audience: {
      "@type": "Audience",
      audienceType: isEnglish
        ? "Domestic violence survivors seeking VAWA immigration relief"
        : "Sobrevivientes de violencia doméstica buscando alivio migratorio VAWA",
    },
    provider: {
      "@type": "Organization",
      name: "VISA-VAWA",
      url: "https://visa-vawa.com",
    },
    availableLanguage: [
      { "@type": "Language", name: "Spanish", alternateName: "es" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VISA-VAWA",
    url: "https://visa-vawa.com",
    inLanguage: [validLang],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://visa-vawa.com/${validLang}/quiz`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const combinedSchema = [organizationSchema, legalServiceSchema, webSiteSchema];

  return (
    <html
      lang={validLang}
      className={`${lora.variable} ${sourceSans.variable}`}
      // Prevent dark mode flash — this site is light-only
      style={{ colorScheme: "light" }}
    >
      <head>
        {/* Preconnect to critical origins for faster resource loading */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* hreflang for proper international targeting */}
        <link rel="alternate" hrefLang="es" href={`https://visa-vawa.com/es${getPathWithoutLang(validLang)}`} />
        <link rel="alternate" hrefLang="en" href={`https://visa-vawa.com/en${getPathWithoutLang(validLang)}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://visa-vawa.com/es${getPathWithoutLang(validLang)}`} />

        {/* Combined JSON-LD — single script tag for efficiency */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(combinedSchema),
          }}
        />
      </head>
      <body className="antialiased font-sans bg-white text-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

/**
 * Helper: extract path without lang prefix for hreflang alternates
 * In layout context, we only have the lang param, so return empty for root
 */
function getPathWithoutLang(_lang: string): string {
  // At layout level, we can't access the full path
  // Individual pages handle their own canonical/alternates
  return "";
}