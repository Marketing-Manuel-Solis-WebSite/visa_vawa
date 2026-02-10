import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"; // <--- IMPORTACIÓN AÑADIDA
import "../globals.css"; 
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

// Configuración Base de Metadata
export const metadata: Metadata = {
  // URL base para que las imágenes sociales funcionen correctamente
  metadataBase: new URL('https://visa-vawa.com'),
  
  title: {
    template: '%s | VISA-VAWA',
    default: 'VAWA Visa 2026: Guía Completa para Green Card',
  },
  
  description: 'Guía experta sobre requisitos de visa VAWA, formulario I-360 y proceso de green card. Recursos confidenciales para sobrevivientes.',

  // Next.js detectará automáticamente opengraph-image.png en la carpeta app/
  openGraph: {
    type: 'website',
    siteName: 'VISA-VAWA',
    title: 'VAWA Visa 2026: Guía Completa',
    description: 'Recursos confidenciales para sobrevivientes de violencia doméstica.',
    locale: 'es_ES',
    alternateLocale: 'en_US',
  },

  // Next.js usará la opengraph-image.png también aquí si no hay twitter-image.png
  twitter: {
    card: 'summary_large_image',
    title: 'VAWA Visa 2026: Ayuda Legal',
    description: 'Guía completa de autopetición VAWA.',
  },
  
  // Next.js detectará automáticamente icon.png, apple-icon.png y favicon.ico
};

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VISA-VAWA",
    "url": "https://visa-vawa.com",
    "logo": "https://visa-vawa.com/icon.png", 
  };

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics /> {/* <--- COMPONENTE AÑADIDO AQUÍ */}
      </body>
    </html>
  );
}