import ProjectCards from "../ProjectCards"
import SectionWrapper from "../SectionWrapper"

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-gray-200">
      <h2 className="text-3xl font-bold text-center mt-[1vh] mb-[1vh]">
        Projects
      </h2>
      <div className="w-full h-full">
        <ProjectCards 
          name="Sample Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          techStack={["React", "TypeScript", "Node.js", "Google Cloud", "Tailwind", "Vite"]}
          githubLink="https://github.com/SiCarlsson/portfolio-app"
          liveLink="https://simoncarlsson.dev"
        />
      </div>
    </SectionWrapper>
  )
}

export default Projects