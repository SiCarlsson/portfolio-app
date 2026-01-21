import TechStacks from "../TechStacks"
import HeadshotImg from "../HeadshotImg"
import SocialLinks from "../SocialLinks"
import SectionWrapper from "../SectionWrapper"
import headshotImage from "../../img/headshot.jpg"

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="w-full h-full flex flex-col">
        <div>
          <HeadshotImg
            src={headshotImage}
            className="w-[22vh] h-[22vh] mx-auto mt-[2vh]"
            objectPosition="center 20%"
          />
          <h2 className="text-3xl font-bold text-center mt-[1vh] mb-[1vh]">
            About Me
          </h2>
        </div>

        <div className="flex flex-col justify-between flex-1">
          <section className="w-[90%] mx-auto">
            <h3 className="text-xl mt-[1vh] text-gray-500 font-light text-center">Background</h3>
            <p className="mx-auto mt-[0.5vh] text-sm text-justify text-gray-700">
              I'm a recent graduate with a Bachelor's degree in Economics and completing my second Bachelor's in Computer Engineering in June 2026. My background combines analytical thinking from economics with technical skills in programming and systems design. I'm passionate about leveraging data to solve real-world problems and am particularly interested in data analysis, automation, and infrastructure. Currently exploring opportunities in data engineering and analytics where I can apply both my technical and analytical expertise.
            </p>
          </section>

          <section className="w-[90%] mx-auto mt-[-2vh]">
            <h3 className="text-xl mt-[1vh] text-gray-500 font-light text-center">Experience</h3>
            <TechStacks className="mt-[0.5vh]" />
          </section>

          <footer className="mb-[3vh]">
            <SocialLinks />
          </footer>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About