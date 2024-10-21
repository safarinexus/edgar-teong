import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import resume from "../assets/edgr_resume.pdf"
import works from "../data/works"

import { FiExternalLink } from "react-icons/fi";

const WorkProjects = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            for (let i=1; i < works.length + 1; i++) {
                gsap.from(`#exp${String(i)}`, {
                    scrollTrigger: {
                        trigger: `#exp${String(i)}`, 
                        start: "bottom bottom", 
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
        <div className="w-full px-5">
            <div id="work" className="w-full h-fit pt-20">
                <h1 className="font-bold text-lg">My Work Experience</h1>
                {works.map((work, index) => (
                    <div key={index} id={"exp"+(index+1)} className="my-9 font-medium">
                        <p className="text-sm">{work.dates}</p>
                        <a href={work.link} className="text-lg font-bold tracking-tighter my-1">{work.position} • {work.company}</a>
                        <p className="mb-3">{work.description}</p>
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
                ))}
                <a href={resume} className="font-bold text-lg">
                    My Full Resume 
                    <FiExternalLink id="link-arrow" className="inline ml-2 relative bottom-[2px]"/>
                </a>
            </div>
            <div id="projects" className="w-full h-[1000px] pt-20">
                <h1 className="font-bold text-lg">My Projects</h1>
                {works.map((work, index) => (
                    <div key={index} id={"project"+index} className="my-9 font-medium">
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
                ))},
                <a href="https://github.com/safarinexus?tab=repositories" className="font-bold text-lg">
                    My GitHub Repositories
                    <FiExternalLink id="link-arrow" className="inline ml-2 relative bottom-[2px]"/>
                </a>
            </div>
        </div>
    )
}

export default WorkProjects

{/*•*/}