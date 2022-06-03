import AnimatedIcon from "../../components/AnimatedIcon";

const SignUp = () => {
    return (
        <div className="md:px-8 px-5 md:py-24 py-12 h-fit max-w-5xl mx-auto">
            <div className="relative h-24 hidden fold-lg:block">
                <AnimatedIcon
                    cOptions={"bottom-0 right-[29.25rem] hidden lg:inline"}
                    aOptions={"bottom-4 right-[26.75rem] hidden lg:inline"}
                    cSize={21}
                    aSize={96}
                />
            </div>
            <div className="font-black text-3xl text-center pt-24 tracking-tight">
                Ready to leave your mark?
                <div className="text-4xl pt-4">Hop in!</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 py-16 w-full">
                <input
                    id="inputId"
                    className="h-12 px-3 w-full max-w-[360px] bg-transparent border dark:placeholder:text-gray-500 dark:border-gray-800 border-gray-300 rounded-md dark:focus:border-blue-400 focus:border-blue-400 outline-none"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    className="h-12 px-3 w-full max-w-[360px] bg-transparent border dark:placeholder:text-gray-500 dark:border-gray-800 border-gray-300 rounded-md dark:focus:border-blue-400 focus:border-blue-400 outline-none"
                    type="password"
                    placeholder="Password"
                />
                <button className="my-4 flex justify-center items-center h-12 px-3 w-full max-w-[360px] bg-blue-500 hover:text-blue-500 hover:bg-transparent hover:outline outline-2 outline-offset-[-2px] text-white rounded-md">
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default SignUp;