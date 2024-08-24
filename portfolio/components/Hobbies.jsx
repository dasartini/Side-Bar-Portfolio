import CardStyle from "../styles/CardStyle";
import Photos from "./Photos";



function Hobbies() {
    return (
        <CardStyle>
            <div> 
                <div className='cardStyle'>
                <h1>Hobbies</h1><br />
                <p>Fitness is important to me; I train in the gym and love riding my bicycle, exploring urban areas, and playing various sports.</p>
                <p>Travelling is one of my passions. Numerous countries in the Americas and Europe have enriched my life, offering unique cultural experiences, whether traveling solo or with my family.</p>
               
                <br />
                <br />
<div>
<Photos />
              
                </div>
          
                <p>Languages are another interest. Fluent in Spanish, Italian, and Portuguese, I'm currently learning Polish.</p>
                <p>Continuous learning keeps me motivated and fulfilled.</p>
                </div>
            </div>
            
        </CardStyle>
        
    );
}

export default Hobbies;
