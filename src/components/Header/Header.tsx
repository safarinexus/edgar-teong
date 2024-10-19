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
        { threshold: 0.8 }
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
        <div id="header-container" className="fixed w-full flex flex-col items-center backdrop-blur-sm pt-4 pb-3 sm:pt-0 sm:pb-0 sm:top-5 pl-5 pr-5 h-min z-10">
            <div 
            id="header" 
            className="
                w-full max-w-[1440px] h-fit sm:p-4 sm:pr-6 sm:pl-6 rounded-full bg-transparent sm:bg-neutral-800 sm:dark:bg-neutral-600 sm:bg-opacity-30 
                sm:dark:bg-opacity-40 grid grid-rows-1 grid-cols-2 items-center z-10 relative
            "
            >
                <NavHashLink to="/#top" end id="logo-link" className="inline-block w-fit">
                    <img 
                        src={logo} 
                        alt="logo" 
                        draggable="false" 
                        className="w-16 dark:invert select-none"
                    />
                </NavHashLink>
                <div id="nav-cluster" className="h-full sm:w-[350px] justify-self-end flex items-center justify-between z-10">
                    { width <= 640 ? 
                        <MobileDropdown /> :
                        <>
                            <div className={`w-fit h-fit transition-shadow duration-75 ${activeSection === '#about' ? 'shadow-underline dark:shadow-underline-dark' : ''}`}>
                                <NavHashLink to="/#about" end className="md:text-lg">About</NavHashLink>
                            </div>
                            <div className={`w-fit h-fit transition-shadow duration-75 ${activeSection === '#work' ? 'shadow-underline dark:shadow-underline-dark' : ''}`}>
                                <NavHashLink to="/#work" end className="md:text-lg">Work</NavHashLink>
                            </div>
                            <div className={`w-fit h-fit transition-shadow duration-75 ${activeSection === '#projects' ? 'shadow-underline dark:shadow-underline-dark' : ''}`}>
                                <NavHashLink to="/#projects" end className="md:text-lg">Projects</NavHashLink>
                            </div>
                            <Link to='/thoughts' className="md:text-lg">Thoughts</Link>
                        </>
                    }
                    <DarkMode />
                </div>
            </div>
        </div>
    )
}; 

export default Header;