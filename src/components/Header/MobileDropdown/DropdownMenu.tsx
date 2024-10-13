import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DropdownMenu = ({ open, setOpen }: Props) => {
    let nameClass = ""; 
    if (open) { 
        nameClass = "bg-gradient-to-br from-neutral-400 to-beige\
                dark:bg-gradient-to-br dark:from-neutral-800 dark:to-black\
                flex flex-col transition-transform right-0\
                rounded-tr-3xl rounded-bl-3xl w-44 h-64 pr-7 pl-7 pt-4 pb-4\
                justify-around scale-100 absolute -bottom-[260px] origin-top"
    } else {
        nameClass = "bg-gradient-to-br from-neutral-400 to-beige\
                dark:bg-gradient-to-br dark:from-neutral-800 dark:to-black\
                flex flex-col transition-transform right-0\
                rounded-tr-3xl rounded-bl-3xl w-44 h-64 pr-7 pl-7 pt-4 pb-4\
                justify-around scale-0 absolute -bottom-[260px] origin-top"
    }


    return (
            <div
            id="dropdown-menu"
            className={nameClass}
        >
            <HashLink to="/#work" className="text-2xl" onClick={() => setOpen(false)}>Work</HashLink>
            <HashLink to="/#projects" className="text-2xl" onClick={() => setOpen(false)}>Projects</HashLink>
            <HashLink to='/#contact' className="text-2xl" onClick={() => setOpen(false)}>Contact</HashLink>
            <Link to='/thoughts' className="text-2xl"  onClick={() => setOpen(false)}>Thoughts</Link>
        </div>
    )
}

export default DropdownMenu;