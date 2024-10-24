import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import image1 from "../assets/image1.webp"
import image2 from "../assets/image2.webp"
import image3 from "../assets/image3.webp"
import image4 from "../assets/image4.webp"
import image5 from "../assets/image5.webp"
import image6 from "../assets/image6.webp"

const About = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)",
          () => {
            gsap.from("#image1-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    toggleActions: "play none none reverse",
                    scrub: 1,
                },
                opacity: 0,
                rotate: -45,
                duration: 0.5,
                x: "-100%",
                y: "-100%",
            })

            
            gsap.from("#image2-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    toggleActions: "play none none reverse",
                    scrub: 1,
                },
                opacity: 0,
                rotate: 45,
                duration: 0.5,
                x: "100%",
                y: "-100%",
            }); 

            gsap.from("#image3-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    toggleActions: "play none none reverse",
                    scrub: 1,
                },
                opacity: 0,
                rotate: 45,
                duration: 0.5,
                x: "-100%",
                y: "100%",
            }); 

            gsap.from("#image5-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    toggleActions: "play none none reverse",
                    scrub: 1,
                },
                opacity: 0,
                rotate: -45,
                duration: 0.5,
                x: "100%",
                y: "100%",
            });

            gsap.from("#image4-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    toggleActions: "play none none reverse",
                    scrub: 1,
                },
                opacity: 0,
                rotate: 45,
                duration: 0.5,
                x: "100%",
                y: "-100%",
            });

            gsap.from("#image6-container", {
                scrollTrigger: {
                    trigger: "#images-container",
                    start: "clamp(top 45%)",
                    end: "+=200",
                    toggleActions: "play none none reverse",
                    scrub: 1,
                },
                opacity: 0,
                rotate: -45,
                duration: 0.5,
                x: "100%",
                y: "100%",
            });
        });
    });

    return (
        <div className="w-full h-full flex flex-col">
            <div id="images-container" className="max-w-[1000px] grid grid-rows-2 grid-cols-2 sm:grid-cols-3 justify-items-center items-center mx-auto">
                <div id="image1-container" className="relative z-20 w-[130%] -rotate-12 bottom-[-15%] left-[5%] will-change-transform">
                    <img 
                        src={image1}
                        id="image1"  
                        alt="image 1"
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                    />
                </div>
                <div id="image2-container" className="relative z-20 rotate-6 -bottom-[6%] right-[-6%] sm:right-[-15%] will-change-transform">
                    <img 
                        src={image2}
                        id="image2"  
                        alt="image 2"
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                    />
                </div>
                <div id="image3-container" className="relative z-10 w-[105%] rotate-12 bottom-[15%] left-[-5%] sm:left-[5%] sm:col-start-1 sm:row-start-2 will-change-transform">
                    <img 
                        src={image3}
                        id="image3"  
                        alt="image 3"
                        draggable="false"
                        className="select-none rounded-xl brightness-90"
                    />
                </div>
                <div id="image4-container" className="relative z-20 hidden sm:block rotate-12 w-[95%] left-[10%] bottom-0  will-change-transform">
                    <img 
                        src={image4}
                        id="image4"  
                        alt="image 4"
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                    />
                </div>
                <div id="image5-container" className="relative -rotate-6 w-[130%] top-[-18%] sm:w-[140%]  will-change-transform">
                    <img 
                        src={image5}
                        id="image5"  
                        alt="image 1"
                        className="select-none rounded-xl brightness-90"
                        draggable="false"
                    />
                </div>
                <div id="image6-container" className="relative -z-10 hidden sm:block w-[95%] -rotate-12 left-[10%] top-[-26%] will-change-transform">
                    <img 
                        src={image6}
                        id="image6"  
                        alt="image 1"
                        className="select-none rounded-lg"
                        draggable="false"
                    />
                </div>
            </div>
            <div id="about-text-container" className="w-full px-5 sm:px-24 font-light text-base">
                <h1 className="font-bold text-2xl sm:text-4xl">About Me</h1>
                <p id="about-body" className="mt-9 tracking-tight leading-relaxed font-light text-base lg:text-xl">
                Back in 2022, I got into mechanical keyboards which led me to my love for coding. 
                I was always a computer geek & knew that I wanted to make a career out of an expertise in something, so changing careers from accounting to software engineering felt like the most natural thing.
                <br /><br />
                <span className="font-bold">I then began learning computer science on my own.</span> I mainly learnt full stack web development through <a href="https://www.theodinproject.com/" className="font-bold">The Odin Project</a>. 
                It has given me the skills to be job-ready.
                On top of that, I'm learning whatever I missed out without a CS Degree by going through CS textbooks recommended by <a href="https://www.teachyourselfcs.com/" className="font-bold">teachyourselfcs.com</a> & taking on a <span className="font-bold">second major in Information Systems/Computer Science</span>.
                <br /><br />
                When I'm not coding, you can also find me making filter/espresso coffee, hanging with friends, enjoying obscure films, reading up about psychology/mental health stuff, or dancing at my <a href="https://www.instagram.com/smuemix/" className="font-bold">school's hip-hop dance club</a>.
                </p>
            </div>
        </div>
    )
}

export default About