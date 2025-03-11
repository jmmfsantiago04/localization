export const locales = ['en', 'pt', 'es'] as const
export type SupportedLocale = typeof locales[number]
export const defaultLocale = 'en'

export const isValidLocale = (locale: string | undefined): locale is SupportedLocale => {
    return typeof locale === 'string' && locales.includes(locale as SupportedLocale)
} 