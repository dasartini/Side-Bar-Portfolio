import CardStyle from "../styles/CardStyle";

function Swipper(){

    return(
        <CardStyle>
<div className="swipperCardStyle">
      <p>This is one of the most ambitious projects I worked on</p>
      <br />
      <p>
        The final project from the bootcamp I graduated from, me and my group
        developed a mobile app for Android and IOS on React Native with Expo.
      </p>
      <p>
        In essence, the app works with 3 different APIs and displays local gigs
        according to your location and radius set in a Tinder-like display.
      </p>
      <p>
        You can choose to either like or dislike the event, with the
        possibility of looking for further information about it.
      </p>
      <p>
        Liked events will go into a saved events section, disliked events won't
        be shown any longer unless you want to reset them and display them
        again.
      </p>
      <p>
        You can also create your username and password, and it will save your
        events after logging out and logging in again.
      </p>
      <p>All this is possible because of the use of:</p>
      <ul>
        <li>
          <p>
            Open Maps API: for setting up your location coordinates at the time
            you type it.
          </p>
        </li>
        <li>
          <p>
            Skiddle API: retrieves all the events in a city location in real
            time and keeps updating every day.
          </p>
        </li>
        <li>
          <p>
            Spotify API: when a gig from a popular band is found, the app will
            connect to Spotify API making it possible to preview a track from
            the artist.
          </p>
        </li>
        <li>
          <p>
            Firebase Auth: for logging in and out, saving usernames into the
            Firebase database so they can be accessed anytime and new users can
            be created.
          </p>
        </li>
        <li>
          <p>
            React Native and Expo: for developing, viewing, and testing the app
            for Android and IOS.
          </p>
        </li>
        <li>
          <p>
            3 weeks of intensive research and continuous development using AGILE
            and SCRUM techniques within the group.
          </p>
        </li>
      </ul>
    </div>
</CardStyle>

    )
}

export default Swipper