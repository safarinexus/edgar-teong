import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Headshot from "./Headshot"

const Landing = () => {
    useGSAP (() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.from("#landing-text", {
                duration: 0.6, 
                y: -20, 
                opacity: 0,
                ease: "none"
            })

            gsap.to("#myname", {
                duration: 5,
                backgroundPositionX: "100%",
                ease: "sine.inOut",
                repeat: -1,  
                yoyo: true,  
            });

            gsap.from("#highlight-container", {
                scale: 0, 
                duration: 0.3, 
                delay: 1,
            });
        });
    });


    return (
        <div 
            className="w-full h-full flex flex-col font-light text-base
                sm:grid sm:gap-4 sm:items-center sm:grid-cols-[60%_40%] sm:grid-rows-[10%_auto_20%] md:grid-rows-[5%_auto_30%]
            "
        >
            <Headshot />
            
            <p id="hey-there"className="mt-4 sm:mt-0 sm:col-start-1 sm:row-start-1 sm:self-end sm:text-xl lg:text-3xl">
                <span id="hand" className="inline-block animate-wave motion-reduce:animate-none">👋</span> 
                &nbsp;Hey there!
            </p>

            <p id="my-name-is" className="h-max text-lg font-bold leading-none sm:col-start-1 sm:row-start-3 sm:col-span-2 mt-4 sm:mt-0">
                My name is<br/>
                <span id="myname" className="inline-block relative h-[64px] md:h-[100px] text-5xl md:text-7xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                    Edgar Teong
                    <svg id="highlight-container" className="absolute -bottom-0 w-full origin-left left-0 h-full -z-10 translate-y-1/3 saturate-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 20">
                        <path d="M0,5 C50,7 150,7 200,5" stroke="#F2CD02" fill="none" strokeWidth="9" strokeLinecap="round"/>
                    </svg>
                </span>
            </p>

            <p id="landing-text" className="tracking-wide leading-[19px] sm:text-left font-light text-sm xs:text-base sm:text-sm md:text-base lg:text-xl xl:text-[1.6rem] sm:row-start-2 mt-6 sm:mt-0">
                I&#39;m a passionate & dedicated <span className="font-bold">Full Stack Developer</span> who discovered my love for programming <span className="font-bold">on my own</span> while pursuing accountancy at&nbsp;
                <span className="font-bold">Singapore Management University</span> &#40;SMU&#41;. 
                <br /><br />
                With a drive to <span className="font-bold">continually learn and grow</span>, I&#39;m committed to becoming an expert software engineer, all through&nbsp;
                <span className="font-bold">my own hard work & self-directed learning</span>. 
                <br /><br />
                I bring <span className="font-bold">enthusiasm</span>, <span className="font-bold">creativity</span>,
                and a <span className="font-bold">strong work ethic</span> to every project.
                I&#39;m excited to share my journey and expertise with the world!
            </p>

        </div>
    )
}

export default Landing;

/**/ 