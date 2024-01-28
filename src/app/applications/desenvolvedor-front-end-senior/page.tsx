import { CheckCircle } from 'lucide-react'
import { Skeleton } from '../../../components/applications/skeleton'

export default function FrontEndJunior3() {
  return (
    <Skeleton
      article="a"
      companyName="Vize Marketing"
      companyColor="text-blue-500"
      opportunityName="Desenvolvedor Front-end Sênior"
    >
      <p className="pb-4 text-zinc-200">Preencho todos os requisitos</p>

      <ul className="flex flex-col gap-3 max-sm:gap-2 text-zinc-300 max-sm:text-sm leading-4">
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Possuo conhecimentos sólidos com Next.js</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Conhecimento e boa experiência com TypeScript
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Vasta experiência em consumo de API&apos;s REST
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Experiência com GitFlow (usando em equipe)</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Me desenrolo bem com o inglês na escrita e leitura
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">
            Na minha última experiência trabalhei com desenvolvimento ágil
          </p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Experiência com Back-end (usando C#)</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Tenho conhecimentos de TDD</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Conhecimentos de NoSQL (e progredindo...)</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle className="size-4 text-green-400" />
          <p className="flex-1">Conhecimento básico de Clean Architecture</p>
        </li>
      </ul>

      <p className="pt-4">
        Infelizmente, não consigo me mudar imediatamente para a cidade de BH,
        mas se a empresa tiver disponibilidade de aguardar até o mês 6 deste ano
        (mês em que minha esposa finaliza a faculdade), seria interessante. Até
        lá, garanto máximo comprometimento e um alto desempenho nos meus
        trabalhos, caso eu tenha a oportunidade de prestá-los.
      </p>
    </Skeleton>
  )
}
