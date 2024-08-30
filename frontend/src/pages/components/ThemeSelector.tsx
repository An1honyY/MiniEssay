import { useState, useEffect } from "react";
import Moon from "../../assets/moon-svgrepo-com.svg";
import Sun from "../../assets/sun-2-svgrepo-com.svg";


function ThemeSelector() {


    //Other theme logic
    const [theme, setTheme] = useState(localStorage.theme ? localStorage.theme : 'light');
    console.log('theme on restart is', theme);
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) {
            htmlElement.setAttribute('data-theme', theme);
            localStorage.theme = theme;
        }
    }, [theme]);

    const icon = theme === 'dark' ? Sun : Moon;


    return (
        <label className="swap font-semibold">
            <input onClick={toggleTheme} type="checkbox" />
            <img className="swap-on" src={icon} />
            <img className="swap-off" src={icon} />
        </label>
    );
}
export default ThemeSelector;