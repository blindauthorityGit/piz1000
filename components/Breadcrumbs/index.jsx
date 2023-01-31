import React, { useState, useEffect } from "react";
import Link from "next/link";

const Breadcrumbs = (props) => {
    useEffect(() => {}, []);

    return (
        <div className={`container m-auto  h-12 px-8 sm:px-24 mt-4 sm:mt-8 text-sm  ${props.colspan}`}>
            <div className="">
                {props.links.map((e, i) => {
                    return (
                        <>
                            <Link href={e.link}>
                                <a
                                    className={`font-oswald font-bold hover:opacity-100 ${
                                        i + 1 < props.links.length ? "opacity-50" : null
                                    }`}
                                >
                                    {e.title}
                                </a>
                            </Link>
                            {i + 1 < props.links.length ? <span className="px-2">/</span> : null}
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Breadcrumbs;
