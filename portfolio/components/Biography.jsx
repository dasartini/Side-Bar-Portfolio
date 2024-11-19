import CardStyle from "../styles/CardStyle";
import adrian1 from '../src/assets/adrian1.jpg';
import Animation from "../styles/Animation";
import swansea from '../src/assets/swansea.jpg';
function Biography() {
    return (
        <div>
            <CardStyle>
                <div className="cardStyle">
                <h1>Adrian Sartini</h1><br />
                <p>Hello! Welcome to my portfolio site. First, let me introduce myself:</p>
                <p>I am Adrian, originally from Venezuela, where I lived until I was 19. After that, I moved to Bogota, Colombia with my family where I lived for 3 years until I decided to start my own new life in Manchester, UK, where I have been living for over 5 years.</p>
                
                <Animation>
                    <img className="cardImage" src={adrian1} title="Adrian in Chester" alt="Adrian Sartini" />
                </Animation>
                <br />
                <p>Quick learner, disciplined, loving the process and self improvement are my core principles.</p>
                <p>I began my career change into tech at the beginning 2024, studying on my own and after completing the best Bootcamp in Manchester: Northcoders.</p>
                <p>Currently doing freelance work with my personal network. I am happy to show you the projects I have done so far in this cool App developed with React.</p>
                <br/>
                <Animation>
                    <img className="cardImage" src={swansea} title="Adrian in Swansea" alt="Adrian in Swansea" />
                </Animation>
                </div>
            </CardStyle>
        </div>
    )
}

export default Biography
