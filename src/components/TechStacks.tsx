import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJava } from "@fortawesome/free-brands-svg-icons"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  SiPython,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiGooglecloud,
  SiTailwindcss,
  SiGnubash,
  SiAnsible,
  SiDocker,
  SiTerraform,
  SiProxmox,
  SiJavascript,
} from "react-icons/si"

interface TechStacksProps {
  technologies?: string[];
  className?: string;
  showLabels?: boolean;
}

export const TECH_ICON_MAP: Record<string, React.ComponentType<{ size?: number }> | IconDefinition> = {
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Tailwind": SiTailwindcss,
  "JavaScript": SiJavascript,
  "Python": SiPython,
  "Java": faJava,
  "PostgreSQL": SiPostgresql,
  "Google Cloud": SiGooglecloud,
  "Bash": SiGnubash,
  "Ansible": SiAnsible,
  "Docker": SiDocker,
  "Terraform": SiTerraform,
  "Proxmox": SiProxmox,
}

const DEFAULT_TECH_STACK = [
  "Python",
  "Java",
  "Docker",
  "Ansible",
  "Terraform",
  "PostgreSQL",
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind",
]

const TechStacks = ({ technologies = DEFAULT_TECH_STACK, className, showLabels = true }: TechStacksProps) => {
  return (
    <div className={`flex flex-wrap items-center justify-center ${className}`}>
      {technologies.map((tech) => {
        const icon = TECH_ICON_MAP[tech]
        if (!icon) return null

        const isFontAwesome = 'iconName' in (icon as any)
        return (
          <div key={tech} className="flex flex-col items-center m-2 md:m-4 text-gray-700">
            <div className="w-6 h-6 md:w-12 md:h-12 flex items-center justify-center">
              {isFontAwesome ? (
                <>
                  <div className="md:hidden">
                    <FontAwesomeIcon icon={icon as IconDefinition} className="text-2xl" />
                  </div>
                  <div className="hidden md:block">
                    <FontAwesomeIcon icon={icon as IconDefinition} style={{ fontSize: '48px' }} />
                  </div>
                </>
              ) : (
                <>
                  <div className="md:hidden">
                    {React.createElement(icon as React.ComponentType<{ size?: number }>, { size: 24 })}
                  </div>
                  <div className="hidden md:block">
                    {React.createElement(icon as React.ComponentType<{ size?: number }>, { size: 48 })}
                  </div>
                </>
              )}
            </div>
            {showLabels && (
              <span className="text-[0.65rem] md:text-base text-gray-600 mt-[0.3vh] md:mt-[0.5vh]">{tech}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default TechStacks