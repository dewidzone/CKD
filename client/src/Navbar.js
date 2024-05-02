import { Link, useResolvedPath, useMatch } from "react-router-dom"


export default function Navbar(){


    return (
        <nav className="nav">
            
            <Link to="/home" className="site-title">
                    <img src="/logo.jpg" alt="Site Logo" className="logo" />
            </Link>
                <ul>
                    <CustomLink to="/home">Home</CustomLink>   
                    <CustomLink to="/prediction">Get Prediction</CustomLink>       
                    <CustomLink to="/treatmentoption">Treatment Option</CustomLink>
                    <CustomLink to="/aboutus">About Us</CustomLink>
                    <CustomLink to="/contactus">Contact Us</CustomLink>
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
        </li>

    )
}