'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  NavigationMenu as Navigation,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

import Image from 'next/image'
import Link from 'next/link'

import projects from '@/data/constants/Projects'

export function NavigationMenu() {
  return (
    <div>
      <Navigation className="max-md:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-semibold`}
              >
                <span className="text-base">Início</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold">
              <NavigationMenuLink href="/projects">
                <span className="text-base">Projetos</span>
              </NavigationMenuLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-2 p-2 md:w-[15rem] lg:w-[21rem]">
                {projects.slice(0, 2).map(project => (
                  <li key={project.title}>
                    <NavigationMenuLink
                      asChild
                      className="p-1 hover:bg-zinc-700 cursor-pointer"
                    >
                      <Card className="w-full max-w-[24rem] lg:flex-1 mx-auto border-none bg-transparent">
                        <CardHeader className="p-4">
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>
                            {project.shortDescription}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <Image
                            src={project.image}
                            alt={`Imagem da tela inicial do projeto ${project.title}, ${project.shortDescription}. Um projeto feito por Filipe Rodrigo`}
                            className="rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </NavigationMenuLink>
                  </li>
                ))}
                <li>
                  <NavigationMenuLink href="/projects" className="">
                    <div className="w-full flex-1 p-1 hover:bg-zinc-700 cursor-pointer rounded-lg">
                      <p className="p-2 text-xl font-semibold text-center">
                        Ver Todos
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-semibold`}
              >
                <span className="text-base">Contato</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </Navigation>
    </div>
  )
}

{
  /* <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-semibold`}
              >
                <span className="text-base">Sobre</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */
}
