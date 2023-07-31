import Footer from '@/components/main/footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DataPonte',
  description: 'We provide the access to the data you need to build your app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#2d2c2f] text-white	`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
