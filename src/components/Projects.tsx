import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import projects from "../data/projects"

import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            for (let i=1; i < projects.length + 1; i++) {
                gsap.from(`#project${String(i)}`, {
                    scrollTrigger: {
                        trigger: `#project${String(i)}`, 
                        start: "center bottom", 
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
        <div className="w-full h-fit pt-20">
            <h1 className="font-bold text-lg">My Projects</h1>
            {projects.map((work, index) => (
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
            ))}
            <a href="https://github.com/safarinexus?tab=repositories" className="font-bold text-lg">
                My GitHub Repositories
                <FiExternalLink id="link-arrow" className="inline ml-2 relative bottom-[2px]"/>
            </a>
        </div>

    )
}

export default Projects

{/*•*/}