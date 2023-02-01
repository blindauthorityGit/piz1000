import React, { useState, useEffect } from "react";

const useViewportHeight = () => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHeight(window.screen.availHeight);
            const handleResize = () => setHeight(window.screen.availHeight);
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    return height;
};

export default useViewportHeight;
