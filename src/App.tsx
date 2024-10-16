import { useState, useEffect } from "react"

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

  return (
    <>
      {/**/}
      <ScrollProgressBar />
      <Header width={dimensions.width}/>
      {/*have sticky section headers on mobile*/}
      <ScrollIndicator height={dimensions.height}/> 
      <div 
        id="landing" 
        className="w-full max-w-[1200px] h-svh min-h-[720px] ml-auto mr-auto pt-[45px] sm:pt-[140px] pr-5 pl-5 sm:p-24 pb-8 "
      >
        <Landing />
        {/*Need to find a way to include a contact cluster*/}
      </div>
      <div 
        id="about" 
        className="w-full max-w-[1200px] h-svh min-h-[720px] ml-auto mr-auto pt-[75px] sm:pt-[140px] pr-5 pl-5 sm:p-24 pb-8 "
      >
        <About />
        {/*parallax scrolling of images that scrolls in from the top while text scrolls in from below*/}
      </div>
      <div
        id="work"
        className="w-full max-w-[1200px] h-svh min-h-[700px] ml-auto mr-auto pr-5 pl-5"
      >
        <Work />
        {/*just have multiple cards that appear on intersectionobserver*/}
        {/*have link to resume at end*/}
      </div>
      <div
        id="projects"
        className="w-full max-w-[1200px] h-svh min-h-[700px] ml-auto mr-auto pr-5 pl-5"
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
