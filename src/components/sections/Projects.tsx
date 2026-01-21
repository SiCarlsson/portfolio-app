import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

import SectionWrapper from "../SectionWrapper"
import TechStacks from "../TechStacks"

export interface Project {
  name: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  imageSrc?: string;
  githubLink: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    name: "Homelab",
    shortDescription: "Infrastructure as Code homelab running self-hosted services on Proxmox VE.",
    description: "A fully automated homelab infrastructure using Infrastructure as Code principles. The setup leverages Proxmox VE for virtualization, Terraform for VM provisioning, and Ansible for service deployment and configuration management.\n\nThe entire infrastructure is reproducible and version-controlled, with automated setup scripts and Makefile commands for easy deployment and management. This project demonstrates practical DevOps skills including infrastructure automation, containerization, networking, and systems administration.",
    imageSrc: undefined,
    techStack: ["Bash", "Proxmox", "Ansible", "Docker", "Terraform"],
    githubLink: "https://github.com/SiCarlsson/homelab-infrastructure",
    liveLink: "https://simoncarlsson.se/homelab",
  },
]

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center md:mt-3 mb-[2vh] md:mb-3">
        Projects
      </h2>
      <div className="w-full px-[2vw] md:max-w-4xl md:mx-auto md:max-h-full">
        <div className="grid grid-cols-1 gap-[2.5vh] mx-auto">
          {projects.map((project) => (
            <Dialog key={project.name}>
              <DialogTrigger asChild>
                <div className="cursor-pointer border border-gray-400 rounded-lg bg-white p-5 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-gray-600 hover:bg-gray-50 group">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-[0.5vh] group-hover:text-blue-700 transition-colors">{project.name}</h3>
                      <p className="text-gray-700 text-sm md:text-lg">{project.shortDescription}</p>
                    </div>
                    <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap mt-1 group-hover:text-blue-700 transition-colors">
                      Click to view →
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="w-screen h-screen max-w-none max-h-none md:max-w-4xl md:max-h-[90%] overflow-y-auto p-8 flex flex-col">
                <div className="w-[90%] mx-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl md:text-5xl mb-3 md:mb-6">{project.name}</DialogTitle>
                  </DialogHeader>

                  <img
                    src={project.imageSrc || "https://placehold.co/600x400"}
                    alt={project.name}
                    className="w-full rounded-lg mb-3 md:mb-6"
                  />

                  <DialogDescription className="text-sm md:text-lg text-gray-700 whitespace-pre-line text-justify w-[99%] mx-auto">
                    {project.description}
                  </DialogDescription>

                  <div className="w-full mx-auto mt-6 md:mt-12">
                    <h4 className="text-lg md:text-2xl font-light mt-[1vh] text-gray-500 text-center">Tech Stack</h4>
                    <TechStacks technologies={project.techStack} />
                  </div>

                  <div className="flex flex-col gap-2 mt-6 md:mt-12">
                    {project.liveLink && (
                      <Button asChild variant="outline" className="border-gray-700 md:text-xl md:min-h-10">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faGlobe} />
                          <span>View Live Site</span>
                        </a>
                      </Button>
                    )}
                    <Button asChild className="md:text-xl md:min-h-10">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faGithub} />
                        <span>View on GitHub</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Projects