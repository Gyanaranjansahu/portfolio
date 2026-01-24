import './submit.css';
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Contact(params) {
    return(
        <section id='contact'  className='hero'>
            <h2>Contact Me</h2>
            <div className="con">
                <div className="part1">
                     <div className="email"> 
                        <span><MdEmail/></span>
                        <h4>Email</h4>
                        <p>gyana9619@gmail.com</p>
                        <p>SEND A MAIL</p>
                           </div>
                <div className="linkedin">
                    <span><FaLinkedin/></span>
                        <h4>Linkedin</h4>
                        <p>Gyanaranjan Sahu</p>
                        <p>Visit Profile</p>
                </div>
                </div>
                <div className="part2">
                    <h2>
                        Drop a Message  </h2>
                        <span className='ss'>
                            <input type="text" placeholder='Your Name' id='name'/>
                            <input type="text" placeholder='Password' id='pass' />
                        </span>
                         <textarea name="" id="">
                                write your message here..
                            </textarea>
                        <button id='se'>Send via Email <FaTelegramPlane /> </button>
                    
                </div>
            </div>

        </section>
    )
};
