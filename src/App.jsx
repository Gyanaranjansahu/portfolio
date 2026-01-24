import Navbar from "./folders/navbar";
import "./app.css"
import Content from "./folders/section1";
import About from "./folders/section2";
import Education from "./folders/section3";
import Skill from "./folders/section4";
import Contact from "./folders/section5";
export default function App() {
  return(
    <div className="body">
      <Navbar/>
      <Content/>
      <About/>
      <Education/>
      <Skill/>
      <Contact/>
    </div>
  )
};
