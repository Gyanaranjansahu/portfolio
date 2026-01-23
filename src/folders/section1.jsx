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
                <p id="about">i am skilled and passionate designer <br />
                with experience in creating user-friendly Website</p>
                <div className="items">
                     <span className="web"><FaInstagram/></span>
                <span className="web"><FaWhatsapp/></span>
                <span className="web"><FaGithub/></span>
                <span className="web"><FaWhatsapp/></span>
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
