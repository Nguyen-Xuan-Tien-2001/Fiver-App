import React from "react"
import { useState, useEffect } from "react"

import { useContext } from "react";
import { UserContext } from '../../../App'


import "./menu.css"

// Call API categories
import { GetCategoryDetailService } from "../../../ApiServices/GetDataApi/getCategoryDetailService";

const Menu = () => {
    const {handleOnclickCatDetail} = useContext(UserContext);

    //Call API Categories
    const { getCatDetailResponse, getCatDetailIsLoading, getCatDetailError,getCatDetailRefetch } = GetCategoryDetailService();

    const [showMenu, setShowMenu] = useState(false)

    const isActive = () => {
        window.scrollY > 0 ? setShowMenu(true) : setShowMenu(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        }
    }, [getCatDetailResponse]);

    return (
        <div className="row">
            <ul className={showMenu ? "list-menu" : "list-menu__active"} >
                {getCatDetailResponse ? getCatDetailResponse.map(function (categoriesItem,index) {
                    return (
                        <li className="item" onClick={()=>{handleOnclickCatDetail(categoriesItem.category_detail_id)}} style={{cursor:"pointer"}} key={categoriesItem.category_detail_id}>
                            <p >{categoriesItem.category_detail_name}</p>
                            <hr />
                        </li>
                        )
                }) : null}
            </ul>
        </div>
    )
}
export default Menu