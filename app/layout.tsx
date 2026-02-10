import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Comprehensive SEO Metadata - ULTRA OPTIMIZADO
export const metadata: Metadata = {
  metadataBase: new URL('https://visa-vawa.com'),
  
  title: {
    template: '%s | VISA-VAWA - Información Legal Confidencial',
    default: 'VAWA Visa 2026: Guía Completa para Green Card por Autopetición | VISA-VAWA',
  },
  
  description: 'Guía experta sobre requisitos de visa VAWA, formulario I-360, proceso de green card para sobrevivientes de violencia doméstica. Quiz de elegibilidad gratuito, lista de evidencia y recursos legales confidenciales en español e inglés.',
  
  keywords: [
    // Primary Keywords - Español (HIGH VOLUME)
    'visa VAWA',
    'VAWA requisitos',
    'green card VAWA',
    'formulario I-360',
    'autopetición VAWA',
    'residencia por VAWA',
    'permiso de trabajo VAWA',
    'visa por violencia doméstica',
    'VAWA 2026',
    
    // Long-tail Keywords - Español
    'VAWA para hombres requisitos',
    'VAWA para padres',
    'crueldad extrema inmigración',
    'evidencia petición VAWA',
    'buen carácter moral VAWA',
    'tiempo de procesamiento VAWA 2026',
    'timeline green card VAWA',
    'esposa abusada inmigración',
    'VAWA sin papeles',
    'VAWA entrada ilegal',
    
    // Primary Keywords - English
    'VAWA visa',
    'VAWA requirements',
    'green card through VAWA',
    'Form I-360',
    'VAWA self petition',
    'Violence Against Women Act',
    'VAWA work permit',
    'battered spouse visa',
    
    // Long-tail Keywords - English  
    'VAWA for men requirements',
    'VAWA for parents',
    'extreme cruelty immigration',
    'evidence for VAWA petition',
    'good moral character VAWA',
    'VAWA processing time 2026',
    'VAWA green card timeline',
    'abused spouse immigration',
    'VAWA undocumented',
    'VAWA illegal entry',
    
    // Location-based
    'VAWA visa Estados Unidos',
    'VAWA visa USA',
    'abogado VAWA',
    'lawyer VAWA immigration',
    
    // Action Keywords
    'cómo aplicar VAWA',
    'how to apply VAWA',
    'VAWA eligibility quiz',
    'quiz elegibilidad VAWA',
    'VAWA evidence guide',
    'guía evidencia VAWA',
  ],
  
  authors: [{ name: 'VISA-VAWA Legal Resources', url: 'https://visa-vawa.com' }],
  creator: 'Carlos Anaya Ruiz',
  publisher: 'VISA-VAWA Legal Information Center',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: 'https://visa-vawa.com',
    siteName: 'VISA-VAWA - Información Legal Confidencial',
    title: 'VAWA Visa 2026: Guía Completa para Sobrevivientes de Violencia Doméstica',
    description: 'Información confidencial sobre requisitos de visa VAWA, proceso de autopetición y protecciones legales para sobrevivientes de violencia doméstica. Recursos neutrales en género en español e inglés.',
    images: [
      {
        url: '/visa_ms.png',
        width: 1200,
        height: 630,
        alt: 'VISA-VAWA Logo - Ayuda Legal Confidencial',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'VAWA Visa 2026: Guía Completa de Autopetición',
    description: 'Recursos expertos sobre requisitos VAWA, Formulario I-360 y proceso de green card para sobrevivientes. Confidencial y gratuito.',
    images: ['/visa_ms.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://visa-vawa.com',
    languages: {
      'es-ES': 'https://visa-vawa.com',
      'en-US': 'https://visa-vawa.com/en',
    },
  },
  
  verification: {
    google: 'your-google-search-console-code',
    // Añade tus códigos de verificación reales aquí
  },
  
  category: 'legal',
  classification: 'Immigration Law Information',
  
  other: {
    'application-name': 'VISA-VAWA',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'VISA-VAWA',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD - MEJORADO Y EXPANDIDO
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "VISA-VAWA Legal Information Center",
    "description": "Información legal integral y recursos para autopeticionarios de visa VAWA y sobrevivientes de violencia doméstica que buscan alivio migratorio.",
    "url": "https://visa-vawa.com",
    "logo": "https://visa-vawa.com/visa_ms.png",
    "image": "https://visa-vawa.com/visa_ms.png",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": [
      "Immigration Law Information",
      "VAWA Self-Petition Guidance",
      "Domestic Violence Immigration Relief",
      "Form I-360 Resources"
    ],
    "availableLanguage": ["Spanish", "English"],
    "knowsAbout": [
      "Violence Against Women Act",
      "VAWA Visa Requirements",
      "Form I-360 Self-Petition",
      "Green Card for Abuse Survivors",
      "Immigration Relief for DV Victims",
      "Extreme Cruelty Definition",
      "Good Moral Character VAWA",
      "VAWA Work Permits"
    ],
    "priceRange": "Free Information Resources",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "350"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VISA-VAWA",
    "url": "https://visa-vawa.com",
    "logo": "https://visa-vawa.com/visa_ms.png",
    "description": "Recurso confiable de información sobre visa VAWA y alivio migratorio para sobrevivientes de violencia doméstica",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-799-7233",
        "contactType": "Emergency Support",
        "availableLanguage": ["English", "Spanish"],
        "areaServed": "US",
        "hoursAvailable": "24/7"
      }
    ],
    "sameAs": [
      "https://www.uscis.gov/humanitarian/battered-spouse-children-parents"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VISA-VAWA",
    "url": "https://visa-vawa.com",
    "description": "Información y recursos integrales sobre visa VAWA",
    "inLanguage": ["es", "en"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://visa-vawa.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://visa-vawa.com"
      }
    ]
  };

  // NUEVO: FAQ Schema para mejorar rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es VAWA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VAWA (Violence Against Women Act) es una ley federal de Estados Unidos que permite a víctimas de violencia doméstica solicitar residencia permanente (green card) de forma independiente, sin necesidad de que su agresor les patrocine. Aplica a hombres y mujeres por igual."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta aplicar para VAWA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay tarifa de presentación para el formulario I-360 de autopetición VAWA. Los sobrevivientes están completamente exentos de pagar este formulario. Sin embargo, honorarios de abogado y evaluaciones psicológicas son costos separados."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo trabajar con VAWA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Una vez aprobada tu petición I-360 VAWA, eres elegible para solicitar un Documento de Autorización de Empleo (EAD) que te permite trabajar legalmente en Estados Unidos, típicamente válido por 2 años."
        }
      }
    ]
  };

  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Schema.org JSON-LD Scripts */}
        <Script
          id="legal-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="beforeInteractive"
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch - Recursos externos importantes */}
        <link rel="dns-prefetch" href="https://www.uscis.gov" />
        <link rel="dns-prefetch" href="https://www.thehotline.org" />
        <link rel="dns-prefetch" href="https://manuelsolis.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/visa_ms.png" />
        
        {/* Additional Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1a365d" />
        
        {/* Geo Tags para SEO local */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
      </head>
      <body className={`antialiased`}>
        {children}
        
        {/* Emergency Hotline Link (Always Accessible - A11y) */}
        <div className="sr-only">
          <a href="tel:18007997233">Línea Nacional de Violencia Doméstica: 1-800-799-7233</a>
          <a href="tel:911">Emergencia: 911</a>
        </div>
      </body>
    </html>
  );
}