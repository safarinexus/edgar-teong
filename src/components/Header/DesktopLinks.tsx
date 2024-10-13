import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

const DesktopLinks = () => {
    return (
        <>
            <HashLink 
                to="/#work"
            >Work</HashLink>
            <HashLink to="/#projects">Projects</HashLink>
            <HashLink to='/#contact'>Contact</HashLink>
            <Link to='/thoughts'>Thoughts</Link>
        </>
    )
}

export default DesktopLinks;