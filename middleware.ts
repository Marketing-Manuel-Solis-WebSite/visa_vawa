import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 1. Definir los idiomas soportados
const locales = ['es', 'en'];
const defaultLocale = 'es';

// Función auxiliar para obtener el idioma preferido del navegador
// (Sin librerías externas para mantenerlo ligero)
function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  
  if (!acceptLanguage) return defaultLocale;

  // Preferencia simple: si contiene 'en', devolvemos 'en', sino 'es'
  // Puedes expandir esto con lógica más compleja si lo deseas
  const preferredLocale = acceptLanguage.split(',')[0].split('-')[0];
  
  if (locales.includes(preferredLocale)) {
    return preferredLocale;
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 2. Comprobar si la ruta ya tiene el idioma (ej. /es/evidence)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 3. Redirigir si no tiene idioma
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  // Mantener los query params si existen (ej. ?source=google)
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // 4. Matcher: Evitar que el middleware corra en archivos estáticos, api, o next internals
  matcher: [
    /*
     * Coincide con todas las rutas de solicitud excepto las que comienzan con:
     * - api (rutas API)
     * - _next/static (archivos estáticos)
     * - _next/image (archivos de optimización de imágenes)
     * - favicon.ico, sitemap.xml, robots.txt (archivos de metadatos)
     * - archivos con extensiones comunes (png, jpg, jpeg, svg, css, js)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|svg|css|js)).*)',
  ],
};