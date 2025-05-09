import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'pt', 'es'] as const
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Skip if the request is for static files, API routes, or admin
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/admin') ||
        pathname.includes('/static/') ||
        pathname.includes('.')
    ) {
        return NextResponse.next()
    }

    // Redirect root path to pages overview
    if (pathname === '/') {
        return NextResponse.redirect(
            new URL(`/${defaultLocale}/pages`, request.url)
        )
    }

    // Check if the pathname starts with a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    // If no locale in pathname, redirect to default locale
    if (!pathnameHasLocale) {
        return NextResponse.redirect(
            new URL(`/${defaultLocale}${pathname}`, request.url)
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!api|_next|static|.*\\..*).*)'
    ]
} 