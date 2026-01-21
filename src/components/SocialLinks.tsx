import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/simonalexcarlsson/", icon: faLinkedin, label: "LinkedIn" },
  { href: "https://github.com/SiCarlsson", icon: faGithub, label: "Github" },
  { href: "mailto:simon@example.com", icon: faEnvelope, label: "Email" },
  { href: "/CV_SimonCarlsson.pdf", icon: faFilePdf, label: "Resume" },
]

interface socialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: socialLinksProps) => {
  return (
    <div className={`flex items-center justify-center gap-8 md:gap-24 md:text-xl ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <Button
          key={link.label}
          href={link.href}
          className="w-20 text-center"
        >
          <div className="flex flex-col items-center gap-1">
            <FontAwesomeIcon icon={link.icon} className="text-xl md:text-2xl mb-[-0.5vh] md:mb-0" />
            <span>{link.label}</span>
          </div>
        </Button>
      ))}
    </div>
  )
}

export default SocialLinks