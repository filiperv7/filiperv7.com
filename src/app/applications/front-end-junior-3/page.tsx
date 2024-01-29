import { CheckCircle } from 'lucide-react'
import { Metadata } from 'next'
import { Skeleton } from '../../../components/applications/skeleton'

export const metadata: Metadata = {
  title: 'Filipe Rodrigo | Desenvolvedor Front-end Júnior III',
  description:
    'Página de apresentação ao recrutador da Melhor Envio para vaga de Desenvolvedor Front-end Júnior III - Filipe Rodrigo Vasconcelos'
}

export default function FrontEndJunior3() {
  return (
    <Skeleton
      article="a"
      companyName="Melhor Envio"
      companyColor="text-blue-500"
      opportunityName="Desenvolvedor Front-end Júnior III"
    >
      <p className="pb-4 text-zinc-200">Preencho todos os requisitos</p>

      <ul className="flex flex-col gap-3 max-sm:gap-2 text-zinc-300 max-sm:text-sm leading-4">
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Tenho mais de 1 ano de experiencia com front-end
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Possuo Graduação Superior (Sistemas de Informação)
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Sólidos conhecimentos e experiência com HTML, CSS e JavaScript
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Experiência com Vue.js e biblioteca Vuetify</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Experiência com interfaces responsivas</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Vasta experiência com Git, inclusive em trabalho em equipe
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Sou comunicativo, proativo e dinâmico</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Busco crescer profissionalmente e gosto de ajudar outros
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Tenho bastante prática com o Tailwind CSS</p>
        </li>
      </ul>

      <p className="pt-4">
        Também preencho todos os requisitos opcionais, com exceção do último
        (atuação Segurança da Informação, Compliance ou Anti-Fraude) e
        conhecimento em SAST e DAST{' '}
        <span className="font-bold italic">
          (Mas já vou começar a estudar 😁)
        </span>
      </p>
    </Skeleton>
  )
}
