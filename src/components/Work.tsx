import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import resume from "/edgr_resume.pdf"
import works from "../data/works"

import { FiExternalLink } from "react-icons/fi";

const Work = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.from("#work1", {
                scrollTrigger: {
                    trigger: "#work1", 
                    start: "center bottom", 
                    end: "+=100",
                    toggleActions: "play none none reverse",
                },
                opacity: 0, 
                scale: 0.9,
                y: 100,
            })
            gsap.from("#work2", {
                scrollTrigger: {
                    trigger: "#work2", 
                    start: "center bottom", 
                    end: "+=100",
                    toggleActions: "play none none reverse",
                },
                opacity: 0, 
                scale: 0.9,
                y: 100,
            })
            gsap.from("#work3", {
                scrollTrigger: {
                    trigger: "#work3", 
                    start: "center bottom", 
                    end: "+=100",
                    toggleActions: "play none none reverse",
                },
                opacity: 0, 
                scale: 0.9,
                y: 100,
            })
        })
    });

    return (
        <>
            <h1 className="font-bold text-lg sm:text-3xl">My Work Experience</h1>
            {works.map((work, index) => (
                <div key={index} id={"work"+(index+1)} className="my-9 font-medium sm:grid sm:gap-2 grid-cols-[110px_auto]">
                    <p className="text-sm sm:text-lg sm:font-light sm:row-span-3 sm:my-[5px]">{work.dates}</p>
                    <a href={work.link} className="text-lg font-bold tracking-tighter my-1 sm:text-2xl">{work.position} • {work.company}</a>
                    <p className="mb-3 font-light lg:text-xl">{work.description}</p>
                    <div>
                        {work.technologies.map((tech, techIndex) => (
                                <span 
                                    key={techIndex} 
                                    className="inline-block px-3 py-1 mx-1 my-1 bg-yellow-400 dark:bg-yellow-600 
                                    rounded-3xl text-sm font-semibold text-black dark:text-white"
                                >
                                    {tech}
                                </span>
                        ))}
                    </div>
                </div>
            ))}
            <a href={resume} className="font-bold text-lg">
                My Full Resume 
                <FiExternalLink id="link-arrow" className="inline ml-2 relative bottom-[2px]"/>
            </a>
        </>
    )
}

export default Work