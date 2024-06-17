import { Link } from "react-router-dom"

function Profile(){
return(
<div>
    <img className="profilePicture" src='../src/assets/me.jpg' />
<h2> Adrian Sartini</h2>
<h1> Junior Software Engineer </h1>
<Link to='https://www.linkedin.com/in/adrian-sartini-051b352b1/'>
<img className="socials" title="My Linkedin" src='../src/assets/linkedin.svg'></img>
</Link>
<Link to='https://github.com/dasartini'>
<img className="socials" title='My Github' src='../src/assets/github2.svg.png'></img>
</Link>
</div>



)

}
export default Profile