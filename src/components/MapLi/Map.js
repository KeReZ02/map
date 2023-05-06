import { useMemo } from "react";
import "./MapLi.css"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAgKK8Hmr-ulvPGOT4COqcopqEMYgdOsl4',
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <MapLi />;
}

function MapLi() {
    const center = useMemo(() => ({ lat: 42.876456, lng: 74.59519 }), []);
    return (
        <GoogleMap zoom={12} center={center} mapContainerClassName="container px-8">

        </GoogleMap>
    );
}