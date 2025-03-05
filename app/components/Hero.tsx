'use client'

import Image from "next/image";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Headshot from "./Headshot";
import ContactBar from "./ContactBar"

const Hero = () => {
    useGSAP (() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            /*
            const tl = gsap.timeline({ delay: 1, repeat: -1 });
            tl.from("fullstack", { opacity: 0, duration: 0.5, ease: "" })
                .to("#fullstack", { opacity: 1, duration: 0.5 })
                .to("#fullstack", { opacity: 0, duration: 1 })
                .to("#coffee", { opacity: 1, duration: 1 })
                .to("#coffee", { opacity: 0, duration: 1 })          
                .to("#reader", { opacity: 1, duration: 1 })
                .to("#reader", { opacity: 0, duration: 1 })     
                .to("#music", { opacity: 1, duration: 1 })
                .to("#music", { opacity: 0, duration: 1 })   
                .to("#film", { opacity: 1, duration: 1 })  
                .to("#film", { opacity: 0, duration: 1 })       
                .to("#psych", { opacity: 1, duration: 1 })        
                .to("#psych", { opacity: 0, duration: 1 })     
            /*
            gsap.from("#container-bg", {
                duration: 1, 
                rotate: 12, 
                y: "10%",
                ease: "power4.out"
            })
            */
            const tl = gsap.timeline({ 
                repeat: -1,  // Infinite repeat
                repeatDelay: 0,  // No delay between repeats
                smoothChildTiming: true  // Helps with smoother transitions
            });

            // Select all the text elements to cycle through
            const textElements = [
                "#fullstack", 
                "#coffee", 
                "#reader", 
                "#music", 
                "#film", 
                "#psych"
            ];

            // Create a seamless cycling animation
            textElements.forEach((selector) => {
                // Fade in
                tl.fromTo(
                    selector, 
                    { opacity: 0 }, 
                    { 
                        opacity: 1, 
                        duration: 0.5, 
                        ease: "power1.inOut" 
                    }
                )
                // Stay visible briefly
                .to(selector, { 
                    opacity: 1, 
                    duration: 1 
                })
                // Fade out
                .to(selector, { 
                    opacity: 0, 
                    duration: 0.5, 
                    ease: "power1.inOut"
                });
            });

            // Optional: Adjust timing to control loop speed
            tl.timeScale(1.2);
        });

        // Colour text animation
        gsap.to("#myname, #fullstack, #coffee, #reader, #music, #film, #psych", {
            duration: 5,
            backgroundPositionX: "100%",
            ease: "sine.inOut",
            repeat: -1,  
            yoyo: true,  
        });

    });

    return (
        <main
            id="container-bg"
            className="w-full h-full min-h-[400px] sm:min-h-[720px] sm:motion-reduce:min-h-[820px] motion-reduce:lg:min-h-[1000px] font-light  
                border-[1px] border-neutral-300 shadow-custom rounded-[32px] 
                flex flex-col sm:justify-end bg-white pt-[70px] sm:pt-[80px] md:pt-[140px] p-4 sm:px-16 lg:pb-16 text-black
            "
        >
            <div id="intro" className="flex flex-col items-start sm:flex-row sm:items-center gap-2 tracking-tighter">
                <Headshot />
                <div>
                    <h1 id="hey-there"className="group text-xl sm:text-2xl lg:text-3xl">
                        <div id="hand-wrapper" className="inline-block group-hover:animate-wave">
                            <Image
                                src="/emojis/wave.webp" 
                                width={160}
                                height={160}
                                alt="waving hand emoji" 
                                className="inline-block relative -top-1 pointer-events-none size-5 lg:size-7"
                            />
                        </div>
                        {" "}Hey there!{" "}I&#39;m{" "}
                        <span id="myname" className="inline-block bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                            Edgar Teong
                        </span>
                    </h1>
                    <p id="job-status" className="text-sm sm:text-base lg:text-xl text-center font-extralight opacity-60">
                        Software Engineer at <a href="https://www.climateimpactx.com/" className="text-black">
                            <Image
                                src="/work-logos/cix.webp"
                                width={200}
                                height={200}
                                alt="cix logo"
                                className="size-4 sm:size-5 inline mx-1"
                            />
                            Climate Impact X
                        </a>
                    </p>
                </div>
            </div>
            

            <p id="im-a" className="mt-4 text-2xl xs:text-4xl lg:tracking-tight lg:text-6xl">
                I&#39;m a passionate and self-started software engineer. I make products that are performant, scalable and beautiful. 
            </p>

            <div id="im-also" className="relative mt-4 motion-reduce:mb-6 h-fit motion-safe:h-[70px] motion-safe:xs:h-[140px] motion-safe:sm:h-[100px] motion-safe:lg:h-[90px] text-2xl xs:text-4xl lg:text-6xl">
                I am also a{" "}
                <div id="scroll-text" className="ml-3 w-fit h-[160px] inline font-medium">
                    <span id="fullstack" className="xs:h-12 sm:h-40 block motion-safe:absolute motion-safe:sm:inline bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Full Stack Developer
                    </span>
                    <span id="coffee" className="xs:h-12 sm:h-40 block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Coffee Nerd
                    </span>
                    <span id="reader" className="xs:h-12 sm:h-40 block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Split Ergo Keyboard Hobbyist
                    </span>
                    <span id="music" className="xs:h-12 sm:h-40 block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Psychology Enthusiast
                    </span>
                    <span id="film" className="xs:h-12 sm:h-40 block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Film Lover
                    </span>
                    <span id="psych" className="xs:h-12 sm:h-40 block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Avid Reader
                    </span>
                </div>
            </div>
            <ContactBar main={true}/>
        </main>
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