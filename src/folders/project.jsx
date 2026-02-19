import './add.css'
import calculator from "../assets/calculator.jpg"
import password from "../assets/password.jpg"
import tic from "../assets/tic.jpg"
import time from "../assets/time.jpg"
export default function Project() {
    return(
        <section id="project" className='myproject' style={{}}>
            <div className="img-containers">
                <div className="i" ><a id='a' href="https://gyanaranjansahu.github.io/Password-Generator/">  </a></div>
                <div className="i" ><a id='b'href="https://gyanaranjansahu.github.io/tic-tac-toe-game/"> </a></div>
                <div className="i" ><a id='e' href="https://gyanaranjansahu.github.io/Stopwatch/"> </a></div>
                <div className="i" ><a id='d' href="https://calculator-r6bl.vercel.app/"> </a></div>
            </div>
        </section>
    )
};
