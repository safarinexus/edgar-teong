import { HashLink } from "react-router-hash-link";

import logo from "../../assets/logo.png"

import DarkMode from "./DarkMode"
import DesktopLinks from "./DesktopLinks"
import MobileDropdown from "./MobileDropdown/MobileDropdown"

interface Props {
    width: number
}

const Header = ({ width }: Props) => {
    return (
        <div id="header-container" className="sticky w-full flex flex-col items-center top-5 pl-5 pr-5 h-min z-10">
            <div 
            id="header" 
            className="
                w-full max-w-[1200px] h-fit p-5 rounded-3xl bg-neutral-800 dark:bg-neutral-600 bg-opacity-30 
                dark:bg-opacity-40 grid grid-rows-1 grid-cols-[20%_80%] items-center z-10 backdrop-blur-sm
            "
            //add frosted glass effect here later
            >
                <HashLink to="/#top" id="logo-link" className="inline-block">
                    <img 
                        src={logo} 
                        alt="logo" 
                        draggable="false" 
                        className="min-w-20 md:w-32 lg:w-36 dark:invert hover:opacity-40 transition-opacity"
                    />
                </HashLink>
                <div id="nav-cluster" className="h-full w-[300px] justify-self-end flex items-center justify-between">
                    { width > 640 ? 
                        <DesktopLinks /> :
                        <MobileDropdown />
                    }
                    <DarkMode />
                </div>
            </div>
        </div>
    )
}; 

export default Header;