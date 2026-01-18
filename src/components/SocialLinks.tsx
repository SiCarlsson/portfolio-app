import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/simonalexcarlsson/", icon: faLinkedin, label: "LinkedIn" },
  { href: "https://github.com/SiCarlsson", icon: faGithub, label: "Github" },
  { href: "/CV_SimonCarlsson.pdf", icon: faFilePdf, label: "Resume" },
]

interface socialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: socialLinksProps) => {
  return (
    <div className={`flex items-center justify-evenly ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <FontAwesomeIcon icon={link.icon} /> {link.label}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks