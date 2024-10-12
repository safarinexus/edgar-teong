import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkMode() {

    const [darkMode, setDarkMode] = useState<string>(() => {
        if (localStorage.getItem("darkMode") == null || localStorage.getItem("darkMode") === "false") { 
            return "false";
        } else {
            return "true"; 
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
            className="size-fit hover:opacity-60 transition-opacity"
            onClick={handleClick}
        >
            {darkMode === "true" ? (<MdLightMode className="size-7"/>) : (<MdDarkMode className="size-7"/>)}
        </button>
    )
}