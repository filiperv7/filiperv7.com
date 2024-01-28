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
      <HoverCardContent className="w-96 p-4 border border-zinc-600 rounded-md backdrop-blur-md max-sm:max-w-96 max-sm:ml-2 leading-5">
        <p>Eu sei! Não se assuste!</p>
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
