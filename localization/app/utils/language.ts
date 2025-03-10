import { type SupportedLocale, locales, defaultLocale } from './language-shared'

export const getLanguageFromPath = (path: string): SupportedLocale => {
    const locale = path.split('/')[1]
    return locale && locales.includes(locale as any) ? (locale as SupportedLocale) : defaultLocale
} 