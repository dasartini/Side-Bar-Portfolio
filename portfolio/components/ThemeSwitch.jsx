import React, { useState,useContext } from 'react';
import Button from "../styles/Button";
import { ThemeContext } from '../contexts/Theme';

function ThemeSwitch() {
    
    
    const{setTheme, theme} =useContext(ThemeContext)

    // Step 1: Use state to track the current state of the switch
    const [count, setCount] = useState(0);

    // Step 2: Handle button clicks by updating the state
    function handleClick() {
        if(theme === "dark"){setTheme("light")}
        else if(theme === "light"){ setTheme("dark")}
        
        console.log(theme)
        setCount(count + 1); // Increment count by 1
        console.log(count); // This might log the previous count due to React's asynchronous state updates
    }

    return (
        <button className="switch" onClick={handleClick}>
            
            <p className={theme}>Piece of state: {count}</p> {/* Display the current state */}
        </button>
    );
}

export default ThemeSwitch;
