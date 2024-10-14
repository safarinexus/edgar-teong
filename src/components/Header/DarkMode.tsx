import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkMode() {

    const [darkMode, setDarkMode] = useState<string>(() => {
        if (localStorage.getItem("darkMode") == null || localStorage.getItem("darkMode") === "true") { 
            return "true";
        } else {
            return "false"; 
        }
      });
      
    useEffect(() => {
        if (darkMode === "true") {
        document.body.classList.add('dark');
        } else if (darkMode === "false") {
        document.body.classList.remove('dark');
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const handleClick = () => {
        if (darkMode === "true") {
            setDarkMode("false");
        } else {
            setDarkMode("true");
        }
    }

    return (
        <button
            className="size-fit hover:opacity-40 duration-500 transition-opacity text-black dark:text-white"
            onClick={handleClick}
        >
            {darkMode === "true" ? (<MdLightMode className="size-7"/>) : (<MdDarkMode className="size-7"/>)}
        </button>
    )
}