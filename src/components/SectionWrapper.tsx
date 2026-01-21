interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className }: SectionProps) => {
  return (
    <section id={id} className={`h-[100dvh] snap-start snap-always p-[2vh] overflow-hidden ${className}`}>
      {children}
    </section>
  )
}

export default SectionWrapper