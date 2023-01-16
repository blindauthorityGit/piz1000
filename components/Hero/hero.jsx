import React from "react";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const Hero = (props) => {
    return (
        <div className={`container m-auto ${props.fullHeight ? "h-full" : props.height} ${props.colspan}`}>
            {/* Background Image */}
            <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${urlFor(props.bgImage)})` }}
            ></div>
        </div>
    );
};

export default Hero;
