'use client'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger
} from '@/components/ui/drawer'
import { ListMinus } from 'lucide-react'
import Link from 'next/link'
import { NavigationMenu } from './navigation'

export function Header() {
  return (
    <header className="h-20 w-full border-b border-zinc-700 flex justify-center px-6 xl:px-0">
      <div className="h-full w-full max-w-5xl flex items-center justify-between">
        <h2 className="max-sm:hidden text-2xl sm:text-3xl font-bold cursor-pointer select-none">
          <Link href={'/'}>
            Filipe<span className="text-yellow-400">.</span>
          </Link>
        </h2>

        <NavigationMenu />

        <div className="sm:hidden w-full flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold select-none">
            <Link href={'/'}>
              Filipe<span className="text-yellow-400">.</span>
            </Link>
          </h2>
          <Drawer>
            <DrawerTrigger>
              <ListMinus size={40} />
            </DrawerTrigger>
            <DrawerContent className="h-52 flex flex-col w-[98%] mx-auto">
              <DrawerFooter className="flex-1">
                <div className="flex flex-col gap-3 items-center my-auto">
                  <Link href={'/'} className="w-full text-center">
                    <DrawerClose className="hover:bg-zinc-600 w-3/5 py-1 rounded-2xl text-xl font-extrabold">
                      <button>Início</button>
                    </DrawerClose>
                  </Link>
                  <Link href={'/projects'} className="w-full text-center">
                    <DrawerClose className="hover:bg-zinc-600 w-3/5 py-1 rounded-2xl text-xl font-extrabold">
                      <button>Projetos</button>
                    </DrawerClose>
                  </Link>
                  <Link href={'/contact'} className="w-full text-center">
                    <DrawerClose className="hover:bg-zinc-600 w-3/5 py-1 rounded-2xl text-xl font-extrabold">
                      <button>Contato</button>
                    </DrawerClose>
                  </Link>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}
