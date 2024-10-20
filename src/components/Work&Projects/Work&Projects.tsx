import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const WorkProjects = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            ScrollTrigger.create({
                trigger: "#work-text", 
                start: "center center", 
                scrub: true,
                pinSpacing: false,
                pin: "#work-text", 
            })
        })
    });

    return (
        <>
        
            <div id="work" className="w-full h-[1000px] flex pt-20">
                {/*
                <h1 id="work-text" className="font-bold text-4xl w-[50svw] h-[250px] pl-24">My Work<br />Experience</h1>
                <div className="w-[50svw] max-w-[770px] pr-24">
                    <div className="h-[250px] w-full grid gap-1 grid-cols-[30%_70%] grid-rows-[10%_70%_20%] border-white border-2">
                        <p>Jun. 2022 - Aug. 2022</p>
                        <p>Accenture | Software Development Engineer in Test Intern</p>
                        <p>Wrote tests and stuff</p>
                        <div></div>
                    </div>
                </div>
                */}
            </div>
            <div id="projects" className="h-[1000px] w-full">
            </div>
        
        </>
    )
}

export default WorkProjects