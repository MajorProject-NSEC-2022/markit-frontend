import Logo from "../assets/images/Logo";
import { Link } from "react-router-dom";
import CircleHalfStroke from "../assets/icons/CircleHalfStroke";
import { useTheme, Theme } from "../config/context/ThemeContext";
import ActiveButton from "./ActiveButton";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <nav className="w-full sticky top-0 bg-inherit z-10">
            <div className="md:p-8 p-5 flex items-center justify-between max-w-5xl h-20 mx-auto">
                <Logo size={30} />
                <div className="flex items-center dark:text-gray-400 text-gray-500">
                    <Link
                        className="p-2 cursor-pointer text-sm dark:hover:text-gray-100 hover:text-black select-none hidden fold-md:inline"
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="p-2 cursor-pointer text-sm dark:hover:text-gray-100 hover:text-black select-none hidden fold-md:inline"
                        to="about"
                    >
                        About
                    </Link>

                    {/* Login */}

                    <Link className="" to="signup">
                        <ActiveButton
                            py={"py-1"}
                            px={"px-4"}
                            content={<span>Sign up</span>}
                            textSize={"sm"}
                            optional={"mx-2 hidden fold:inline"}
                        />
                    </Link>

                    <span className="hidden fold:inline">|</span>
                    <button
                        type="button"
                        className="ml-2 dark:hover:text-gray-100 hover:text-black"
                        onClick={() => setTheme(theme === "dark" ? Theme.light : Theme.dark)}
                    >
                        <CircleHalfStroke size={18} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
