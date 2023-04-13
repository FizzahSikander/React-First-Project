import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
            <p>Fizzah Sikander</p>
            <nav>
                <ul>
                    <li><Link className="links" to="/Home">Home</Link></li>
                    <li><Link className="links" to="/About">About</Link></li>
                    <li><Link className="links" to="/Login">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;