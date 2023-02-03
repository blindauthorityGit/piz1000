import React, { useState } from "react";
import Link from "next/link";

const Element = (props) => {
    return (
        <div className="h-full">
            <Link href={`/events/${props.link}`}>
                <a className="hover:opacity-80">
                    <div className={`grid grid-cols-12 h-full items-center justify-center  ${props.colspan}`}>
                        <div className="col-span-4 bg-primary font-oswald p-4 h-full flex flex-col items-center justify-center text-center text-white">
                            <div className="font-oswald font-bold text-xl">
                                {props.date.split("-")[2]}.{props.date.split("-")[1]}.
                            </div>
                            <div className="font-oswald font-bold text-lg opacity-70">{props.year.split("-")[0]}</div>
                        </div>
                        <div className="col-span-8 pl-4 h-full">
                            <div className="font-oswald font-bold">{props.title}</div>
                            <div className="font-serif ">Beginn: {props.time}</div>
                            <div className="font-serif ">{props.subline}</div>
                        </div>
                    </div>
                </a>
            </Link>
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
