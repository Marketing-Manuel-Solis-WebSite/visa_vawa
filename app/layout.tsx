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

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://visa-vawa.com'),
  
  title: {
    template: '%s | VISA-VAWA Legal Help',
    default: 'VAWA Visa 2026: Complete Guide to Green Card Through Self-Petition',
  },
  
  description: 'Expert guide on VAWA visa requirements, Form I-360 self-petition, and green card process for domestic violence survivors. Free eligibility quiz, evidence checklist, and confidential legal resources.',
  
  keywords: [
    // Primary Keywords
    'VAWA visa',
    'VAWA requirements',
    'green card through VAWA',
    'Form I-360',
    'VAWA self petition',
    'Violence Against Women Act',
    'VAWA work permit',
    'battered spouse visa',
    
    // Long-tail Keywords
    'VAWA for men requirements',
    'VAWA for parents',
    'extreme cruelty immigration',
    'evidence for VAWA petition',
    'good moral character VAWA',
    'VAWA processing time 2026',
    'VAWA green card timeline',
    'abused spouse immigration',
    
    // Spanish Keywords
    'visa VAWA requisitos',
    'residencia por VAWA',
    'formulario I-360',
    'autopetición VAWA',
    'permiso de trabajo VAWA',
  ],
  
  authors: [{ name: 'VISA-VAWA Legal Resources' }],
  creator: 'Carlos Anaya Ruiz',
  publisher: 'VISA-VAWA Legal Information Center',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: 'https://visa-vawa.com',
    siteName: 'VISA-VAWA',
    title: 'VAWA Visa 2026: Complete Guide to Green Card for Abuse Survivors',
    description: 'Confidential information about VAWA visa requirements, self-petition process, and legal protections for domestic violence survivors. Gender-neutral resources in English & Spanish.',
    images: [
      {
        url: '/visa_ms.png',
        width: 1200,
        height: 630,
        alt: 'VISA-VAWA Legal Help Logo',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'VAWA Visa 2026: Complete Self-Petition Guide',
    description: 'Expert resources on VAWA requirements, Form I-360, and green card process for abuse survivors. Confidential and free.',
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
      'en-US': 'https://visa-vawa.com',
      'es-ES': 'https://visa-vawa.com?lang=es',
    },
  },
  
  verification: {
    // Add your verification codes here
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    // other: {
    //   'msvalidate.01': 'your-bing-verification-code',
    // },
  },
  
  category: 'legal',
  classification: 'Immigration Law',
  
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
  // Schema.org JSON-LD for Legal Service
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "VISA-VAWA Legal Information Center",
    "description": "Comprehensive legal information and resources for VAWA visa self-petitioners and domestic violence survivors seeking immigration relief.",
    "url": "https://visa-vawa.com",
    "logo": "https://visa-vawa.com/visa_ms.png",
    "image": "https://visa-vawa.com/visa_ms.png",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": [
      "Immigration Law",
      "VAWA Self-Petition",
      "Domestic Violence Immigration Relief",
      "Form I-360 Assistance"
    ],
    "availableLanguage": ["English", "Spanish"],
    "knowsAbout": [
      "Violence Against Women Act",
      "VAWA Visa Requirements",
      "Form I-360 Self-Petition",
      "Green Card for Abuse Survivors",
      "Immigration Relief for DV Victims"
    ],
    "priceRange": "Free Information Resources",
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VISA-VAWA",
    "url": "https://visa-vawa.com",
    "logo": "https://visa-vawa.com/visa_ms.png",
    "description": "Trusted resource for VAWA visa information and immigration relief for domestic violence survivors",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-799-7233",
      "contactType": "Emergency Support",
      "availableLanguage": ["English", "Spanish"],
      "areaServed": "US"
    },
    "sameAs": [
      "https://www.uscis.gov/humanitarian/battered-spouse-children-parents"
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VISA-VAWA",
    "url": "https://visa-vawa.com",
    "description": "Comprehensive VAWA visa information and resources",
    "inLanguage": ["en", "es"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://visa-vawa.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://visa-vawa.com"
      }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
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
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.uscis.gov" />
        <link rel="dns-prefetch" href="https://www.thehotline.org" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/visa_ms.png" />
        
        {/* Additional Security Headers (complementing next.config.ts) */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1a365d" />
      </head>
      <body className={`antialiased`}>
        {children}
        
        {/* Emergency Hotline Link (Always Accessible) */}
        <div className="sr-only">
          <a href="tel:18007997233">National Domestic Violence Hotline: 1-800-799-7233</a>
        </div>
      </body>
    </html>
  );
}