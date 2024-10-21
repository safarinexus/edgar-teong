import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import projects from "../data/projects"

import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
        })
    });

    return (
        <div className="w-full h-fit pt-20">
            <h1 className="font-bold text-lg">My Projects</h1>
            <a href="https://github.com/safarinexus?tab=repositories" className="font-bold text-lg">
                My GitHub Repositories
                <FiExternalLink id="link-arrow" className="inline ml-2 relative bottom-[2px]"/>
            </a>
        </div>

    )
}

export default Projects

{/*•*/}