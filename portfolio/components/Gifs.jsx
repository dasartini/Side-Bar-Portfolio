import { Link } from "react-router-dom";
import CardStyle from "../styles/CardStyle";
import Button from "../styles/Button";

function Gifs() {
    return (
        <CardStyle>
            <div>
                <h1>Fantastic Gifs</h1><br />
                <p>
                    This is a basic React app. It was a bootcamp exercise aimed at learning the use of forms, styling, and fetching data from an external API.
                    The search bar fetches data from the GIPHY API and displays the gifs based on the search query.
                </p>
                <Button>
                    <Link className="external" to={'https://giphysearchbar.netlify.app/'} target="_blank">TRY IT</Link>
                </Button>
                <img alt="Amazing Gifs demo" className="cardImage" title="Amazing gifs" src={'../src/assets/gifs.gif'} />
            </div>
        </CardStyle>
    );
}

export default Gifs;
