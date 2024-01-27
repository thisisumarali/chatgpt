import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/Modetoggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ebrain AI',
  description: 'AI platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body >
          {children}
        </body>
      </html>
    </ClerkProvider >
  )
}
