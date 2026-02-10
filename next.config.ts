import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    domains: ['upload.wikimedia.org'], // For flag images
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // Enable Turbopack (Next.js 16 default)
  turbopack: {},

  // Security and performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ]
      },
      // Cache control for static assets
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // HTML pages caching
      {
        source: '/:path*.html',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate'
          }
        ]
      }
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return [];
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: false, // Disabled to fix 'critters' module not found error
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;