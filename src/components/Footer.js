/*imported react icons and installed react icons first in terminal*/
import { Link } from 'react-router-dom';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsBrowserChrome } from "react-icons/bs";
const Footer = () => {
    return (
        <footer className="footer">
            
                        <a><Link className="links" to="/"><AiFillGithub className="footericons" />

                        </Link></a>
                    
                        <a><Link className="links" to="/"><AiFillLinkedin className="footericons" />
                        </Link></a>
                
                       <a><Link className="links" to="/"><BsBrowserChrome className="footericons"/>
                        </Link></a>
            
            
            
        </footer>
    );
};

export default Footer;
