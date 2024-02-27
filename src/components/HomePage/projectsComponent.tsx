import Link from 'next/link'
import { Area } from '../common/Area'
import { ProjectsCards } from '../projectsCards'

interface ProjectsComponentProps {
  limit?: number
}

export function ProjectsComponent({ limit }: ProjectsComponentProps) {
  return (
    <Area className="pb-12">
      <h2 className="max-lg:text-xl text-2xl font-semibold">
        Alguns projetos
        <span className="text-zinc-500 -tracking-[0.35rem]">...</span>
      </h2>
      <ProjectsCards limit={limit} />
      <div className="w-full text-end pt-1">
        <Link
          className="text-zinc-400 font-semibold hover:underline"
          href={'/projects'}
        >
          Ver todos...
        </Link>
      </div>
    </Area>
  )
}
