import { Skeleton } from '@/components/applications/skeleton'
import { CheckCircle } from 'lucide-react'

export default function DesenvolvedorDeSitesFavelaInc() {
  return (
    <Skeleton
      article="a"
      companyName="Favela Inc"
      companyColor="text-[#FF8F00]"
      opportunityName="Desenvolvedor(a) de Sites"
    >
      <p className="pb-4 text-zinc-200">Preencho todos os requisitos</p>

      <ul className="flex flex-col gap-3 max-sm:gap-2 text-zinc-300 max-sm:text-sm leading-4">
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Experiência com HTML, CSS, JavaScript e CMS</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Experiência de mais de 2 anos em desenvolvimento web
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Familiaridade com práticas de acessibilidade web
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Boas habilidades e experiência de comunicação e trabalho em equipe
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Habilidade para inovar e transformar ideias criativas em soluções
            digitais
          </p>
        </li>
      </ul>
    </Skeleton>
  )
}
