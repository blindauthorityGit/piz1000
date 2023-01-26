import React, { useState } from "react";

import { config } from "./config";

import Image from "next/image";
import Siegel from "../../assets/siegel.svg";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const StoererLine = (props) => {
    return (
        <div className={`w-full container  sm:px-24 m-auto lg:gap-16 grid grid-cols-12  ${props.colspan}`}>
            <div className="relative h-36 col-span-12">
                <Image
                    // {...ImagePropsGallery(i)}
                    src={Siegel}
                    layout="fill"
                    loading="lazy"
                    objectFit="contain"
                    alt="hero"
                />
            </div>
        </div>
    );
};

export default StoererLine;
