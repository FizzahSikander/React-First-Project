import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
            <a href="http://localhost:3000">Fizzah Sikander</a>
            <nav>
                <ul>
                    <li><Link className="links" to="/About">About</Link></li>
                    <li><Link className="links" to="/ContactMe">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;