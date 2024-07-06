import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { VisibleContext } from "../contexts/Visible"
function Profile(){
    const {visible} = useContext(VisibleContext)



return(
<div>
    <img 
    className="profilePicture" src='../src/assets/me3.jpg' />
    <div hidden={visible}
    >
<h2> Adrian Sartini</h2>
<h4> Junior Software Engineer </h4>

<Link to='https://www.linkedin.com/in/adrian-sartini-051b352b1/' target="_blank">
<img className="socials" title="My Linkedin" src='../src/assets/linkedin.svg'></img>
</Link>
<Link to='https://github.com/dasartini' target="_blank " >
<img className="socials" title='My Github' src='../src/assets/github2.svg.png'></img>
</Link>
</div>
</div>



)

}
export default Profile