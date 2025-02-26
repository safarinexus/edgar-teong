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
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            for (let i = 0; i < works.length; i++) {
                if ( i % 2 === 0) {
                    gsap.from(`#work${i}`, {
                        scrollTrigger: {
                            trigger: `#work${i}`, 
                            start: "clamp(top bottom)", 
                            end: "clamp(20px 85%)",
                            toggleActions: "play none none none",
                            scrub: 1,
                        },
                        y: 160,
                    })
                } else {
                    gsap.from(`#work${i}`, {
                        scrollTrigger: {
                            trigger: `#work${i}`, 
                            start: "clamp(top bottom)", 
                            end: "clamp(20px 85%)",
                            toggleActions: "play none none none",
                            scrub: 1,
                        },
                        y: 80,
                    })
                }
                
            } 

            gsap.from('#work-title', {
                scrollTrigger: {
                    trigger: `#work-title`, 
                    start: "clamp(top bottom)", 
                    end: "clamp(20px 85%)",
                    toggleActions: "play none none none",
                    scrub: 1,
                },
                y: 80,
            })
            gsap.delayedCall(0.6, () => ScrollTrigger.refresh());
        })
    });

    const currJob = works[0]
    const smallWorks = works.slice(1);

    return (
        <>
            <h1 id="work-title" className="font-bold text-2xl sm:text-4xl">My Work Experience</h1>
            {
            //curr job (big card on desktop)
            }
            <div className="mt-9 gap-9 grid md:grid-cols-2">
                <div
                    key={0} 
                    id={'work'+0} 
                    aria-label={currJob.company + " website"}
                    className="block p-5 pb-16 font-medium bg-green-300
                        rounded-[36px] text-black opacity-100 transition-opacity duration-75 md:col-span-2 relative"
                >
                    <a 
                        className="text-lg font-bold tracking-tighter my-1 text-black sm:text-xl group"
                        target="_blank"
                        href={currJob.link} 
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
                        className={`block p-5 pb-16 font-medium
                        rounded-[36px] text-black transition-opacity duration-75 relative ${ adjIndex === 1 ? ("bg-emerald-300") : ("bg-zinc-100") }`}
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
                        <br />
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

export default Work