import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJava } from "@fortawesome/free-brands-svg-icons"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  SiPython,
  SiSharp,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiGooglecloud,
  SiTailwindcss,
} from "react-icons/si"

interface TechStacksProps {
  technologies?: string[];
  className?: string;
}

export const TECH_ICON_MAP: Record<string, React.ComponentType<{ size?: number }> | IconDefinition> = {
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Tailwind": SiTailwindcss,
  "Python": SiPython,
  "Java": faJava,
  "C#": SiSharp,
  "PostgreSQL": SiPostgresql,
  "Google Cloud": SiGooglecloud,
}

const DEFAULT_TECH_STACK = [
  "React",
  "TypeScript",
  "Tailwind",
  "Python",
  "Java",
  "C#",
  "PostgreSQL",
  "Google Cloud",
]

const TechStacks = ({ technologies = DEFAULT_TECH_STACK, className }: TechStacksProps) => {
  return (
    <div className={`flex flex-wrap items-center justify-center ${className}`}>
      {technologies.map((tech) => {
        const icon = TECH_ICON_MAP[tech]
        if (!icon) return null
        
        const isFontAwesome = 'iconName' in (icon as any)
        return (
          <div key={tech} className="flex flex-col items-center m-[2vw] text-gray-700">
            <div className="w-8 h-8 flex items-center justify-center">
              {isFontAwesome ? (
                <FontAwesomeIcon icon={icon as IconDefinition} size="2x" />
              ) : (
                React.createElement(icon as React.ComponentType<{ size?: number }>, { size: 32 })
              )}
            </div>
            <span className="text-[0.75rem] text-gray-600 mt-[0.5vh]">{tech}</span>
          </div>
        )
      })}
    </div>
  )
}

export default TechStacks