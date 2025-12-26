import { useState } from "react";
import Image from "next/image"

import { TechIconProps, TechMap  } from "@/lib/types";

import { FaReact, FaJava, FaAws } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiVite, SiTypescript, SiGreensock, SiPython, SiJavascript, SiSpring, SiDjango, SiJunit5, SiMongodb, SiNodedotjs, SiExpress, SiNextdotjs, SiVitest, SiJest, SiFigma, SiVercel, SiTailwindcss, SiPrisma, SiRailway, SiSupabase, SiKoyeb, SiWebpack, SiHtml5, SiCss3 } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { BsFiletypeSql } from "react-icons/bs";
import { DiMysql } from "react-icons/di";



const TechIcon = ({ overridePath, technology, customTWprop }: TechIconProps) => {
    const [isVisible, setIsVisible] = useState(false);
    
    const techMap: TechMap = {
        "React": (customTWprop) => <FaReact className={customTWprop} />, 
        "Vite": (customTWprop) => <SiVite className={customTWprop} />, 
        "TypeScript": (customTWprop) => <SiTypescript className={customTWprop} />, 
        "JavaScript": (customTWprop) => <SiJavascript className={customTWprop} />, 
        "Next.js": (customTWprop) => <SiNextdotjs className={customTWprop} />,
        "Node.js": (customTWprop) => <SiNodedotjs className={customTWprop} />,
        "Express.js": (customTWprop) => <SiExpress className={customTWprop} />,
        "Vitest": (customTWprop) => <SiVitest className={customTWprop} />, 
        "Jest": (customTWprop) => <SiJest className={customTWprop} />,
        "GSAP Animation Library": (customTWprop) => <SiGreensock className={customTWprop} />, 
        "Python": (customTWprop) => <SiPython className={customTWprop} />, 
        "Django": (customTWprop) => <SiDjango className={customTWprop} />,
        "Java": (customTWprop) => <FaJava className={customTWprop} />, 
        "Spring Boot": (customTWprop) => <SiSpring className={customTWprop} />,
        "JUnit": (customTWprop) => <SiJunit5 className={customTWprop} />,
        "PostgreSQL": (customTWprop) => <BiLogoPostgresql className={customTWprop} />, 
        "MongoDB": (customTWprop) => <SiMongodb className={customTWprop} />, 
        "Prisma": (customTWprop) => <SiPrisma className={customTWprop} />,
        "TailwindCSS": (customTWprop) => <SiTailwindcss className={customTWprop} />,
        "Vercel": (customTWprop) => <SiVercel className={customTWprop} />,
        "Railway": (customTWprop) => <SiRailway className={customTWprop} />,
        "Supabase": (customTWprop) => <SiSupabase className={customTWprop} />,
        "Koyeb": (customTWprop) => <SiKoyeb className={customTWprop} />,
        "Webpack": (customTWprop) => <SiWebpack className={customTWprop} />,
        "AWS": (customTWprop) => <FaAws className={customTWprop} />,
        "Azure": (customTWprop) => <VscAzure className={customTWprop} />,
        "Figma": (customTWprop) => <SiFigma className={customTWprop} />,
        "HTML": (customTWprop) => <SiHtml5 className={customTWprop} />, 
        "CSS": (customTWprop) => <SiCss3 className={customTWprop} />,
        "SQL": (customTWprop) => <BsFiletypeSql className={customTWprop} />,
        "Go": (customTWprop) => <FaGolang className={customTWprop} />,
        "MySQL": (customTWprop) => <DiMysql className={customTWprop} />,
    }

    if (Object.hasOwn(techMap, technology) || overridePath) return (
        <span className="relative inline-flex items-center justify-center top-1">
            <span 
            className={`hover:opacity-40 duration-0`}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            >
                { overridePath ? (<Image src={overridePath} alt={`${technology} logo`} draggable="false" width={20} height={24} className={`${customTWprop}`}/>) : techMap[technology](customTWprop)}
            </span>
            
            {isVisible && (
            <span className={`absolute bottom-full mb-2 bg-neutral-800 text-white text-sm py-1 px-2 rounded whitespace-nowrap z-10`}>
                {technology}
                <span className={`absolute w-2 h-2 bg-neutral-800 text-white transform rotate-45 top-full -mt-1 left-1/2 -translate-x-1/2`} />
            </span>
            )}
        </span>
    )

    return (
        <span
            className="inline-block px-3 py-1 my-1 rounded-3xl bg-black
                text-sm font-semibold text-white hover:opacity-35 select-none text-ellipsis text-nowrap"
        >
            {technology}
        </span>
    );
};

export default TechIcon;