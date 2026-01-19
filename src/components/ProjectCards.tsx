import Button from "./Button"
import TechStacks from "./TechStacks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

interface ProjectCardsProps {
  name: string;
  description: string;
  techStack: string[];
  imageSrc?: string;
  githubLink: string;
  liveLink?: string;
}

const ProjectCards = ({ name, description, techStack, imageSrc, githubLink, liveLink }: ProjectCardsProps) => {
  return (
    <div className="h-full min-h-[25vh] max-h-[85vh] border border-gray-300 rounded-lg flex flex-col">
      <img
        src={imageSrc || "https://placehold.co/600x400"}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-2xl font-bold mb-[1vh] text-center mt-[2vh]">{name}</h3>
          <p className="px-[2vw] text-gray-700 mb-[1vh]">{description}</p>
        </div>

        <div className="px-[2vw] mb-[1vh]">
          <h4 className="text-md text-gray-700 text-center mb-[1.5vh]">Tech Stack</h4>
          <TechStacks technologies={techStack} className="gap-3" />
        </div>

        <div className="px-[2vw] mb-[2vh]">
          <Button href={githubLink} className="flex items-center gap-1">
            <FontAwesomeIcon icon={faGithub} />
            <span>View on GitHub</span>
          </Button>

          {liveLink && (
            <Button href={liveLink} className="flex items-center gap-1 mt-[0.5vh]">
              <FontAwesomeIcon icon={faGlobe} />
              <span>View in Production</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCards