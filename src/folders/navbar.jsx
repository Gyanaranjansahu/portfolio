import logo from "../assets/logo.jpg"
import { FaRegMessage } from "react-icons/fa6";
import './nav.css'
export default function Navbar() {
    return(
        <nav>
            <div className="container">
                <div style={{display:'flex', justifyContent:'center'}}><h3>Gyana's <span style={{color:"yellow"}}>Portfolio</span></h3></div>
                <ul style={{display:'flex', justifyContent:'space-evenly',alignItems:'center', listStyleType:'none'}}>
                    <li><a onClick={()=>{document.getElementById("home").scrollIntoView({behavior:"smooth"})}} className="tag" href="#home">Home</a></li>
                    <li><a onClick={()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})}} className="tag" href="#about">About</a></li>
                    <li> <a  className="tag" href="#">Skills</a></li>
                    <li> <a  className="tag" href="#">Projects</a></li>
                     <li> <a  className="tag" href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
};
