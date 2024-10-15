import { HashLink } from "react-router-hash-link";

import logo from "/logo.png"

import DarkMode from "./DarkMode"
import DesktopLinks from "./DesktopLinks"
import MobileDropdown from "./MobileDropdown/MobileDropdown"

interface Props {
    width: number
}

const Header = ({ width }: Props) => {
    return (
        <div id="header-container" className="fixed w-full flex flex-col items-center top-5 pl-5 pr-5 h-min z-10">
            <div 
            id="header" 
            className="
                w-full max-w-[1200px] h-fit p-4 rounded-3xl bg-neutral-800 dark:bg-neutral-600 bg-opacity-30 
                dark:bg-opacity-40 grid grid-rows-1 grid-cols-[20%_80%] items-center z-10 backdrop-blur-sm 
            "
            >
                <HashLink to="/#top" id="logo-link" className="inline-block w-fit">
                    <img 
                        src={logo} 
                        alt="logo" 
                        draggable="false" 
                        className="min-w-20 md:w-32 lg:w-36 dark:invert select-none"
                    />
                </HashLink>
                <div id="nav-cluster" className="h-full w-[350px] justify-self-end flex items-center justify-between">
                    { width > 640 ? 
                        //you can eventually add active highlighting for links
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