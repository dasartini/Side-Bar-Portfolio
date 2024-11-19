import SkillsStyles from "../styles/SkillsStyle";

function Skills() {
    return (
        <SkillsStyles>
            <div className="skillsContainer">
                <div className="skillsRow">
                    <div className="card backend">
                        <h4>Back-end</h4>
                        <ul>
                            <ol><p>✅ JavaScript with Node.js</p></ol>
                            <ol><p>✅ TypeScript</p></ol>
                            <ol><p>✅ SQL and PSQL</p></ol>
                            <ol><p>✅ MongoDB</p></ol>
                            <ol><p>✅ Testing Jest, Supertest using Husky</p></ol>
                            <ol><p>✅ Firebase (as database and auth)</p></ol>
                        </ul>
                    </div>
                    <div className="card hosting">
                        <h4>Hosting</h4>
                        <ul>
                            <ol><p>✅ Cloudflare</p></ol>
                            <ol><p>✅ Expo </p></ol>
                            <ol><p>✅ Render</p></ol>
                            <ol><p>✅ ElephantSQL</p></ol>
                            <ol><p>✅ Netlify</p></ol>
                        </ul>
                    </div>
                <div className="card frontend">
                    <h4>Front-end</h4>
                    <ul>
                        <ol><p>✅ HTML</p></ol>
                        <ol><p>✅ CSS</p></ol>
                        <ol><p>✅ React and React Native</p></ol>
                        <ol><p>✅ Expo</p></ol>
                        <ol><p>✅ Vite</p></ol>
                        <ol><p>✅ Bootstrap</p></ol>
                        <ol><p>✅ Lighthouse and other accessibility tools</p></ol>
                    </ul>
                </div>
                </div>
            </div>
        </SkillsStyles>
    );
}

export default Skills;
