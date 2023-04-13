import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link className="links" to="/">Linkedin</Link></li>
                    <li><Link className="links" to="/">GitHub</Link></li>
                    <li><Link className="links" to="/">Webpage</Link></li>
                </ul>
            </nav>
        </header>
    );
};
export default Footer;