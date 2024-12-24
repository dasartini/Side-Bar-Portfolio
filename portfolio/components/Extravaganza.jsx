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

                <p>Web Application made with React, connects to different museums databases from the world and displays their artworks.</p>
        <p>You can filter the artworks with a search criteria and add them to your personal gallery to present them in a slideshow</p>
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