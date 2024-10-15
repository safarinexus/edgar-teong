import { useState, useEffect } from "react"

import Header from "./components/Header/Header"
import ScrollProgressBar from "./components/ScrollProgressBar"
import Landing from "./components/PageComponents/Landing/Landing"

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
      <Landing height={dimensions.height}/>
      <div id="work" className="h-svh">I'm working late, cuz I'm a singer</div>
      <div id="projects" className="h-svh">projects here</div>
      <div id="contact" className="h-svh">Contact Me</div>
    </>
  )
}

export default App
