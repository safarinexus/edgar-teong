import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ScrollProgressBar = () => {
    useGSAP(() => {
      gsap.to("#scroll-progress-bar", {
        width: "100%", 
        scrollTrigger: {
          trigger: document.body,
          start: "top top", 
          end: "bottom bottom",
          scrub: true, 
        },
        ease: "none",
      })
    });
  
    return (
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-1 bg-black dark:bg-white z-20 w-0"
      />
    );
  };
  
  export default ScrollProgressBar;