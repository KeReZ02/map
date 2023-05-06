import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlinePhone, AiOutlineUser} from "react-icons/ai";
import {MdAlternateEmail} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";
import {BiShow} from "react-icons/bi";
import {BsFillEyeSlashFill} from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
// import s from "../registration.scss"
// import {IoEyeSharp} from "react-icons/io";


const Registration = () => {
    const [loop, setLoop] = useState(false)
    const [name, setName] = useState(false)
    const [phone, setPhone] = useState(false)
    const [email, setEmail] = useState(false)
    const [addPassword, setAddPassword] = useState("")
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    })
    const password = () => {
        setLoop(!loop)
    }
    const onBlur = () => {
        if (user.name.length === 0) return setName(true)
        else if (user.name.length > 0) return setName(false)
        else return false
    }
    const anPhone = () => {
        if (user.phone.length === 0) return setPhone(true)
        else if (user.phone.length > 0) return setPhone(false)
        else return false
    }
    const anEmail = () => {
        if (user.email.length === 0) return setEmail(true)
        else if (user.email.length >= 0) return setEmail(false)
        else return false
    }
    const onChange = (e) => {
        onBlur()
        anPhone()
        anEmail()
        setUser({...user, [e.target.name]: e.target.value})
    }
    const Form = (e)=>{
        e.preventDefault()
    }
    let long = user.password.length

    const passwordError = () => {
        if (long >= 2 && long < 4) {
            return <div className="register-page-input-main-error-pas"
                        style={{width: "25%", height: "2px", background: "red"}}
            > </div>

        } else if (long >= 4 && long < 6) {
            return <div className="register-page-input-main-error-pas"
                        style={{width: "50%", height: "2px", background: "rgb(201, 61, 61)"}}
            > </div>
        } else if (user.password.length >= 6 && long < 8) {
            return <div className="register-page-input-main-error-pas"
                        style={{width: "75%", height: "2px", background: "#fdfdfd", boxShadow: "0 0 1px 1px  "}}
            > </div>
        } else if (long >= 8) {
            return <div className="register-page-input-main-error-pas"
                        style={{width: "100%", height: "2px", background: "#ffffff"}}
            > </div>

        }
        else return <div className="register-page-input-main-error-pas"
                         style={{width: "0px", height: "2px", background: "#00ff0d"}}
            > </div>

    }
    return (
        <div className="  bg-gradient-to-t from-green-400 via-green-700 to-green-600">
            <div className="register ">
                <div className="register-page">

                    <form
                        onSubmit={Form}
                        className="register-page-input bg-white rounded-3xl px-4 pb-8 ">
                        <div className="register-page-input-main-span">Ф.И.О*</div>

                        <div
                            style={{border: name ? " red 1px solid" : " "}}
                            className="register-page-input-main">
                            <span className="register-page-input-main-icon">
                                <AiOutlineUser/>
                            </span>
                            <input
                                // onFocus={onBlur}
                                onBlur={onBlur}
                                onChange={onChange}
                                name="name"
                                value={user.name}
                                className="register-page-input-main-fuo" type="text" placeholder="Name..."/>
                        </div>
                        <div className="register-page-input-main-span">Телефон*</div>

                        <div
                            style={{border: phone ? " red 1px solid" : " "}}
                            className="register-page-input-main">
                            <span className="register-page-input-main-icon">
                                <AiOutlinePhone/>
                            </span>
                            {/*<PhoneInput*/}
                            {/*    country={"kg"}*/}
                            {/*    value=""*/}
                            {/*    onChange={phone => console.log({phone})}*/}
                            {/*    placeholder=""*/}
                            {/*/>*/}
                            {/*<p className="register-page-input-main-text">+996</p>*/}

                            {/*<input*/}
                            {/*    // onFocus={onFocus}*/}
                            {/*    onBlur={anPhone}*/}
                            {/*    onChange={onChange}*/}
                            {/*    name="phone"*/}
                            {/*    value={user.phone}*/}
                            {/*    type="tel" placeholder="Phone..."/>*/}
                            <p className="register-page-input-main-text"></p>
                            <input
                                // onFocus={onFocus}
                                onBlur={anPhone}
                                onChange={onChange}
                                name="phone"
                                value={user.phone}
                                type="tel" placeholder="Phone..."/>
                        </div>
                        <div className="register-page-input-main-span">Email*</div>

                        <div
                            style={{border: email ? " red 1px solid" : " "}}
                            className="register-page-input-main">
                            <div className="register-page-input-main-icon"><MdAlternateEmail/></div>
                            <input
                                // onFocus={onFocus}
                                onBlur={anEmail}
                                onChange={onChange}
                                name="email"
                                value={user.email}
                                type="email" placeholder="Email..."/>
                        </div>
                        <div className="register-page-input-main-span">Пароль*</div>


                        <div
                            // style={{border:   " red 1px solid" : " "}}
                            className="register-page-input-main">
                            <div  className="register-page-input-main-icon"><RiLockPasswordLine/></div>
                            <input
                                // onFocus={onFocus}
                                onBlur={onBlur}
                                onChange={onChange}
                                // onChange={inputOnchange}
                                name="password"
                                value={user.password}
                                type={loop ? `text` : "password"} placeholder="Password..."/>
                            <div
                                style={{
                                    color: "white"
                                }}
                                onClick={password}
                                className="register-page-input-main-see">
                                {
                                    loop ?  <BsFillEyeSlashFill/> : <BiShow/>
                                }
                            </div>
                        </div>
                        <div className="register-page-input-main-error">
                            {
                                passwordError()
                            }
                        </div>

                        <button className=" btn-reg bg-green-700 text-white w-36 h-24 rounded-3xl py-4 m-20 ">Отправить</button>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Registration;