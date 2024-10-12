import { Link } from "react-router-dom"
 
interface Props {
    setOpen: (open: boolean) => void;
}

const DropdownMenu = ({ setOpen }: Props) => {
    return (
        <div
            id="dropdown-menu"
            className="bg-neutral-800 dark:bg-neutral-600
                bg-opacity-30 dark:bg-opacity-40 flex flex-col
            "
        >
            <Link to="/" onClick={() => setOpen(false)}>open</Link>
            {/*
            <Link to="#work" onClick={() => setOpen(false)}>Work</Link>
            <Link to="#projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link to='#contact' onClick={() => setOpen(false)}>Contact</Link>
            <Link to='/blog' onClick={() => setOpen(false)}>Blog</Link>
            */}
        </div>
    )
}

export default DropdownMenu;