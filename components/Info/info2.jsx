import React, { useState } from "react";

// textParse
import { PortableText } from "@portabletext/react";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const Info2 = (props) => {
    return (
        <div className={`col-span-12 grid grid-cols-12 px-4 sm:px-6 py-12 ${props.bg}`}>
            <div className={`left font-oswald font-bold text-lg col-span-4`}>Kontakt:</div>
            <div className={`right font-serif col-span-8 mb-4`}>
                {props.data.kontakt.adresse}
                <br></br> <br></br>
                {props.data.kontakt.email} <br></br>
                {props.data.kontakt.phone1} <br></br>
                {props.data.kontakt.phone2}
            </div>
            <div className={`left  font-oswald font-bold text-lg  col-span-4`}>Zeiten:</div>
            <div className={`right font-serif col-span-8 mb-4`}>
                {props.data.oeffnungszeiten.description}
                <br></br>
                {props.data.oeffnungszeiten.mainTime}
            </div>
            <div className={`left  font-oswald font-bold text-lg  col-span-4`}>Eintritt:</div>
            <div className={`right font-serif col-span-8 mb-4`}>
                <PortableText value={props.data.preis.description} />
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

export default Info2;
