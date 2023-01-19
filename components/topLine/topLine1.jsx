import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { config } from "./config";

const TopLine1 = (props) => {
    return (
        <nav className={`w-full bg-red-500 h-12 font-serif font-semibold text-white    ${props.colspan}`}>
            <div className="container m-auto flex items-center justify-around h-full text-xs">
                <div className="col-span-4 opacity-80 hidden sm:block">{config.oeffnungszeiten}</div>
                <div className="col-span-4 opacity-80 ">{config.phone}</div>
                <div className="col-span-4 opacity-80 ">{config.email}</div>
                <div className="col-span-4 opacity-80 hidden sm:block">{config.partner1}</div>
                <div className="col-span-4 opacity-80 hidden sm:block">{config.partner2}</div>
            </div>
        </nav>
    );
};

export default TopLine1;
