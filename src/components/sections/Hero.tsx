import Button from "../Button"
import ScrollArrow from "../ScrollArrow"
import SectionWrapper from "../SectionWrapper"

const Hero = () => {
  return (
    <SectionWrapper id="hero" className="bg-white flex flex-col justify-between">
      <div className="mt-[25vh] px-4 md:px-0 md:ml-5">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight wrap-break-words">Simon Carlsson</h1>
        <h3 className="text-2xl md:text-3xl mt-[1vh] text-gray-500 font-light">Computer Engineering & Economics graduate aspiring to work with data and automation.</h3>
      </div>

      <ScrollArrow href="#about" className="md:mt-[8vh]" />

      <footer className="flex justify-center gap-8 md:gap-24 md:text-xl">
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