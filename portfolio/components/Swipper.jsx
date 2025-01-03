import CardStyle from "../styles/CardStyle";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import gigtastic from '../src/assets/gigtastic.gif'
import repo from '../src/assets/repo.svg'



function Swipper() {
    useEffect(() => {
        const listItems = document.querySelectorAll('.cardStyle li');
        listItems.forEach((item, index) => {
            item.style.setProperty('--animation-order', index + 1);
        });
    }, []);

    return (
        <CardStyle>
            <div className="cardStyle">
         
            <h1>GIGTASTIC</h1><br />
           
            <div className="responsiveness">
                <p>This is one of the most ambitious projects I have worked on.</p>
                <br />
                <p>
                    This was the final project from the bootcamp. My group and I developed a mobile App for Android and iOS using React Native with Expo.
                </p>
                <p>
                    In essence, the App works with three different APIs and displays local gigs based on your location and the radius set in a Tinder-like interface.
                </p>
                <p>
                    You can choose to either like or dislike the events, with the possibility of looking for further information about them.
                </p>
                <p>
                    Liked events will go into a saved events section, while disliked events won't be shown any longer unless you reset them to display again.
                </p>
                <p>
                    You can also create a username and password, and the App will save your events after logging out and logging back in.
                </p>

                <img alt="Gigtastic demo" className="cardImage2" title='gigtastic' src={gigtastic} />
                <br />
                <Link to={'https://github.com/dasartini/gig-swiper'} >
                    <img className="iconRepo" title="Repo" src={repo} />
                </Link>
                <br />
                <p>All this is possible due to the use of:</p>
                </div>
                <ul>
                    <li>
                        <p>
                            Open Maps API: for setting up your location coordinates at the time you type them
                        </p>
                    </li>
                    <li>
                        <p>
                            Skiddle API: retrieves all the events in a city location in real-time and keeps updating daily
                        </p>
                    </li>
                    <li>
                        <p>
                            Spotify API: when a gig from a popular band is found, the App connects to the Spotify API, making it possible to preview a track from the artist
                        </p>
                    </li>
                    <li>
                        <p>
                            Firebase Auth: for logging in and out, saving usernames into the Firebase database so they can be accessed anytime and new users can be created
                        </p>
                    </li>
                    <li>
                        <p>
                            React Native and Expo: for developing, viewing, and testing the App for Android and iOS
                        </p>
                    </li>
                    <li>
                        <p>
                            3 weeks of intensive research and continuous development using AGILE and SCRUM techniques within the group
                        </p>
                    </li>
                </ul>
                <div className="responsiveness">
                <p>Note: This project is not hosted yet, but here is a <Link className="gigtasticLink" to={'https://www.youtube.com/watch?v=7lbObNKKIuU'} target="_blank">video</Link> demonstration.</p>
                </div>
                </div>
        </CardStyle>
    );
}

export default Swipper;
