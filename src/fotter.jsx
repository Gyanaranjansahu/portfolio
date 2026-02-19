import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './footer.css'
export default function Footer() {
    return(
        <footer className="footer">
            <div className="c">
                <span className="li"><FaInstagram/> </span>
                <span className="li"> <FaGithub/></span>
                 <span className="li"><FaWhatsapp/></span>
                 <span className="li"><FaLinkedin/></span>
            </div>
        </footer>
    )
};
