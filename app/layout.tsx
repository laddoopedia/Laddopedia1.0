import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Laddoopedia - Fresh Handmade Laddoos | Pan India Delivery',
  description: 'Premium handmade laddoos made with pure desi ghee. No preservatives. Sugar-free options available. Order directly on WhatsApp with delivery across India.',
  keywords: ['laddoo', 'indian sweets', 'pan india delivery', 'desi ghee', 'handmade sweets', 'sugar-free laddoo', 'besan laddoo', 'motichoor laddoo', 'online sweets'],
  openGraph: {
    title: 'Laddoopedia - Fresh Handmade Laddoos | Pan India Delivery',
    description: 'Premium handmade laddoos made with pure desi ghee. No preservatives. Order on WhatsApp with delivery across India.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#e07b39',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
