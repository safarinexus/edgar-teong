import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DropdownMenu = ({ open, setOpen }: Props) => {
    let nameClass = ""; 
    if (open) { 
        nameClass = "bg-gradient-to-br from-neutral-300 to-beige\
                dark:bg-gradient-to-br dark:from-neutral-800 dark:to-black\
                flex flex-col transition-transform right-0\
                rounded-3xl w-44 h-64 pr-7 pl-7 pt-4 pb-4\
                justify-around scale-100 absolute -bottom-[270px] origin-top"
    } else {
        nameClass = "bg-gradient-to-br from-neutral-400 to-beige\
                dark:bg-gradient-to-br dark:from-neutral-800 dark:to-black\
                flex flex-col transition-transform right-0\
                rounded-3xl w-44 h-64 pr-7 pl-7 pt-4 pb-4\
                justify-around scale-0 absolute -bottom-[270px] origin-top"
    }


    return (
            <div
            id="dropdown-menu"
            className={nameClass}
        >
            <HashLink to="/#about" className="text-xl" onClick={() => setOpen(false)}>About</HashLink>
            <HashLink to="/#work" className="text-xl" onClick={() => setOpen(false)}>Work</HashLink>
            <HashLink to="/#projects" className="text-xl" onClick={() => setOpen(false)}>Projects</HashLink>
            <Link to="/thoughts" className="text-xl"  onClick={() => setOpen(false)}>Thoughts</Link>
        </div>
    )
}

export default DropdownMenu;