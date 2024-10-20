import { useState, useEffect } from "react";
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
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useGSAP (() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from('#scroll-indicator-container', { 
          duration: 1.2,
          delay: 1, 
          ease: "power3.out",
          y: "-20%", 
          opacity: 0,
          onComplete: () => {
            gsap.to("#scroll-arrow", {
              y: 3, 
              duration: 0.25, 
              ease: "power1.inOut",
              onComplete: () => {
                gsap.fromTo('#scroll-arrow', {
                  y: 3, 
                  duration: 0.25,
                }, {
                  y: -3, 
                  duration: 0.5, 
                  repeat: -1, 
                  yoyo: true,
                  ease: "power1.inOut",
              })
              }
            })
          }
        });
    });
  });

  return (
    <div id="scroll-indicator-container" className="fixed w-full flex z-10 flex-col items-center space-y-1 bottom-5 will-change-scroll" style={{ opacity }}>
      
        { height < 725 ? ("") : 
          <HashLink to="/#about" id="scroll-text" className="bg-beige dark:bg-black p-1 rounded-md">
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