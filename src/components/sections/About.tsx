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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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