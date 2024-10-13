import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DropdownMenu = ({ open, setOpen }: Props) => {
    let nameClass = ""; 
    if (open) { 
        nameClass = "bg-beige dark:bg-black origin-top\
                flex flex-col transition-transform right-0\
                rounded-3xl w-32 h-40 pr-7 pl-7 pt-4 pb-4\
                justify-around scale-100 absolute -bottom-40"
    } else {
        nameClass = "bg-beige dark:bg-black origin-top\
                flex flex-col transition-transform right-0\
                rounded-3xl w-32 h-40 pr-7 pl-7 pt-4 pb-4\
                justify-around scale-0 absolute -bottom-40"
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