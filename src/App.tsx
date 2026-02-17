import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import ScrollIndicator from "./components/ScrollIndicator"

const App = () => {
  return (
    <>
      <div className="h-dvh overflow-y-scroll snap-y snap-mandatory md:snap-none">
        <Hero />
        <About />
        <Projects />
      </div>
      <ScrollIndicator />
    </>
  )
}

export default App