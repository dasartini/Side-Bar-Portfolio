import CardStyle from "../styles/CardStyle";
import Skills from "./Skills";
import adrian2 from '../src/assets/adrian2.jpeg';
import Animation from "../styles/Animation";

function Experience() {
    return (
        <CardStyle>
            
            
            <div className="cardStyle">
                <h1 className="experienceTitle">Coding Experience</h1> <br/>
                <img title="Showing project idea" className="cardImage" src={adrian2} alt="Adrian presenting a project" />
            <br/>
            <br/>
            
                <p >After attending and successfully completing a software engineering bootcamp, I learned full-stack programming and gained experience in the following:</p>
                
                <ul>
                    <li>
                        <p>Database creation.</p>
                    </li>
                    <li>
                        <p>Seeding, hosting, and migration of REST APIs.</p>
                    </li>
                    <li>
                        <p>Creating and hosting different responsive apps that can be displayed on desktop/mobile.</p>
                    </li>
                    <li>
                        <p>Actively participating in projects utilizing AGILE principles (SCRUM).</p>
                    </li>
                    <li>
                        <p>Mobile app development.</p>
                    </li>
                    <li>
                        <p>Easily learning, applying, and implementing new technologies for further programming, yielding good results.</p>
                    </li>
                </ul>
                <h2>Experience and Technologies:</h2>
                <Skills />
                </div>
                
            
        </CardStyle>
    )
}

export default Experience
