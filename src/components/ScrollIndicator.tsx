import { useState, useEffect } from "react";

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

  return (
    <div id="scroll-indicator-container" className="fixed w-full flex z-10 flex-col items-center space-y-1 bottom-5 will-change-scroll" style={{ opacity }}>
      
        { height < 725 ? ("") : 
          <HashLink to="/#about" id="scroll-text" className="opacity-0 animate-fadeIn bg-beige dark:bg-black p-1 rounded-md">
           <p className="text-xs">Scroll to Discover</p>
          </HashLink>
        }
      
      <HashLink to="/#about" id="scroll-indicator" className="relative flex items-center justify-center w-7 h-7 rounded-full bg-amber-400">
        <FaArrowDown className="animate-indicateScroll"/>
      </HashLink>
    </div>
  );
};

export default ScrollIndicator;