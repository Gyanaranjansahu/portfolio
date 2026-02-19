import Navbar from "./folders/navbar";
import "./app.css"
import About from "./folders/section2";
import Education from "./folders/section3";
import Skill from "./folders/section4";
import Contact from "./folders/section5";
import { useState } from "react";
import Project from "./folders/project";
import Footer from "./fotter";
import First from "./folders/section1";


export default function App() {
  const [color, setColor] = useState(true);
  return (
    <div className={color ? 'black' : 'light'}>
      {/* <TextCursor
  text="⚛️"
  spacing={80}
  followMouseDirection
  randomFloat
  exitDuration={0.3}
  removalInterval={20}
  maxPoints={10}
/> */}

      <Navbar color={color} setColor={setColor} />
       <First/>  
      <About />
       <Skill />
      <Education />
     
      <Contact />
      <Project />
      <Footer />
    </div>
  )
};
