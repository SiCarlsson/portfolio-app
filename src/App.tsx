import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"

const App = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App