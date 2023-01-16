import React, { useState } from "react";
import Link from "next/link";
import { config } from "./config";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";
import Image from "next/image";
import parse from "html-react-parser";
import { PortableText } from "@portabletext/react";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const TextImg3 = (props) => {
    return (
        <div className={`w-full container  sm:px-24 m-auto lg:gap-16 grid grid-cols-12  ${props.colspan}`}>
            <div
                className={`left col-span-12 lg:col-span-8 relative  lg:h-auto ${
                    props.data.order ? "order-last" : "order-first"
                }`}
            >
                <h2 className="font-oswald text-4xl lg:text-6xl font-semibold mb-2 lg:mb-6">{props.data.title}</h2>
                <p className="font-serif italic mt-2 lg:mt-0 text-base lg:text-lg mb-8">{props.data.subTitle}</p>
                <div className="text font-serif">
                    <PortableText value={props.data.text[0]} />
                </div>
            </div>
            <div className="right px-8 sm:px-0 col-span-12 lg:col-span-4 ">{props.children}</div>
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

export default TextImg3;
