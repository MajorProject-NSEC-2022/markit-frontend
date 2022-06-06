import { Theme } from "../providers/context/ThemeContext";

const ScrollbarThemeController = (theme: Theme) => {
    document.documentElement.setAttribute("data-color-scheme", theme === "dark" ? "dark" : "light");
};

export default ScrollbarThemeController;
