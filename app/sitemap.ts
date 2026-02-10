import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://visa-vawa.com';
  
  // Usamos la fecha actual (momento del build) para indicar frescura del contenido.
  // Google prefiere fechas reales y pasadas/presentes, no futuras.
  const lastModified = new Date();

  return [
    // HOMEPAGE - Máxima prioridad
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          es: `${baseUrl}`,
          en: `${baseUrl}/en`,
        },
      },
    },

    // PÁGINAS DE ALTA CONVERSIÓN
    {
      url: `${baseUrl}/evidence`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/evidence`,
          en: `${baseUrl}/en/evidence`,
        },
      },
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/quiz`,
          en: `${baseUrl}/en/quiz`,
        },
      },
    },

    // PÁGINAS DE CONTENIDO
    {
      url: `${baseUrl}/myths`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/myths`,
          en: `${baseUrl}/en/myths`,
        },
      },
    },
    {
      url: `${baseUrl}/men`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/men`,
          en: `${baseUrl}/en/men`,
        },
      },
    },
    {
      url: `${baseUrl}/children`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/children`,
          en: `${baseUrl}/en/children`,
        },
      },
    },

    // RECURSOS
    {
      url: `${baseUrl}/security`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}/security`,
          en: `${baseUrl}/en/security`,
        },
      },
    },

    // PÁGINAS LEGALES
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}