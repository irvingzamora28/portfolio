import Link from "next/link";
import React from "react";

const PostListItem: React.FC<PostListItemProps> = (props) => {
    // TODO: remove duplicate generateFormattedText function from Paragraph and PostListItem components
    /**
     * Parses new lines in text and returns an array of JSX elements.
     * @param {string} text - The text to parse new lines from.
     * @return {JSX.Element[]} An array of JSX elements representing the parsed text.
     */
    const parseNewLines = (text: string): JSX.Element[] => {
        // If the text has a newline character, split it into lines and add a <br /> tag
        // between each line to create a JSX.Element array. Otherwise, wrap the text in a fragment.
        return text.indexOf("\n") > 1
            ? text.split("\n").map((line, index) => {
                  return (
                      <React.Fragment key={index}>
                          {line}
                          <br />
                      </React.Fragment>
                  );
              })
            : [<>{text}</>];
    };

    /**
     * Generates an array of JSX elements representing formatted text.
     * @param {string} text - The text to format.
     * @return {JSX.Element[]} An array of JSX elements representing the formatted text.
     *
     */
    const generateFormattedText = (text: string): JSX.Element[] => {
        // A regular expression that matches bolded text wrapped in two asterisks (**...**) but not three asterisks (***...***).
        const boldRegex = /\*{2}([^*]+)\*{2}(?!\*)/g;
        // A regular expression that matches link text wrapped in three asterisks (***...***)
        const linkRegex = /\*{3}([^*]+)\*{3}/g;
        let parts: any[] = [];
        let match;

        // Loop through each regex match and add the corresponding JSX.Element to the parts array
        while ((match = boldRegex.exec(text)) !== null || (match = linkRegex.exec(text)) !== null) {
            // Extract the text before the match and add it to the parts array
            const before = text.slice(0, match.index);
            if (before.length > 0) {
                parts = [...parts, ...parseNewLines(before)];
            }

            if (match[0].startsWith("***")) {
                // if it's a link
                const hrefMatch = text.slice(match.index + 1).match(/\*{3}([^ ]+)/);
                if (!hrefMatch) {
                    throw new Error("Link text found but no link was provided");
                }
                const href = hrefMatch[1];

                parts.push(
                    <Link href={href} key={match.index} className={"text-blue-600"}>
                        {match[1]}
                    </Link>
                );
                // Remove the matched text and href from the text variable
                text = text.slice(match.index + match[0].length + href.length);
            } else {
                // if it's bolded text
                // Add a bolded text JSX.Element to the parts array
                parts.push(React.createElement("b", { key: match.index }, match[1]));
                // Remove the matched text from the text variable
                text = text.slice(match.index + match[0].length);
            }
        }

        if (text.length > 0) {
            parts = [...parts, ...parseNewLines(text)];
        }

        return parts;
    };

    return React.createElement("li", { className: "py-2 " + props.class }, generateFormattedText(props.text));
};

export default PostListItem;
