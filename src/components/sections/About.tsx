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
            className="w-[22vh] md:max-w-xl h-[22vh] md:max-h-xl mx-auto md:mt-3"
            objectPosition="center 20%"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-[1vh] px-4">
            About Me
          </h2>
        </div>

        <div className="flex flex-col justify-between flex-1 md:w-[80%] md:min-w-2xl md:max-w-4xl md:mx-auto">
          <section className="w-[90%] mx-auto">
            <h3 className="text-lg md:text-2xl mt-[1vh] text-gray-500 font-light text-center">Background</h3>
            <p className="mx-auto mt-[0.5vh] text-sm md:text-xl text-justify text-gray-700 break-words">
              I'm a recent Economics graduate completing my second Bachelor's in Computer Engineering in June 2026. My background combines analytical thinking with technical skills in programming and systems design. I'm passionate about leveraging data to solve real-world problems and am particularly interested in data engineering, automation, and infrastructure.
            </p>
          </section>

          <section className="mx-auto mt-[-2vh] md:mt-[-4vh] md:max-w-lg">
            <h3 className="text-lg md:text-2xl mt-[1vh] md:mt-7 text-gray-500 font-light text-center">Experience</h3>
            <TechStacks className="mt-[0.5vh]" />
          </section>

          <footer className="w-[90%] mx-auto md:w-[50%]">
            <SocialLinks />
          </footer>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About