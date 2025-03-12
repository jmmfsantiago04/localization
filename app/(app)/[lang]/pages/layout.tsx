import { SupportedLocale } from '@/app/actions/getPages'

type Props = {
    children: React.ReactNode
    params: {
        lang: SupportedLocale
    }
}

export default async function PagesLayout({ children, params }: Props) {
    // Await the params at the layout level
    await Promise.resolve(params)

    return children
} 