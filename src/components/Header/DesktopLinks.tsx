import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

const DesktopLinks = () => {
    return (
        <>
            <HashLink to="/#work" className="md:text-lg">Work</HashLink>
            <HashLink to="/#projects" className="md:text-lg">Projects</HashLink>
            <HashLink to='/#contact' className="md:text-lg">Contact</HashLink>
            <Link to='/thoughts' className="md:text-lg">Thoughts</Link>
        </>
    )
}

export default DesktopLinks;