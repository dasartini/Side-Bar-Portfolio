import { Link } from "react-router-dom"
import { useState } from "react"
function Profile(){

const [visible, setVisible] = useState(true)

function handleOver(){
    setVisible(false)
}

function handleOut(){
    setVisible(true)
}
return(
<div>
    <img onMouseOver={()=>{handleOver()}}
    onMouseOut={()=>{handleOut()}} 
    className="profilePicture" src='../src/assets/me.jpg' />
    <div hidden={visible}
    >
<h2> Adrian Sartini</h2>
<h1> Junior Software Engineer </h1>
</div>
<Link to='https://www.linkedin.com/in/adrian-sartini-051b352b1/' target="_blank">
<img className="socials" title="My Linkedin" src='../src/assets/linkedin.svg'></img>
</Link>
<Link to='https://github.com/dasartini' target="_blank " >
<img className="socials" title='My Github' src='../src/assets/github2.svg.png'></img>
</Link>
</div>



)

}
export default Profile