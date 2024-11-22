import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/Theme";
import SwitchS from "../styles/SwitchS";
import moon from "../src/assets/moon.svg"
import sun from "../src/assets/sun.svg"

function ThemeSwitch() {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, [setTheme]);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    function handleClick() {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }

    return (
    <SwitchS>
    <div className="switchContainer">
        <label className="switch">
        <input onChange={handleClick}type="checkbox"/>
        <span className="slider"></span>

      </label>
      {theme === "light"?<img className= "switchIconSun" src={sun}/> :<img className= "switchIcon" src={moon}/> }
        
      </div>
      </SwitchS>
    );
}

export default ThemeSwitch