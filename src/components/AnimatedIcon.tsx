import Circle from "../assets/images/Circle";
import Arrow from "../assets/images/Arrow";

const AnimatedIcon = (props: { cOptions?: string; aOptions?: string; cSize: number; aSize: number }) => {
    return (
        <div>
            <div className={`absolute ${props.cOptions} animate-bounce`}>
                <Circle size={props.cSize} />
            </div>
            <div className={`absolute ${props.aOptions} animate-bounce`}>
                <Arrow size={props.aSize} />
            </div>
        </div>
    );
};

export default AnimatedIcon;
