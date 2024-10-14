import { useState, useEffect } from "react"

import Header from "./components/Header/Header"
import ScrollProgressBar from "./components/ScrollProgressBar"
import Landing from "./components/PageComponents/Landing/Landing"

const App = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <Header width={width}/>
      <Landing />
      <div id="work" className="h-svh min-h-fit pt-[130px] sm:pt-[140px]">I'm working late, cuz I'm a singer</div>
      <div id="projects" className="h-svh min-h-min pt-[130px] sm:pt-[140px]">projects here</div>
      <div id="contact" className="h-svh min-h-min pt-[130px] sm:pt-[140px]">Contact Me</div>
    </>
  )
}

export default App
