import { useState, useEffect } from "react"

import Header from "./components/Header/Header"
import ScrollProgressBar from "./components/ScrollProgressBar"
import ScrollIndicator from "./components/ScrollIndicator"
import Landing from "./components/PageComponents/Landing/Landing"
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
      <ScrollIndicator /> 
      <div 
        id="landing-container" 
        className="w-full max-w-[1200px] min-h-max pt-[95px] xs:pt-[120px] sm:pt-[140px] pr-5 pl-5 sm:p-24 pb-8 ml-auto mr-auto"
        style={{ height:dimensions.height}}
      >
        <Landing />
      </div>
      <div id="work" className="h-svh">I'm working late, cuz I'm a singer</div>
      <div id="projects" className="h-svh">projects here</div>
      <div id="contact" className="h-svh">Contact Me</div>
    </>
  )
}

export default App
