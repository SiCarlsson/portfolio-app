import About from "./components/sections/About"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"

const App = () => {
  return (
    <div className="h-[100dvh] overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App