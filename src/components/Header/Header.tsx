import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom"

import logo from "/logo.png"

import DarkMode from "./DarkMode"
import MobileDropdown from "./MobileDropdown/MobileDropdown"

interface Props {
    width: number
}

const sections = ['#landing', '#about', '#work', '#projects'];

const Header = ({ width }: Props) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
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
    }, []);

    return (
        <div id="header-container" className="fixed w-full min-w-[320px] flex flex-col items-center pt-4 pb-3 sm:pt-0 sm:pb-0 sm:top-4 px-4 h-min z-40">
            <div 
            id="header" 
            className="
                w-full max-w-[1176px] h-14 p-3 rounded-[32px] bg-white dark:bg-neutral-800 bg-opacity-30 z-40 relative
                dark:bg-opacity-40 grid grid-rows-1 grid-cols-[60px_auto_60px] items-center backdrop-blur-3xl border-[1px] border-neutral-200 dark:border-neutral-800
            "
            >
                <NavHashLink to="/#top" end id="logo-link" className="inline-flex w-fit z-40">
                    <img 
                        src={logo} 
                        alt="logo" 
                        draggable="false" 
                        className="w-[60px] dark:invert select-none z-40"
                    />
                </NavHashLink>
                <div className="ml-3 font-bold text-xl text-black dark:text-white">
                { width <= 640 ? 
                    (<h1>
                    { activeSection === "#landing" ? ("Edgar Teong") : ("") }
                    { activeSection === "#about" ? ("About") : ("") }
                    { activeSection === "#work" ? ("Experience") : ("") }
                    { activeSection === "#projects" ? ("Projects") : ("") }
                    </h1>)
                    : 
                    ("Edgar Teong")
                }
                </div>
                <div id="nav-cluster" className="h-full sm:w-[350px] justify-self-end flex items-center justify-between z-40 col-start-3">
                    { width <= 640 ?  
                        <MobileDropdown /> :
                        <>
                            <div className={`w-fit h-fit transition-shadow duration-75 z-40 ${activeSection === '#about' ? 'shadow-underline dark:shadow-underline-dark' : ''}`}>
                                <NavHashLink to="/#about" end className="md:text-lg">About</NavHashLink>
                            </div>
                            <div className={`w-fit h-fit transition-shadow duration-75 z-40 ${activeSection === '#work' ? 'shadow-underline dark:shadow-underline-dark' : ''}`}>
                                <NavHashLink to="/#work" end className="md:text-lg">Work</NavHashLink>
                            </div>
                            <div className={`w-fit h-fit transition-shadow duration-75 z-40 ${activeSection === '#projects' ? 'shadow-underline dark:shadow-underline-dark' : ''}`}>
                                <NavHashLink to="/#projects" end className="md:text-lg">Projects</NavHashLink>
                            </div>
                            <Link to='/thoughts' className="md:text-lg z-40">Thoughts</Link>
                        </>
                    }
                    <DarkMode />
                </div>
            </div>
        </div>
    )
}; 

export default Header;