import React, { useEffect, useContext } from 'react'

import './Products.css'
import { ProductItem } from './ProductItem/ProductItem'
import { Container } from 'react-bootstrap'
import { UserContext } from '../../App'


//call API để lấy tên của Categorie đó thôi
import { GetCategoryDetailService } from '../../ApiServices/GetDataApi/getCategoryDetailService'

export const Products = ({ ProductByID }) => {
  const { idCatDetail } = useContext(UserContext);

  const { getCatDetailResponse, getCatDetailError } = GetCategoryDetailService();

  useEffect(() => {
    if (getCatDetailResponse) {
      console.log(getCatDetailResponse);
    }
    else if (getCatDetailError) {
      console.log(getCatDetailError);
    }
  }, [getCatDetailResponse, getCatDetailError])
  

  return (
    <>
      {(!idCatDetail || !getCatDetailResponse) ?
        <Container>Chưa có sản phẩm nào!!!</Container>
        :
        <Container>
          
          <div className="List_Products">
            {getCatDetailResponse[idCatDetail-1] ?
              <h4 className='Product_title'>{getCatDetailResponse[idCatDetail-1].category_detail_name}</h4>
              :
              <h4 className='Product_title'> No Products </h4>
            }
            <div className="Container_products">
              {ProductByID.map((product) => {
                return <ProductItem product={product} />
              })}
            </div>
          </div>
        </Container>

      }
    </>

  )
}
