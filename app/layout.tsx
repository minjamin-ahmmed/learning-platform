import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'EduLearn - Modern Online Learning Platform',
  description: 'Transform your learning journey with expert-led courses, live classes, and personalized progress tracking. Join thousands of students mastering new skills.',
  keywords: ['online learning', 'courses', 'education', 'skill development', 'e-learning'],
  authors: [{ name: 'EduLearn' }],
  openGraph: {
    title: 'EduLearn - Modern Online Learning Platform',
    description: 'Transform your learning journey with expert-led courses and live classes.',
    type: 'website',
  },
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
