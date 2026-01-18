import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faNode,
  faPython,
  faJava,
  faGoogle,
  faJs
} from "@fortawesome/free-brands-svg-icons"
import {
  faDatabase,
  faFileExcel,
  faCode,
} from "@fortawesome/free-solid-svg-icons"

interface TechStacksProps {
  className?: string;
}

const TECH_STACK = [
  { icon: faPython, label: "Python" },
  { icon: faJava, label: "Java" },
  { icon: faCode, label: "C#" },
  { icon: faDatabase, label: "SQL" },
  { icon: faReact, label: "React" },
  { icon: faJs, label: "JavaScript" },
  { icon: faGoogle, label: "Google Cloud" },
  { icon: faNode, label: "Node.js" },
  { icon: faFileExcel, label: "Excel" },
]

const TechStacks = ({ className }: TechStacksProps) => {
  return (
    <div className={`flex flex-wrap items-center justify-center ${className}`}>
      {TECH_STACK.map((tech) => (
        <div key={tech.label} className="flex flex-col items-center m-[2vw] text-gray-700">
          <FontAwesomeIcon icon={tech.icon} className="text-3xl" />
          <span className="text-sm">{tech.label}</span>
        </div>
      ))}
    </div>
  )
}

export default TechStacks