import React from "react";

interface Props {
    class: string;
    text: string;
}

const Paragraph: React.FC<Props> = (props) => {
    // TODO: remove duplicate parseText function from Paragraph and ListItem components
    const parseText = (text: string): any[] => {
        const boldRegex = /\*{2}([^*]+)\*{2}/g;
        let parts: any[] = []; // initialize an empty array to store parsed elements
        let match;
      
        while ((match = boldRegex.exec(text)) !== null) {
          const before = text.slice(0, match.index); // get the text before the bolded text
          if (before.length > 0) { // check if there is any text before the bolded text
            parts = [...parts, ...parseNewLines(before)]; // add any new lines to the parts array
          }
      
          parts.push(React.createElement("b", { key: match.index }, match[1])); // add the bolded text to the parts array
      
          text = text.slice(match.index + match[0].length); // update the text to remove the bolded text
        }
      
        if (text.length > 0) { // check if there is any remaining text
          parts = [...parts, ...parseNewLines(text)]; // add any new lines to the parts array
        }
      
        return parts; // return the final parts array
      };
      
      const parseNewLines = (text: string): any[] => {
        return text.split("\n").map((line, index) => {
          return (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          );
        });
      };
      

    return React.createElement("p", { className: "py-2 " + props.class }, parseText(props.text));
};

export default Paragraph;
