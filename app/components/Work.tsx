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
    const slowScroll = [0, 2, 3];

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            for (let i = 0; i < works.length; i++) {
                if (slowScroll.includes(i)) {
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
                opacity: 0,
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
                    className="block p-5 pb-16 font-medium bg-rose-400
                        rounded-[36px] text-black opacity-100 transition-opacity duration-75 md:col-span-2 relative"
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
                                className="inline w-6 sm:w-10 rounded-md mr-1" 
                                alt={currJob.company + " logo"}
                        />
                        {currJob.company}
                        <MdArrowOutward id="work-link-arrow" className="inline w-5 ml-1 group-hover:animate-hoverDiagonal transition-transform"/>
                    </a>
                    <p className="text-sm sm:font-light sm:my-[5px]">{currJob.dates}</p>
                    <hr className='mt-2 mx-auto opacity-40 border-black' />  
                    <h2 className='font-bold'>{currJob.position}</h2>
                    { currJob.description !== undefined ? (<p className="my-3 font-light">{currJob.description}</p>) : null }
                    { currJob.technologies !== undefined ?
                        ( <div className="flex space-x-3 absolute bottom-5 mt-5 w-10/12">
                            { currJob.technologies.map((tech, techIndex) => (
                            <span key={techIndex}>
                                    < TechIcon customTWprop={"size-5 lg:size-7"} technology={tech} />
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
                        className={`block p-5 font-medium ${ work.technologies === undefined ? ('') : ('pb-16') }
                        rounded-[36px] text-black transition-opacity duration-75 relative ${ adjIndex === 1 ? ("bg-green-300") : ("bg-zinc-100") }`}
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
                        { work.description !== undefined ? (<p className="my-3 font-light pb-5">{work.description}</p>) : null }
                        { work.technologies !== undefined ?
                            ( <div className="flex flex-wrap space-x-3 absolute bottom-5 mt-5 w-10/12">
                                <br/>
                                { work.technologies.map((tech, techIndex) => (
                                    <span key={techIndex}>
                                        < TechIcon customTWprop={"size-5 lg:size-7"} technology={tech} />
                                    </span>
                                ))}
                            </div> ) :
                            null
                        }
                    </div>
                )})}
            </div>
            <a href="https://linkedin.com/in/edgarteong" target="_blank" className="inline-block font-bold text-lg mt-9 group">
                Check out my LinkedIn!
                <MdArrowOutward id="work-link-arrow" className="inline ml-1 w-4 motion-safe:group-hover:animate-hoverDiagonal transition-transform"/>
            </a>
        </>
    )
}

export default Work