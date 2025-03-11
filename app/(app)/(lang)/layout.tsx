import LanguageSwitcher from '../components/LanguageSwitcher'
import { type SupportedLocale } from '../utils/language-shared'

export default function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: SupportedLocale }
}) {
    return (
        <div>
            <header className="p-4">
                <LanguageSwitcher />
            </header>
            {children}
        </div>
    )
} 