import { Link } from "react-router-dom"
import Biograhy from "./Skills"
function List(){
    return(
        <div>
        <ol>
    <ul>
   <Link to={'./Biography'}> <p>Biograhy </p></Link>
    </ul>
    <ul>
    <p>Work experience </p>
    </ul>
    <ul>
    <p>Projects </p>
    </ul>
    <ul>
    <p> Hobbies </p>
    </ul>

        </ol>
    </div>
    )


}
export default List