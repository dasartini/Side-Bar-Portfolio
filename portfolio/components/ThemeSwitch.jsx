import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/Theme";
import SwitchS from "../styles/SwitchS";

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
    <div>
        <label className="switch">
        <input onChange={handleClick}type="checkbox"/>
        <span className="slider"></span>
      </label>
      </div>
      </SwitchS>
    );
}

export default ThemeSwitch