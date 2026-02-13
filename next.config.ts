import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Enable compression
  compress: true,

  // Turbopack for faster builds
  turbopack: {},

  // Image optimization — aggressive format and size control
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year cache for immutable images
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Remove 'domains' — use remotePatterns instead (Next.js best practice)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },

  // Security and performance headers
  async headers() {
    return [
      {
        // Global security headers
        source: "/(.*)",
        headers: [
          // DNS prefetch for faster navigation
          { key: "X-DNS-Prefetch-Control", value: "on" },
          // HSTS — 2 years with preload
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Prevent MIME sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // XSS protection (legacy browsers)
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Strict referrer policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restrict permissions — critical for safety-focused site
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Content Security Policy — allow Vercel Analytics + fonts
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
      {
        // Immutable cache for static assets — 1 year
        source:
          "/(.*)\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2|ttf|eot)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // JS/CSS with long cache + revalidation
        source: "/(.*)\\.(js|css)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // SEO redirects — handle common URL mistakes in ONE hop
  async redirects() {
    return [
      // Handle /weather (panic button redirect target) — serve instead of 404
      // Note: This is handled by the WeatherDecoy component client-side
      
      // Common misspellings / old URLs
      {
        source: "/vawa",
        destination: "/es",
        permanent: true,
      },
      {
        source: "/quiz",
        destination: "/es/quiz",
        permanent: true,
      },
      {
        source: "/evidence",
        destination: "/es/evidence",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [];
  },

  // Bundle optimization
  experimental: {
    // Tree-shake lucide-react (huge icon library) to only include used icons
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;