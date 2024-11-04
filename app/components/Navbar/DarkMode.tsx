import { useTheme } from 'next-themes';
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";


export default function DarkMode() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (theme === "system") { 
        return (
        <button type="button" aria-label="dark mode button system" className="relative group hover:opacity-100">
            <div className="absolute -top-[10px] -left-[10.5px] bg-neutral-300 dark:bg-neutral-700 rounded-full w-11 h-11 opacity-0 sm:group-hover:opacity-65 sm:transition-opacity sm:duration-500"></div>
            <RiComputerLine className="relative size-6 z-10 cursor-pointer" onClick={()=> setTheme('dark')}/>
        </button>
        )
    } else if (theme === "dark") { 
        return (
            <button type="button" aria-label="dark mode button dark" className="relative group hover:opacity-100">
                <div className="absolute -top-[10px] -left-[10.5px] bg-slate-800 rounded-full w-11 h-11 opacity-0 sm:group-hover:opacity-65 sm:transition-opacity sm:duration-500"></div>
                <MdDarkMode className="relative size-6 z-10 cursor-pointer" onClick={()=> setTheme('light')}/>
            </button>
        )
    } else {
        return (
            <button type="button" aria-label="dark mode button light" className="relative group hover:opacity-100">
                <div className="absolute -top-[10px] -left-[10.5px] bg-yellow-500 rounded-full w-11 h-11 opacity-0 sm:group-hover:opacity-65 sm:transition-opacity sm:duration-500"></div>
                <MdLightMode className="relative size-6 z-10 cursor-pointer" onClick={()=> setTheme('system')}/>
            </button>
        )
    }
}