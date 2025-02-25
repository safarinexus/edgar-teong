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
                    y: 100,
                    opacity: 0, 
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
                        border border-transparent sm:hover:border-neutral-300 sm:hover:dark:border-neutral-900
                        sm:hover:shadow-custom sm:hover:dark:shadow-custom-dark rounded-xl sm:transition-border-shadow sm:duration-300 group"
                >
                    <p className="text-sm sm:text-lg sm:font-light sm:row-span-3 sm:my-[5px]">{work.dates}</p>
                    <h1 className="text-lg font-bold tracking-tighter my-1 sm:text-xl">
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
                    <hr className='mt-2 mx-auto opacity-50 sm:hidden' />  
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
                </div>
                {
                //mapping elements for prev exp/internships (small cards on desktop)
                }
                {smallWorks.map((work, index) => {
                    const adjIndex = index + 1;
                    return (
                    <div
                        key={adjIndex} 
                        id={"work"+adjIndex} 
                        aria-label={work.company + " website"}
                        className="block p-5 pb-16 font-medium bg-zinc-100
                        rounded-[36px] text-black transition-opacity duration-75 relative"
                    >
                        <a 
                            className="font-bold tracking-tighter my-1  text-black group text-lg sm:text-xl"
                            target="_blank" 
                            href={work.link}
                        >
                            <Image
                                    src={work.logo.url}
                                    height={work.logo.height}
                                    width={work.logo.width}
                                    className="inline w-6 sm:w-10" 
                                    alt={work.company + " logo"}
                            />
                            {work.company}
                            <MdArrowOutward id="work-link-arrow" className="inline w-5 ml-1 group-hover:animate-hoverDiagonal transition-transform"/>
                        </a>
                        <p className="text-sm sm:font-light sm:my-[5px]">{work.dates}</p>
                        <hr className='mt-2 mx-auto opacity-40 border-black' />  
                        <h2 className='font-bold'>{work.position}</h2>
                        { work.description !== undefined ? (<p className="my-3 font-light">{work.description}</p>) : null }
                        { work.technologies !== undefined ?
                            ( <div className="flex flex-wrap space-x-3 absolute bottom-5 mt-5 w-full">
                                { work.technologies.map((tech, techIndex) => (
                                    <span key={techIndex}>
                                        < TechIcon size={"size-5 lg:size-7"} technology={tech} />
                                    </span>
                                ))}
                            </div> ) :
                            null
                        }
                    </div>
                )})}
            </div>
            <a href="/edgr-resume.pdf" target="_blank" className="inline-block font-bold text-lg mt-9 group">
                My Full Resume 
                <MdArrowOutward id="work-link-arrow" className="inline ml-1 w-4 motion-safe:group-hover:animate-hoverDiagonal transition-transform"/>
            </a>
        </>
    )
}

export default Work;