import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wick Rocket',
  description: 'Generated by create next app',
}

const bodyClass = `bg-slate-800 ${inter.className}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bodyClass}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
