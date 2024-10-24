import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { FaArrowDown } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

interface Props {
  height: number;
}

const ScrollIndicator = ({ height }: Props) => {

  useGSAP (() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline(); 
      tl.to("#scroll-indicator-container", {
        opacity: 0,
        scale: 0.9, 
        scrollTrigger: {
          trigger: "#scroll-indicator-container", 
          start: "clamp(90% bottom)", 
          end: "clamp(bottom 50%)",
          scrub: 1,
        }
      }).from('#scroll-indicator-container', { 
        duration: 0.5,
        delay: 0.5, 
        ease: "power3.out",
        y: "-20%", 
        opacity: 0,
      }).fromTo("#scroll-arrow", {
        y: 0, 
        duration: 0.25, 
      }, {
        y: 3,
        ease: "power1.inOut"
      }).fromTo('#scroll-arrow', { 
        duration: 0.25,
      }, {
        y: -3, 
        duration: 0.5, 
        repeat: -1, 
        yoyo: true,
        ease: "power1.inOut",
      })
      gsap.delayedCall(0.5, () => ScrollTrigger.refresh());
    });
  });

  return (
    <div id="scroll-indicator-container" className="fixed w-full flex z-10 flex-col items-center space-y-1 bottom-5 will-change-scroll">
      
      { height < 720 ? ("") : 
        <HashLink to="/#about" id="scroll-text" className="p-1 rounded-md">
          <p className="text-xs">Scroll to Discover</p>
        </HashLink>
      }
      
      <HashLink to="/#about" id="scroll-indicator" className="relative flex items-center justify-center w-7 h-7 rounded-full bg-amber-400">
        <FaArrowDown id="scroll-arrow"/>
      </HashLink>
    </div>
  );
};

export default ScrollIndicator;