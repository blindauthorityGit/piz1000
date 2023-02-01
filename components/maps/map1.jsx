import React from "react";
import GoogleMapReact from "google-map-react";
import Snazzy from "./snazzy";
const AnyReactComponent = ({ text }) => (
    <div className="h-12 w-12 bg-primary rounded-full text-white flex justify-center items-center font-bold font-oswald">
        {text}
    </div>
);

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 47.71658,
            lng: 16.18766,
        },
        zoom: 16,
        options: [
            {
                styles: Snazzy,
            },
        ],
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: "460px", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDotHBZtI9-LhKHUB61ZaXjgssh_v5Jm2w" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent lat={47.71658} lng={16.18766} text="PIZ 1000" />
            </GoogleMapReact>
        </div>
    );
}
