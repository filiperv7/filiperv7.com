import { ArrowUpRight } from 'lucide-react'
import { Area } from '../common/Area'

export function Top() {
  return (
    <Area className="py-16">
      <h1 className="max-sm:text-2xl text-[2rem] lg:text-[3rem] font-black flex flex-col">
        <span>
          <span className="text-yellow-400">&lt;</span>Olá, sou Filipe Rodrigo{' '}
        </span>
        <span>
          Um Desenvolvedor Web
          <span className="text-yellow-400">/&gt;</span>
        </span>
      </h1>
      <h2 className="text-sm lg:text-xl text-zinc-500 italic font-black mt-1">
        \\ Impulsionando seu negócio com design e código
      </h2>

      <button
        className={`flex items-center justify-between gap-2 bg-zinc-200 rounded-3xl py-[.1rem] px-5 mt-8
      lg:text-lg text-zinc-900 font-extrabold
      sm:hover:scale-110 sm:hover:bg-yellow-400 duration-500
    `}
        data-tally-open="3yYp40"
        data-tally-layout="modal"
        data-tally-width="400"
        data-tally-overlay="1"
        data-tally-auto-close="1000"
      >
        Fale comigo <ArrowUpRight size={20} />
      </button>
    </Area>
  )
}
