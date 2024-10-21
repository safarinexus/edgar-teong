import { useState, useEffect } from "react";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Header from "./components/Header/Header"
import ScrollProgressBar from "./components/ScrollProgressBar"
import ScrollIndicator from "./components/ScrollIndicator"
import About from './components/About'
import Landing from "./components/Landing"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Error from "./components/Error"

interface Dimension {
  height: number; 
  width: number;
}

interface Props {
  error: boolean,
}

const App = ({ error }: Props) => {
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

  useGSAP(() => {

  }); 

  return (
    <>
      {/**/}
      <Header width={dimensions.width}/>
      {/*have sticky section headers on mobile*/}
      { error ? 
        <Error /> : 
        (
          <>
            <ScrollProgressBar />
            <ScrollIndicator height={dimensions.height}/> 
            <div 
              id="landing" 
              className="w-full max-w-[1208px] h-fit sm:h-screen sm:git min-h-fit mx-auto px-2 py-2"
            >
              <Landing />
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
              className="w-full max-w-[1208px] h-fit min-h-[480px] mx-auto px-5 pt-20 sm:px-24"
            >
              <Projects />
            </div>
          </>
        )
      }
    </>
  )
}

export default App
