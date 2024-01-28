import { CornerDownRight } from 'lucide-react'
import { AlertInfo } from './alertInfo'

export function Highlights() {
  return (
    <div className="pt-10">
      <h3 className="text-xl lg:text-2xl font-bold">
        <span className="text-zinc-400 mr-2">#</span>
        Diferenciais
      </h3>

      <ul className="list-disc ml-4 text-zinc-300 text-lg pt-4 flex flex-col gap-1">
        <li>
          <div className="leading-3">
            Conhecimento sólido das bases da tecnologia
            <AlertInfo />
          </div>
          <ul className="ml-2 text-base">
            <li className="flex items-center gap-1">
              <CornerDownRight size={12} className="text-zinc-500" />
              Algoritmos computacionais
            </li>
            <li className="flex items-center gap-1">
              <CornerDownRight size={12} className="text-zinc-500" />
              Estrutura de dados
            </li>
            <li className="flex items-center gap-1">
              <CornerDownRight size={12} className="text-zinc-500" />
              Sistemas Operacionais
            </li>
            <li className="flex items-center gap-1">
              <CornerDownRight size={12} className="text-zinc-500" />
              Matemática Discreta
            </li>
            <li className="flex items-center gap-1">
              <CornerDownRight size={12} className="text-zinc-500" />
              Redes
            </li>
          </ul>
        </li>
        <li>Conhecimento e experiência com UX</li>
        <li>
          Conseguir caminhar por diferentes frameworks sem muita dificuldade ou
          gargalos
        </li>
        <li>
          Domínio completo do HTML, CSS e JS puros{' '}
          <span className="text-xs italic">
            (sem dependência de frameworks)
          </span>
        </li>
      </ul>
    </div>
  )
}
