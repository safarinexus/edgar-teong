'use client'

import Image from "next/image";

import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { works }from "@/lib/data";

import TechIcon from "./TechIcon";

import { MdArrowOutward } from "react-icons/md";

const Work = () => {
    /*
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            for (let i = 0; i < works.length; i++) {
                gsap.from(`#work${i}`, {
                    scrollTrigger: {
                        trigger: `#work${i}`, 
                        start: "clamp(50% bottom)", 
                        end: "clamp(bottom 20px)",
                        toggleActions: "play none none none",
                    },
                    y: 100,
                    opacity: 0, 
                })
            }
            gsap.delayedCall(0.6, () => ScrollTrigger.refresh());
        })
    });
    */

    const currJob = works[0]
    const smallWorks = works.slice(1);

    return (
        <>
            <h1 className="font-bold text-2xl sm:text-4xl">My Work Experience</h1>
            {
            //curr job (big card on desktop)
            }
            <div className="mt-9 gap-9 grid lg:grid-cols-2">
                <div
                    key={0} 
                    id={'work'+0} 
                    aria-label={currJob.company + " website"}
                    className="block p-5 pb-16 font-medium bg-zinc-100
                        rounded-[36px] text-black opacity-100 transition-opacity duration-75 lg:col-span-2 relative"
                >
                    <a 
                        className="text-lg font-bold tracking-tighter my-1 text-black sm:text-xl group"
                        target="_blank"
                        href={currJob.link} 
                    >
                        <Image
                                src={currJob.logo.url}
                                height={currJob.logo.height}
                                width={currJob.logo.width}
                                className="inline w-6 sm:w-10" 
                                alt={currJob.company + " logo"}
                        />
                        {currJob.company} • {currJob.position}
                        <MdArrowOutward id="work-link-arrow" className="inline w-5 ml-1 group-hover:animate-hoverDiagonal transition-transform"/>
                    </a>
                    <p className="text-sm sm:text-lg sm:font-light sm:my-[5px]">{currJob.dates}</p>
                    <hr className='mt-2 mx-auto opacity-40 border-black' />  
                    { currJob.description !== undefined ? (<p className="my-3 font-light">{currJob.description}</p>) : null }
                    { currJob.technologies !== undefined ?
                        ( <div className="flex space-x-3 absolute bottom-5 mt-5">
                            { currJob.technologies.map((tech, techIndex) => (
                                /*
                                <span 
                                    key={techIndex} 
                                    className="inline-block px-3 py-1 mx-1 my-1 rounded-3xl bg-yellow-300 bg-opacity-80
                                    dark:bg-yellow-400 dark:bg-opacity-50 text-sm font-semibold text-black dark:text-white"
                                >
                                    {tech}
                                </span>
                                */
                            <span key={techIndex}>
                                    < TechIcon size={"size-5 lg:size-7"} technology={tech} />
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
                            className={`font-bold tracking-tighter my-1  text-black group ${ work.company === "Central Provident Fund Board (CPFB)" ? ("text-base lg:text-xs") : ("text-lg sm:text-xl") }`} 
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
                            {work.company} • {work.position}
                            <MdArrowOutward id="work-link-arrow" className="inline w-5 ml-1 group-hover:animate-hoverDiagonal transition-transform"/>
                        </a>
                        <p className="text-sm sm:text-lg sm:font-light sm:my-[5px]">{work.dates}</p>
                        <hr className='mt-2 mx-auto opacity-40 border-black' />  
                        { work.description !== undefined ? (<p className="my-3 font-light">{work.description}</p>) : null }
                        { work.technologies !== undefined ?
                            ( <div className="flex space-x-3 absolute bottom-5 mt-5">
                                { work.technologies.map((tech, techIndex) => (
                                    /*
                                    <span 
                                        key={techIndex} 
                                        className="inline-block px-3 py-1 mx-1 my-1 rounded-3xl bg-yellow-300 bg-opacity-80
                                        dark:bg-yellow-400 dark:bg-opacity-50 text-sm font-semibold text-black dark:text-white"
                                    >
                                        {tech}
                                    </span>
                                    */
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

export default Work