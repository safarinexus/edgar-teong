import { useState, useEffect } from "react"

import Header from "./components/Header/Header"

const App = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header width={width}/>
      <div className="h-[1000px]">test test</div>
      <div id="work" className="h-[1000px]">I'm working late, cuz I'm a singer</div>
      <div id="projects" className="h-[1000px]">projects here</div>
      <div id="contact" className="h-[1000px]">Contact Me</div>
    </>
  )
}

export default App
