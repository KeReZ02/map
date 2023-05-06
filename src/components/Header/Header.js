import React from 'react';
import logo from "../assets/loggo.png";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className=" header bg-white flex bg-fixed  px-16 justify-between item-center shadow-2xl shadow-green-700 ">
                <NavLink to="/">
                    <div className="logo flex justify-start items-center ">
                        <img src={logo} alt="" className="w-16 h-16"/>
                        <h1 className="text-2xl ">Good Road</h1>
                    </div>
                </NavLink>
                <div className="menu flex justify-end items-center">
                    <button className="btn text-green-700 bg-white  border border-green-700 mx-2 w-32 h-8 rounded-2xl
                    hover:bg-green-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-700 dark:bg-green-800 dark:text-green-400 dark:hover:border-white border-2 dark:hover:text-white dark:hover:bg-green-700"> Рейтинг</button>
                    <button className="btn text-green-700 bg-white border border-green-700 mx-2 w-32 h-8 rounded-2xl
                    hover:bg-green-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-700 dark:bg-green-800 dark:text-green-400 dark:hover:border-white border-2 dark:hover:text-white dark:hover:bg-green-700"> О проекте</button>
                    <NavLink to="/regis">
                        <button className="btn text-green-700 bg-white border border-green-700 mx-2 w-32 h-8 rounded-2xl
                    hover:bg-green-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-700 dark:bg-green-800 dark:text-green-400 dark:hover:border-white border-2 dark:hover:text-white dark:hover:bg-green-700"> Регистрация</button>

                    </NavLink> </div>
            </header>
        </div>
    );
};

export default Header;