import { useState, useEffect } from "react";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Header from "./components/Header/Header"
import ScrollProgressBar from "./components/ScrollProgressBar"
import ScrollIndicator from "./components/ScrollIndicator"
import About from './components/About/About'
import Landing from "./components/Landing/Landing"
import WorkProjects from "./components/Work&Projects/Work&Projects"
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
              className="w-full max-w-[1208px] h-fit sm:h-screen sm:min-h-fit mx-auto px-2 py-2"
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
              id="workprojects"
              className="w-full max-w-[1208px] h-svh min-h-[480px] mx-auto "
            >
              <WorkProjects />
              {/*just have multiple cards that appear on intersectionobserver*/}
              {/*setup cards with grid that have different layouts on mobile and desktop*/}
              {/*have link to resume at end*/}
            </div>
            {/*have a scrolling ticker tape of skills*/}
            {/*have link to page with table of full list of projects at end*/}
            {/*need your footer at the end*/}
            {/**/}
          </>
        )
      }
    </>
  )
}

export default App
