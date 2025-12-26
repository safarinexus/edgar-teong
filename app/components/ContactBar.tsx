import { FaGithub, FaLinkedin, FaInstagram, FaGoodreads, FaSpotify, FaStrava } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiMonkeytype } from "react-icons/si";
import { FaSquareLetterboxd } from "react-icons/fa6";

interface Prop {
    main: boolean;
}

const ContactBar = ({ main }: Prop) => {
    if (main) {
        return (
            <div id="contact-bar-main" className="h-10 w-full xs:w-[80%] sm:w-[50%] lg:w-[270px] mx-auto mt-8 xs:mt-0 sm:m-0 flex justify-between items-center z-40"> 
                <a href="mailto:edgargarteong@gmail.com" target="_blank" aria-label="gmail link">
                    <BiLogoGmail className="text-black size-7 sm:size-6"/>
                </a>
                <a href="https://github.com/edgargle" target="_blank" aria-label="github link">
                    <FaGithub className="text-black size-6"/>
                </a>
                <a href="https://linkedin.com/in/edgarteong" target="_blank" aria-label="linkedin link">
                    <FaLinkedin className="text-black size-7 sm:size-6"/>
                </a>
                <a href="https://goodreads.com/user/show/80321969-edgar" target="_blank" aria-label="goodreads link">
                    <FaGoodreads className="text-black size-7 sm:size-6"/>
                </a>
                <a href="https://boxd.it/br2et" target="_blank" aria-label="letterboxd link">
                    <FaSquareLetterboxd className="text-black size-7 sm:size-6"/>
                </a>
                <a href="https://www.instagram.com/edgargle/" target="_blank" aria-label="instagram link">
                    <FaInstagram className="text-black size-7 sm:size-6"/>
                </a>
                <a href="https://open.spotify.com/user/edgargarteong?si=85dfa396d2944046" target="_blank" aria-label="spotify link">
                    <FaSpotify className="text-black size-6"/>
                </a>
                <a href="https://monkeytype.com/profile/edgargle" target="_blank" aria-label="monkeytype link">
                    <SiMonkeytype className="text-black size-7"/>
                </a>
                <a href="https://www.strava.com/athletes/101162934?share_sig=BA830E9D1755888555" target="_blank" aria-label="strava link">
                    <FaStrava className="text-black size-6"/>
                </a>
            </div>
        )
    } else { 
        return (
            <div id="contact-bar-footer" className="h-fit w-72 mx-auto sm:m-0 flex justify-between items-center"> 
                <a href="mailto:edgargarteong@gmail.com" target="_blank" aria-label="gmail link">
                    <BiLogoGmail className="size-6" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://github.com/edgargle" target="_blank" aria-label="github link">
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
                <a href="https://monkeytype.com/profile/edgargle" target="_blank" aria-label="monkeytype link">
                    <SiMonkeytype className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
                <a href="https://www.strava.com/athletes/101162934?share_sig=BA830E9D1755888555" target="_blank" aria-label="strava link">
                    <FaStrava className="size-5" style={{ color: "#737373", opacity: '50%' }}/>
                </a>
            </div>
        ) 
    }
}

export default ContactBar