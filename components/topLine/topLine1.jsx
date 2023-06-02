import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { config } from "./config";

const TopLine1 = (props) => {
    // const date = new Date();
    // const month = date.getMonth() + 1;

    const [month, setMonth] = useState(0);

    useEffect(() => {
        const date = new Date();
        const month = date.getMonth() + 1;
        setMonth(month);
    }, []);

    return (
        <nav className={`w-full bg-primary h-8 sm:h-12 font-serif font-semibold text-white    ${props.colspan}`}>
            <div className="container m-auto flex items-center justify-around h-full text-xs">
                <div className="col-span-4 opacity-100 hidden sm:block">
                    {month >= 11 || month <= 3 ? config.oeffnungszeiten : config.oeffnungszeiten2}
                </div>
                <div className="col-span-4 opacity-100 ">{config.phone}</div>
                <div className="col-span-4 opacity-100 ">{config.email}</div>
                <div className="col-span-4 opacity-100 hidden sm:block">{config.partner1}</div>
                <div className="col-span-4 opacity-100 hidden sm:block">{config.partner2}</div>
            </div>
        </nav>
    );
};

export default TopLine1;
