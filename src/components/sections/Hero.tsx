import Button from "../Button"
import ScrollArrow from "../ScrollArrow"
import SectionWrapper from "../SectionWrapper"

const Hero = () => {
  return (
    <SectionWrapper id="hero" className="bg-white flex flex-col justify-between">
      <div className="mt-[25vh]">
        <h1 className="text-7xl font-bold tracking-tight">Simon Carlsson</h1>
        <h3 className="text-2xl mt-[1vh] text-gray-500 font-light">Computer Engineering & Economics graduate aspiring to work with data and automation.</h3>
      </div>

      <ScrollArrow href="#about" />

      <footer className="flex justify-center gap-8 mb-[3vh]">
        <Button href="#about" className="w-20 text-center">
          About
        </Button>
        <Button href="#projects" className="w-20 text-center">
          Projects
        </Button>
        <Button href="/CV_SimonCarlsson.pdf" className="w-20 text-center">
          Resume
        </Button>
      </footer>
    </SectionWrapper>
  )
}

export default Hero