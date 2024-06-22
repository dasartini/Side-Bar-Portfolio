import { Link } from "react-router-dom"
import Biograhy from "./Skills"
function List(){
    return(
        <div>
        <ol>
    <ul>
   <Link to={'./Biography'}> <p className="links"> <img className="icons" src="./src/assets/profile.svg" />Biography </p ></Link>
    </ul>
    <ul>
    <p className="links"><img className="icons" src="./src/assets/work.svg" />Experience </p >
    </ul>
    <ul>
    <p className="links"><img className="icons" src="./src/assets/project.svg" />Projects </p>
    </ul>
    <ul>
    <p className="links"><img className="icons" src="./src/assets/hobbies.svg" /> Hobbies </p>
    </ul>

        </ol>
    </div>
    )


}
export default List