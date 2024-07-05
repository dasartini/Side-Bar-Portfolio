import { Link } from "react-router-dom"
import CardStyle from "../styles/CardStyle"
import Button from "../styles/Button"

function Gifs(){
    return(
        <CardStyle>
<div>
<h1>Fantastic Gifs</h1><br/>
            <p> An basic React app, this was a bootcamp excercise, the objective of it is learning the use of forms, styling and fetching data from an external API.
                This is a search bar that fetches data form GIPHY API and displays the gifs that you type.
            </p>
            <Button>
            <Link className="external" to={'https://giphysearchbar.netlify.app/'} target="_blank"> TRY IT</Link></Button>
            <img  alt="Amazing Gifs demo"className="cardImage"title="Amazing gifs" src={'../src/assets/gifs.gif'}/>
            </div>
            </CardStyle>
        
    )
     
}
export default Gifs