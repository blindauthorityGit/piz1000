import React, { useState } from "react";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const Hero = (props) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className={`container relative m-auto ${props.fullHeight ? "h-full" : props.height} ${props.colspan}`}>
            {/* Background Image */}
            {loading && (
                <div className="spinner z-50  h-full items-center flex justify-center">
                    <ClipLoader
                        color={"#a22010"}
                        loading={loading}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}
            <div className="w-full h-full bg-cover bg-center">
                <Image
                    // {...ImagePropsGallery(i)}
                    src={urlFor(props.bgImage).url()}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    onLoad={() => {
                        console.log("LOADING");
                        setLoading(false);
                    }}
                />
            </div>
        </div>
    );
};

export default Hero;
