import { useState } from "react";

import { TechIconProps, TechMap  } from "@/lib/types";

import { FaReact, FaJava, FaAws } from "react-icons/fa";
import { SiVite, SiTypescript, SiGreensock, SiPython, SiJavascript, SiSpring, SiDjango, SiJunit5, SiMongodb, SiNodedotjs, SiExpress, SiNextdotjs, SiVitest, SiJest, SiFigma, SiVercel, SiTailwindcss, SiPrisma, SiRailway, SiSupabase, SiKoyeb, SiWebpack, SiHtml5, SiCss3 } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { BsFiletypeSql } from "react-icons/bs";




const TechIcon = ({ technology, size }: TechIconProps) => {
    const [isVisible, setIsVisible] = useState(false);
    
    const techMap: TechMap = {
        "React": (size) => <FaReact className={size} />, 
        "Vite": (size) => <SiVite className={size} />, 
        "TypeScript": (size) => <SiTypescript className={size} />, 
        "JavaScript": (size) => <SiJavascript className={size} />, 
        "Next.js": (size) => <SiNextdotjs className={size} />,
        "Node.js": (size) => <SiNodedotjs className={size} />,
        "Express.js": (size) => <SiExpress className={size} />,
        "Vitest": (size) => <SiVitest className={size} />, 
        "Jest": (size) => <SiJest className={size} />,
        "GSAP Animation Library": (size) => <SiGreensock className={size} />, 
        "Python": (size) => <SiPython className={size} />, 
        "Django": (size) => <SiDjango className={size} />,
        "Java": (size) => <FaJava className={size} />, 
        "Spring Boot": (size) => <SiSpring className={size} />,
        "JUnit": (size) => <SiJunit5 className={size} />,
        "PostgreSQL": (size) => <BiLogoPostgresql className={size} />, 
        "MongoDB": (size) => <SiMongodb className={size} />, 
        "Prisma": (size) => <SiPrisma className={size} />,
        "TailwindCSS": (size) => <SiTailwindcss className={size} />,
        "Vercel": (size) => <SiVercel className={size} />,
        "Railway": (size) => <SiRailway className={size} />,
        "Supabase": (size) => <SiSupabase className={size} />,
        "Koyeb": (size) => <SiKoyeb className={size} />,
        "Webpack": (size) => <SiWebpack className={size} />,
        "AWS": (size) => <FaAws className={size} />,
        "Azure": (size) => <VscAzure className={size} />,
        "Figma": (size) => <SiFigma className={size} />,
        "HTML": (size) => <SiHtml5 className={size} />, 
        "CSS": (size) => <SiCss3 className={size} />,
        "SQL": (size) => <BsFiletypeSql className={size} />,
    }

    if (Object.hasOwn(techMap, technology)) return (
        <div className="relative inline-flex items-center justify-center">
            <div 
            className={`hover:opacity-40 duration-0`}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            >
                {techMap[technology](size)}
            </div>
            
            {isVisible && (
            <div className={`absolute bottom-full mb-2 bg-neutral-800 text-white text-sm py-1 px-2 rounded whitespace-nowrap z-10`}>
                {technology}
                <div className={`absolute w-2 h-2 bg-neutral-800 text-white transform rotate-45 top-full -mt-1 left-1/2 -translate-x-1/2`} />
            </div>
            )}
        </div>
    )

    return (
        <span
            className="inline-block relative bottom-2 lg:bottom-1 px-3 py-1 my-1 rounded-3xl bg-black
                text-sm font-semibold text-white hover:opacity-35 select-none text-ellipsis text-nowrap"
        >
            {technology}
        </span>
    );
};

export default TechIcon;