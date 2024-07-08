import CardStyle from "../styles/CardStyle";
import error from '../src/assets/error.jpg';
import { Link } from "react-router-dom";

function ErrorPage(){

    return (
        <CardStyle>
            <Link to={'/'}>
            <div>
<img title="error 404 not found" className="cardImage"src={error}/>
            </div>
            </Link>
        </CardStyle>
    )
}

export default ErrorPage 