import ContactCard from "../styles/ContactCard";


function Contact() {
    return (
        <ContactCard>
            <div>
                <div className="card-container">
                    <span className="junior">Junior</span>
                    <img className="profilePictureRound" src="../src/assets/me.jpg" alt="user" />
                    <h3>Adrian Sartini</h3>
                    <h6>Manchester</h6>
                    <p>Full Stack Software Engineer</p>
                    <div className="buttons">
                        <li className="primary">adriansartinid@gmail.com</li>
                        <li className="secondary">07923 836 307</li>
                    </div>
                    <div className="skills">
                        <h6>Skills</h6>
                        <ul>
                            <li>UI / UX</li>
                            <li>BackEnd</li>
                            <li>Front End</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Firebase</li>
                            <li>SQL</li>

                        </ul>
                    </div>
                </div>

            </div>
        </ContactCard>
    );
}

export default Contact;
