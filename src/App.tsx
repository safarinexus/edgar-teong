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
import Work from "./components/Work/Work"
import Projects from "./components/Projects/Projects"
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

  useGSAP(() => {

  }); 

  return (
    <>
      {/**/}
      <ScrollProgressBar />
      <Header width={dimensions.width}/>
      {/*have sticky section headers on mobile*/}
      <ScrollIndicator height={dimensions.height}/> 
      <div 
        id="landing" 
        className="w-full max-w-[1440px] h-screen min-h-[720px] mx-auto pt-[45px] sm:pt-24 md:pt-[140px] px-5 sm:px-24"
      >
        <Landing />
        {/*Need to find a way to include a contact cluster*/}
        {/*linkedin, github, goodreads*/}
      </div>
      <div 
        id="about" 
        className="w-full max-w-[1440px] h-fit min-h-[1000px] mx-auto"
      >
        <About />
      </div>
      <div
        id="work"
        className="w-full max-w-[1440px] h-svh min-h-[720px] ml-auto mr-auto pt-[45px] sm:pt-24 md:pt-[140px] px-5 sm:px-20 pb-8"
      >
        <Work />
        {/*just have multiple cards that appear on intersectionobserver*/}
        {/*setup cards with grid that have different layouts on mobile and desktop*/}
        {/*have link to resume at end*/}
      </div>
      <div
        id="projects"
        className="w-full max-w-[1440px] h-svh min-h-[720px] ml-auto mr-auto pt-[45px] sm:pt-24 md:pt-[140px] px-5 sm:px-20 pb-8"
      >
        <Projects />
        {/*have a scrolling ticker tape of skills*/}
        {/*have link to page with table of full list of projects at end*/}
      </div>
      {/*need your footer at the end*/}
      {/**/}
    </>
  )
}

export default App
