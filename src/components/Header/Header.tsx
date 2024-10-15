import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom"

import logo from "/logo.png"

import DarkMode from "./DarkMode"
import MobileDropdown from "./MobileDropdown/MobileDropdown"

interface Props {
    width: number
}

const sections = ['#landing-container', '#work-container', '#projects-container', '#contact-container'];

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
        <div id="header-container" className="fixed w-full flex flex-col items-center top-5 pl-5 pr-5 h-min z-10">
            <div 
            id="header" 
            className="
                w-full max-w-[1200px] h-fit p-4 pr-6 pl-6 rounded-full bg-neutral-800 dark:bg-neutral-600 bg-opacity-30 
                dark:bg-opacity-40 grid grid-rows-1 grid-cols-[80px_auto] sm:grid-cols-[20%_80%] items-center z-10 relative backdrop-blur-sm
            "
            >
                <NavHashLink to="/#top" end id="logo-link" className="inline-block w-fit">
                    <img 
                        src={logo} 
                        alt="logo" 
                        draggable="false" 
                        className="min-w-20 md:w-32 lg:w-36 dark:invert select-none"
                    />
                </NavHashLink>
                <div id="nav-cluster" className="h-full sm:w-[350px] justify-self-end flex items-center justify-between z-10">
                    { width <= 640 ? 
                        <MobileDropdown /> :
                        <>
                            <div className={`w-fit h-fit transition-shadow duration-75 ${activeSection === '#work-container' ? 'shadow-underline dark:shadow-underline-dark' : ''}`}>
                                <NavHashLink to="/#work-container" end className="md:text-lg">Work</NavHashLink>
                            </div>
                            <div className={`w-fit h-fit transition-shadow duration-75 ${activeSection === '#projects-container' ? 'shadow-underline dark:shadow-underline-dark' : ''}`}>
                                <NavHashLink to="/#projects-container" end className="md:text-lg">Projects</NavHashLink>
                            </div>
                            <div className={`w-fit h-fit transition-shadow duration-75 ${activeSection === '#contact-container' ? 'shadow-underline dark:shadow-underline-dark' : ''}`}>
                                <NavHashLink to='/#contact-container' end className="md:text-lg">Contact</NavHashLink>
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