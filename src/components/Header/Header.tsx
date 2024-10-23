import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom"
import { gsap } from "gsap"; 
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

import logo from "/logo.webp"

import DarkMode from "./DarkMode"
import MobileDropdown from "./MobileDropdown/MobileDropdown"

interface Props {
    width: number,
    active: boolean,
}

const sections = ['#lfg', '#about', '#work', '#project0'];

const Header = ({ width, active }: Props) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        if (active) { 
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                    });
                },
                { threshold: 0.6 }
            );
    
            sections.forEach((section) => {
                const element = document.querySelector(section);
                if (element) {
                    observer.observe(element);
                }
            });
    
            return () => {
                sections.forEach((section) => {
                    const element = document.querySelector(section);
                    if (element) {
                    observer.unobserve(element);
                    }
                });
            };
        } else { 
            setActiveSection(null);
        }
    }, [active]);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.from("#header-container", {
                y: "-100%", 
                duration: 1,
                rotate: -4, 
                ease: "power4.out"
            })
        })
    })

    return (
        <div id="header-container" className="fixed w-full min-w-[320px] flex flex-col items-center pt-4 pb-3 sm:pt-0 sm:pb-0 sm:top-4 px-4 h-min z-40">
            <div 
            id="header" 
            className="
                w-full max-w-[1176px] h-14 p-3 rounded-[32px] bg-white dark:bg-neutral-800 bg-opacity-30 z-40 relative backdrop-blur-3xl border-[1px]
                dark:bg-opacity-40 grid grid-rows-1 grid-cols-[60px_auto_60px] items-center border-neutral-200 dark:border-neutral-800
            "
            >
                <NavHashLink to="/#lfg" end id="logo-link" className="inline-flex w-fit z-40">
                    <img 
                        src={logo} 
                        alt="logo" 
                        draggable="false" 
                        className="w-[60px] dark:invert select-none z-40"
                    />
                </NavHashLink>
                <div className="ml-3 font-bold text-xl text-black dark:text-white z-40">
                { width <= 640 ? 
                    (<h1>
                    { activeSection === "#lfg" ? ("Edgar Teong") : ("") }
                    { activeSection === "#about" ? ("About") : ("") }
                    { activeSection === "#work" ? ("Experience") : ("") }
                    { activeSection === "#project0" ? ("Projects") : ("") }
                    { !active ? ("Thoughts") : ("") }
                    </h1>)
                    : 
                    ("Edgar Teong")
                }
                </div>
                <div id="nav-cluster" className="h-full sm:w-[350px] justify-self-end flex items-center justify-between z-40 col-start-3">
                    { width <= 640 ?  
                        <MobileDropdown /> :
                        <>
                            <div className={`w-fit h-fit motion-safe:transition-shadow motion-safe:duration-500 z-40 ${activeSection === '#about' ? 'shadow-underline dark:shadow-underline-dark hover:shadow-underline-hover hover:dark:shadow-underline-hover-dark' : ''}`}>
                                <NavHashLink to="/#about" end className="md:text-lg">About</NavHashLink>
                            </div>
                            <div className={`w-fit h-fit motion-safe:transition-shadow motion-safe:duration-500 z-40 ${activeSection === '#work' ? 'shadow-underline dark:shadow-underline-dark hover:shadow-underline-hover hover:dark:shadow-underline-hover-dark' : ''}`}>
                                <NavHashLink to="/#work" end className="md:text-lg">Work</NavHashLink>
                            </div>
                            <div className={`w-fit h-fit motion-safe:transition-shadow motion-safe:duration-500 z-40 ${activeSection === '#project0' ? 'shadow-underline dark:shadow-underline-dark hover:shadow-underline-hover hover:dark:shadow-underline-hover-dark' : ''}`}>
                                <NavHashLink to="/#projects" end className="md:text-lg">Projects</NavHashLink>
                            </div>
                            <NavLink 
                                to='/thoughts' 
                                className={({ isActive }) =>
                                    isActive
                                    ? 'md:text-lg z-40 shadow-underline dark:shadow-underline-dark'
                                    : 'md:text-lg z-40'
                                }
                            >Thoughts</NavLink>
                        </>
                    }
                    <DarkMode />
                </div>
            </div>
        </div>
    )
}; 

export default Header;