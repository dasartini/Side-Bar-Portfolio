import { Link } from "react-router-dom"

function Gifs(){
    return(
<div>
            <p> An basic React app, this was a bootcamp excercise, the objective of it is learning the use of forms, styling and fetching data from an external API.
                This is a search bar that fetches data form GIPHY API and displays the gifs that you type.
            </p>
            <Link to={'https://giphysearchbar.netlify.app/'} target="_blank"> TRY IT MY BROSERRRRRRRRRRRRRRRR</Link>
            <img title="Amazing gifs" src={'../src/assets/gifs.gif'}/>
            </div>
        
    )
     
}
export default Gifs