import { getPages, SupportedLocale } from "../actions/getPages"

type PageListProps = {
    locale?: SupportedLocale
}

export default async function PageList({ locale = 'en' }: PageListProps) {
    const pages = await getPages(locale)

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Pages ({locale})</h2>
            </div>
            <div className="grid gap-4">
                {pages.map((page) => (
                    <div
                        key={page.id}
                        className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-xl font-semibold">{page.title}</h3>
                        <p className="mt-2 text-gray-600">{page.content}</p>
                    </div>
                ))}
                {pages.length === 0 && (
                    <p className="text-gray-500">No pages found for locale: {locale}</p>
                )}
            </div>
        </div>
    )
} 