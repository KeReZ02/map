import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import MapLi from "../MapLi/Map";
import Header from "../Header/Header";
import Download from "../Download/Download";




const Map = () => {
    return (
        <div>
            <MapLi/>

            <Sidebar/>
            <Download/>

        </div>
    );
};

export default Map;