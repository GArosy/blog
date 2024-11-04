import type { Metadata } from 'next'

import localFont from 'next/font/local'
import { Inter, Roboto_Slab } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
})

export const metadata: Metadata = {
  title: 'Gaoshengyu.site',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${robotoSlab.variable} flex min-h-screen flex-col bg-stone-50 font-roboto-slab antialiased`}
      >
        <Header />
        <main className='flex min-h-[calc(100vh-56px)] justify-center'>
          <div className='container-custom mx-4'>{children}</div>
        </main>
        <Toaster />
      </body>
    </html>
  )
}
