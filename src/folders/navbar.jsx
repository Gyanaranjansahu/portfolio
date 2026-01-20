import logo from "../assets/logo.jpg"
import { FaRegMessage } from "react-icons/fa6";
import './nav.css'
export default function Navbar() {
    return(
        <nav>
            <div className="container">
                <img src={logo} alt="" className="logo" />
                <ul style={{display:'flex', justifyContent:'space-evenly',alignItems:'center', listStyleType:'none'}}>
                    <li><a onClick={()=>{document.getElementById("home").scrollIntoView({behavior:"smooth"})}} className="tag" href="#home">Home</a></li>
                    <li><a onClick={()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})}} className="tag" href="#about">About</a></li>
                    <li> <a  className="tag" href="#">Services</a></li>
                </ul>
                 <button id="contact">  <FaRegMessage />Contact</button>
            </div>
        </nav>
    )
};
