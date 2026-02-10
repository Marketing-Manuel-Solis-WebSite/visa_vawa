import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://visa-vawa.com';
  const currentDate = new Date();
  const lastWeek = new Date(currentDate);
  lastWeek.setDate(lastWeek.getDate() - 7);

  return [
    // HOMEPAGE - Máxima prioridad
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          es: `${baseUrl}`,
          en: `${baseUrl}/en`,
        },
      },
    },

    // PÁGINAS DE ALTA CONVERSIÓN - Prioridad 0.9
    {
      url: `${baseUrl}/evidence`,
      lastModified: currentDate,
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
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/quiz`,
          en: `${baseUrl}/en/quiz`,
        },
      },
    },

    // PÁGINAS DE CONTENIDO ESPECIALIZADO - Prioridad 0.8
    {
      url: `${baseUrl}/myths`,
      lastModified: lastWeek,
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
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: {
        languages: {
          es: `${baseUrl}/men`,
          en: `${baseUrl}/en/men`,
        },
      },
    },
    {
      url: `${baseUrl}/children`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/children`,
          en: `${baseUrl}/en/children`,
        },
      },
    },

    // PÁGINAS DE RECURSOS - Prioridad 0.7
    {
      url: `${baseUrl}/security`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}/security`,
          en: `${baseUrl}/en/security`,
        },
      },
    },

    // PÁGINAS LEGALES - Prioridad baja pero necesarias
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-01-01'), // Fecha estática para páginas legales
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}