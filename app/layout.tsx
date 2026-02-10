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
  
  description: 'Guía experta sobre requisitos de visa VAWA, formulario I-360 y proceso de green card. Quiz de elegibilidad gratuito, lista de evidencia y recursos legales confidenciales.',
  
  // OPTIMIZACIÓN: Lista reducida a lo más relevante para evitar "Keyword Stuffing"
  keywords: [
    'visa VAWA',
    'VAWA requisitos',
    'green card por abuso',
    'formulario I-360',
    'autopetición VAWA',
    'VAWA para hombres',
    'permiso de trabajo VAWA',
    'violencia doméstica inmigración',
    'VAWA padres',
    'VAWA cónyuges'
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
    title: 'VAWA Visa 2026: Guía Completa para Sobrevivientes',
    description: 'Información confidencial sobre requisitos de visa VAWA, proceso de autopetición y protecciones legales. Recursos neutrales en género.',
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
    description: 'Recursos expertos sobre requisitos VAWA, Formulario I-360 y proceso de green card. Confidencial y gratuito.',
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
  
  // ELIMINADO: verification code manual (ya verificado por DNS en GoDaddy)
  
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
  // Schema.org JSON-LD - GLOBALES
  // Nota: El FAQ Schema se debe mover a la página específica donde aparecen las preguntas.
  
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

  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Schema.org JSON-LD Scripts Globales */}
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