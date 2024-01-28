import { CTA } from '@/components/HomePage/cta'
import { Area } from '@/components/common/Area'
import { ProjectsCards } from '@/components/projectsCards'

import Link from 'next/link'
import { Highlights } from './highlights'
import { Presentation, PresentationProps } from './presentation'
import { RequirementsSills } from './requirementsSkills'

interface SkeletonProps extends PresentationProps {
  children: any
}

export function Skeleton({
  children,
  article,
  companyName,
  companyColor,
  opportunityName
}: SkeletonProps) {
  return (
    <div>
      <Area className="pt-12">
        <Presentation
          article={article}
          companyName={companyName}
          companyColor={companyColor}
          opportunityName={opportunityName}
        />

        <RequirementsSills>{children}</RequirementsSills>

        <div className="pt-10">
          <h3 className="text-xl lg:text-2xl font-bold">
            <span className="text-zinc-400 mr-2">#</span>
            Projetos
          </h3>
          <ProjectsCards />
          <div className="w-full text-end pt-1">
            <Link
              className="text-zinc-400 font-semibold hover:underline"
              href={'/projects'}
            >
              Ver todos...
            </Link>
          </div>
        </div>

        <Highlights />
      </Area>
      <CTA />
    </div>
  )
}
