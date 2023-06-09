import React,{useEffect} from 'react'

import './AllProduct.css'
import Footer from '../../components/Footer/footer'
import { Products } from '../../components/Products/Products'
import { SlidePageProduct } from '../../components/SlidePageProduct/SlidePageProduct'
import { useContext } from "react";
import { UserContext } from '../../App'

import { GetCategoriesService } from '../../ApiServices/GetDataApi/getCategories'
import { GetPostsByIDService } from '../../ApiServices/GetDataApi/getPostById'


const AllProducts = () => {
  const { getCategoriesResponse, getCategoriesIsLoading, getCategoriesError, getRefetch } = GetCategoriesService();

  const { idCatDetail } = useContext(UserContext);

  //call API
  const { getPostRByIDResponse, getPostEByIDError } = GetPostsByIDService(idCatDetail);
  useEffect(() => {
    if (getPostRByIDResponse) {
      console.log(getPostRByIDResponse);
    }
    else if (getPostEByIDError) {
      console.log(getPostEByIDError);
    }
  }, [getPostRByIDResponse, getPostEByIDError])



  return (
    <>
      <div className="background_header"></div>
      <SlidePageProduct />
      {getPostRByIDResponse ? <Products ProductByID={getPostRByIDResponse} />

        : "Không có sản phẩm nào"}

      <Footer />
    </>
  )
}
export default AllProducts
