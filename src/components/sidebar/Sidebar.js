import React from 'react';
import {useState} from 'react'
import logo from '../assets/loggo.png'
import road from '../assets/road3.jpg'
import {BiLeftArrowCircle} from "react-icons/bi";
//import {HiArrowLeftCircle} from "react-icons/hi";
import {FaArrowCircleLeft, FaHeart, FaUserCircle, FaComment} from "react-icons/fa";
import {BsFillHandThumbsUpFill, BsHandThumbsDownFill} from "react-icons/bs";
// eslint-disable-next-line react-hooks/rules-of-hooks
const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [ {title: "Inbox", src: "Chat"}, {title: "Files ", src: "Folder", gap: true}, {title: "Setting", src: "Setting"},];

    return (<div className="flex absolute left-0 top-0 h-full">
        <div
            className={` ${open ? "w-96" : "w-0 "} bg-green-700 h-full p-5  pt-8 relative duration-300 right-0`}>
            <FaArrowCircleLeft
                className={`absolute cursor-pointer -right-7 top-9 w-7  rounded-full text-green-800 w-8 h-8  ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}/>
            <div className="flex gap-x-4 items-center">
                <img src={logo}
                     className={`cursor-pointer duration-500 ${open ? "w-16" : "w-20" && "rotate-[360deg]"}`}/>
                <h1
                    className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                    Good Roat
                </h1>
            </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <li
                    key={index}
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-4" : "mt-4"} ${index === 0 && "bg-light-white"} `}>
                    <div
                        className={`rate w-72 h-36 bg-white rounded-2xl  ${!open && "hidden"} origin-left duration-200`}>
                        {/*<img src={} alt=""/>*/}

                        <div className=" flex-row items-start  ">
             <div className= " flex items-center">
                         <FaUserCircle className="ml-5 mt-2 text-green-600 relative text-4xl"/>
                                          <img src={road} alt="" className="w-36 h-20 absolute  ml-32 shadow-inner shadow-white rounded-3xl"/>

             </div>
                     < div className="text-black flex justify-between px-4 mt-6">
  <h2>Bekbolotova K</h2>
                         <h1 className="flex items-center"> <FaHeart className="mx-1 text-red-600 text-x"/>13K</h1>
</div>
                 </div>

                        <div className="like border-t-2 flex justify-around mt-2 py-2 text-center">

                            <BsFillHandThumbsUpFill className="text-gray-400 text-3xl w-1/3 border-r-2 text-center "/>
                            <BsHandThumbsDownFill className="text-gray-400 text-3xl border-r-2 w-1/3  text-center"/>
                            <FaComment className="text-gray-400 text-3xl text-center w-1/3 "/>
                        </div>
                    </div>


                </li>))}
            </ul>
        </div>

    </div>);
};

export default Sidebar;