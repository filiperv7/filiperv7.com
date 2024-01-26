import IProject from '@/core/IProject'

import Epiffania from '@/public/assets/projects/Epiffania.png'
import GoDev from '@/public/assets/projects/GoDev.png'
import Striker from '@/public/assets/projects/Striker.png'

const Projects: IProject[] = [
  {
    title: 'GoDev',
    image: GoDev,
    shortDescription: 'Landing Page de venda de um curso de programação',
    description:
      'Landing Page de venda de um curso de programação. O propósito principal desse projeto foi mostrar minhas habilidades com HTML, CSS, JavaScript puros, sem o uso de nenhum framework ou biblioteca de terceiros. Usando dos meus conhecimentos de manipulação da DOM, desenvolvi diversos eventos tornando a página mais dinâmica para usuário, com uma melhor experiência (UX) e maior probabilidade de conversão de vendas',
    type: 'Projeto pessoal',
    stack: '',
    repository: 'https://github.com/filiperv7/salesLandingPage',
    link: 'https://godevcourse.vercel.app/'
  },
  {
    title: 'Epiffania Joias',
    image: Epiffania,
    shortDescription: 'Loja online de joias (em construção) | Freelance',
    description:
      'Loja online de joias (em construção) para a Epiffania Joias. Uma loja de joias prata 925 de duas estudantes de enfermagem do UNICEPLAC. Desenvolvido com Next 13 (React), GraphQL (usando o CMS Hygraph), TypeScript, Tailwind CSS PhosphorIcons, biblioteca de componentes Mantine, ShadcnUI e a biblioteca de animações Framer Motion',
    type: 'Freelance',
    stack: '',
    link: 'https://www.epiffania.com/'
  },
  {
    title: 'Striker DF',
    image: Striker,
    shortDescription: 'Melhorias no site de um boliche em Brasília',
    description:
      'Projeto desenvolvido com o intuito de oferecer ao Striker DF Boliche, localizado no Shopping Pier 21, em Brasília/DF um site mais profissional, moderno, fluido e com uam experiência do usuário mais efetiva. Fiz primeiramente a página inicial, com um novo e mais moderno design para mostrar ao cliente as melhorias que ele poderia ter em seu site. Ofereci o serviço, mas não obtive retorno. Porém foi uma boa experiência, tanto no quesito técnico (pude experimentar novos designs e melhorar minha escrita de código), quanto profissionalmente como um freelance, aprendendo com os erros em como abordar um possível cliente e como ser mais persuasivo',
    type: 'Freelance',
    repository: 'https://github.com/filiperv7/strikerdf.com.br',
    stack: '',
    link: 'https://strikerdf.vercel.app/'
  }
]

export default Projects
