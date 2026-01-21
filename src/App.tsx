import About from "./components/sections/About"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import ScrollIndicator from "./components/ScrollIndicator"

const App = () => {
  return (
    <>
      <div className="h-[100dvh] overflow-y-scroll snap-y snap-mandatory snap-container">
        <Hero />
        <About />
        <Projects />
      </div>
      <ScrollIndicator />
    </>
  )
}

export default App