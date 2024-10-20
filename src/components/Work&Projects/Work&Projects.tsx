import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const WorkProjects = () => {
    

    return (
        <>
            <div id="work" className="h-[1000px] w-full">

            </div>
            <div id="projects" className="h-[1000px] w-full">
                shut the front door
            </div>
        </>
    )
}

export default WorkProjects