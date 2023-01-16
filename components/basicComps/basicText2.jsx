import React, { useState } from "react";

import { PortableText } from "@portabletext/react";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const BasicText1 = (props) => {
    return (
        <div className={`w-full container  sm:px-24 m-auto   ${props.colspan}`}>
            <h2
                className={`font-oswald text-4xl lg:text-6xl font-semibold ${
                    props.data.subLine ? "mb-1 lg:mb-2" : "mb-8 lg:mb-12"
                }`}
            >
                {props.title}
            </h2>
            <div className="text font-serif">
                <PortableText value={props.data.anreise} />
            </div>
        </div>
    );
};

export default BasicText1;
