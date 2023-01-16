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

const Stoerer1 = (props) => {
    return (
        <div className={`w-full container  sm:px-24 m-auto lg:gap-16 grid grid-cols-12  ${props.colspan}`}>
            <div className={`left col-span-12 relative h-96 sm:h-32 lg:h-auto ${props.order}`}>
                <div className="w-full h-full px-6 absolute flex flex-col justify-center items-center z-20">
                    <div className="relative h-16 w-16 w-full sm:h-32 sm:w-32 mb-10">
                        <Image
                            // {...ImagePropsGallery(i)}
                            src={config.icon}
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            alt="hero"
                        />
                    </div>
                    <h2 className="font-oswald text-4xl lg:text-6xl font-semibold mb-8 lg:mb-12 text-white">
                        {props.data.title}
                    </h2>
                    <div className="text font-serif text-center text-white">
                        {props.data.excerpt}
                        <PortableText value={props.data.excerpt[0]} />
                    </div>
                    <Link href={props.data.link}>
                        <button className="bg-white border border-black text-black hover-underline-animation  flex items-center justify-center text-white mt-8 py-3 px-6 w-full lg:w-auto min-w-[10rem] lg:max-w-[12rem] font-oswald uppercase rounded-md">
                            <span className="">Weiter</span>
                        </button>
                    </Link>
                </div>
                <div className="overlay absolute w-full h-full bg-black z-10 opacity-30"></div>
                <div className="relative hidden sm:block">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.data.image).url()}
                        layout="responsive"
                        width={960}
                        height={480}
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                    />
                </div>
                <div className="relative sm:hidden block h-full">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.data.image).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                    />
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

export default Stoerer1;
