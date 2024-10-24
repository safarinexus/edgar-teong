import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import ContactBar from "./ContactBar"

const Hero = () => {
    useGSAP (() => {

        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            const tl = gsap.timeline();
            tl.to("#fullstack", { opacity: 0, duration: 0.25})
                .to("#coffee", { opacity: 1 })
                .to("#coffee", { opacity: 0 })          
                .to("#reader", { opacity: 1 })
                .to("#reader", { opacity: 0 })     
                .to("#music", { opacity: 1 })
                .to("#music", { opacity: 0 })   
                .to("#film", { opacity: 1 })  
                .to("#film", { opacity: 0 })       
                .to("#com", { opacity: 1 })             
                
            ScrollTrigger.create({
                animation: tl, 
                trigger: "#im-also",
                start: "clamp(top 70%)", 
                end: "clamp(top 10%)",
                scrub: 1,
            })

            gsap.to("#myname, #fullstack, #coffee, #reader, #music, #film, #com", {
                duration: 5,
                backgroundPositionX: "100%",
                ease: "sine.inOut",
                repeat: -1,  
                yoyo: true,  
            });

            gsap.from("#container-bg", {
                duration: 1, 
                rotate: 12, 
                y: "10%",
                ease: "power4.out"
            })
        });
    });


    return (
        <div 
            id="container-bg"
            className="w-full h-full min-h-[400px] lg:min-h-[620px] font-light text-base pt-[60px] sm:pt-[80px] md:pt-[140px] p-4 sm:px-16 lg:pb-16 rounded-[32px] bg-white 
                border-[1px] border-neutral-300 dark:border-neutral-800 shadow-custom dark:shadow-custom-dark dark:bg-black
                flex flex-col sm:justify-end
            "
        >
            
            <p id="hey-there"className="mt-4 xs:mt-20 sm:mt-0 text-xl lg:text-3xl">
                <span id="hand" className="inline-block motion-safe:animate-wave">👋</span> 
                &nbsp;Hey there! I'm&nbsp;
                <span id="myname" className="inline-block bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                    Edgar Teong
                </span>
                .
            </p>

            <p id="im-a" className="mt-4 font-medium text-4xl lg:text-6xl lg:tracking-tight">
                I'm a passionate and self-started software engineer. I make products that are performant and beautiful. 
            </p>

            <div id="im-also" className="relative mt-4 h-fit motion-safe:h-[140px] font-medium text-4xl sm:h-[80px] lg:h-[90px] sm:motion-reduce:h-[320px] lg:motion-reduce:h-[480px] lg:text-6xl">
                I am also a&nbsp;
                <div id="scroll-text" className="w-fit h-[144px] inline">
                    <span id="fullstack" className="block motion-safe:absolute motion-safe:sm:inline bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        Full Stack Developer
                    </span>
                    <span id="coffee" className="block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        Coffee Lover
                    </span>
                    <span id="reader" className="block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        Avid Reader
                    </span>
                    <span id="music" className="block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline leading-[1.2]  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        Mechanical Keyboard Hobbyist
                    </span>
                    <span id="film" className="block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        Film Nerd
                    </span>
                    <span id="com" className="block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline  leading-[1.2] bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        Psychology Enthusiast
                    </span>
                </div>
            </div>
            <ContactBar main={true}/>
        </div>
    )
}

export default Hero;

/*
gsap.from("#highlight-container", {
    scale: 0, 
    duration: 0.3, 
    delay: 1,
});
<svg id="highlight-container" className="absolute -bottom-0 w-full origin-left left-0 h-full -z-10 translate-y-1/3 saturate-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 20">
    <path d="M0,5 C50,7 150,7 200,5" stroke="#F2CD02" fill="none" strokeWidth="9" strokeLinecap="round"/>
</svg>
*/ 