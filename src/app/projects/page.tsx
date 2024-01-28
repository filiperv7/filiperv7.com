'use client'

import { Area } from '@/components/common/Area'
import { ProjectsCards } from '@/components/projectsCards'

export default function Projects() {
  return (
    <Area className="py-10">
      <h1 className="text-3xl font-extrabold pb-2">Projetos</h1>
      <h3 className="text-zinc-400 font-bold">
        \\ Freelances e projetos pessoais que já desenvolvi
      </h3>

      <ProjectsCards />
    </Area>
  )
}
