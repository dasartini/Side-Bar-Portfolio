import CardStyle from "../styles/CardStyle"
import Skills from "./Skills"

function Experience() {
    return (
        <CardStyle>

            <h1>Coding Experience</h1><br />
            <img title={'Showing project idea'}className='cardImageAd'src='../src/assets/adrian2.jpeg'/>
            <div>
                <p>Attending and succesfully completing the software engineering bootcamp I learned full stack programming and have experience in the following:</p>
                <ul>
                <li>
                        <p>Databases creations.</p>
                    </li>
                    <li>
                        <p>Seeding host and migration of APIs.</p>
                    </li>
                    <li>
                        <p>Created and hosted different apps that can be display in desktop/mobile.</p>
                    </li>
                    <li>
                        <p>Actively participating in projects utilizing AGILE principles (SCRUM).</p>
                    </li>
                    <li>
                        <p>Mobile apps developement.</p>
                    </li>
                    <li>
                        <p>Easily learning, applying and implementing new technologies for further programming giving itself good results.</p>
                    </li>
                </ul>
<h2>Experience and technologies:</h2>
<Skills/>

            </div>
        </CardStyle>
    )

}

export default Experience