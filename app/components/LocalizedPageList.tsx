'use client'

import { useState } from 'react'
import PageList from './PageList'

type SupportedLocale = 'en' | 'pt' | 'es'
const AVAILABLE_LOCALES: SupportedLocale[] = ['en', 'pt', 'es']

type LocalizedPageListProps = {
    defaultLocale?: SupportedLocale
}

export default function LocalizedPageList({ defaultLocale = 'en' }: LocalizedPageListProps) {
    const [currentLocale, setCurrentLocale] = useState<SupportedLocale>(defaultLocale)

    return (
        <div className="space-y-6">
            <div className="flex gap-4 items-center">
                <label className="font-medium">Select Language:</label>
                <select
                    value={currentLocale}
                    onChange={(e) => setCurrentLocale(e.target.value as SupportedLocale)}
                    className="px-3 py-2 border rounded-md"
                >
                    {AVAILABLE_LOCALES.map((locale) => (
                        <option key={locale} value={locale}>
                            {locale.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>

            <PageList locale={currentLocale} />
        </div>
    )
} 