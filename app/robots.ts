import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',        // Rutas de API internas
          '/_next/',      // Archivos de construcción de Next.js
          '/private/',    // Rutas privadas (si las tienes)
          '/admin/',      // Panel de administración (si existe)
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Eliminados Crawl-delays y bloqueos innecesarios a archivos JSON
    ],
    sitemap: 'https://visa-vawa.com/sitemap.xml',
  };
}