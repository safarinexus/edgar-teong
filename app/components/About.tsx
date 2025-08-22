'use client'

import Image from "next/image"
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

import TechIcon from "./TechIcon";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = () => {   
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)",
          () => {
            gsap.to("#image1-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    scrub: 1,
                },
                opacity: 1,
                rotate: -12,
                duration: 0.5,
                x: 0,
                y: 0,
            })

            
            gsap.to("#image2-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    scrub: 1,
                },
                opacity: 1,
                rotate: 6,
                duration: 0.5,
                x: 0,
                y: 0,
            }); 

            gsap.to("#image3-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    scrub: 1,
                },
                opacity: 1,
                rotate: 12,
                duration: 0.5,
                x: 0,
                y: 0,
            }); 

            gsap.to("#image5-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    scrub: 1,
                },
                opacity: 1,
                rotate: -6,
                duration: 0.5,
                x: 0,
                y: 0,
            });

            gsap.to("#image4-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    scrub: 1,
                },
                opacity: 1,
                rotate: 12,
                duration: 0.5,
                x: 0,
                y: 0,
            });

            gsap.to("#image6-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    scrub: 1,
                },
                opacity: 1,
                rotate: -12,
                duration: 0.5,
                x: 0,
                y: 0,
            });

            gsap.from("#about-text-container", {
                scrollTrigger: {
                    trigger: `#about-text-container`, 
                    start: "clamp(100% bottom)",
                    end: "clamp(bottom 20px)",
                    toggleActions: "play none none none",
                },
                opacity: 0, 
                y: 50,
            });
        });
    });

    return (
        <>
            <div id="images-container" className="relative sm:-left-6 max-w-[1000px] grid grid-rows-2 grid-cols-2 sm:grid-cols-3 justify-items-center items-center mx-auto">
                <div 
                    id="image1-container" 
                    className="relative z-20 w-[130%] will-change-transform pointer-events-none bottom-[-15%] left-[5%] 
                        motion-safe:opacity-0 motion-safe:-rotate-45 motion-safe:-translate-x-full motion-safe:-translate-y-full 
                        motion-reduce:-rotate-12
                    "
                >
                    <Image 
                        src="/about-images/image1.webp"
                        id="image1"  
                        alt="image 1"
                        width={4032}
                        height={3024}
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                        quality={40}
                    />
                </div>
                <div 
                    id="image2-container" 
                    className="relative z-20 -bottom-[6%] right-[-6%] sm:right-[-15%] motion-safe:rotate-45
                        will-change-transform pointer-events-none motion-safe:opacity-0 motion-safe:translate-x-full 
                        motion-safe:-translate-y-full motion-reduce:rotate-6
                    " 
                >
                    <Image 
                        src="/about-images/image2.webp"
                        id="image2"  
                        alt="image 2"
                        width={3024}
                        height={4032}
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                        quality={40}
                    />
                </div>
                <div 
                    id="image3-container" 
                    className="relative z-10 w-[105%] bottom-[15%] left-[-5%] sm:left-[5%] 
                    sm:col-start-1 sm:row-start-2 will-change-transform pointer-events-none
                    motion-safe:rotate-45 motion-safe:opacity-0 motion-safe:-translate-x-full
                    motion-reduce:rotate-12 motion-safe:translate-y-full
                    "
                >
                    <Image 
                        src="/about-images/image3.webp"
                        id="image3"  
                        alt="image 3"
                        width={3024}
                        height={4032}
                        draggable="false"
                        className="select-none rounded-xl brightness-90"
                        quality={40}
                    />
                </div>
                <div 
                    id="image4-container" 
                    className="relative z-20 hidden sm:block w-[95%] left-[10%] bottom-0 will-change-transform 
                        pointer-events-none motion-reduce:rotate-12 motion-safe:rotate-[80deg] motion-safe:opacity-0
                        motion-safe:-translate-y-full motion-safe:translate-x-full 
                    "
                >
                    <Image 
                        src="/about-images/image4.webp"
                        id="image4"  
                        alt="image 4"
                        width={2160}
                        height={2880}
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                        quality={40}
                    />
                </div>
                <div 
                    id="image5-container" 
                    className="relative w-[130%] top-[-18%] sm:w-[140%]  will-change-transform 
                        pointer-events-none motion-reduce:-rotate-6 motion-safe:-rotate-45
                        motion-safe:opacity-0 motion-safe:translate-x-full motion-safe:translate-y-full
                    "
                >
                    <Image 
                        src="/about-images/image5.webp"
                        id="image5"  
                        alt="image 5"
                        width={4032}
                        height={3024}
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                        quality={40}
                    />
                </div>
                <div 
                    id="image6-container" 
                    className="relative hidden -z-10 sm:block w-[95%] left-[10%] top-[-26%] 
                        will-change-transform pointer-events-none motion-reduce:-rotate-12
                        motion-safe:-rotate-[80deg] motion-safe:opacity-100 motion-safe:translate-x-full 
                        motion-safe:translate-y-full
                    "
                >
                    <Image 
                        src="/about-images/image6.webp"
                        id="image6"  
                        alt="image 6"
                        width={3024}
                        height={4032}
                        className="select-none rounded-lg"
                        draggable="false"
                        quality={40}
                    />
                </div>
            </div>
            <div id="about-text-container" className="w-full pb-40 px-5 sm:px-24 font-light text-base">
                <p id="about-body" className="mt-7 tracking-tight leading-relaxed font-light text-base lg:text-xl">
                Having graduated from Singapore Management Unversity, I&#39;m currently a Full Stack Developer at <a href="https://climateimpactx.com/"><span className="font-bold">Climate Impact X</span></a>. 
                I am deeply passionate and fiercely self-driven. I love all things technology and building solutions for problems. It is one of my goals in life to be able to use that love to make a real difference to society through software. 
                <br /><br />

                I thoroughly enjoy building beautiful, responsive and effective frontends using{" "}
                <span className="text-react text-nowrap"><TechIcon customTWprop="size-5 sm:size-6" technology="React" /> <a href="https://react.dev/" target="_blank" className="font-medium">React</a></span>
                {" "}+{" "}
                <span className="text-typescript text-nowrap"><TechIcon customTWprop="size-5 sm:size-6" technology="TypeScript" /> <a href="https://www.typescriptlang.org/" target="_blank" className="font-medium">TypeScript</a></span>
                , as well as building scalable, performant and resilient backends using{" "}
                <span><TechIcon overridePath="/dev-logos/java.svg" technology="Java"/> <a href="https://www.java.com/en/" target="_blank" className="font-medium">Java</a></span> 
                {" "}+{" "}
                <span className="text-spring text-nowrap"><TechIcon customTWprop="size-5 sm:size-6" technology="Spring Boot" /> <a href="https://spring.io/" target="_blank" className="font-medium">Spring Boot</a></span> 
                {" "}or{" "}
                <span className="text-nodejs text-nowrap p-"><TechIcon customTWprop="size-5 sm:size-6" technology="Node.js" /> <a href="https://nodejs.org/en" target="_blank" className="font-medium">Node.js</a></span>
                {" "}+{" "}
                <span className="text-nowrap"><TechIcon customTWprop="p-[3px] sm:p-1 size-5 sm:size-6 bg-neutral-600 text-white rounded-full" technology="Express.js"/> <a href="https://expressjs.com/" target="_blank" className="font-medium">Express.js</a></span> 
                {" "}, and{" "}
                <span className="text-postgresql text-nowrap"><TechIcon customTWprop="size-6 sm:size-7" technology="PostgreSQL" /> <a href="https://www.postgresql.org/" target="_blank" className="font-medium">PostgreSQL</a></span>
                {/*
                {" "}+{" "}
                <span className="text-nowrap"><TechIcon customTWprop="size-6" technology="Prisma" /> <a href="https://www.prisma.io/" target="_blank" className="font-medium">Prisma</a></span>
                */}
                {" "}or
                <span className="text-mongodb text-nowrap"><TechIcon customTWprop="size-5 sm:size-6" technology="MongoDB" /><a href="https://www.mongodb.com/" target="_blank" className="font-medium">MongoDB</a></span>
                {" "}for the database.
                <br /><br />
                When I&#39;m not coding, you&#39;ll find me making filter/espresso coffee ☕️, hanging with friends 🎉, enjoying obscure films 🍿, tinkering with mechanical keyboards ⌨️, 
                reading up about psychology/mental health stuff 📚, or dancing at my <a href="https://www.instagram.com/smuemix/" className="font-medium">school&#39;s hip-hop dance club 🕺🏻</a>.
                </p>
            </div>
        </>
    )
}

export default About