'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

import { useState, useEffect } from "react";
import { gsap } from "gsap"; 
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

import DarkMode from "./DarkMode"
import MobileDropdown from "./MobileDropdown/MobileDropdown"

const sections = ['#hero', '#about', '#work', '#project0'];

export default function Navbar() {
    const pathName = usePathname();

    const [mounted, setMounted] = useState(false); 

    const [width, setWidth] = useState<number>(0);
    
    const getWindowWidth = () => {
        const { innerWidth: width } = window;
        return width;
    }

    useEffect(() => setMounted(true), []);
    
    useEffect(() => {
        setWidth(getWindowWidth());

        function handleResize() {
            setWidth(getWindowWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        if (pathName === "/thoughts") {
            setActiveSection(null);
        } else {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                    });
                },
                { threshold: 0.25 }
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
        }
    }, [pathName]);

    /*
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
    */

    if (!mounted) {
        return (
            <div id="navbar-container" className="fixed w-full min-w-[320px] flex flex-col items-center pt-4 pb-3 sm:pt-0 sm:pb-0 sm:top-4 px-4 h-min z-50">
                <nav 
                className="
                    w-full max-w-[1176px] h-14 p-3 rounded-[32px] bg-white bg-opacity-30 z-40 relative backdrop-blur-3xl border-[1px]
                    dark:bg-opacity-40 grid grid-rows-1 grid-cols-[60px_auto_60px] items-center border-neutral-200 animate-pulse
                "
                >
                    <Link href="/#hero" id="logo-link" className="inline-flex w-fit z-40 opacity-40">
                        <Image 
                            src="/logo.webp"
                            width={500}
                            height={201}
                            alt="logo" 
                            draggable="false" 
                            className="w-[60px] dark:invert select-none z-40"
                        />
                    </Link>
                    <div className="ml-3 font-bold text-xl text-black dark:text-white z-40">
                    </div>
                    <div id="nav-cluster" className="h-full sm:w-[350px] justify-self-end flex items-center justify-between z-40 col-start-3">
                    </div>
                </nav>
            </div>
        )
    }

    return (
        <div id="navbar-container" className="fixed w-full min-w-[320px] flex flex-col items-center pt-4 pb-3 sm:pt-0 sm:pb-0 sm:top-4 px-4 h-min z-50">
            <nav  
            className="
                w-full max-w-[1176px] h-14 p-3 rounded-[32px] bg-white bg-opacity-30 z-40 relative backdrop-blur-3xl border-[1px]
                dark:bg-opacity-40 grid grid-rows-1 grid-cols-[60px_auto_60px] items-center border-neutral-200
            "
            >
                <Link href="/#hero" id="logo-link" className="inline-flex w-fit z-40">
                    <Image 
                        src="/logo.webp"
                        width={500}
                        height={201}
                        alt="logo" 
                        draggable="false" 
                        className="w-[60px] select-none z-40"
                    />
                </Link>
                <div className="ml-3 font-bold text-xl text-black z-40">
                { width <= 640 ? 
                    (<h1>
                    { activeSection === "#hero" ? ("Edgar Teong") : ("") }
                    { activeSection === "#about" ? ("About") : ("") }
                    { activeSection === "#work" ? ("Experience") : ("") }
                    { activeSection === "#project0" ? ("Projects") : ("") }
                    { (/^\/thoughts/).test(pathName) ? ("Thoughts") : ("") }
                    </h1>)
                    : 
                    ("Edgar Teong")
                }
                </div>
                <div id="nav-cluster" className="h-full sm:w-[350px] justify-self-end flex items-center justify-between z-40 col-start-3">
                    { width > 640 ?  
                        <>
                            <div className={`w-fit h-fit motion-safe:transition-shadow motion-safe:duration-500 z-40 ${activeSection === '#about' ? 'shadow-underline hover:shadow-underline-hover' : ''}`}>
                                <Link href="/#about" className="md:text-lg text-black">About</Link>
                            </div>
                            <div className={`w-fit h-fit motion-safe:transition-shadow motion-safe:duration-500 z-40 ${activeSection === '#work' ? 'shadow-underline hover:shadow-underline-hover' : ''}`}>
                                <Link href="/#work" className="md:text-lg text-black">Work</Link>
                            </div>
                            <div className={`w-fit h-fit motion-safe:transition-shadow motion-safe:duration-500 z-40 ${activeSection === '#project0' ? 'shadow-underline hover:shadow-underline-hover' : ''}`}>
                                <Link href="/#projects" className="md:text-lg text-black">Projects</Link>
                            </div>
                            <div className={`w-fit h-fit motion-safe:transition-shadow motion-safe:duration-500 z-40 ${(/^\/thoughts/).test(pathName) ? 'shadow-underline hover:shadow-underline-hover' : ''}`}>
                                <Link href="/thoughts" className="md:text-lg text-black">Thoughts</Link>
                            </div>
                        </> :
                        <MobileDropdown />
                    }
                    <DarkMode />
                </div>
            </nav>
        </div>
    )
}; 