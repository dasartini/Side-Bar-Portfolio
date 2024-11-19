import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/Theme";

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
        <button className="switch" onClick={handleClick}>
            <p className={theme}>SWITCH COLOR</p>
        </button>
    );
}

export default ThemeSwitch