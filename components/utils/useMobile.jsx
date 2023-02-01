import React, { useState, useEffect } from "react";

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const query = "(max-width: 767px)";
        const media = window.matchMedia(query);
        const handleMediaChange = () => setIsMobile(media.matches);

        media.addListener(handleMediaChange);
        handleMediaChange();

        return () => media.removeListener(handleMediaChange);
    }, []);

    return isMobile;
};

export default useMobile;
