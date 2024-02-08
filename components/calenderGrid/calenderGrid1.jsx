import React, { useState, useEffect } from "react";
import Link from "next/link";

// import { ImageGrid1 } from "../imageGrids";

import Element from "./element";

const CalenderGrid1 = (props) => {
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today to the start of the day

        const filtered = props.data.filter((event) => {
            const eventDate = new Date(event.zeit.date);
            return eventDate >= today; // Keep the event if its date is today or in the future
        });

        setFilteredEvents(filtered);
    }, [props.data]);

    return (
        <div
            className={` container m-auto bg-lightGrey py-8 sm:px-24 gap-4 lg:gap-16 grid grid-cols-12  ${props.colspan}`}
        >
            {filteredEvents.map((e, i) => {
                return (
                    <div key={`calGridKey${i}`} className="col-span-12 sm:col-span-6 lg:col-span-4 h-full">
                        <Element
                            date={e.zeit.date}
                            year={e.zeit.date}
                            title={e.title}
                            time={e.zeit.time}
                            subline={e.subTitle}
                            link={e.slug.current}
                        ></Element>
                    </div>
                );
            })}

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

export default CalenderGrid1;
