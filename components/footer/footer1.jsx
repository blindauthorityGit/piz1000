import React, { useState } from "react";
import Link from "next/link";
import { config } from "./config";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";
import Image from "next/image";
import parse from "html-react-parser";

const Footer1 = (props) => {
    return (
        <div className={`w-full container px-6 sm:px-24 m-auto lg:gap-16 grid grid-cols-12 mb-16 ${props.colspan}`}>
            <hr className="col-span-12 mb-4 sm:mb-0" />
            <div className="col-span-12 mb-6 sm:mb-0 sm:col-span-3 first">
                <h4 className="font-oswald text-xl lg:text-xl font-semibold mb-8 lg:mb-8 ">{config.headline1}</h4>
                <p className="mb-6">{parse(config.adresse)}</p>
                <p>{parse(config.kontakt)}</p>
            </div>
            <div className="col-span-12 sm:col-span-3 mb-6 sm:mb-0 first">
                <h4 className="font-oswald text-xl lg:text-xl font-semibold mb-8 lg:mb-8 ">{config.headline2}</h4>
                <p className="mb-6">{parse(config.oeffnungszeiten)}</p>
                <p>{parse(config.oeffnungszeitenText)}</p>
            </div>
            <div className="col-span-12 sm:col-span-3 mb-6 sm:mb-0 sm:col-span-3 first">
                <h4 className="font-oswald text-xl lg:text-xl font-semibold mb-8 lg:mb-8 ">{config.headline3}</h4>
                <div className="relative h-16">
                    <Link href={config.partner1Link}>
                        <a>
                            <Image
                                // {...ImagePropsGallery(i)}
                                src={config.partner1}
                                loading="lazy"
                                width={100}
                                height={60}
                                alt="hero"
                            />
                        </a>
                    </Link>
                </div>
                <div className="relative h-16">
                    <Link href={config.partner2Link}>
                        <a>
                            <Image
                                // {...ImagePropsGallery(i)}
                                src={config.partner2}
                                loading="lazy"
                                width={100}
                                height={60}
                                alt="hero"
                            />
                        </a>
                    </Link>
                </div>
            </div>
            <div className="col-span-12 mb-6 sm:mb-0 sm:col-span-3 first">
                <h4 className="font-oswald text-xl lg:text-xl font-semibold mb-8 lg:mb-8 ">{config.headline4}</h4>
                {config.linksTitles.map((e, i) => {
                    return (
                        <Link href={config.links[i]}>
                            <a className="block hover-underline-animation">
                                <span>{e}</span>
                            </a>
                        </Link>
                    );
                })}
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
                    height: 1px;
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

export default Footer1;
