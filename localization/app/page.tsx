import { redirect } from 'next/navigation'
import { defaultLocale } from './utils/language-shared'

export default function RootPage() {
  redirect(`/${defaultLocale}`)
}
