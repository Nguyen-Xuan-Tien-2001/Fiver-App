import React, { useState, useEffect,useContext } from 'react'
import { faStar, faClock, faCheck,faEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

import { UserContext } from '../../App'

import './DetailProduct.css'
import ExamImgGig from '../../accets/examImgGig.jpg'
import ExamImgAuthor from '../../accets/img_form/user.jpg'
import Footer from '../../components/Footer/footer'
import UserHeader from '../../components/user/userHeader/userHeader'
import ConfirmAndPay from '../../components/ConfirmAndPay/ConfirmAndPay'

//Call: localhost:3333/api/post/get-post/:id
import { GetPostDetailByIDService } from '../../ApiServices/GetDataApi/getPostDetailById'

//Call API Order New
import { CreateOrderNewService } from '../../ApiServices/OrderService/createOrderNew'

const DetailProduct = () => {
  const {postId} = useContext(UserContext);
  const [tabsIndex, setTabsIndex] = useState(0)


  //Khai báo call api tạo Order để thanh toán
  const { createOrderNewResponse, createOrderNewError, callCreateOrderNewRefetch } = CreateOrderNewService()

  useEffect(() => {
    if (createOrderNewResponse) {
      console.log(createOrderNewResponse)
    } else if (createOrderNewError) {
      console.log(createOrderNewError)
    }
  }, [createOrderNewResponse, createOrderNewError])

  //Call API Chi tiết sản phẩm
  const { getPostDetailByIDResponse, getPostDetailByIDError } = GetPostDetailByIDService(postId);
  useEffect(() => {
    if (getPostDetailByIDResponse) {
      console.log(getPostDetailByIDResponse)
    } else if (getPostDetailByIDError) {
      console.log(getPostDetailByIDError)
    }
  }, [getPostDetailByIDResponse, getPostDetailByIDError])


  const handleClickTabs = (value) => {

    setTabsIndex(value);
  }



  const handleOnclickPayment = () => {
    const dataPayment = {
      "post_id": postId,
      "package_id": tabsIndex
    };
    callCreateOrderNewRefetch(dataPayment);
  }

  return (
    <>
      <UserHeader />
      <div className="background_header"></div>
      <hr />


      {createOrderNewResponse ?
        <ConfirmAndPay createOrderNewResponse={createOrderNewResponse} />
        :
        (getPostDetailByIDResponse ? <Container className='Container__gigPage'>
        <div className="Main_gigPage">
          <h2 className="gigTitle">
            {getPostDetailByIDResponse.post_name}
          </h2>
          <div className="AuthorGig">
            <img src={ExamImgAuthor} alt="AuthorImg" />
            <h5 className="AuthorName">{getPostDetailByIDResponse.post_detail.profile_user}</h5>
            <div className="col__line"></div>
            <div className="star_feedback">
              <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
            </div>
          </div>
          <div className="imageGigDetail">
            <img src={ExamImgGig} alt="ExamImgGig" />
          </div>
          <div className="ContentGig">
            <h4 className="Content_Title">About this gig</h4>
            <span className='ContentGig__text'>
              <b>Hello Dear,</b><br />

              <b>First of all, congratulation on your business!</b><br></br>

              {getPostDetailByIDResponse.post_detail.description}
            </span>
          </div>
          <hr />
          <div className="About_Author">
            <h4 className="AuthorTitle">
              About the seller
            </h4>
            <div className='AuthorDetail'>
              <img src={ExamImgAuthor} alt="AvatarAuthor" />
              <div className='AuthorDetail__text'>
                <h4 className="AuthorName">{getPostDetailByIDResponse.post_detail.profile_user}</h4>
                <span className="AuthorDescription">Professional Graphic Designer</span>
                <div className="Stars">
                  <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                </div>
                <Link>
                  <div className='ContactMeBtn'>Contact me</div>
                </Link>
              </div>

            </div>
          </div>

        </div>
        <div className="packages__infor">
          <div className="packages__tabs">
            <Button onClick={() => handleClickTabs(0)} className={tabsIndex === 0 ? 'activeTab' : ''}>Basic</Button>
            <Button onClick={() => handleClickTabs(1)} className={tabsIndex === 1 ? 'activeTab' : ''} >Standard</Button>
            <Button onClick={() => handleClickTabs(2)} className={tabsIndex === 2 ? 'activeTab' : ''} >Premium</Button>
          </div>
          <div className="package__content">
            <div className="header-recurring">
              <h4 className="Package__price">
                $ {getPostDetailByIDResponse.post_detail.packages[tabsIndex].package_detail.unit_price}
              </h4>
              <div className="Package__Description">
                <p><b>SIMPLE BUT PERFECT</b><br /> 1 concepts of professional logo for your new outlook!</p>
              </div>
              <div className="Article">
                <div className="Package__Description">
                  <FontAwesomeIcon icon={faClock} size="1x" color="#62646a" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                  <span >Delivery day: {getPostDetailByIDResponse.post_detail.packages[tabsIndex].package_detail.delivery_day}</span>
                </div>
                <div className="Package__Description">
                  <FontAwesomeIcon icon={faEdit} size="1x" color="#62646a" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                  <span >Revision : {getPostDetailByIDResponse.post_detail.packages[tabsIndex].package_detail.revision}</span>
                </div>
                <ul className="features">
                  <li className="flex-items-center">
                    <FontAwesomeIcon icon={faCheck} size="1x" color="#1dbf73" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                    1 concept included
                  </li>
                  <li className="flex-items-center">
                    <FontAwesomeIcon icon={faCheck} size="1x" color="#1dbf73" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                    Logo transparency
                  </li>
                  <li className="flex-items-center">
                    <FontAwesomeIcon icon={faCheck} size="1x" color="#1dbf73" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                    Vector file
                  </li>
                  <li className="flex-items-center">
                    <FontAwesomeIcon icon={faCheck} size="1x" color="#62646a" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                    Printable file
                  </li>
                  <li className="flex-items-center">
                    <FontAwesomeIcon icon={faCheck} size="1x" color="#62646a" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                    Include source file
                  </li>
                </ul>
              </div>
            </div>
            <div className="Footer__Package">
              <Button onClick={handleOnclickPayment} className='package__Btn'>Continue</Button>
            </div>
          </div>
        </div>

      </Container>
      :
      'Null'
      )
      }
      <Footer />
    </>
  )
}

export default DetailProduct
