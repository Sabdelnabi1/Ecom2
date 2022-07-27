import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Nav.css'
export default function Navbar() {
    return (
        <nav className="nav">
            {/* <a href="/" className="site-title">
        Dex + Co
      </a> */}
            <ul>
                <CustomLink to='/Home'>Home</CustomLink>
                <CustomLink to='/Products'>Products</CustomLink>
                <CustomLink to='/Contact'>Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
            {isActive && " "}
        </li>
    )
}