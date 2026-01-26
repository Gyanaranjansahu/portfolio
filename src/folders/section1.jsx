import "./data.css"
import my from "../assets/profile.jpg"
import { IoBag } from "react-icons/io5";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function Content() {
    return(
<section className="part" >
    <div className="about" id="home">
                <span className="name">Hello,I'm <br /> <span style={{color:"yellow"}}>Gyana</span></span>
                <span className="designer">Web Developer</span><br />
                <p id="a">i am skilled and passionate Web Developer <br />
                with hands-on experience in building responsive and user friendly Website </p>
                <div className="div">
                     <span className="web"><FaInstagram /></span>
                <span className="web"> <FaLinkedin /></span>
                <span className="web"><FaGithub /></span>
                <span className="web"> <FaWhatsapp /></span>
                </div>
                <br />
                <button className="bag"><IoBag />Hire me</button>
            </div>
            
               <div className="image">
                 <img src={my} alt="my" className="my" />
               </div>
</section>
    )
};
