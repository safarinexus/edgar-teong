import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";


export default function DarkMode() {
    const [darkMode, setDarkMode] = useState<string>(() => {
        const mode = localStorage.getItem("darkMode");
        if (mode === null || typeof mode === "undefined") {
            return "user";
        } else {
            return mode 
        }
      });
      
    useEffect(() => {
        if (darkMode === "dark") {
            document.body.classList.add('dark');
        } else if (darkMode === "light") {
            document.body.classList.remove('dark');
        } else if (darkMode === "user") {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark');
            }
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const handleClick = () => {
        if (darkMode === "dark") {
            setDarkMode("light");
        } else if (darkMode === "light") {
            setDarkMode("user");
        } else { 
            setDarkMode("dark");
        }
    }

    return (
        <button
            className="size-6 hover:opacity-40 duration-500 transition-opacity motion-reduce:transition-none text-black dark:text-white z-10"
            onClick={handleClick}
        >
            {darkMode === "user" ? (<RiComputerLine className="size-6"/>) : darkMode === "light" ? (<MdLightMode className="size-6"/>) : (<MdDarkMode className="size-6"/>)}
        </button>
    )
}
