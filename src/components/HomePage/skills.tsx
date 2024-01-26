import Image from 'next/image'
import { Area } from '../common/Area'

import css from '@/public/assets/skills/CSS.svg'
import express from '@/public/assets/skills/Express.svg'
import framer from '@/public/assets/skills/FramerMotion.svg'
import git from '@/public/assets/skills/Git.svg'
import graphql from '@/public/assets/skills/GraphQL.svg'
import html from '@/public/assets/skills/HTML.svg'
import js from '@/public/assets/skills/Javascript.svg'
import mongo from '@/public/assets/skills/Mongo.svg'
import mysql from '@/public/assets/skills/MySQL.svg'
import next from '@/public/assets/skills/Nextjs.svg'
import node from '@/public/assets/skills/Nodejs.svg'
import postgresql from '@/public/assets/skills/PostgreSQL.svg'
import prisma from '@/public/assets/skills/Prisma.svg'
import react from '@/public/assets/skills/React.svg'
import shadcnui from '@/public/assets/skills/Shadcn.svg'
import styledcomponents from '@/public/assets/skills/StyledComponents.svg'
import tailwind from '@/public/assets/skills/TailwindCSS.svg'
import ts from '@/public/assets/skills/Typescript.svg'

export function Skills() {
  const skills = [
    { image: git, name: 'GIT' },
    { image: html, name: 'HTML' },
    { image: css, name: 'CSS' },
    { image: js, name: 'JavaScript' },
    { image: ts, name: 'TypeScript' },
    { image: react, name: 'React' },
    { image: next, name: 'Next.js' },
    { image: tailwind, name: 'Tailwind CSS' },
    { image: styledcomponents, name: 'Styled Components' },
    { image: node, name: 'Node.js' },
    { image: express, name: 'Express' },
    { image: postgresql, name: 'PostgreSQL' },
    { image: mysql, name: 'MySQL' },
    { image: graphql, name: 'GraphQL' },
    { image: mongo, name: 'Mongo DB' },
    { image: prisma, name: 'Prisma' },
    { image: shadcnui, name: 'Shadcn UI' },
    { image: framer, name: 'Framer Motion' }
  ]

  return (
    <Area>
      <h2 className="max-lg:text-xl text-2xl font-semibold">
        Skills
        <span className="text-zinc-500 -tracking-[0.35rem]">...</span>
      </h2>

      <ul className="w-5/6 mx-auto grid grid-cols-4 md:grid-cols-6 gap-3 flex-wrap py-5 lg:gap-5 lg:w-4/6">
        {skills.map((sk, i) => (
          <li key={i} className="group relative flex flex-col items-center">
            <Image
              src={sk.image}
              alt=""
              className={`min-h-16 min-w-16 max-h-16 min-w-16
              lg:min-h-20 lg:min-w-20 lg:max-h-20 lg:max-w-20
              grayscale hover:grayscale-0 duration-300`}
            />
            <div className="ease invisible absolute pointer-events-none bottom-full left-1/2 z-[1] -translate-x-1/2 translate-y-6 whitespace-nowrap rounded-md bg-black px-2.5 py-1 opacity-0 transition-[opacity,transform] duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:-translate-y-1 group-hover:opacity-100">
              <p className="font-normal text-xs m-[unset] text-white">
                {sk.name}
              </p>
            </div>
          </li>
        ))}{' '}
      </ul>
    </Area>
  )
}
