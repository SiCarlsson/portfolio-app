interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const Button = ({ children, href, className = '' }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isExternal = href && !href.startsWith('#') && !href.startsWith('/');
  const style = "font-semibold underline underline-offset-4"

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={`${style} ${className}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

export default Button;
