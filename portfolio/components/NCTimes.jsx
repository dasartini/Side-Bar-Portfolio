import { Link } from "react-router-dom";
import CardStyle from "../styles/CardStyle";
import Button from "../styles/Button";
import nctimes from '../src/assets/nctimes.gif';
import repo from '../src/assets/repo.svg';
import repo2 from '../src/assets/repo2.svg';

function NCTimes() {
    return (
        <div>
            <CardStyle> 
                <div className="cardStyle">
                <h1>The Mythical:<br/> NC Times</h1><br />
              
                <p>NC times is a Web App where you can see and read diffrent articles, as well as like the articles and comment by logging in with existing credentials</p>
                

                <p>But NC Times is not only this, NC Times is two projects in one:</p>

                <ul>
                    <li>
                        <p>                    Backend: A seeded API using SQL queries to create databases containing various articles. The data includes usernames, comments, articles, and likes. It supports different API request methods (GET, PATCH, DELETE, etc.) and its hosted on Render in a free instance.
                        </p>
                    </li>
                    <li>
                        <p>                    Frontend: The visual interface of the app displaying the data, built in React. The methods are called using Axios with parameters. You can log in to an existing account (required to comment) and log out.
                        </p>
                    </li>
                   
                </ul>
                <p>
                </p>
                <p>
                </p>
                <p>Give it a go, first, load all the articles by clicking All articles button (it will load all the data required to work), then log in with the username: grumpy19. Note: This is hosted on free instances using Render and Netlify, so it may take a few minutes to fetch the data.</p>

                <div className="projectButtons">
                        <Link to={'https://bohemianrapsodyjournal.netlify.app/'} className="external" target="_blank">
                    <Button>
                            Try It!
                    </Button>
                        </Link>
                    <Link to={'https://github.com/dasartini/nc-times'} target="_blank">
                        <img className="iconRepo" title="Front-end repo" src={repo} />
                    </Link>
                    <Link to={'https://github.com/dasartini/project-NC-News' } target="_blank" >
                        <img className="iconRepo" title="Back-end repo" src={repo2} />
                    </Link>

                </div>
                <img alt="NC Times demo" className="cardImageNC" title="All articles" src={nctimes} />
               </div>
            </CardStyle>
        </div>
    );
}

export default NCTimes;
