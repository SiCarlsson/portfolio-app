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
    shortDescription: "Infrastructure as Code homelab running 10+ self-hosted services on Proxmox VE.",
    description: "A fully automated homelab infrastructure using Infrastructure as Code principles. The setup leverages Proxmox VE for virtualization, Terraform for VM provisioning, and Ansible for service deployment and configuration management.\n\nThe entire infrastructure is reproducible and version-controlled, with automated setup scripts and Makefile commands for easy deployment and management. This project demonstrates practical DevOps skills including infrastructure automation, containerization, networking, and systems administration.",
    imageSrc: undefined,
    techStack: ["Bash", "Proxmox", "Ansible", "Docker", "Terraform"],
    githubLink: "https://github.com/SiCarlsson/homelab-infrastructure",
  },
]

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold text-center mt-[1vh] mb-[2vh]">
        Projects
      </h2>
      <div className="w-full px-[2vw]">
        <div className="grid grid-cols-1 gap-[2.5vh] mx-auto">
          {projects.map((project) => (
            <Dialog key={project.name}>
              <DialogTrigger asChild>
                <div className="cursor-pointer border border-gray-300 rounded-lg bg-white p-5">
                  <h3 className="text-xl font-bold mb-[0.5vh]">{project.name}</h3>
                  <p className="text-gray-600 text-sm">{project.shortDescription}</p>
                </div>
              </DialogTrigger>
              <DialogContent className="w-screen h-screen max-w-none max-h-none overflow-y-auto p-8 flex flex-col">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.name}</DialogTitle>
                </DialogHeader>

                <img
                  src={project.imageSrc || "https://placehold.co/600x400"}
                  alt={project.name}
                  className="w-full rounded-lg"
                />

                <DialogDescription className="text-sm text-gray-700 whitespace-pre-line text-justify">
                  {project.description}
                </DialogDescription>

                <div>
                  <h4 className="font-semibold mt-[1vh] text-gray-900">Tech Stack</h4>
                  <TechStacks technologies={project.techStack} />
                </div>

                <div className="flex flex-col gap-2 mt-auto">
                  {project.liveLink && (
                    <Button asChild variant="outline" className="border-gray-700">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faGlobe} />
                        <span>View Live Site</span>
                      </a>
                    </Button>
                  )}
                  <Button asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faGithub} />
                      <span>View on GitHub</span>
                    </a>
                  </Button>
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