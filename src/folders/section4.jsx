import "./skill.css"
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import { LuSprout } from "react-icons/lu";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
export default function Skill(){
    return(
        <section id="skill" className="newdata">
            <h1 style={{margin:'10px'}}>My Skills</h1>
            <div className="boxes">
                <div className="box1">
                    <span style={{fontSize:'1rem', color:'yellow',fontWeight:'bold',margin:'8px auto'}}>Technical Proficiency</span>
                    <div className="line"></div>
                    <span style={{color:'red'}}><FaHtml5/></span>
                    <input type="range" value="100" />
                    <span style={{color:'skyblue'}}><IoLogoCss3/></span>
                    <input type="range" value="75" />
                    <span style={{color:'yellow'}}><FaJs/></span>
                    <input type="range" value="75" />
                    <span style={{color:'blue'}}><FaReact/></span>
                    <input className="input" type="range" value="69" />

                </div>
                <div className="box2">
                    <span  style={{fontSize:'1rem', color:'yellow',fontWeight:'bold',margin:'8px auto'}}>Interpersonal Skills</span>
                    <div className="line"></div>
                    <div className="storeskill">
                        <div className="it">
                            <span style={{color:'yellow'}}><FaRegLightbulb/></span>
                            <span>Problem Solving</span>
                            
                            <span>Breaking down </span>
                            <span>complex issues</span>

                        </div>
                        <div className="it">
                             <span style={{color:'yellow'}}><FaRegComments/></span>
                            <span>Problem Solving</span>
                            
                            <span>Breaking down </span>
                            <span>complex issues</span>

                        </div>
                        <div className="it">
                             <span style={{color:'yellow'}}><FaRegHandshake/></span>
                            <span>Problem Solving</span>
                            
                            <span>Breaking down </span>
                            <span>complex issues</span>

                        </div>
                        <div className="it">
                             <span style={{color:'yellow'}}><LuSprout/></span>
                            <span>Problem Solving</span>
                            
                            <span>Breaking down </span>
                            <span>complex issues</span>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}