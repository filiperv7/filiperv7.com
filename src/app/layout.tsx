import '@/app/globals.css'
import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const jetBrains = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Filipe Rodrigo',
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
      <body className={jetBrains.className}>
        <Header />
        {children}
        <script async src="https://tally.so/widgets/embed.js"></script>
      </body>
    </html>
  )
}
