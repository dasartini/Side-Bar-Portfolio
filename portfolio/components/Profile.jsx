import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { VisibleContext } from "../contexts/Visible";
import github2 from '../src/assets/github2.svg.png';
import linkedin from '../src/assets/linkedin.svg';
import me3 from '../src/assets/me3.jpg';






function Profile() {
    const { visible } = useContext(VisibleContext)



    return (
        <div>
            <img
                className="profilePicture" src={me3} />
            <div hidden={visible}
            >
                
                <div className="profileInfo">
                <h2> Adrian Sartini</h2>
                <h4> Junior Software Engineer </h4>

                <Link to='https://www.linkedin.com/in/adrian-sartini-051b352b1/' target="_blank">
                    <img className="socials" title="My Linkedin" src={linkedin}></img>
                </Link>
                <Link to='https://github.com/dasartini' target="_blank " >
                    <img className="socials" title='My Github' src={github2}></img>
                </Link>
                </div>
            </div>
        </div>



    )

}
export default Profile