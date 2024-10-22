import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaGoodreads } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

interface Prop {
    main: boolean;
}

const ContactBar = ({ main }: Prop) => {
    if (main) {
        return (
            <div className="h-10 w-56 mx-auto sm:m-0 flex justify-between items-center z-30"> 
                <a href="mailto:edgargarteong@gmail.com" target="_blank">
                    <BiLogoGmail className="size-8 sm:size-6"/>
                </a>
                <a href="https://github.com/safarinexus">
                    <FaGithub className="size-7 sm:size-6"/>
                </a>
                <a href="https://codepen.io/safarinexus">
                    <FaCodepen className="size-7 sm:size-6"/>
                </a>
                <a href="https://linkedin.com/in/edgarteong">
                    <FaLinkedin className="size-8 sm:size-6"/>
                </a>
                <a href="https://goodreads.com/user/show/80321969-edgar">
                    <FaGoodreads className="size-8 sm:size-6"/>
                </a>
            </div>
        )
    } else { 
        return (
            <div className="h-fit w-56 mx-auto sm:m-0 flex justify-between items-center z-30"> 
                <a href="mailto:edgargarteong@gmail.com" target="_blank">
                    <BiLogoGmail className="size-6" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://github.com/safarinexus">
                    <FaGithub className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://codepen.io/safarinexus">
                    <FaCodepen className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://linkedin.com/in/edgarteong">
                    <FaLinkedin className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://goodreads.com/user/show/80321969-edgar">
                    <FaGoodreads className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
            </div>
        ) 
    }
}

export default ContactBar