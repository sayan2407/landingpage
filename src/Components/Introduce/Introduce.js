
import Choosecard from "../Choose/Choosecard";
import Newsletter from "../Newsletter/Newsletter";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import "./Introduce.css";

const Introduce = () => {

    return <div className="introduce_section">
        <div className="container introduce_content">
            <div className="intro_child">
                <h2>Let’s Introduce<br/>
Ourself</h2>
            </div>
            <div className="separate"></div>
            <div className="intro_child">
                <h2>Criminal Lawyer</h2>
                <p>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
            </div>
        </div>

        <div className="section">
            <h1>Why Choose Us?</h1>
            <Choosecard/>
        </div>

        <div className="section">
          
            <Testimonial/>

        </div>
        <div className="section">
            <h1>Our Team</h1>
          
             <Team/>

        </div>

        <div className="section">
          
          <Newsletter/>

        </div>

      

    </div>

}

export default Introduce;