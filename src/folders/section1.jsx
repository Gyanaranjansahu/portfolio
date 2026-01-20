import "./data.css"
import my from "../assets/profile.jpg"
import { IoBag } from "react-icons/io5";
export default function Content() {
    return(
<section className="part" id="home">
    <div className="about">
                <span className="name">I'm  <span style={{color:"yellow"}}>Gyana</span></span>
                <span className="designer">Website Designer</span><br />
                <p id="about">i am skilled and passionate designer <br />
                with experience in creating user-friendly Website</p>
                <br />
                <button className="bag"><IoBag />Hire me</button>
            </div>
            
               <div className="image">
                 <img src={my} alt="my" className="my" />
               </div>
</section>
    )
};
