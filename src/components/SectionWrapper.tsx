interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className }: SectionProps) => {
  return (
    <section id={id} className={`h-screen snap-start snap-always px-6 ${className}`}>
      {children}
    </section>
  )
}

export default SectionWrapper