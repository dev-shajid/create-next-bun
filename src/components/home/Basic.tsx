export function Section({ children, className, id }: { children: React.ReactNode, className?: string, id?:string }) {
  return (
    <section id={id} className={`my-16 ${className}`}>
      {children}
    </section>
  )
}

export function Title({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`text-2xl md:text-4xl mb-4 font-medium ${className}`}>
      {children}
    </div>
  )
}

export function Title2({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`text-2xl font-medium ${className}`}>
      {children}
    </div>
  )
}
