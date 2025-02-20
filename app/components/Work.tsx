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
                        toggleActions: "play none none none",
                    },
                    opacity: 0, 
                    y: 50,
                })
            }
            gsap.delayedCall(0.6, () => ScrollTrigger.refresh());
        })
    });

    const smallWorks = works.slice(1);

    return (
        <>
            <h1 className="font-bold text-2xl sm:text-4xl">My Work Experience</h1>
            {
            //element for curr job (big card on desktop)
            }
            <a 
                target="_blank"
                key={0} 
                id={'work'+0} 
                href={works[0].link} 
                aria-label={works[0].company + " website"}
                className={`block group mt-9 sm:p-5 font-medium sm:grid sm:gap-2 grid-cols-[110px_auto] bg-${works[0].tailwindBgColor}
                    rounded-3xl text-black`}
            >
                <p className="text-sm sm:text-lg sm:font-light sm:row-span-3 sm:my-[5px]">{works[0].dates}</p>
                <h1 className="text-lg font-bold tracking-tighter my-1 sm:text-xl sm:transition-opacity sm:duration-300 sm:group-hover:opacity-30">
                    <Image
                            src={works[0].logo.url}
                            height={works[0].logo.height}
                            width={works[0].logo.width}
                            className="inline w-6 sm:w-10" 
                            alt={works[0].company + " logo"}
                    />
                    {works[0].company} • {works[0].position}
                    <MdArrowOutward id="work-link-arrow" className="inline w-5 ml-1 group-hover:animate-hoverDiagonal transition-transform"/>
                </h1>
                { works[0].description !== undefined ? (<p className="my-3 font-light lg:text-xl">{works[0].description}</p>) : null }
                { works[0].technologies !== undefined ?
                    ( <div>
                        { works[0].technologies.map((tech, techIndex) => (
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
            {
            //mapping elements for prev exp/internships (small cards on desktop)
            }
            {smallWorks.map((work, index) => {
                const adjIndex = index + 1;
                return (
                <a 
                    target="_blank"
                    key={adjIndex} 
                    id={"work"+adjIndex} 
                    href={work.link} 
                    aria-label={work.company + " website"}
                    className={`block group mt-9 sm:p-5 font-medium sm:grid sm:gap-2 grid-cols-[110px_auto] bg-${work.tailwindBgColor ? work.tailwindBgColor : "white"}
                    rounded-3xl text-black`}
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
                </a>
            )})}
            <a href="/edgr-resume.pdf" target="_blank" className="inline-block font-bold text-lg mt-9 group">
                My Full Resume 
                <MdArrowOutward id="work-link-arrow" className="inline ml-1 w-4 motion-safe:group-hover:animate-hoverDiagonal transition-transform"/>
            </a>
        </>
    )
}

export default Work