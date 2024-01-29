import { Skeleton } from '@/components/applications/skeleton'
import { CheckCircle } from 'lucide-react'

export default function DesenvolvedorFrontEndEntelgyBrasil() {
  return (
    <Skeleton
      article="a"
      companyName="Energy Brasil"
      opportunityName="Desenvolvedor Front End (React/TypeScript)"
    >
      <p className="pb-4 text-zinc-200">Preencho todos os requisitos</p>

      <ul className="flex flex-col gap-3 max-sm:gap-2 text-zinc-300 max-sm:text-sm leading-4">
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Possuo experiência com Front-end</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Experiência com React e TypeScript</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Experiência com JavaScript</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Experiência com APIs Rest</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Experiência com Git (e Git Flow) em trabalho em equipe
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Experiência em resolução de problemas de compatibilidade entre
            navegadores
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Conhecimento e experiência em trabalhar com desenvolvimento ágil em
            equipe
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Estudando Inteligência Artificial (pela DIO)</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Conhecimento básico de Python</p>
        </li>
      </ul>
    </Skeleton>
  )
}
