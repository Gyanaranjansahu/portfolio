import './add.css'
import calculator from "../assets/calculator.jpg"
import password from "../assets/password.jpg"
import tic from "../assets/tic.jpg"
import time from "../assets/time.jpg"
export default function Project() {
    return(
        <section id="project" style={{height:'100vh',width:'100vw',display: 'flex', 
                alignItems:'center',
                justifyContent:'center',}}>
            <div className="img-container" style={{ display: 'flex', 
                alignItems:'center',
                justifyContent:'center',
            }}>
                <div className="i" style={{width:'100px'}}><a href="https://gyanaranjansahu.github.io/Password-Generator/"> <img src={password} alt="password" className="lala" /></a></div>
                <div className="i"  style={{width:'100px'}}><a href="https://gyanaranjansahu.github.io/tic-tac-toe-game/"> <img src={tic} alt="tic" className="lala" /></a></div>
                <div className="i"  style={{width:'100px'}}><a href="https://gyanaranjansahu.github.io/Stopwatch/"> <img src={time} alt="time" className="lala" /></a></div>
                <div className="i"  style={{width:'100px'}}><a href="https://calculator-r6bl.vercel.app/"> <img src={calculator} alt="calculator" className="lala" /></a></div>
            </div>
        </section>
    )
};
