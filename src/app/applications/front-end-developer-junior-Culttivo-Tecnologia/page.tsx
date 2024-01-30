import { Skeleton } from '@/components/applications/skeleton'
import { CheckCircle } from 'lucide-react'

export default function FrontEnDeveloperJuniorCulttivoTecnologia() {
  return (
    <Skeleton
      article="a"
      companyName="Culttivo Tecnologia"
      companyColor="text-[#5E8920]"
      opportunityName="Front-end Developer Junior"
    >
      <ul className="flex flex-col gap-3 max-sm:gap-2 text-zinc-300 max-sm:text-sm leading-4 pt-4">
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Experiência empresarial de mais de 1 ano com trabalho em equipe como
            desenvolvedor
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Conhecimento e experiência com desenvolvimento ágil
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Experiência com HTML, CSS, JavaScript, TypeScript
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Experiência com React e Next.js</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Experiência com Git em um trabalho em equipe</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Experiência com consumo de APIs</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Construção de designs responsivos, baseado em componentes e reuso de
            código
          </p>
        </li>
      </ul>
    </Skeleton>
  )
}
