import { NavLink } from "react-router-dom"

const DesktopLinks = () => {
    return (
        <>
            <NavLink to="#work">Work</NavLink>
            <NavLink to="#projects">Projects</NavLink>
            <NavLink to='#contact'>Contact</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
        </>
    )
}

export default DesktopLinks;