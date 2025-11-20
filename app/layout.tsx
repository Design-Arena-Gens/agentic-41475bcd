import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TikTok Viral Title Generator',
  description: 'Generate trending titles and optimize your TikTok videos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
