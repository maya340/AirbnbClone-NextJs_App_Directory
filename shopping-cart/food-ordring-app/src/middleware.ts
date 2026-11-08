
import { NextRequest, NextResponse } from "next/server";
import { i18n, LanguageType } from "./i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. إنشاء الهيدرز وتمرير الـ URL الحالي والـ Pathname
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);
  requestHeaders.set("x-pathname", pathname);

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 2. إذا كانت اللغة مفقودة نعمل Redirect
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // 3. نمرر الـ headers الجديدة في الـ request
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: LanguageType[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  try {
    return matchLocale(languages, locales, i18n.defaultLocale);
  } catch {
    return i18n.defaultLocale;
  }
}

export const config = {
  matcher: [
    /*
     * استثناء ملفات الميديا والـ static
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};