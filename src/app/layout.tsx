import '@/app/globals.css'
import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Início | Filipe Rodrigo',
  description:
    'Página inicial do portfólio de projetos do desenvolvedor Filipe Rodrigo Vasconcelos'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="dark">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
