import { useState, useEffect } from "react"

import Header from "./components/Header/Header"
import ScrollProgressBar from "./components/ScrollProgressBar"
import ScrollIndicator from "./components/ScrollIndicator"
import Landing from "./components/PageComponents/Landing/Landing"
import Work from "./components/PageComponents/Work/Work"
import Projects from "./components/PageComponents/Projects/Projects"
import Contact from "./components/PageComponents/Contact/Contact"

//PLS do an error page thks

interface Dimension {
  height: number; 
  width: number;
}

const App = () => {
  const [dimensions, setDimensions] = useState<Dimension>({
    height: window.innerHeight, 
    width: window.innerWidth, 
  });

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  useEffect(() => {
    function handleResize() {
      setDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <Header width={dimensions.width}/>
      <ScrollIndicator height={dimensions.height}/> 
      <div 
        id="landing-container" 
        className="w-full max-w-[1200px] h-svh min-h-[700px] ml-auto mr-auto pt-[95px] xs:pt-[120px] sm:pt-[140px] pr-5 pl-5 sm:p-24 pb-8 "
      >
        <Landing />
      </div>
      <div
        id="work-container"
        className="w-full max-w-[1200px] h-svh min-h-max ml-auto mr-auto pr-5 pl-5"
      >
        <Work />
      </div>
      <div
        id="projects-container"
        className="w-full max-w-[1200px] h-svh min-h-max ml-auto mr-auto pr-5 pl-5"
      >
        <Projects />
      </div>
      <div
        id="contact-container"
        className="w-full max-w-[1200px] h-svh min-h-max ml-auto mr-auto pr-5 pl-5"
      >
        <Contact />
      </div>
    </>
  )
}

export default App
