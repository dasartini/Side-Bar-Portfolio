import repo from  "../src/assets/repo.svg"
import CardStyle from "../styles/CardStyle"
import extravaganza from "../src/assets/extravaganzaDemo.gif"
import { Link } from "react-router-dom"
import Button from "../styles/Button"

function Extravaganza(){

    return (
        <div>
   <CardStyle>
            <div className="cardStyle">
                <h1>Extravaganza:</h1>
                <h1>Be Your Own Curator</h1>
                <br></br>

                <p>Dynamic web application, users are able to inspect artworks from different museums</p>
        <p>The users are also able to filter the artworks with a search criteria and add them to your personal gallery to present them in a slideshow.</p>
        <p>For saving artworks you would need to create a new account or authenticate with Google.</p>

        <p>All this is possible due to the use of:</p>

                <ul>
                    <li>
                        <p>
                            The museum's API's for fetching in their artworks database
                        </p>
                    </li>
                    <li>
                        <p>
                            Firebase as Real Time Database and  Auth method
                        </p>
                    </li>
                    <li>
                        <p>
                           React.js 
                        </p>
                    </li>
                    <li>
                        <p>
                            Logos and designs made with Leonardo AI, and styled with Canva.
                        </p>
                    </li>
                
                </ul>      
                
                <div className="projectButtons">
                    <Link to={'https://extravaganzart.netlify.app'} className="external" target="_blank">
                        <Button>
                            Try It!
                        </Button>
                    </Link>
                    <Link to={'https://github.com/dasartini/Extravaganza-Exhibition-Curator'} target="_blank">
                        <img className="iconRepo" title="Front-end repo" src={repo} />
                    </Link>
                </div>
                <img alt="Extravaganza Demo" className="cardImageNC" title="Extravaganza Demo" src={extravaganza} />
            </div>
        </CardStyle>
    </div>

    )
}

export default Extravaganza