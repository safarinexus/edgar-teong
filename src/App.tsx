import { useState, useEffect } from "react";

import Header from "./components/Header/Header"
import ScrollProgressBar from "./components/ScrollProgressBar"
import ScrollIndicator from "./components/ScrollIndicator"
import About from './components/About'
import Hero from "./components/Hero"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Thoughts from "./components/Thoughts/Thoughts"

interface Dimension {
  height: number; 
  width: number;
}

interface Props {
  error: boolean,
  thoughts: boolean,
}

const App = ({ error, thoughts }: Props) => {
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
      { thoughts || error ? 
      <Header width={dimensions.width} active={false}/> :
      <Header width={dimensions.width} active={true}/>
      }
      { thoughts ?  
        <Thoughts /> :
        error ? 
        <Error /> : 
        (
          <>
            <ScrollProgressBar />
            <ScrollIndicator height={dimensions.height}/> 
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
    </>
  )
}

export default App
