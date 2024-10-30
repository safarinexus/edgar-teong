import ScrollProgressBar from "./components/ScrollProgressBar"
import ScrollIndicator from "./components/ScrollIndicator"
import About from './components/About'
import Hero from "./components/Hero"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <ScrollIndicator /> 
      <div 
        id="hero" 
        className="w-full max-w-[1208px] h-fit sm:h-screen sm:git min-h-fit mx-auto px-2 py-2"
      >
        <Hero />
      </div>
      <div 
        id="about" 
        className="w-full max-w-[1208px] h-fit mx-auto"
      >
        <About />
      </div>
      <div
        id="work"
        className="w-full max-w-[1208px] h-fit min-h-[480px] mx-auto px-5 pt-20 sm:px-24"
      >
        <Work />
      </div>
      <div
        id="projects"
        className="w-full max-w-[1208px] h-fit min-h-[480px] mx-auto px-5 pt-20 sm:px-24 flex flex-col"
      >
        <Projects />
      </div>
      <Footer />
    </>
  )
}
