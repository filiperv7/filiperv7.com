import { ReactNode } from 'react'

interface AreaProps {
  children: ReactNode
  className?: string
}

export function Area({ children, className }: AreaProps) {
  return (
    <div
      className={`flex justify-center w-full
  ${className ?? ''}`}
    >
      <div className="px-6 xl:px-0 w-full max-w-5xl xl:w-[1200px]">
        {children}
      </div>
    </div>
  )
}
