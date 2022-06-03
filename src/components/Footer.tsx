import GitHub from "../assets/icons/GitHub";
import Logo from "../assets/images/Logo";

const Footer = () => {
    return (
        <footer className="mt-24 dark:bg-[#111]  bg-gray-100 text-gray-500 h-fit w-full box-border block flex-shrink-0 border-t dark:border-gray-800 border-gray-300">
            <div className="md:px-8 px-5 py-24 max-w-5xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="dark:text-white text-black">
                        <Logo size={16} />
                    </div>
                    <GitHub size={20} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
