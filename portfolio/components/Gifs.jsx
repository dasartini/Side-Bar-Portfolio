import { Link } from "react-router-dom"
import CardStyle from "../styles/CardStyle"

function Gifs(){
    return(
        <CardStyle>
<div>
            <p> An basic React app, this was a bootcamp excercise, the objective of it is learning the use of forms, styling and fetching data from an external API.
                This is a search bar that fetches data form GIPHY API and displays the gifs that you type.
            </p>
            <Link className="external" to={'https://giphysearchbar.netlify.app/'} target="_blank"> TRY IT MY BROSERRRRRRRRRRRRRRRR</Link>
            <img className="cardImage"title="Amazing gifs" src={'../src/assets/gifs.gif'}/>
            </div>
            </CardStyle>
        
    )
     
}
export default Gifs