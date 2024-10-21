import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const WorkProjects = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
        })
    });

    return (
        <div className="w-full">
            <div id="work" className="w-full h-[1000px]">
                <h1></h1>
            </div>
            <div id="projects" className="w-full h-[1000px]">
                <h1></h1>
            </div>
        </div>
    )
}

export default WorkProjects

{/*•*/}