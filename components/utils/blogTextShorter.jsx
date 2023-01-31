import { useMemo, useState, useEffect } from "react";

function BlogTextShorter({ blocks }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        console.log(window.innerWidth <= 768);
    }, []);

    const shortText = useMemo(() => {
        let fullText = "";
        blocks.forEach((block) => {
            if (block._type !== "image") {
                fullText += block.children[0].text;
            }
        });

        if (isMobile ? fullText.length <= 180 : fullText.length <= 300) {
            return fullText;
        } else {
            let shortText = fullText.slice(0, isMobile ? 177 : 297) + "...";
            let lastSpace = shortText.lastIndexOf(" ");
            return shortText.slice(0, lastSpace) + "...";
        }
    }, [blocks]);

    return shortText;
}

export default BlogTextShorter;
