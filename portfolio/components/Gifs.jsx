import { Link } from "react-router-dom";
import CardStyle from "../styles/CardStyle";
import Button from "../styles/Button";
import gifs from '../src/assets/gifs.gif';
import repo from '../src/assets/repo.svg';



function Gifs() {
    return (
        <CardStyle>
            <div>
                <h1>Fantastic Gifs</h1><br />
                <p>
                    This is a basic React app. It was a bootcamp exercise aimed at learning the use of forms, styling, and fetching data from an external API.
                    The search bar fetches data from the GIPHY API and displays the gifs based on the search query.
                </p>
                <div className="projectButtons">
                    <Button>
                        <Link className="external" to={'https://giphysearchbar.netlify.app/'} target="_blank">TRY IT</Link>
                    </Button>
                    <Link to={'https://github.com/dasartini/fe-react-data-visualisation'} >
                        <img className="iconRepo" title="Repo" src={repo} />
                    </Link>
                </div>

                <img alt="Amazing Gifs demo" className="cardImage" title="Amazing gifs" src={gifs} />
            </div>
        </CardStyle>
    );
}

export default Gifs;
