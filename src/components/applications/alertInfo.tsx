'use client'

import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@radix-ui/react-hover-card'
import { Asterisk } from 'lucide-react'
export function AlertInfo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="px-1">
          <Asterisk
            size={20}
            className="animate-pulse text-yellow-400 inline-block mb-2 cursor-pointer"
          />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="max-w-[22.5rem] p-4 border border-zinc-500 rounded-md bg-zinc-900 opacity-95 max-sm:ml-5 leading-5">
        <p className="italic text-sm mb-1">Eu sei! Deixa eu explicar!</p>
        <p>
          Mas, a verdade é que boa parte dos Devs hoje em dia não tem essa base
          bem sólida, isso os torna muito dependentes de ajudas externas e nunca
          conseguem ser independentes e muito menos trocar de tecnologias
          rapidamente.
        </p>
      </HoverCardContent>
    </HoverCard>
  )
}
