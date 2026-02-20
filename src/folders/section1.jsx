import "./data.css"
import my from "../assets/profile.jpg"
import { IoBag } from "react-icons/io5";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
export default function First() {
    function add1(){
        return window.open('https://www.linkedin.com/in/gyanaranjan-sahu-6331a8333?utm_source=share_via&utm_content=profile&utm_medium=member_android') ;
    }
        function add2(){
        return window.open('https://wa.me/qr/DKDUKH3MJ575N1') ;
    }
    function add3(){
        return window.open('https://github.com/Gyanaranjansahu')
    }
    
    return(
    <section className="part" id="home">
        <div className="about">
            <span className="name" style={{fontSize:"40px", fontFamily:"sans-serif."}}>Hello,I'm <br /> <span style={{ color: "yellow", fontSize:"20px" }}>Gyana</span></span>
            <span className="designer" style={{ fontWeight:"bolder"}}>
                <ReactTyped
      strings={[
        "Web Developer",
        "Frontend Developer",
        "MERN STACK Developer",
      ]}
      typeSpeed={160}
      backSpeed={130}
      loop
    >
    </ReactTyped>
                </span><br />
            <p id="a" style={{fontFamily:"sans-serif", fontSize:"20px"}}>i am skilled and passionate Web Developer <br />
                with hands-on experience in building responsive and user friendly Website </p>
            <div className="div">
                <span className="web"><FaInstagram /></span>
                <span className="web" onClick={()=>add1()} > <FaLinkedin /></span>
                <span className="web" onClick={()=>add3()}><FaGithub /></span>
                <span className="web"  onClick={()=>add2()}> <FaWhatsapp /></span>
            </div>
            <br />
            <button className="bag" onClick={()=>add1()}><IoBag />Hire me</button>
        </div>

        <div className="images"  style={{display:"flex", alignItems:"center", justifyContent:"center", 
            marginTop:"2rem", height:"350px", width:"350px"}}>
            {/* <img src={my} alt="my" className="my" /> */}
        </div>
    </section>
    )
};
