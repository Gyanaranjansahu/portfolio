import logo from "../assets/logo.jpg"
import { FaRegMessage } from "react-icons/fa6";
import './nav.css'
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
export default function Navbar({color,setColor}) {
    const[display,setDisplay]=useState(true);
    
    return(
        <nav>
            
            <button  onClick={()=>setColor(!color)}  >{color?< MdDarkMode/>:<MdLightMode/>}</button>
            <div className="container">
                <h3 style={{color:'lime'}}>Gyana's <span style={{color:"yellow"}}>Portfolio</span></h3>
                <ul style={{display:'flex', justifyContent:'space-evenly',alignItems:'center', listStyleType:'none', transition:'all 0.2s'}} className={display?"hide":''} >
                    <li><a onClick={()=>{document.getElementById("home").scrollIntoView({behavior:"smooth"})}} className="tag" href="#home">Home</a></li>
                    <li><a onClick={()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})}} className="tag" href="#about">About</a></li>
                    <li> <a  className="tag" href="#skill">Skills</a></li>
                    <li> <a  className="tag" href="#education">Education</a></li>
                     <li> <a  className="tag" href="#contact">Contact</a></li>
                </ul>

            </div>
            <div className="humber" onClick={()=>{setDisplay(!display)}}>
                <div className="side1 check"></div>
            <div className="side2 check"></div>
            <div className="side3 check"></div>
            </div>
            
        </nav>
    )
};
