import Button from "./Button"
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
    <div className={`flex items-center justify-center gap-8 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <Button
          key={link.label}
          href={link.href}
        >
          <FontAwesomeIcon icon={link.icon} /> {link.label}
        </Button>
      ))}
    </div>
  )
}

export default SocialLinks