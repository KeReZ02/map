import logo from './logo.svg';
import './App.css';
import  Sidebar from './components/sidebar/Sidebar'
import Map from "./components/map/Map";
import {useJsApiLoader} from "@react-google-maps/api";
import Maps from "./components/Maps/Maps";
import {Routes,Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import { NavLink } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
const defaultCenter = {
    lat: -3.745,
    lng: -38.523
};
const libraries =['places']

function App() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        libraries
    })
  return (
    <div className="App">

        { isLoaded ? <Maps center={defaultCenter}/>:<h2>Loading...</h2>}
<Header/>

        <Routes>
            <Route path={"/"} element={ <Home/>}/>
            <Route path={"/regis"} element={<Registration/>}/>
            <Route path={"/toMap"} element={<Map/>}/>
        </Routes>
    </div>
  );
}

export default App;
