import React from 'react';
import {FaArrowCircleLeft, FaComment, FaHeart, FaUserCircle, FaPlusCircle, FaMinusCircle} from "react-icons/fa";

import {useState} from 'react'
// import road from "../assets/road3.jpg";
// import {BsFillHandThumbsUpFill, BsHandThumbsDownFill} from "react-icons/bs";
import {HiPhoto} from "react-icons/hi2";


const Menus = [{title: "Inbox", src: "Chat"}, {title: "Files ", src: "Folder", gap: true}, {
    title: "Setting",
    src: "Setting"
},];

const Download = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex absolute right-0 top-16 h-full">
            <div
                className={` ${open ? "w-96" : "w-0 "} bg-green-700 h-full p-5  pt-8 relative duration-300 right-0`}>
                <FaPlusCircle
                    className={`absolute cursor-pointer -left-1 top-9 w-7  rounded-full text-yellow-500 w-8 h-8  ${!open &&
                    <FaMinusCircle/>}`}
                    onClick={() => setOpen(!open)}/>


                <div className="pt-6">

                    <div
                        className={`rate w-64 ml-12 h- bg-white rounded-2xl flex-row items-center   ${!open && "hidden"} origin-left duration-200`}>
                        {/*<img src={} alt=""/>*/}
                        <HiPhoto className="text-green-800 text-7xl text-center ml-24"/>

                    </div>
                    <ul className="w-48 ml-20 mt-12 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="react-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label htmlFor="react-checkbox"
                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Маленький</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="angular-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label htmlFor="angular-checkbox"
                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Средний</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="laravel-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label htmlFor="laravel-checkbox"
                                       className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Большой</label>
                            </div>
                        </li>
                    </ul>
                    <button className="btn mt-8 text-green-700 bg-yellow-500 border border-green-700 mx-2 w-32 h-8 rounded-2xl
                    hover:bg-white hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-700 dark:bg-green-800 dark:text-green-400 dark:hover:border-white border-2 dark:hover:text-white dark:hover:bg-green-700"> Отправить
                    </button>

                </div>
            </div>
        </div>


    );
};

export default Download;