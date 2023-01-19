import React, { useState } from "react";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const Info1 = (props) => {
    return (
        <div className={`w-full container sm:px-6 py-12 mt-6 lg:mt-36 m-auto  grid grid-cols-12 px-4 ${props.bg}`}>
            <div className={`left font-oswald font-bold text-lg col-span-4`}>Wann:</div>
            <div className={`right font-serif col-span-8 mb-4`}>
                {props.data.zeit.date.split("-").reverse().join(".")}
                <br></br>
                Beginn: {props.data.zeit.time}
            </div>
            <div className={`left  font-oswald font-bold text-lg  col-span-4`}>Wo:</div>
            <div className={`right font-serif col-span-8 mb-4`}>{props.data.location}</div>
            <div className={`left  font-oswald font-bold text-lg  col-span-4`}>Eintritt:</div>
            <div className={`right font-serif col-span-8 mb-4`}>{props.data.preis}</div>
            <div className={`left  font-oswald font-bold text-lg  col-span-4`}>Kontakt:</div>
            <div className={`right font-serif col-span-8 mb-4`}>{props.data.kontakt}</div>

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

export default Info1;
