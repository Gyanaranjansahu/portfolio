import './edu.css'
import { RiGraduationCapLine } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
export default function Education(){
return(
    <section className="education" id='education'>
        <h1>My Education</h1>
        <div className="container">
            <div className="sub">
                <button>2020</button>
                
                <span ><h4>High School(10th Grade)   <RiGraduationCapLine/></h4></span>
                <span>BSE Odisha</span>
                <span>Gyana Vikash Residental School</span>
                <span>Odisha</span>
                <div className='line'></div>
            </div>
            <div className="sub">
                   <button>2022</button>
                <span ><h4>High Secondary(12th Grade)  <FaSchool/></h4></span>
                <span>CHSE Odisha</span>
                <span>Kalam institute of technology</span>
                <span>Odisha,Berhampur</span>
                <div className='line'></div>
                Score:72%
            </div>
            <div className="sub">
                   <button>2026</button>
                <span ><h4>Bachelor of Technology   < BiSolidSchool/></h4></span>
                <span>Computer Science Engineering</span>
                <span>Kalam institute of Technology</span>
                <span>Odisha</span>
                <div className='line'></div>
                score:75%
            </div>
        </div>
    </section>
)
}