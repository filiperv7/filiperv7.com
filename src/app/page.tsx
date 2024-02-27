import { CTA } from '@/components/HomePage/cta'
import { ProjectsComponent } from '@/components/HomePage/projectsComponent'
import { Skills } from '@/components/HomePage/skills'
import { Top } from '@/components/HomePage/top'

export default function Home() {
  return (
    <div>
      <Top />

      <ProjectsComponent limit={3} />

      <Skills />

      <CTA />
    </div>
  )
}
