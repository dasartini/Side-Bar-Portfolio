import { Link } from "react-router-dom"
function NCTimes(){

    return (<div>
        <p>NC Times is two projects in one:</p>
        <p>Backend: seeded API using SQL queries to create databases containing different articles.
            In this data we can find usernames, comments, articles, kudos.
            Contains different API request methods (get,patch,delete etc).</p>

            <p>Frontend: An app displaying the data, built in React
            The methods are called using Axios with params.
            You are also able to log in into an existing account (required to comment) as well as log out.
            If you want to try it out try loging in with the username  of: grumpy19
            Note: This is hosted in a free instance using render and netlify so it may take a few minutes to fetch the data
        </p>
        <Link to={'https://bohemianrapsodyjournal.netlify.app/'} target="_blank"> TRY ITmyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</Link>
        <img title="All articles" src={'../src/assets/nctimes.gif'}/>
        </div>
    )
}

export default NCTimes