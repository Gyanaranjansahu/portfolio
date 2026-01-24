import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './footer.css'
export default function Footer() {
    return(
        <footer className="footer">
            <h1>Web developer</h1>
            <span>it is my first portfolio and i am excited t publish it</span>
            <span>i am passionate about front end development and my journey not don yet'it is start</span>
            <div className="c">
                <span className="li"><FaInstagram/> </span>
                <span className="li"> <FaGithub/></span>
                 <span className="li"><FaWhatsapp/></span>
                 <span className="li"><FaLinkedin/></span>
            </div>
        </footer>
    )
};
