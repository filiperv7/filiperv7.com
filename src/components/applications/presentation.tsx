export interface PresentationProps {
  article: string
  companyName: string
  companyColor?: string
  opportunityName: string
}

export function Presentation({
  article,
  companyName,
  companyColor,
  opportunityName
}: PresentationProps) {
  return (
    <div>
      <h1 className="lg:text-4xl text-3xl font-bold">
        Olá, recrutador(a) d{article}{' '}
        <span className={`${companyColor ?? 'text-yellow-500'} font-extrabold`}>
          {companyName}
        </span>
      </h1>
      <h3 className="text-xs lg:text-sm text-zinc-500 italic font-black mt-1 lg:w-3/4">
        \\ É um prazer te ver aqui no meu site e participar do processo seletivo
        para a vaga de <span className="underline">{opportunityName}</span>
      </h3>
    </div>
  )
}
