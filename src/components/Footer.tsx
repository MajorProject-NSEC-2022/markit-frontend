import { Link } from "react-router-dom";
import GitHub from "../assets/icons/GitHub";
import Logo from "../assets/images/Logo";

const Footer = () => {
    return (
        <footer className="dark:bg-[#111]  bg-gray-100 text-gray-500 h-fit w-full box-border block flex-shrink-0 border-t dark:border-gray-800 border-gray-300">
            <div className="md:px-8 px-5 py-24 max-w-5xl mx-auto">
                <div className="flex justify-between items-center text-sm gap-8 flex-wrap">
                    <div className="flex flex-col gap-2">
                        <Link to="/" className="dark:text-white text-black">
                            <Logo size={16} />
                        </Link>
                        Copyright © 2022 The Markit Team
                    </div>
                    <a href="http://github.com" target="_blank" rel="noopener noreferrer" className="flex gap-2">
                        <GitHub size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
