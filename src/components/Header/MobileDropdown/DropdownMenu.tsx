import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DropdownMenu = ({ open, setOpen }: Props) => {
    let nameClass = ""; 
    if (open) { 
        nameClass = "bg-neutral-400 dark:bg-neutral-800 origin-top\
                flex flex-col transition-transform right-0\
                rounded-tr-3xl rounded-bl-3xl w-32 h-40 pr-7 pl-7 pt-4 pb-4\
                justify-around scale-100 absolute -bottom-[165px]"
    } else {
        nameClass = "bg-neutral-400 dark:bg-neutral-800 origin-top\
                flex flex-col transition-transform right-0\
                rounded-tr-3xl rounded-bl-3xl w-32 h-40 pr-7 pl-7 pt-4 pb-4\
                justify-around scale-0 absolute -bottom-[165px]"
    }


    return (
            <div
            id="dropdown-menu"
            className={nameClass}
        >
            <HashLink to="/#work" onClick={() => setOpen(false)}>Work</HashLink>
            <HashLink to="/#projects" onClick={() => setOpen(false)}>Projects</HashLink>
            <HashLink to='/#contact' onClick={() => setOpen(false)}>Contact</HashLink>
            <Link to='/thoughts' onClick={() => setOpen(false)}>Thoughts</Link>
        </div>
    )
}

export default DropdownMenu;