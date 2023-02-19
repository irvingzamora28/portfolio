import React from "react";

interface Props {
    class: string;
    text: string;
}

const ListItem: React.FC<Props> = (props) => {
    const boldRegex = /\*\*(.*?)\*\*/g;

    const parseText = (text: string): any[] => {
        let parts: any[] = [];
        let match;

        while ((match = boldRegex.exec(text)) !== null) {
            const before = text.slice(0, match.index);
            if (before.length > 0) {
                parts.push(before);
            }

            parts.push(
                React.createElement("b", { key: match.index }, match[1])
            );

            text = text.slice(match.index + match[0].length);
        }

        if (text.length > 0) {
            parts.push(text);
        }

        return parts;
    };

    return React.createElement(
        "li",
        {className: "py-2 " + props.class },
        parseText(props.text)
    );
};

export default ListItem;
