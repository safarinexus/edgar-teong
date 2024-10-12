import { useState } from "react"

import DropdownButton from "./DropdownButton"
import DropdownMenu from "./DropdownMenu"


const MobileDropdown = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleDropdown = () => setOpen(prevState => !prevState);

    return (
        <>
            <DropdownButton open={open} toggleDropdown={toggleDropdown} />
            {
                open ? 
                    <DropdownMenu setOpen={setOpen}/> : 
                    ("")
            }         
        </>
    )
}

export default MobileDropdown;  