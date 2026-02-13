import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

// Optimized font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Nextjs Frontend Template',
  description: 'Next.js 16 + Tailwind v4 frontend architecture.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='antialiased'>{children}</body>
    </html>
  )
}
