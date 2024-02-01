import { Area } from '../common/Area'
import { ButtonTally } from './buttonTally'

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

      <ButtonTally className="mt-6" />
    </Area>
  )
}
