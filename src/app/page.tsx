import { ProjectsComponent } from '@/components/HomePage/projectsComponent'
import { Skills } from '@/components/HomePage/skills'
import { Top } from '@/components/HomePage/top'

export default function Home() {
  return (
    <div>
      <Top />

      <ProjectsComponent />

      <Skills />
    </div>
  )
}
