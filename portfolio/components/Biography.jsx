import CardStyle from "../styles/CardStyle"
import adrian1 from '../src/assets/adrian1.jpg'
function Biography() {
    return (
        <div>
            <CardStyle>
                <h1>Adrian Sartini</h1><br />
                <p>Hello! Welcome to my portfolio site. First, let me introduce myself:</p><br />
                <p>I am Adrian, originally from Venezuela, where I lived until I was 19. After that, I moved to Bogota, Colombia with my family where I lived for 3 years until I decided to start my own new life in Manchester, UK, where I have been living for over 4 years.</p>
                <br />
                <img className="cardImage" src={adrian1} alt="Adrian Sartini" /><br /><br /><br /><br />
                <p>Easy learner, loving the process, disciplined, and always looking for more are my principles.</p>
                <p>I began my career change at the beginning of this year, studying on my own and after completing the best Bootcamp in Manchester: Northcoders.</p>
                <p>I am currently seeking my first role as a Junior Software Developer. I am happy to show you the projects I have done so far in this cool app developed with React.</p>
            </CardStyle>
        </div>
    )
}

export default Biography
