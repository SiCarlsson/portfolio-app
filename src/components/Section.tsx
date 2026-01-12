interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Section = ({ children, id, className }: SectionProps) => {
  return (
    <section id={id} className={`h-screen snap-start snap-always p-6 ${className}`}>
      {children}
    </section>
  )
}

export default Section