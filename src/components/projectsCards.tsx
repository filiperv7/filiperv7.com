'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import projects from '@/data/constants/Projects'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'

export function ProjectsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-[860px]:grid-cols-3 gap-5 pt-5">
      {projects.map(project => (
        <Dialog key={project.title}>
          <DialogTrigger>
            <Card
              className={`w-full max-w-[24rem] lg:flex-1 mx-auto text-start cursor-pointer
          sm:hover:bg-zinc-700 sm:hover:scale-105 duration-500
          `}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="h-10 flex items-center">
                  {project.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  src={project.image}
                  alt={`Imagem da tela inicial do projeto ${project.title}, ${project.description}. Um projeto feito por Filipe Rodrigo`}
                  className="rounded-b-lg "
                />
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="lg:min-w-[50rem] max-md:w-11/12 md:h-4/5 overflow-y-auto dialog rounded-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold pb-1 text-center">
                {project.title}
              </DialogTitle>
              <DialogDescription className="flex flex-col gap-3 text-start">
                <Image
                  src={project.image}
                  alt={`Imagem da tela inicial do projeto ${project.title}, ${project.shortDescription}. Um projeto feito por Filipe Rodrigo`}
                  className="rounded-lg"
                />

                <p>
                  {project.description} | {project.type}.
                </p>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex flex-col">
              <div className="flex items-stretch gap-3 text-sm">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center border border-zinc-500 rounded-3xl px-3 py-2 hover:bg-zinc-600 hover:font-bold duration-500"
                  >
                    Ver Projeto
                  </a>
                )}
                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    className="flex items-center border border-zinc-500 rounded-3xl px-3 py-2 hover:bg-zinc-600 hover:font-bold duration-500"
                  >
                    Ver Código
                  </a>
                )}
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
