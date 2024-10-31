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
            /*
            gsap.from("#container-bg", {
                duration: 1, 
                rotate: 12, 
                y: "10%",
                ease: "power4.out"
            })
            */
        });
        gsap.to("#myname, #fullstack, #coffee, #reader, #music, #film, #com", {
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
            className="w-full h-full min-h-[400px] sm:min-h-[720px] sm:motion-reduce:min-h-[820px] motion-reduce:lg:min-h-[1000px] font-light pt-[70px] sm:pt-[80px] md:pt-[140px] p-4 sm:px-16 lg:pb-16 rounded-[32px] bg-white 
                border-[1px] border-neutral-300 dark:border-neutral-800 shadow-custom dark:shadow-custom-dark dark:bg-black
                flex flex-col sm:justify-end
            "
        >
            <div id="intro" className="flex flex-col items-start sm:flex-row sm:items-center gap-2">
                <Headshot />
                <div>
                    <h1 id="hey-there"className="group text-xl lg:text-3xl">
                        <div id="hand-wrapper" className="inline-block group-hover:animate-wave">
                            <Image
                                src="/wave.png" 
                                width={160}
                                height={160}
                                alt="waving hand emoji" 
                                className="inline-block relative -top-1 pointer-events-none size-5 lg:size-7"/>
                        </div>
                        {" "}Hey there!{" "}I&#39;m{" "}
                        <span id="myname" className="inline-block bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                            Edgar Teong
                        </span>
                        .
                    </h1>
                    <p id="job-status"className="ml-4 xs:ml-6 lg:ml-9 text-xs xs:text-sm lg:text-xl hidden">
                    Software Engineer at 
                    </p>
                </div>
            </div>
            

            <p id="im-a" className="mt-4 font-medium text-2xl xs:text-4xl lg:tracking-tight lg:text-6xl">
                I&#39;m a passionate and self-started software engineer. I make products that are performant and beautiful. 
            </p>

            <div id="im-also" className="relative mt-4 motion-reduce:mb-6 h-fit motion-safe:h-[70px] motion-safe:xs:h-[140px] motion-safe:sm:h-[100px] motion-safe:lg:h-[90px] font-medium  text-2xl xs:text-4xl lg:text-6xl">
                I am also a{" "}
                <div id="scroll-text" className="ml-3 w-fit h-[144px] inline">
                    <span id="fullstack" className="block motion-safe:absolute motion-safe:sm:inline bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Full Stack Developer
                    </span>
                    <span id="coffee" className="block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Coffee Lover
                    </span>
                    <span id="reader" className="block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Avid Reader
                    </span>
                    <span id="music" className="block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline leading-[1.2]  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Mechanical Keyboard Hobbyist
                    </span>
                    <span id="film" className="block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Film Nerd
                    </span>
                    <span id="com" className="block motion-safe:opacity-0 motion-safe:absolute motion-safe:sm:inline  leading-[1.2] bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%">
                        {" "}Psychology Enthusiast
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