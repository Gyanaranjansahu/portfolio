import Navbar from "./folders/navbar";
import "./app.css"
import Content from "./folders/section1";
import About from "./folders/section2";
export default function App() {
  return(
    <div className="body">
      <Navbar/>
      <Content/>
      <About/>
    </div>
  )
};
