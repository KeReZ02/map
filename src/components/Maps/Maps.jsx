import React from 'react';
import {GoogleMap} from "@react-google-maps/api";
import s from './Maps.css'

const containerStyle = {
    width: '100%',
    height: '100%'
};

const Maps = ({center}) => {
    const [map, setMap] = React.useState(null)
    const mapRef=React.useRef(undefined)

// eslint-disable-next-line react-hooks/rules-of-hooks
    const onLoad = React.useCallback(function callback(map) {
        mapRef.current=map;
    }, [])

// eslint-disable-next-line react-hooks/rules-of-hooks
    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current=undefined;
    }, [])
    return (
        <div className={s.container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
        </div>
    );
};

export default Maps;