import React from 'react';
import logo from '../assets/loggo.png'
import phone from '../assets/apple.png'
import {SlPresent} from "react-icons/sl";
import {NavLink} from "react-router-dom";
// import s from '../Maps/Maps.css'
const Home = () => {
    return (
        <div className="home " >


            <hero className="hero  bg-gradient-to-t from-green-400 via-green-700 to-green-600 flex   justify-center items-center">
                <div className="left w-1/2 flex-row items-end">
                                        <h1 className=" text-5xl  text-white drop-shadow-2xl  ">Отмечая дорожные дефекты, вы можете помочь государству и выиграть призы.</h1>
                    <NavLink to="/toMap">
                        <button className="btn  mt-24 text-green-700 bg-white border border-green-700 mx-2 w-48 h-16 rounded-3xl text-2xl
                    hover:bg-green-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-700 dark:bg-green-800 dark:text-green-400 dark:hover:border-white border-2 dark:hover:text-white dark:hover:bg-green-700"> Открыть карту</button>
                    </NavLink>

                </div>
                <div className="right relative w-1/3">
                    <img src={phone} alt="" className=" "/>
                </div>
            </hero>
        </div>
    );
};

export default Home;