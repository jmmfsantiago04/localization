'use client'

import { useRouter, usePathname } from 'next/navigation'
import { type SupportedLocale, locales } from '../utils/language-shared'

export default function LanguageSwitcher() {
    const router = useRouter()
    const pathname = usePathname() || ''

    const switchLanguage = (newLocale: SupportedLocale) => {
        // Get the current path segments
        const segments = pathname.split('/')

        // Replace or add the locale segment
        const currentLocale = segments[1]
        if (currentLocale && locales.includes(currentLocale as any)) {
            segments[1] = newLocale
        } else {
            segments.splice(1, 0, newLocale)
        }

        // Create the new path
        const newPath = segments.join('/')

        // Navigate to the new path
        router.push(newPath)
    }

    return (
        <div className="flex gap-2">
            <button
                onClick={() => switchLanguage('en')}
                className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
                EN
            </button>
            <button
                onClick={() => switchLanguage('pt')}
                className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
                PT
            </button>
            <button
                onClick={() => switchLanguage('es')}
                className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
                ES
            </button>
        </div>
    )
} 