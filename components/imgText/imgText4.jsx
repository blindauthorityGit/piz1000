import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { PortableText } from "@portabletext/react";

import Siegel from "../../assets/siegelBG.svg";
//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const TextImg4 = (props) => {
    return (
        <div className={`w-full container  sm:px-24 m-auto lg:gap-16 grid grid-cols-12  ${props.colspan}`}>
            <div
                className={`left col-span-12 lg:col-span-8 relative   ${
                    props.data.order ? "lg:order-last" : "lg:order-first"
                }`}
            >
                <p className="font-serif uppercase mt-4 lg:mt-0 text-base lg:text-lg mb-4">{props.data.topTitle}</p>
                <h2
                    className={`font-oswald text-4xl lg:text-6xl font-semibold ${
                        props.data.subLine ? "mb-1 lg:mb-2" : "mb-8 lg:mb-12"
                    }`}
                >
                    {props.data.title}
                </h2>
                {props.data.subLine ? (
                    <p className="font-serif uppercase mt-4 lg:mt-0 text-base lg:text-lg mb-8">{props.data.subLine}</p>
                ) : null}
                <div className="relative h-[460px] mb-8">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.data.image).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                    />
                </div>
                <div className="text font-serif text-sm leading-relaxed">
                    <PortableText value={props.data.text} />
                </div>
                {props.data.link ? (
                    <Link href={props.data.link}>
                        <button className=" border border-black text-black hover-underline-animation  flex items-center justify-center text-white mt-8 py-3 px-6 w-full lg:w-auto min-w-[10rem] lg:max-w-[12rem] font-oswald uppercase rounded-md">
                            <span className=""> Mehr</span>
                        </button>
                    </Link>
                ) : null}
                <div className="mt-8">
                    <img src={Siegel.src} alt="Gütesiegel Museum" />
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

export default TextImg4;
