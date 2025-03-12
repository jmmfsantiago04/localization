import { Suspense } from 'react'
import { SupportedLocale } from '@/app/actions/getPages'
import PageList from '@/app/components/PageList'

type Props = {
    params: {
        lang: SupportedLocale
    }
}

export function generateStaticParams() {
    return [
        { lang: 'en' },
        { lang: 'pt' },
        { lang: 'es' },
    ]
}

export default async function PagesOverview({ params }: Props) {
    // Await the params to satisfy Next.js type system
    const { lang } = await Promise.resolve(params)

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8">Pages Overview</h1>
            <Suspense fallback={<div>Loading pages...</div>}>
                <PageList locale={lang} />
            </Suspense>
        </div>
    )
} 