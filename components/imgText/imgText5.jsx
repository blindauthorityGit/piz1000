import React, { useState } from "react";

import { PortableText } from "@portabletext/react";

//ImageBuilder

import Image from "next/image";
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const serializers = {
    types: {
        image: (props) => {
            return <img src={props.node.asset.url} alt={props.node.alt} />;
        },
    },
};

const myPortableTextComponents = {
    types: {
        image: ({ value }) => {
            console.log(value);
            if (!value) return null;
            return (
                <div className="relative unset-img mb-8 mt-2">
                    <Image
                        src={urlFor(value).url()}
                        layout="fill"
                        loading="lazy"
                        alt={value.alt ? value.alt : "Bild"}
                        sizes="(max-width: 800px) 100vw, 800px"
                        className="custom-img mb-2"
                    />
                    {value.caption ? <div className="caption mt-2 italic text-right">{value.caption}</div> : null}
                </div>
            );
        },
    },
};

const TextImg5 = (props) => {
    return (
        <div className={`w-full container px-8 sm:px-24 m-auto lg:gap-4 grid grid-cols-12  ${props.colspan}`}>
            <div
                className={`left col-span-12 lg:col-span-8 relative  lg:h-auto ${
                    props.data.order ? "order-last" : "order-first"
                }`}
            >
                <h2 className="font-oswald text-4xl lg:text-6xl font-semibold mb-2 lg:mb-6">{props.data.title}</h2>
                <p className="font-serif italic mt-2 lg:mt-0 text-base lg:text-lg mb-8">{props.data.subTitle}</p>
                <div className="text font-serif text-sm leading-relaxed">
                    <PortableText value={props.data.text} components={myPortableTextComponents} />
                </div>
            </div>
            <div className="right sm:px-2 sm:px-0 col-span-12 lg:col-span-6 ">{props.children}</div>
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

export default TextImg5;
