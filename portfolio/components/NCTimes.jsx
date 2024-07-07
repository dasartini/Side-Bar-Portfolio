import { Link } from "react-router-dom";
import CardStyle from "../styles/CardStyle";
import Button from "../styles/Button";
import nctimes from '../src/assets/nctimes.gif'

function NCTimes() {
    return (
        <div>
            <CardStyle>
                <h1>The Mythical NC TIMES</h1>
                <br />
                <p>NC Times is two projects in one:</p>
                <p>
                    Backend: A seeded API using SQL queries to create databases containing various articles. The data includes usernames, comments, articles, and kudos. It supports different API request methods (GET, PATCH, DELETE, etc.).
                </p>
                <p>
                    Frontend: An app displaying the data, built in React. The methods are called using Axios with parameters. You can log in to an existing account (required to comment) and log out. If you want to try it out, log in with the username: grumpy19. Note: This is hosted on free instances using Render and Netlify, so it may take a few minutes to fetch the data.
                </p>
                <Button>
                    <Link to={'https://bohemianrapsodyjournal.netlify.app/'} className="external" target="_blank">
                        Try It!
                    </Link>
                </Button>
                <img alt="NC Times demo" className="cardImage" title="All articles" src={nctimes} />
            </CardStyle>
        </div>
    );
}

export default NCTimes;
