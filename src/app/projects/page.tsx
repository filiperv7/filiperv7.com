import { CTA } from '@/components/HomePage/cta'
import { Area } from '@/components/common/Area'
import { ProjectsCards } from '@/components/projectsCards'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Filipe Rodrigo | Projetos',
  description:
    'Página de apresentação dos projetos freelances e pessoais do Desenvolvedor Filipe Rodrigo Vasconcelos'
}

export default function Projects() {
  return (
    <div>
      <Area className="pt-14">
        <h1 className="text-3xl font-extrabold pb-2">Projetos</h1>
        <h3 className="text-zinc-400 font-bold">
          \\ Freelances e projetos pessoais que já desenvolvi
        </h3>

        <ProjectsCards />
      </Area>

      <CTA />
    </div>
  )
}
