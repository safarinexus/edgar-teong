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
            for (let i = 0; i < works.length; i++) {
                gsap.from(`#work${i}`, {
                    scrollTrigger: {
                        trigger: `#work${i}`, 
                        start: "clamp(bottom bottom)", 
                        end: "clamp(+=100)",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0, 
                    scale: 0.9,
                    y: 100,
                })
            }
        })
    });

    return (
        <>
            <h1 className="font-bold text-2xl sm:text-4xl">My Work Experience</h1>
            {works.map((work, index) => (
                <div key={index} id={"work"+index} className="mt-9 font-medium sm:grid sm:gap-2 grid-cols-[110px_auto]">
                    <p className="text-sm sm:text-lg sm:font-light sm:row-span-3 sm:my-[5px]">{work.dates}</p>
                    <a href={work.link} className="text-lg font-bold tracking-tighter my-1 sm:text-2xl">{work.position} • {work.company}</a>
                    <p className="mb-3 font-light lg:text-xl">{work.description}</p>
                    <div>
                        {work.technologies.map((tech, techIndex) => (
                                <span 
                                    key={techIndex} 
                                    className="inline-block px-3 py-1 mx-1 my-1 rounded-3xl bg-yellow-300 bg-opacity-80
                                    dark:bg-yellow-400 dark:bg-opacity-50 text-sm font-semibold text-black dark:text-white"
                                >
                                    {tech}
                                </span>
                        ))}
                    </div>
                </div>
            ))}
            <a href={resume} className="block font-bold text-lg mt-9">
                My Full Resume 
                <FiExternalLink id="link-arrow" className="inline ml-2 relative bottom-[2px]"/>
            </a>
        </>
    )
}

export default Work