import React, { useState } from "react";
import { config } from "./config";

import { ImageGrid1 } from "../imageGrids";
import { PortableText } from "@portabletext/react";

import Image from "next/image";
import parse from "html-react-parser";

const TextImg2 = (props) => {
    return (
        <div className={`w-full container  sm:px-24 m-auto lg:gap-16 grid grid-cols-12  ${props.colspan}`}>
            <div className="right px-8 sm:px-0 col-span-12 lg:col-span-6 flex flex-col justify-center ">
                {/* <p className="font-serif uppercase mt-4 lg:mt-0 text-base lg:text-lg mb-4">{config.topTitle}</p> */}
                <h2 className="font-oswald text-4xl lg:text-6xl font-semibold mb-8 lg:mb-12">{props.data.title}</h2>
                <div className="text font-serif">
                    {" "}
                    <PortableText value={props.data.text} />
                </div>
            </div>
            <div className={`left col-span-12 lg:col-span-6 relative h-[460px] mt-8 lg:h-auto ${props.order}`}>
                <ImageGrid1
                    onClick={(e) => {
                        console.log(e.target);
                    }}
                ></ImageGrid1>
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

export default TextImg2;
