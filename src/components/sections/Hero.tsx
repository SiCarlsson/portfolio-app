import Button from "../Button"
import ScrollArrow from "../ScrollArrow"
import SectionWrapper from "../SectionWrapper"

const Hero = () => {
  return (
    <SectionWrapper id="hero" className="bg-white flex flex-col justify-between">
      <div className="mt-[25vh]">
        <h1 className="text-7xl">Simon Carlsson</h1>
        <h3 className="text-xl mt-[1vh] text-gray-500 w-65">Computer engineering student passionate about data and automation.</h3>
      </div>

      <ScrollArrow href="#about" />
      <footer className="w-full text-xl flex justify-center underline underline-offset-4 mb-[2vh]">
        <Button href="#about" className="w-24 text-center">
          About
        </Button>
        <Button href="#projects" className="w-24 text-center">
          Projects
        </Button>
        <Button href="#contact" className="w-24 text-center">
          Contact
        </Button>
      </footer>

    </SectionWrapper>
  )
}

export default Hero