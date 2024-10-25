import type { Metadata } from 'next'
import { UserProvider } from '@/contexts/user'

import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

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

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} flex min-h-screen flex-col antialiased`}
      >
        <UserProvider>
          <Header />
          <main className='container mx-auto min-h-[calc(100vh-56px)]'>{children}</main>
        </UserProvider>
      </body>
    </html>
  )
}
