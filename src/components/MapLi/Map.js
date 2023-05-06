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
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="container px-8">
            <Marker position={center} />
        </GoogleMap>
    );
}