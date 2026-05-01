import type { Metadata } from 'next'
import { DM_Sans, Space_Mono } from 'next/font/google'
import { content } from '@/content'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-sans'
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
