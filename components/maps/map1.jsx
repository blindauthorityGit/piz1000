import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 47.71658,
            lng: 16.18766,
        },
        zoom: 16,
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: "460px", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDotHBZtI9-LhKHUB61ZaXjgssh_v5Jm2w" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent lat={47.71658} lng={16.18766} text="My Marker" />
            </GoogleMapReact>
        </div>
    );
}
