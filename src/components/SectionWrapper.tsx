interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className }: SectionProps) => {
  return (
    <section id={id} className={`h-dvh snap-start snap-always md:snap-align-none p-[2vh] overflow-hidden ${className}`}>
      {children}
    </section>
  )
}

export default SectionWrapper