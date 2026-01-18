import HeadshotImg from "../HeadshotImg"
import SocialLinks from "../SocialLinks"
import ScrollArrow from "../ScrollArrow"
import SectionWrapper from "../SectionWrapper"
import headshotImage from "../../img/headshot.jpg"

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-gray-100">
      <div className="w-full h-full flex flex-col justify-between">
        <div>
          <HeadshotImg
            src={headshotImage}
            className="w-[22vh] h-[22vh] mx-auto mt-[4vh]"
            objectPosition="center 20%"
          />
          <h2 className="text-4xl font-bold text-center mt-[2vh] mb-[-1vh]">
            About Me
          </h2>
          <section className="">
            <h3 className="text-2xl mt-[1vh] text-gray-500 font-light text-center">Background</h3>
            <p className="max-w-3xl mx-auto mt-[1vh] text-justify text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
        </div>

        <ScrollArrow href="#projects" className="text-gray-600" />

        <footer className="mb-8">
          <SocialLinks className="" />
        </footer>
      </div>
    </SectionWrapper>
  )
}

export default About