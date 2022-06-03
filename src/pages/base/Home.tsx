import { Link } from "react-router-dom";
import ActiveButton from "../../components/ActiveButton";
import AnimatedIcon from "../../components/AnimatedIcon";

const Home = () => {
    return (
        <section className="w-full">
            <div className="md:px-8 px-5 py-24 h-fit max-w-4xl mx-auto relative">
                <span className="text-6xl leading-[3rem] md:text-8xl md:leading-[5.5rem] font-black tracking-tighter">
                    Make your <br />
                    <span className="bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 text-transparent bg-clip-text">
                        mark.
                    </span>
                </span>
                <div className="py-8 text-2xl tracking-tight max-w-md dark:text-gray-400">
                    Write and connect with other writers on topics that matter.
                </div>
                <Link to="signup">
                    <ActiveButton py={"py-2"} px={"px-8"} content={<span>Start exploring &rarr;</span>} />
                </Link>
                <AnimatedIcon
                    cOptions={"bottom-56 right-24 hidden lg:inline"}
                    aOptions={"bottom-60 right-14 hidden lg:inline"}
                    cSize={21}
                    aSize={96}
                />
            </div>
            <div className="text-xl mx-auto p-8 max-w-5xl hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quisquam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Tempora quisquam dolore possimus accusamus, suscipit magnam doloribus
                eius! Tempora blanditiis, quidem consequuntur dolorem harum ullam fugiat accusamus velit laudantium,
                pariatur error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis eveniet
                sequi praesentium consequatur totam voluptatibus. Mollitia qui repellendus officiis quas quod optio
                recusandae nobis corporis tempora voluptatibus? Veniam unde voluptatem deleniti aliquam dignissimos rem
                ipsa odio fugit minus qui suscipit dolor atque, temporibus quos corrupti sunt labore molestias autem
                molestiae quibusdam, nisi accusantium delectus earum! Quo magnam earum eos atque laborum porro, corrupti
                dolores, facere consectetur iusto ratione iure numquam, beatae sequi nostrum officiis quod iste
                cupiditate totam sunt recusandae. Quo vel at consectetur, modi non dolore! Esse est tenetur in. Iusto
                eos minus laborum adipisci unde et ex modi impedit, quod rerum provident amet, cumque pariatur fuga cum?
                Unde quae quos animi nemo eveniet laudantium est error veniam natus soluta non exercitationem recusandae
                facilis ipsum optio illum quo perspiciatis, nihil consequatur aut numquam! Ea, laborum. Quasi, cum
                error. Harum corrupti, consequatur perspiciatis suscipit repellat doloribus numquam quasi, ratione
                aspernatur voluptatem debitis error. Totam nam ut, praesentium unde iste officia ex quas magnam
                reprehenderit aspernatur, quos corrupti saepe perferendis aperiam a doloremque impedit ea! Neque
                exercitationem cupiditate soluta deserunt distinctio, veritatis enim nesciunt totam dignissimos? Commodi
                unde totam dicta pariatur facilis, maiores, quidem recusandae eius nostrum excepturi necessitatibus
                error?
            </div>
        </section>
    );
};

export default Home;
