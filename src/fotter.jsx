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
                <h3 style={{display:"flex",color:"white"}}>
                    Contact Us
                </h3>
                <br />
               <p><a href="/call">+917846813554</a></p>
                <p><a href="/gmail">gyana9619@gmail.com</a></p>
               <p><a href="/location">Berhampur,India</a></p>
            </div>
            <div className="four">
                <h3 style={{display:"flex",color:"white"}}>Our <p> Services </p></h3>
                <p><a href="/home">Home</a></p>
                <p><a href="/about">About Us</a></p>
                <p><a href="/services">Services</a></p>
                <p><a href="/Features">Features</a></p>
            </div>
            <div className="four">
                <h3 style={{display:"flex", color:"white"}}>Quic <p>Link</p></h3>
                <p><a href="/Knowledge Base">Knowledge Base</a></p>
                <p><a href="/Hire An Expert">Hire An Expert</a></p>
                <p><a href="/FAQ">FAQ</a></p>
                <p><a href="/Contact">Contact</a></p>
            </div>
           </div>





            <div className="c">
                 
                       <span className="li"><FaInstagram /> </span>
                <span className="li"><FaGithub /></span>
                <span className="li"><FaWhatsapp /></span>
                <span className="li"><FaLinkedin /></span>
            </div>
           
        </footer>
    )
};
