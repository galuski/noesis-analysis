import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es", "it"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // אם הכתובת היא של קובץ פנימי או תמונה, אל תעשה כלום
  if (
    pathname.includes('.') || 
    pathname.startsWith('/_next/') || 
    pathname.startsWith('/api/')
  ) {
    return;
  }

  // בודק אם ה-URL כבר מכיל אחת מהשפות שלנו
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // אם אין שפה בכתובת, מפנה לאנגלית
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next).*)'],
};