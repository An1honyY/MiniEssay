import { useEffect, useContext } from "react";
import Moon from "../../assets/moon-svgrepo-com.svg";
import Sun from "../../assets/sun-2-svgrepo-com.svg";
import { ThemeContext } from "../../context/ThemeContext";


function ThemeSelector() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const icon = theme === 'dark' ? Sun : Moon;

    useEffect(() => {
        // saves the theme to html data-theme attribute so DaisyUI can use it
        document.querySelector('html')!.setAttribute('data-theme', theme);
        // saves the theme to localStorage so we can remember it when refreshing the page
        localStorage.theme = theme;
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