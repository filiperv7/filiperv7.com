import { ArrowUpRight } from 'lucide-react'

interface ButtonTallyProps {
  className?: string
}

export function ButtonTally({ className }: ButtonTallyProps) {
  return (
    <button
      className={`
              flex items-center justify-between gap-2 bg-zinc-200 rounded-3xl
              py-[.1rem] px-5 text-zinc-900 font-extrabold
              lg:text-lg sm:hover:scale-110 sm:hover:bg-yellow-400 duration-500
              ${className ?? ''}
            `}
      data-tally-open="3yYp40"
      data-tally-layout="modal"
      data-tally-width="400"
      data-tally-overlay="1"
      data-tally-auto-close="1000"
    >
      Fale comigo <ArrowUpRight size={20} />
    </button>
  )
}
