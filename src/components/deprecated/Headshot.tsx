import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import HeadshotPhoto from "../../assets/headshot.jpeg"

const Headshot = () => {

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("#headshot", {
        opacity: 0,
        duration: 1.2,
        delay: 1, 
        ease: "power3.out"
      })
    });
  });


  return (
      <div id="headshot-container" className="relative flex justify-center items-center mt-4 sm:mt-0 sm:col-start-2 sm:row-start-2 sm:justify-self-end">
        <div id="headshot" className="relative max-w-48 sm:max-w-72 border-purpley dark:border-white border-2 bg-white rounded-full overflow-hidden">
          <img
            src={HeadshotPhoto} 
            alt="Headshot Photo"
            className="w-full h-full select-none"
            draggable="false"
          />
        </div>
      </div>
  );
};

export default Headshot;
