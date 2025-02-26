'use client'

import Image from "next/image"; 

import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { projects } from "@/lib/data"

import TechIcon from "./TechIcon";

import { MdArrowOutward } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.from('#project-title', {
                scrollTrigger: {
                    trigger: `#project-title`, 
                    start: "clamp(top bottom)", 
                    end: "clamp(20px 85%)",
                    toggleActions: "play none none none",
                    scrub: 1,
                },
                y: 80, 
                opacity: 0,
            });
        });

        mm.add("screen and (max-width:650px) and (prefers-reduced-motion: no-preference)", () => {
            for (let i = 0; i < projects.length; i++) {
                if ( i % 2 === 0) {
                    gsap.from(`#project${i}`, {
                        scrollTrigger: {
                            trigger: `#project${i}`, 
                            start: "clamp(top bottom)", 
                            end: "clamp(20px 85%)",
                            toggleActions: "play none none none",
                            scrub: 1,
                        },
                        y: 160,
                        rotateY: 90,    
                    })
                } else {
                    gsap.from(`#project${i}`, {
                        scrollTrigger: {
                            trigger: `#project${i}`, 
                            start: "clamp(top bottom)", 
                            end: "clamp(20px 85%)",
                            toggleActions: "play none none none",
                            scrub: 1,
                        },
                        y: 80,
                        rotateY: -90,
                    })
                }
            } 
        });

        mm.add("screen and (min-width: 650px) and (prefers-reduced-motion: no-preference)", () => {
            const tl = gsap.timeline(); 
            tl.from("#project0", {
                y: "50%", 
                rotate: 6, 
                scale: 1.3,
            })
            for (let i = 1; i < projects.length; i++) {
                switch (i) { 
                    case 1: 
                        //blog api
                        tl.from(`#project${i}`, {
                            y: "145%",  
                            scale: 1.3,
                        })
                        break;
                    case 4: 
                        //messageboard
                        tl.from(`#project${i}`, {
                            y: "125%",  
                            scale: 1.3,
                        })
                        break;
                    case 5: 
                        //memory card
                        tl.from(`#project${i}`, {
                            y: "140%",  
                            scale: 1.3,
                        })
                        break;
                    case 6: 
                        //shop
                        tl.from(`#project${i}`, {
                            y: "160%",  
                            scale: 1.3,
                        })
                        break;
                    case 7: 
                        //weather
                        tl.from(`#project${i}`, {
                            y: "125%",  
                            scale: 1.3,
                        })
                        break;
                    case 8: 
                        //todo
                        tl.from(`#project${i}`, {
                            y: "130%",  
                            scale: 1.3,
                        })
                        break;
                    default: 
                        tl.from(`#project${i}`, {
                            y: "120%",  
                            scale: 1.3,
                        })
                }
            }
            
            ScrollTrigger.create({
                animation: tl, 
                trigger: "#projects",
                start: "clamp(top top)", 
                end: "clamp(+=400%)", 
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            })
            
        })
    });

    return (
        <>
            <h1 id="project-title" className="font-bold text-2xl sm:text-4xl">My Projects</h1>
            <div className="h-fit motion-safe:sm:h-screen sm:min-h-[800px] sm:h-fit w-full flex flex-col items-center">
                {projects.map((project, index) => {
                    let skew = " -rotate-2"; 
                    if ((Number(index) + 1) % 2 === 0) {
                        skew = " rotate-2"
                    } 
                    return (
                        <div 
                            key={index}
                            id={"project"+index} 
                            className={"font-medium w-full max-w-[600px] h-auto max-h-full rounded-xl p-3 bg-white\
                                border-[1px] border-neutral-300 shadow-custom text-black\
                                flex flex-col space-y-2 my-9 sm:motion-safe:absolute sm:motion-safe:mx-auto" + skew }
                        >
                            <Image 
                                src={project.image.url}
                                alt={"project"+index+" image"} 
                                width={project.image.width}
                                height={project.image.height}
                                className="w-full h-full rounded-lg object-center object-cover"
                            />
                            <div className="w-full flex items-start">
                                <p className="text-lg font-bold tracking-tighter">{project.title}</p>
                                <div className="ml-auto flex justify-end items-center w-[80px]">
                                        <a href={project.githubLink} aria-label={project.title + " github repo link"}>
                                            <FaGithub className="size-6 text-black"/>
                                        </a>
                                        { project.demoLink ? 
                                            (
                                            <a href={project.demoLink} aria-label={project.title + " live demo link"}>
                                                <FiExternalLink className="ml-3 size-6 text-black"/>
                                            </a>
                                            ) :
                                            ("")
                                        }
                                </div>
                            </div>
                            <p className="font-light">{project.description}</p>
                            <div className="flex flex-wrap space-x-3 pt-1 pb-3 w-full">
                                {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex}>
                                            < TechIcon size={"size-6"} technology={tech} />
                                        </span>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
            <a href="https://github.com/safarinexus?tab=repositories" target="_blank" className="inline-block w-fit font-bold text-lg group">
                My GitHub Repositories
                <MdArrowOutward id="work-link-arrow" className="inline ml-1 w-4 group-hover:animate-hoverDiagonal transition-transform"/>
            </a>
        </>
    )
}

export default Projects

{/*•*/}