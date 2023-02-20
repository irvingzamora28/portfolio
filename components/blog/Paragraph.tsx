import Link from "next/link";
import React from "react";

interface Props {
    class: string;
    text: string;
}

const Paragraph: React.FC<Props> = (props) => {
    // TODO: remove duplicate generateFormattedText function from Paragraph and ListItem components
    const parseNewLines = (text: string): JSX.Element[] => {
      return text.indexOf('\n') > 1 ? text.split('\n').map((line, index) => {
        return (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        );
      }) : [<>{text}</>];
    };

    const generateFormattedText = (text: string): JSX.Element[] => {
      const boldRegex = /\*{2}([^*]+)\*{2}(?!\*)/g;
      const linkRegex = /\*{3}([^*]+)\*{3}/g;
      let parts: any[] = [];
      let match;
    
      while ((match = boldRegex.exec(text)) !== null || (match = linkRegex.exec(text)) !== null) {
        const before = text.slice(0, match.index);
        if (before.length > 0) {
          parts = [...parts, ...parseNewLines(before)];
        }
    
        if (match[0].startsWith('***')) { // if it's a link
          const hrefMatch = text.slice(match.index+1).match(/\*{3}([^ ]+)/);
          if (!hrefMatch) {
            throw new Error('Link text found but no link was provided');
          }
          const href = hrefMatch[1];
    
          parts.push(
            <Link href={href} key={match.index} className={"text-blue-600"}>
              {match[1]}
            </Link>
          );
    
          text = text.slice(match.index + match[0].length + href.length);
        } else { // if it's bolded text
          parts.push(React.createElement("b", { key: match.index }, match[1]));
          text = text.slice(match.index + match[0].length);
        }
      }
    
      if (text.length > 0) {
        parts = [...parts, ...parseNewLines(text)];
      }
    
      return parts;
    };
    

    return React.createElement("p", { className: "py-2 " + props.class }, generateFormattedText(props.text));
};

export default Paragraph;
