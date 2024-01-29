import { Skeleton } from '@/components/applications/skeleton'
import { CheckCircle } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Filipe Rodrigo | Desenvolvedor Júnior',
  description:
    'Página de apresentação ao recrutador(a) da Cades para vaga de Desenvolvedor Júnior - Filipe Rodrigo Vasconcelos'
}

export default function DesenvolvedorJuniorCades() {
  return (
    <Skeleton
      article="a"
      companyName="Cades"
      companyColor="text-[#2150A2]"
      opportunityName="Desenvolvedor Júnior"
    >
      <p className="pb-4 text-zinc-200">Preencho todos os requisitos</p>

      <ul className="flex flex-col gap-3 max-sm:gap-2 text-zinc-300 max-sm:text-sm leading-4">
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Conhecimento e experiência com as linguagens: JavaScript, TypeScript
            e C#
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Tenho um bom raciocínio lógico e organizacional
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Facilidade e experiência em trabalhar em equipe
          </p>
        </li>

        <span className="pt-1 font-semibold">
          Além disso, também tenho vasta experiência em:
        </span>

        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Trabalho com metodologia de desenvolvimento ágil
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Uso do Git (e Git Flow) para versionamento de código
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Desenvolvimento de design de sites responsivos
          </p>
        </li>
      </ul>
    </Skeleton>
  )
}
