import React from 'react';
import  {useState} from 'react'
import logo from '../assets/loggo.png'
import {BiLeftArrowCircle} from "react-icons/bi";
//import {HiArrowLeftCircle} from "react-icons/hi";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";
// eslint-disable-next-line react-hooks/rules-of-hooks
const Sidebar = () => {
const [open, setOpen] = useState(true);
const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
];

    return (
        <div className="flex">
            <div
                className={` ${
                    open ? "w-72" : "w-20 "
                } bg-green-700 h-screen p-5  pt-8 relative duration-300 right-0`}
            >
              <FaArrowCircleLeft
                    className={`absolute cursor-pointer -right-3 top-9 w-7  rounded-full text-white w-8 h-8  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src={logo}
                        className={`cursor-pointer duration-500 ${
                            open?"w-16":"w-20" && "rotate-[360deg]"
                        }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${
                            !open && "scale-0"
                        }`}
                    >
                        Good Roat
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                            } `}
                        >
                            <img src={`./src/assets/${Menu.src}.png`} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold ">Home Page</h1>
            </div>
        </div>
    );
};

export default Sidebar;