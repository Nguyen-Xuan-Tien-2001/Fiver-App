import React, { useEffect,useContext } from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faHeart,faNavicon } from "@fortawesome/free-solid-svg-icons"

import examImgProduct from '../../../accets/products/a1.jpg'
import examImgAuthor from '../../../accets/img_form/user.jpg'

import { UserContext } from '../../../App'

import './ProductItem.css'
import { Link, useNavigate } from "react-router-dom"

export const ProductItem = (product) => {
  const {handleOnclickSetPostId} = useContext(UserContext);

  return (
    <Link onClick={()=>{handleOnclickSetPostId(product.product.post_id)}} to='/user/ProductDetail' style={{ textDecoration: 'none',color: '#222325' }}>
        <Card className='itemProduct' style={{ width: '18rem',height: 100 + '%' }}>
        <Card.Img variant="top" src={examImgProduct} />
        <Card.Body style={{paddingTop:0}}>
            <div className='AuthorProduct'>
                <img src={examImgAuthor} alt="authorImg" />
                <div className="AuthorName">{product.product.profile_user}</div>
            </div>
            <Card.Text style={{ height: 48 + 'px' }}>
                {product.product.description}
            </Card.Text>
            <p style={{color: '#FFC100',fontWeight:700}}>
                <FontAwesomeIcon style={{marginRight:10 + 'px'}} icon={faStar} size="1x"></FontAwesomeIcon>
                5.0
            </p>
            <hr />
            <div className="FooterProductItem">
                <FontAwesomeIcon style={{marginRight:10 + 'px'}} icon={faNavicon} size="1x"></FontAwesomeIcon>
                <FontAwesomeIcon  style={{marginRight:10 + 'px',color:'red'}} icon={faHeart} size="1x"></FontAwesomeIcon>
                <span className="FooterProductPrice">
                    <span>STARTING AT</span>
                    <span className='Price'>${product.product.price}</span>
                </span>
            </div>
        </Card.Body>
        </Card>
    </Link>
  )
}
