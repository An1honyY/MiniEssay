import { useEffect, useContext } from "react";
import Moon from "../../assets/moon-svgrepo-com.svg";
import Sun from "../../assets/sun-2-svgrepo-com.svg";
import { ThemeContext } from "../../context/ThemeContext";


function ThemeSelector() {
    
    const {theme, toggleTheme} = useContext(ThemeContext);
    const icon = theme === 'dark' ? Sun : Moon;

    // initially save theme var to storage and "listen" for changes to apply them to the HTML tag
    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) {
            htmlElement.setAttribute('data-theme', theme);
            localStorage.theme = theme;
        }
    }, [theme]);

    return (
        <label className="swap font-semibold">
            <input onClick={toggleTheme} type="checkbox" />
            <img className="swap-on" src={icon} />
            <img className="swap-off" src={icon} />
        </label>
    );
}
export default ThemeSelector;