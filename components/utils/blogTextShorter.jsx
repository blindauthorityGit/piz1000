import { useMemo } from "react";

function BlogTextShorter({ blocks }) {
    const shortText = useMemo(() => {
        let fullText = "";
        blocks.forEach((block) => {
            if (block._type !== "image") {
                fullText += block.children[0].text;
            }
        });

        if (fullText.length <= 340) {
            return fullText;
        } else {
            let shortText = fullText.slice(0, 337) + "...";
            let lastSpace = shortText.lastIndexOf(" ");
            return shortText.slice(0, lastSpace) + "...";
        }
    }, [blocks]);

    return shortText;
}

export default BlogTextShorter;
