import './add.css'
import Card from './card'
export default function Project() {
    return(
        <section id="project" className='myproject' style={{}}>
            <div className="head" style={{margin:"10PX"}}>PROJECT</div>
            <div className="img-containers">
                <Card/>
            </div>
        </section>
    )
};
