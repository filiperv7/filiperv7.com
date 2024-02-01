import Image from 'next/image'
import Link from 'next/link'
import { Area } from '../common/Area'

import github from '@/public/assets/social/Github.svg'
import instagram from '@/public/assets/social/Instagram.svg'
import linkedin from '@/public/assets/social/LinkedIn.svg'
import { ButtonTally } from './buttonTally'

export function CTA() {
  return (
    <Area>
      <div className="min-h-64 my-16 flex flex-col border border-zinc-700 bg-zinc-900 rounded-2xl">
        <div className="flex flex-col items-start gap-6 p-5">
          <div className="w-full flex items-center justify-between max-md:flex-col max-md:items-start">
            <h2 className="text-2xl font-black">
              Vamos construir algo juntos?
            </h2>
            <div className="flex items-center gap-2 max-md:flex-row-reverse text-zinc-400">
              <p>Disponível para contratação</p>
              <div className="h-2 w-2 rounded-full bg-yellow-500 md:mt-[.2rem]">
                <div className="z-[11] h-2 w-2 animate-ping rounded-full bg-yellow-500 transition-[4s]"></div>
              </div>
            </div>
          </div>

          <p>
            <Link href={'/contact'} className="underline">
              Pode me chamar
            </Link>{' '}
            por e-mail, LinkedIn ou pelo botão abaixo.
          </p>

          <ButtonTally />
        </div>
        <div className="border-t border-zinc-700 p-3 flex flex-1">
          <ul className="flex items-center justify-center gap-3 flex-1">
            <li className="rounded-md border-[.5px] max-w-10 p-2 hover:bg-zinc-700 cursor-pointer">
              <Link
                href={'https://www.linkedin.com/in/filiperv7/'}
                target="_blank"
              >
                <Image src={linkedin} alt="" className="max-h-8 invert" />
              </Link>
            </li>
            <li className="rounded-md border-[.5px] max-w-10 p-2 hover:bg-zinc-700 cursor-pointer">
              <Link href={'https://github.com/filiperv7'} target="_blank">
                <Image src={github} alt="" className="max-h-8 invert" />
              </Link>
            </li>
            <li className="rounded-md border-[.5px] max-w-10 p-2 hover:bg-zinc-700 cursor-pointer">
              <Link href={'https://instagram.com/filiperv7'} target="_blank">
                <Image src={instagram} alt="" className="max-h-8 invert" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Area>
  )
}
