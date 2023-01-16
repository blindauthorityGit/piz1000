import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { PortableText } from "@portabletext/react";

//ImageBuilder
import myConfiguredSanityClient from "../../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const Element = (props) => {
    return (
        <div className="col-span-12 lg:col-span-6">
            <div className={`grid grid-cols-12 h-full  ${props.colspan}`}>
                <div className="col-span-3 bg-primary font-oswald p-4 h-full text-center text-white">
                    <div className="image">
                        <Image
                            // {...ImagePropsGallery(i)}
                            src={urlFor(props.icon).url()}
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            alt="hero"
                        />
                    </div>
                    <div className="title">{props.title}</div>
                </div>
                <div className="col-span-9 pl-4 h-full">
                    <div className="font-serif">
                        <PortableText value={props.text} />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .hover-underline-animation span {
                    display: inline-block;
                    position: relative;
                    color: #000;
                }

                .hover-underline-animation span::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: black;
                    transform-origin: bottom right;
                    transition: transform 0.25s ease-out;
                }

                .hover-underline-animation:hover span::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
          
            `}</style>
        </div>
    );
};

export default Element;
