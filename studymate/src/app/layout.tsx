import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { dir } from 'i18next'
import Navigation from '@/components/Navigation'
import { appWithTranslation } from 'next-i18next'

const inter = Inter({ subsets: ['latin', 'arabic'] })

export const metadata: Metadata = {
  title: 'StudyMate - Smart Student Learning Platform',
  description: 'A bilingual learning platform with AI-powered study tools for university students',
}

function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {children}
        </main>
      </body>
    </html>
  )
}

export default appWithTranslation(RootLayout) 