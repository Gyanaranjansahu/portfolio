import Navbar from "./folders/navbar";
import "./app.css"
import Content from "./folders/section1";
import About from "./folders/section2";
import Education from "./folders/section3";
import Skill from "./folders/section4";
import Contact from "./folders/section5";
import { useState } from "react";
import Project from "./folders/project";
import Footer from "./fotter";
export default function App() {
  const[color,setColor]=useState(true);
  return(
    <div className={color?'black':'light'}>
      <Navbar color={color} setColor={setColor}/>
      <Content/>
      <About/>
      <Education/>
      <Skill/>
      <Contact/>
      <Project/>
      <Footer/>
    </div>
  )
};
