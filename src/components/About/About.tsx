import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import image1 from "../../assets/image1.webp"
import image2 from "../../assets/image2.webp"
import image3 from "../../assets/image3.webp"
import image4 from "../../assets/image4.webp"
import image5 from "../../assets/image5.webp"
import image6 from "../../assets/image6.webp"

const About = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#images-container",
              start: "top center",
              toggleActions: "play none none reverse",

            }
          });
    
          tl.from("#image1-container", {
            opacity: 0,
            rotate: -45,
            duration: 0.5,
            x: "-100%",
            y: "-100%",
          })
          .from("#image2-container", {
            opacity: 0,
            rotate: 45,
            duration: 0.5,
            x: "100%",
            y: "-100%",
          }, "-=0.3")
          .from("#image3-container", {
            opacity: 0,
            rotate: 45,
            duration: 0.5,
            x: "-100%",
            y: "100%",
          }, "-=0.4")
          .from("#image5-container", {
            opacity: 0,
            rotate: -45,
            duration: 0.5,
            x: "100%",
            y: "100%",
          }, "-=0.5")
          .from("#image4-container", {
            opacity: 0,
            rotate: 45,
            duration: 0.5,
            x: "-100%",
            y: "100%",
          }, "-=0.5")
          .from("#image6-container", {
            opacity: 0,
            rotate: -45,
            duration: 0.5,
            x: "100%",
            y: "100%",
          }, "-=0.5");
    });

    return (
        <div className="w-full h-full flex flex-col">
            <div id="images-container" className="max-w-[1000px] grid grid-rows-2 grid-cols-2 sm:grid-cols-3 justify-items-center items-center mx-auto">
                <div id="image1-container" className="relative z-30 w-[130%] -rotate-12 bottom-[-15%] left-[5%] sm:bottom-0">
                    <img 
                        src={image1}
                        id="image1"  
                        alt="image 1"
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                    />
                </div>
                <div id="image2-container" className="relative z-20 rotate-6 -bottom-[6%] right-[-6%] sm:bottom-0 sm:right-[-15%]">
                    <img 
                        src={image2}
                        id="image2"  
                        alt="image 2"
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                    />
                </div>
                <div id="image3-container" className="relative z-10 w-[105%] rotate-12 bottom-[15%] left-[-5%] sm:w-[95%] sm:left-[10%] sm:bottom-0">
                    <img 
                        src={image3}
                        id="image3"  
                        alt="image 3"
                        draggable="false"
                        className="select-none rounded-xl brightness-90"
                    />
                </div>
                <div id="image4-container" className="relative z-20 hidden sm:block w-[110%] rotate-12 left-[5%] bottom-[32%]">
                    <img 
                        src={image4}
                        id="image4"  
                        alt="image 4"
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                    />
                </div>
                <div id="image5-container" className="relative -rotate-6 w-[130%] top-[-18%] sm:w-[140%] sm:top-[-25%]">
                    <img 
                        src={image5}
                        id="image5"  
                        alt="image 1"
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                    />
                </div>
                <div id="image6-container" className="relative -z-10 hidden sm:block w-[95%] -rotate-12 left-[10%] top-[-26%]">
                    <img 
                        src={image6}
                        id="image6"  
                        alt="image 1"
                        className="select-none rounded-lg"
                        draggable="false"
                    />
                </div>
            </div>
            <div id="about-text-container" className="w-full px-5 sm:px-24 font-light text-base">
                <h1 className="font-bold text-lg">About Me</h1>
                <p className="tracking-wide leading-[19px] font-light text-sm xs:text-base sm:text-sm md:text-base lg:text-xl xl:text-[1.6rem]">Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing massa eu proin ut integer fermentum. Maecenas luctus class est ultricies adipiscing lacinia.
                <br /><br />
                Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing massa eu proin ut integer fermentum. Maecenas luctus class est ultricies adipiscing lacinia.
                <br /><br />
                Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing massa eu proin ut integer fermentum. Maecenas luctus class est ultricies adipiscing lacinia.
                </p>
            </div>
        </div>
    )
}

export default About