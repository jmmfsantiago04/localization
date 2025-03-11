import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { defaultLocale } from './utils/language-shared'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Localized Next.js App',
  description: 'A Next.js app with internationalization support',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={defaultLocale}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
