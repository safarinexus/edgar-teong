import { useState, useEffect } from "react";

import { FaArrowDown } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

const ScrollIndicator = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 500;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
      if (newOpacity <= 0.45) {
        setOpacity(newOpacity);
      } else { 
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="scroll-indicator-container" className="flex flex-col items-center space-y-2 sm:row-start-4 sm:col-span-2 mb-3" style={{ opacity }}>
      <p id="scroll-text" className="text-xs opacity-0 animate-fadeIn">Scroll to Discover</p>

      <HashLink to="/#work" id="scroll-indicator" className="relative flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 dark:bg-amber-700">
        <FaArrowDown className="animate-indicateScroll"/>
      </HashLink>
    </div>
  );
};

export default ScrollIndicator;