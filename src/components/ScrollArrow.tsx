interface ScrollArrowProps {
  href: string;
  className?: string;
}

const ScrollArrow = ({ href, className }: ScrollArrowProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href={href}
      className={`mx-auto mb-[6vh] animate-bounce cursor-pointer text-gray-600 hover:text-gray-600 ${className}`}
      onClick={handleClick}
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </a>
  );
};

export default ScrollArrow;
