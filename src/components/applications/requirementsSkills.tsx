import { X } from 'lucide-react'

interface RequirementsSillsProps {
  children: any
}

export function RequirementsSills({ children }: RequirementsSillsProps) {
  return (
    <div className="pt-14 flex flex-col">
      <h3 className="flex items-center gap-2 text-xl lg:text-2xl font-bold">
        <span className="text-zinc-400">#</span>
        Requisitos
        <X size={22} className="text-yellow-400" />
        Minhas Skills
      </h3>

      {children}
    </div>
  )
}
