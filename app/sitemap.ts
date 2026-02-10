import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://visa-vawa.com';
  const lastModified = new Date();

  // Definimos las rutas base (sin el idioma)
  const routes = [
    '', // Home
    '/evidence',
    '/quiz',
    '/myths',
    '/men',
    '/children',
    '/security',
    '/privacy',
    '/terms',
  ];

  // Generamos el sitemap cruzando rutas con idiomas
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    // Versión en Español (Default)
    sitemapEntries.push({
      url: `${baseUrl}/es${route}`,
      lastModified,
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    });

    // Versión en Inglés
    sitemapEntries.push({
      url: `${baseUrl}/en${route}`,
      lastModified,
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    });
  }

  return sitemapEntries;
}