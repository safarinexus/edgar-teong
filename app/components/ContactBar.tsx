import { FaGithub, FaLinkedin, FaInstagram, FaGoodreads, FaSpotify } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiMonkeytype } from "react-icons/si";
import { FaSquareLetterboxd } from "react-icons/fa6";




interface Prop {
    main: boolean;
}

const ContactBar = ({ main }: Prop) => {
    if (main) {
        return (
            <div id="contact-bar-main" className="h-10 w-full xs:w-[80%] sm:w-[50%] lg:w-72 mx-auto mt-8 xs:mt-0 sm:m-0 flex justify-between items-center"> 
                <a href="mailto:edgargarteong@gmail.com" target="_blank" aria-label="gmail link">
                    <BiLogoGmail className="size-7 sm:size-6"/>
                </a>
                <a href="https://github.com/safarinexus" target="_blank" aria-label="github link">
                    <FaGithub className="size-6"/>
                </a>
                <a href="https://linkedin.com/in/edgarteong" target="_blank" aria-label="linkedin link">
                    <FaLinkedin className="size-7 sm:size-6"/>
                </a>
                <a href="https://goodreads.com/user/show/80321969-edgar" target="_blank" aria-label="goodreads link">
                    <FaGoodreads className="size-7 sm:size-6"/>
                </a>
                <a href="https://boxd.it/br2et" target="_blank" aria-label="letterboxd link">
                    <FaSquareLetterboxd className="size-7 sm:size-6"/>
                </a>
                <a href="https://www.instagram.com/edgargle/" target="_blank" aria-label="instagram link">
                    <FaInstagram className="size-7 sm:size-6"/>
                </a>
                <a href="https://open.spotify.com/user/edgargarteong?si=85dfa396d2944046" target="_blank" aria-label="spotify link">
                    <FaSpotify className="size-6"/>
                </a>
                <a href="https://monkeytype.com/profile/safarinexus" target="_blank" aria-label="monkeytype link">
                    <SiMonkeytype className="size-7"/>
                </a>
            </div>
        )
    } else { 
        return (
            <div id="contact-bar-footer" className="h-fit w-72 mx-auto sm:m-0 flex justify-between items-center"> 
                <a href="mailto:edgargarteong@gmail.com" target="_blank" aria-label="gmail link">
                    <BiLogoGmail className="size-6" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://github.com/safarinexus" target="_blank" aria-label="github link">
                    <FaGithub className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://linkedin.com/in/edgarteong" target="_blank" aria-label="linkedin link">
                    <FaLinkedin className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://goodreads.com/user/show/80321969-edgar" target="_blank" aria-label="goodreads link">
                    <FaGoodreads className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://boxd.it/br2et" target="_blank" aria-label="letterboxd link">
                    <FaSquareLetterboxd className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://www.instagram.com/edgargle/" target="_blank" aria-label="instagram link">
                    <FaInstagram className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://open.spotify.com/user/edgargarteong?si=85dfa396d2944046" target="_blank" aria-label="spotify link">
                    <FaSpotify className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://monkeytype.com/profile/safarinexus" target="_blank" aria-label="monkeytype link">
                    <SiMonkeytype className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
            </div>
        ) 
    }
}

export default ContactBar