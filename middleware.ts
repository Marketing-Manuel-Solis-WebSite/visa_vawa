import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['es', 'en'] as const;
const defaultLocale = 'es';

/**
 * OPTIMIZED MIDDLEWARE — Single-hop resolution
 * Fixes: Redirect chains that kill crawl budget
 * Strategy: Resolve locale + trailing slash + canonical in ONE redirect
 */
function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Parse quality values properly for accurate locale detection
  const languages = acceptLanguage.split(',').map(lang => {
    const [code, quality] = lang.trim().split(';q=');
    return {
      code: code.split('-')[0].toLowerCase(),
      q: quality ? parseFloat(quality) : 1.0
    };
  }).sort((a, b) => b.q - a.q);

  for (const lang of languages) {
    if ((locales as readonly string[]).includes(lang.code)) {
      return lang.code;
    }
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Skip static files, API routes, Next.js internals completely
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // Any file with extension (images, favicons, etc.)
  ) {
    return NextResponse.next();
  }

  // Normalize: remove trailing slash (except root)
  const normalizedPath = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;

  // Check if path already has a valid locale prefix
  const pathSegments = normalizedPath.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  const hasValidLocale = (locales as readonly string[]).includes(firstSegment);

  if (hasValidLocale) {
    // Already has locale — only fix trailing slash if needed
    if (normalizedPath !== pathname) {
      const url = request.nextUrl.clone();
      url.pathname = normalizedPath;
      return NextResponse.redirect(url, 308); // Permanent redirect for SEO
    }
    return NextResponse.next();
  }

  // No locale found — resolve in ONE redirect
  const locale = getPreferredLocale(request);
  const targetPath = `/${locale}${normalizedPath === '/' ? '' : normalizedPath}`;
  
  const url = request.nextUrl.clone();
  url.pathname = targetPath;
  // Preserve query params automatically via clone
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - api routes
     * - _next (static files, images)
     * - Files with extensions (favicon.ico, images, etc.)
     * - sitemap.xml, robots.txt (must be at root for search engines)
     */
    '/((?!api|_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|css|js|woff|woff2|ttf|eot|mp4|mp3|pdf|zip|json|xml)).*)',
  ],
};