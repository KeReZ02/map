import logo from './logo.svg';
import './App.css';
import  Sidebar from './components/sidebar/Sidebar'
import Map from "./components/map/Map";
import {useJsApiLoader} from "@react-google-maps/api";
import Maps from "./components/Maps/Maps";
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
{/*<Sidebar/>*/}
        { isLoaded ? <Maps center={defaultCenter}/>:<h2>Loading...</h2>}
    </div>
  );
}

export default App;
