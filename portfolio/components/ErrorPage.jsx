import CardStyle from "../styles/CardStyle";
import error from '../src/assets/error.png';
import { Link } from "react-router-dom";

function ErrorPage(){

    return (
        <CardStyle>
            <div className="cardStyle">
            <Link to={'/'}>
           <div className="errorText">
                <h1>Oops!</h1>
                <p>The page that you are looking for does not exist!
                </p>
                <br/>
                <h2>Click to go back</h2>
                </div>
                <div>
<img title="error 404 not found" className="cardImageErr"src={error}/>
            </div>
            
            </Link>
            </div>
        </CardStyle>
    )
}

export default ErrorPage 