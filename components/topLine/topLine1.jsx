import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

const TopLine1 = (props) => {
    return (
        <nav className={`w-full bg-red-500 h-12   ${props.colspan}`}>
            <div className="container m-auto grid grid-cols-12">
                {/* <div className="col-span-4">{props.data.oeffnungszeiten.description}</div> */}
            </div>
        </nav>
    );
};

export default TopLine1;
