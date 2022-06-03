import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useTheme } from "./config/context/ThemeContext";
import { ScrollbarThemeController } from "./utils/ScrollbarColorController";

function App() {
    const { theme } = useTheme();
    ScrollbarThemeController(theme);
    return (
        <div className={`App ${theme} w-full min-h-fit h-full`}>
            <div className="flex flex-col dark:bg-black dark:text-white bg-white text-black w-screen min-h-fit h-full overflow-auto box-content">
                <Navbar />
                <div className="shnk">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
