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
            <div className={`grid grid-cols-12 xl:h-full  ${props.colspan}`}>
                <div className="col-span-12 xl:col-span-3  bg-primary font-oswald p-3 xl:h-full text-center text-white xl:p-8">
                    <div className="image relative p-4 hidden xl:block">
                        <Image
                            // {...ImagePropsGallery(i)}
                            src={urlFor(props.icon).url()}
                            layout="responsive"
                            width={100}
                            height={100}
                            loading="lazy"
                            objectFit="contain"
                            alt="hero"
                        />
                    </div>
                    <div className="title text-2xl font-bold">{props.title}</div>
                </div>
                <div className="col-span-12 xl:col-span-9  xl:h-full bg-lightGrey px-8 py-4 sm:py-8">
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
