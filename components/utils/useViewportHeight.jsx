import React, { useState, useEffect } from "react";

const useViewportHeight = () => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (height === 0) {
                setHeight(window.innerHeight);
            }
            const handleResize = () => setHeight(window.innerHeight);
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [height]);

    return height;
};

export default useViewportHeight;
