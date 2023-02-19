import React, { useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import ListItem from "./ListItem";
import Paragraph from "./Paragraph";

type Props = {
    data: {
        element: string;
        text: string;
        language?: string;
        id?: string;
        class?: string;
        src?: string;
    }[];
};

const Content: React.FC<Props> = (props) => {
    const data = props.data;

    const children = data.map((elem: any, index: number) => {
        // Do not render meta (This is the first element in blog's data)
        if (typeof elem.meta !== "undefined") {
            return <></>;
        }
        else if (elem.element === "code") {
            return (
                <div key={index} className="py-2">
                    <CopyBlock
                        text={elem.text}
                        language={elem.language}
                        showLineNumbers={true}
                        startingLineNumber={1}
                        wrapLines
                        theme={dracula}
                    />
                </div>
            );
        } else if (elem.element === "p") {
            return <Paragraph key={index} class={elem.class} text={elem.text} />
        } else if (elem.element === "li") {
            return <ListItem key={index} class={elem.class} text={elem.text} />
        } else {
            return React.createElement(
                elem.element,
                { key: index, className: "py-2 " + elem.class, id: elem.id, src: elem.src, },
                elem.text
            );
        }
    });
    useEffect(() => {
        console.log("Content component has been rendered");
    }, []);
    return <>{children}</>;
};

export default Content;
