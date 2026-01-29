import './submit.css';
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
export default function Contact() {
            function add3(){
        return window.open('mailto:gyana9619@gmail.com') ;
    }
        function add1(){
        return window.open('https://www.linkedin.com/in/gyanaranjan-sahu-6331a8333?utm_source=share_via&utm_content=profile&utm_medium=member_android') ;
    }
    const[sub,setSub]=useState({
        name:'',
        email:''
    });
    function data(e){
       setSub({
        ...sub,
        [e.target.name]:[e.target.value]
     } )
    }

    return (
        <section id='contact' className='hero'>
            <h2 style={{ margin: '2rem' }} >Contact Me</h2>
            <div className="con">
                <div className="part1">
                    <div className="email" onClick={()=>add3()}>
                        <span style={{ width: '70px' }}><MdEmail /></span>
                        <h4>Email</h4>
                        <p>gyana9619@gmail.com</p>
                        <p>SEND A MAIL</p>
                    </div>
                    <div className="linkedin" onClick={()=>add1()}>
                        <span><FaLinkedin /></span>
                        <h4>Linkedin</h4>
                        <p>Gyanaranjan Sahu</p>
                        <p>Visit Profile</p>
                    </div>
                </div>
                <div className="part2">
                    <h2>
                        Drop a Message  </h2>
                    <span className='ss'>
                        <input type="text" placeholder='Your Name' name='name' required onChange={data} value={sub.name} />
                        <input type="text" placeholder='Email' name='email' required onChange={data}  value={sub.email}/>
                        </span>
                    <textarea >
                        write your message here..
                    </textarea>
                    <button id='se' onClick={()=>console.log(sub) }>Send via Email <FaTelegramPlane /> </button>

                </div>
            </div>

        </section>
    )
};
