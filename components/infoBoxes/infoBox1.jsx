import React, { useState } from "react";
import Link from "next/link";
import Element from "./element";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const InfoBox1 = (props) => {
    return (
        <div className="w-full container  sm:px-24 m-auto gap-4 lg:gap-16 grid grid-cols-12">
            {props.data.map((e, i) => {
                return <Element key={`infoKey${i}`} icon={e.icon} title={e.title} text={e.text}></Element>;
            })}
        </div>
    );
};

export default InfoBox1;
