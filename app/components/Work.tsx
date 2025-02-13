'use client'

import Image from "next/image";

import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { works }from "@/lib/data";

import { MdArrowOutward } from "react-icons/md";

const Work = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            for (let i = 0; i < works.length; i++) {
                gsap.from(`#work${i}`, {
                    scrollTrigger: {
                        trigger: `#work${i}`, 
                        start: "clamp(50% bottom)", 
                        end: "clamp(bottom 20px)",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0, 
                    y: 100,
                })
            }
            gsap.delayedCall(0.6, () => ScrollTrigger.refresh());
        })
    });

    return (
        <>
            <h1 className="font-bold text-2xl sm:text-4xl">My Work Experience</h1>
            {works.map((work, index) => (
                <a 
                    target="_blank"
                    key={index} 
                    id={"work"+index} 
                    href={work.link} 
                    aria-label={work.company + " website"}
                    className="block mt-9 sm:p-5 font-medium sm:grid sm:gap-2 grid-cols-[110px_auto] bg-transparent
                        border border-transparent sm:hover:border-neutral-300 sm:dark:hover:border-neutral-900
                        sm:hover:shadow-custom sm:dark:hover:shadow-custom-dark rounded-xl sm:transition-border-shadow sm:duration-300 group"
                >
                    <p className="text-sm sm:text-lg sm:font-light sm:row-span-3 sm:my-[5px]">{work.dates}</p>
                    <h1 className="text-lg font-bold tracking-tighter my-1 sm:text-xl sm:transition-opacity sm:duration-300 sm:group-hover:opacity-30">
                        <Image
                                src={work.logo.url}
                                height={work.logo.height}
                                width={work.logo.width}
                                className="inline w-6 sm:w-10" 
                                alt={work.company + " logo"}
                        />
                        {work.company} • {work.position}
                        <MdArrowOutward id="work-link-arrow" className="inline w-5 ml-1 group-hover:animate-hoverDiagonal transition-transform"/>
                    </h1>
                    { work.description !== undefined ? (<p className="my-3 font-light lg:text-xl">{work.description}</p>) : null }
                    { work.technologies !== undefined ?
                        ( <div>
                            { work.technologies.map((tech, techIndex) => (
                                <span 
                                    key={techIndex} 
                                    className="inline-block px-3 py-1 mx-1 my-1 rounded-3xl bg-yellow-300 bg-opacity-80
                                    dark:bg-yellow-400 dark:bg-opacity-50 text-sm font-semibold text-black dark:text-white"
                                >
                                    {tech}
                                </span>
                            
                            ))}
                        </div> ) :
                        null
                    }
                </a>
            ))}
            <a href="/edgr_resume.pdf" target="_blank" className="inline-block font-bold text-lg mt-9 group">
                My Full Resume 
                <MdArrowOutward id="work-link-arrow" className="inline ml-1 w-4 motion-safe:group-hover:animate-hoverDiagonal transition-transform"/>
            </a>
        </>
    )
}

export default Work