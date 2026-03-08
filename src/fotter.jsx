import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import './footer.css'
export default function Footer() {
    return (
        <footer className="footer">
           <div className="final">
            <div className="four">
                <h3>
                    Contact Us
                </h3>
                <br />
               <p>+917846813554</p>
                <p>gyana9619@gmail.com</p>
               <p>Berhampur,India</p>
            </div>
            <div className="four">
                <h3 style={{display:"flex"}}>Our <p> Services </p></h3>
                <p>Home</p>
                <p>About Us</p>
                <p>Services</p>
                <p>Features</p>
            </div>
            <div className="four">
                <h3 style={{display:"flex"}}>Quic <p>Link</p></h3>
                <p>Knowledge Base</p>
                <p>Hire An Expert</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
           </div>





            <div className="c">
                 
                       <span className="li"><FaInstagram /> </span>
                <span className="li"> <FaGithub /></span>
                <span className="li"><FaWhatsapp /></span>
                <span className="li"><FaLinkedin /></span>
            </div>
           
        </footer>
    )
};
