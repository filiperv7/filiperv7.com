import { CTA } from '@/components/HomePage/cta'
import { Area } from '@/components/common/Area'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Filipe Rodrigo | Contato',
  description:
    'Página de contato para convidar o Desenvolvedor Filipe Rodrigo Vasconcelos para freelances e/ou vagas'
}

export default function Contact() {
  return (
    <div>
      <Area>
        <div className="py-14">
          <h1 className="text-3xl font-extrabold pb-2">
            Entre em contato comigo
          </h1>
          <h3 className="text-zinc-400 font-bold">
            \\ Pode ser por e-mail, LinkedIn ou pelo botão &apos;Fale
            comigo&apos;
          </h3>
        </div>

        <p className="pb-6 ms:w-5/6">
          Caso tenha interesse em fazer alguma cotação de projeto comigo u me
          oferecer alguma vaga de emprego, seja CLT ou PJ, por favor, fique a
          vontade para me chamar no(s) canal(is) que lhe for mais conveniente.
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-zinc-300 font-semibold flex flex-col">
            <span>Meu e-mail principal é: </span>
            <span className="text-yellow-400 italic ml-1">
              filipevasconcelos91.rodrigo@gmail.com
            </span>
          </p>
          <p className="text-zinc-300 font-semibold flex flex-col">
            <span>
              Para oportunidades em estudos ou relacionado à vida acadêmica:
            </span>
            <span className="text-yellow-400 italic ml-1">
              filipeacademiclife3500@gmail.com
            </span>
          </p>
        </div>

        <div className="pt-4">
          <h2 className="max-lg:text-xl text-2xl font-semibold">
            Quer baixar meu Currículo?
          </h2>

          <a
            href="https://drive.google.com/file/d/1bqciri57221EjBUinIFMr9GE_H1-VeUE/view?usp=sharing"
            target="_blank"
          >
            <button
              className={`
                flex items-center justify-between gap-2 bg-zinc-200 rounded-3xl
                py-[.1rem] px-5 mt-2 text-zinc-900 font-extrabold
                lg:text-lg sm:hover:scale-110 sm:hover:bg-yellow-400 duration-500
              `}
            >
              É só clicar aqui!
            </button>
          </a>
        </div>
      </Area>
      <CTA />
    </div>
  )
}
