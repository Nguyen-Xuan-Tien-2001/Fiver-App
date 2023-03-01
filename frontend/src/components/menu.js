import React from "react"
import "../accets/menu.css"
import { useState,useEffect } from "react"

const Menu = ()=>{
    const [showMenu,setShowMenu] = useState(false)

    const isActive = () =>{
       window.scrollY > 0 ? setShowMenu(true) : setShowMenu(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll",isActive);
        return()=>{
            window.removeEventListener("scroll",isActive);
        }
    },[]);

    return (
    <div>
        <ul className = {showMenu ? "list-menu" :"list-menu__active"}>
            <li>
                <a href="/">Graphics & Design</a>
                <hr />
            </li>
            <li>
                <a href="/">Digital Marketing</a>
                <hr />
            </li>
            <li>
                <a href="/">Writing & Translation</a>
                <hr />
            </li>
            <li>
                <a href="/">Video & Animation</a>
                <hr />
            </li>
            <li>
                <a href="/">Music & Audio</a>
                <hr />
            </li>
            <li>
                <a href="/">Programming & Tech</a>
                <hr />
            </li>
            <li>
                <a href="/">Business</a>
                <hr />
            </li>
            <li>
                <a href="/">Lifestyle</a>
                <hr />
            </li>
            <li>
                <a href="/">AI Services</a>
                <hr />
            </li>
        </ul>
    </div>
    )
}
export default Menu