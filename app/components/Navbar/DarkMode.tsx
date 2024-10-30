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
        return <RiComputerLine className="size-6 sm:hover:opacity-40 sm:motion-safe:duration-500 sm:motion-safe:transition-opacity z-10" onClick={()=> setTheme('dark')}/>
    } else if (theme === "dark") { 
        return <MdDarkMode className="size-6 sm:hover:opacity-40 sm:motion-safe:duration-500 sm:motion-safe:transition-opacity z-10" onClick={()=> setTheme('light')}/>
    } else {
        return <MdLightMode className="size-6 sm:hover:opacity-40 sm:motion-safe:duration-500 sm:motion-safe:transition-opacity z-10" onClick={()=> setTheme('system')}/>
    }
}