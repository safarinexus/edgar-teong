import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import projects from "../data/projects"

import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            for (let i = 0; i < projects.length; i++) {
                gsap.from(`#project${i}`, {
                    scrollTrigger: {
                        trigger: `#project${i}`, 
                        start: "top bottom", 
                        end: "center center",
                        scrub: 1, 
                    },
                    y: 100,
                    onComplete: () => {
                        gsap.to(`#project${i}`, {
                            scrollTrigger: {
                                trigger: `#project${i}`, 
                                start: "top 20%", 
                                end: "+=1000%", 
                                scrub: 1, 
                                pin: true,
                            },
                        })
                    }    
                })
            }
        })
    });

    return (
        <>
            <h1 className="font-bold text-2xl sm:text-4xl">My Projects</h1>
            <div className="min-h-screen">
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
                                border-[1px] border-neutral-300 dark:border-neutral-800 shadow-custom dark:shadow-custom-dark\
                                dark:bg-black flex flex-col space-y-2 my-9 self-center sm:motion-safe:absolute" + skew }
                        >
                            <img 
                                src={project.image}
                                alt={"project"+index+" image"} 
                                className="w-full h-full rounded-lg object-center object-cover"
                            />
                            <div className="w-full flex items-start">
                                <p className="text-lg font-bold tracking-tighter">{project.title}</p>
                                <div className="ml-auto flex justify-end items-center w-[80px]">
                                        <a href={project.githubLink}>
                                            <FaGithub className="size-6"/>
                                        </a>
                                        { project.demoLink ? 
                                            (
                                            <a href={project.demoLink}>
                                                <FiExternalLink className="ml-3 size-6"/>
                                            </a>
                                            ) :
                                            ("")
                                        }
                                </div>
                            </div>
                            <p className="font-light">{project.description}</p>
                            <div className="">
                                {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex} 
                                            className="inline-block px-3 py-1 mx-1 my-1 rounded-3xl bg-yellow-300 bg-opacity-80
                                            dark:bg-yellow-400 dark:bg-opacity-50  text-sm font-semibold text-black dark:text-white"
                                        >
                                            {tech}
                                        </span>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
            <a href="https://github.com/safarinexus?tab=repositories" className="font-bold text-lg">
                My GitHub Repositories
                <FiExternalLink id="link-arrow" className="inline ml-2 relative bottom-[2px]"/>
            </a>
        </>
    )
}

export default Projects

{/*•*/}