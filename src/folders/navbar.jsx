import logo from "../assets/logo.jpg"
import { FaRegMessage } from "react-icons/fa6";
import './nav.css'
export default function Navbar() {
    return(
        <nav>
            <div className="container">
                <a onClick={()=>{document.getElementById("home").scrollIntoView({behavior:"smooth"})}} className="tag" href="#home">Home</a>
                <a onClick={()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})}} className="tag" href="#about">About</a>
                <a  className="tag" href="#">Services</a>
                 <button> <FaRegMessage />Contact</button>
            </div>
        </nav>
    )
};
