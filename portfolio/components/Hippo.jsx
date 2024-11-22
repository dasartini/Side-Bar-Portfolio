import { Link } from "react-router-dom";
import CardStyle from "../styles/CardStyle";
import Button from "../styles/Button";
import HippoCat from '../src/assets/hippoCatDemo.gif';
import repo from '../src/assets/repo.svg';



function Gifs() {
    return (
        <CardStyle>
            <div className="cardStyle">
                <h1>Hippo Cat on Solana</h1><br />
                <p>
                    Website developed for a memecoin community, displays simple information about the project such as token specifications, social links and contract.
                </p>
                <p>But first, what is a memecoin?</p>
                <p>According to investopedia: "Meme coins are a cryptocurrency genre generally advertised as having an exuberant online community supporting the currency's development and growth. They are sometimes identified with animated characters or animal meme images."</p>
                <p>The memecoins market is moved by the collective hype and influenced by global events, following in most of the cases BITCOIN.</p>
                <p>In this case Hippo Cat was created following a popular token hype called $MOODENG, another hippo.</p>
                <div className="projectButtons">
                <Link to={'https://hippocatonsol.com/'} className="external" target="_blank">
                            <Button>
                                Try It!
                            </Button>
                        </Link>
                    <br/>
                    <Link to={'https://github.com/dasartini/Hippo-Cat'} target="_blank" >
                        <img className="iconRepo" title="Repo" src={repo} />
                    </Link>
                </div>

                <img alt="Hippo Cat demo" loading='lazy' className="cardImage2" title="Hippo Cat demo" src={HippoCat} />
            </div>
        </CardStyle>
    );
}

export default Gifs;
