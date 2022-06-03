import { Theme } from "../config/context/ThemeContext";

export const ScrollbarThemeController = (theme: Theme) => {
    document.documentElement.setAttribute("data-color-scheme", theme === "dark" ? "dark" : "light");
};
