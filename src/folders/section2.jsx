import "./about.css"
import img from "../assets/app.jpg"
import img2 from "../assets/app2.jpg"
import img3 from "../assets/app3.jpg"
export default function About() {
    return(
        <section style={{height:'100vh'}} className="about" id="about" >
            <div className="second" >
                <h1 style={{fontWeight:'700px', fontSize:"2rem"}}>What i do</h1>
                <span>A passionate self-motivated Computer Science Student</span>
                <span> With a strong foundation in HTML,CSS,JS,Reactjs.</span>
                <span>i enjoy building Web applicationand continuously</span>
                <span>improving my skills in modern technologies.I am currently looking for internship or </span>
                <span>entry level opportunities where i can learn and contribute.</span>
            </div>
            <div className="template">
                <div className="section">
                    <img src={img} alt="img" className="small" />
                    UI/UX design <span></span></div>
                <div  className="section">
                    <img src={img2} alt="img" className="small"  />
                    Website design</div>
                <div  className="section">
                    <img src={img3} alt="img" className="small"  />
                    App design</div>
            </div>

        </section>
    )
    
};
