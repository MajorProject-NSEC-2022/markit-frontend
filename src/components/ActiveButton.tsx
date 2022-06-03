import React from "react";

const ActiveButton = (props: {
    py: string;
    px: string;
    content: React.ReactNode;
    textSize?: string;
    action?: () => void;
    optional?: string;
}) => {
    return (
        <button
            type="button"
            onClick={props.action}
            className={`${props.py} ${props.px} text-${props.textSize} select-none dark:bg-white dark:text-black bg-black text-white dark:hover:text-white hover:text-black rounded-lg dark:hover:bg-transparent hover:bg-transparent hover:outline outline-2 outline-offset-[-2px] w-fit ${props.optional}`}
        >
            {props.content}
        </button>
    );
};

export default ActiveButton;
