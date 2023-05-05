import logo from './logo.svg';
import './App.css';
import  Sidebar from './components/sidebar/Sidebar'
import Map from "./components/map/Map";
import {useJsApiLoader} from "@react-google-maps/api";
import Maps from "./components/Maps/Maps";
import {Routes,Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import { NavLink } from "react-router-dom";
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
        <div className="btn flex justify-end py-4 bg-white">
            <button className=" bg-green-700 text-white rounded-3xl border-white w-32 h-12 mx-8">Лидеры</button>
            <button className=" bg-green-700 text-white rounded-3xl border-white w-32 h-12 mx-8">О проекте</button>
<NavLink to="/regis">
    <button className=" bg-green-700 text-white rounded-3xl border-white w-32 h-12 mx-8">Регистрация</button>
</NavLink>
        </div>
<Sidebar/>
        <Map/>
        { isLoaded ? <Maps center={defaultCenter}/>:<h2>Loading...</h2>}


        <Routes>
            <Route path="/regis" el={<Registration/>}>

            </Route>
        </Routes>
    </div>
  );
}

export default App;
