import React, { useEffect } from "react";
import { useNavigate } from "react-router";


import BarnnerBusiness from "../../components/barnerBusiness/BarnnerBusiness.jsx";
import { Feature } from "../../components/feature/Feature.jsx";
import Footer from "../../components/Footer/footer";
import Slide from "../../components/slide/Slide.jsx";
import SliderHome from '../../components/barnerSlider/slider.js';
import { TrustedBy } from "../../components/trustedBy/TrustedBy.js";
import { cards,projects } from "../../data.js"

//Call API Get List Post
import { GetPostsService } from "../../ApiServices/GetDataApi/getPostsService"
import { GetCategoryDetailService } from "../../ApiServices/GetDataApi/getCategoryDetailService.js";


const Home = () =>{

    const {getPostResponse, getPostIsLoading, getPostError,getPostRefetch} = GetPostsService();
    const {getCatDetailResponse, getCatDetailIsLoading, getCatDetailError,getCatDetailRefetch} = GetCategoryDetailService();


    const user = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
           navigate('/user');
        }
        
    },[user])



    return(
        <div  className="bgColor">
            <SliderHome/>
            <TrustedBy />
            <Slide catCart={cards} catDetail={getCatDetailResponse}/>
            <Feature/>
            <BarnnerBusiness/>
            <Slide projectCard={projects} postList = {getPostResponse}/>
            <Footer/>
        </div>
    )
}
export default Home;