import Link from 'next/link'

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DropdownMenu = ({ open, setOpen }: Props) => {
    let nameClass = ""; 
    if (open) { 
        nameClass = "bg-linear-to-br from-neutral-300 to-white\
                dark:bg-linear-to-br dark:from-neutral-800 dark:to-black\
                flex flex-col transition-transform right-0\
                rounded-3xl w-44 h-64 pr-7 pl-7 pt-4 pb-4\
                justify-around scale-100 absolute -bottom-[260px] origin-top"
    } else {
        nameClass = "bg-linear-to-br from-neutral-400 to-white\
                dark:bg-linear-to-br dark:from-neutral-800 dark:to-black\
                flex flex-col transition-transform right-0\
                rounded-3xl w-44 h-64 pr-7 pl-7 pt-4 pb-4\
                justify-around scale-0 absolute -bottom-[260px] origin-top"
    }


    return (
        <div
        id="dropdown-menu"
        className={nameClass}
        >
            <Link href="/#about" className="text-xl" onClick={() => setOpen(false)}>About</Link>
            <Link href="/#work" className="text-xl" onClick={() => setOpen(false)}>Work</Link>
            <Link href="/#projects" className="text-xl" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/thoughts" className="text-xl"  onClick={() => setOpen(false)}>Thoughts</Link>
        </div>
    )
}

export default DropdownMenu;