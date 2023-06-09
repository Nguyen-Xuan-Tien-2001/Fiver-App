import React, { useEffect, useState } from 'react'
import { faStar, faClock, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Container } from 'react-bootstrap'

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";

//Call API Confirm and Payment
import { ConfirmAndPaymentService } from '../../ApiServices/OrderService/confirmAndPayment'

import { useNavigate } from "react-router-dom"


const ConfirmAndPay = ({createOrderNewResponse}) => {
    const navigate = useNavigate();
    const { confirmAndPaymentResponse, confirmAndPaymentError, callConfirmAndPaymentRefetch } = ConfirmAndPaymentService();

console.log('createOrderNewResponse',createOrderNewResponse);

    useEffect(() => {
        if (confirmAndPaymentResponse) {
          console.log(confirmAndPaymentResponse)
          alert('Payment success!!!')
          navigate('/user/OwnerOrder');

        } else if (confirmAndPaymentError) {
          console.log(confirmAndPaymentError)
        }
      }, [confirmAndPaymentResponse, confirmAndPaymentError])


    const handleOnclickPayment = () => {
        callConfirmAndPaymentRefetch(createOrderNewResponse.id);
    }

    return (
        <Container className='Container__gigPage'>
            <MDBContainer
                className="py-5"
                fluid
                style={{
                    backgroundImage:
                        "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
                    width: 70 + '%',
                }}
            >
                <MDBRow className=" d-flex justify-content-center">
                    <MDBCol md="10" lg="8" xl="5" className='col-xl-10'>
                        <MDBCard className="rounded-3">
                            <MDBCardBody className="p-4">
                                <div className="text-center mb-4">
                                    <h3>Settings</h3>
                                    <h6>Payment</h6>
                                </div>
                                <p className="fw-bold mb-4 pb-2">Saved cards:</p>
                                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                                    <img
                                        className="img-fluid"
                                        src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                                    />
                                    <div className="flex-fill mx-3">
                                        <div className="form-outline">
                                            <MDBInput
                                                label="Card Number"
                                                id="form1"
                                                type="text"
                                                size="lg"
                                                value="**** **** **** 3193"
                                            />
                                        </div>
                                    </div>
                                    <a href="#!">Remove card</a>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                                    <img
                                        className="img-fluid"
                                        src="https://img.icons8.com/color/48/000000/visa.png"
                                    />
                                    <div className="flex-fill mx-3">
                                        <div className="form-outline">
                                            <MDBInput
                                                label="Card Number"
                                                id="form2"
                                                type="text"
                                                size="lg"
                                                value="**** **** **** 4296"
                                            />
                                        </div>
                                    </div>
                                    <a href="#!">Remove card</a>
                                </div>
                                <p className="fw-bold mb-4">Add new card:</p>
                                <MDBInput
                                    label="Cardholder's Name"
                                    id="form3"
                                    type="text"
                                    size="lg"
                                    value="Anna Doe"
                                />
                                <MDBRow className="my-4">
                                    <MDBCol size="7">
                                        <MDBInput
                                            label="Card Number"
                                            id="form4"
                                            type="text"
                                            size="lg"
                                            value="1234 5678 1234 5678"
                                        />
                                    </MDBCol>
                                    <MDBCol size="3">
                                        <MDBInput
                                            label="Expire"
                                            id="form5"
                                            type="password"
                                            size="lg"
                                            placeholder="MM/YYYY"
                                        />
                                    </MDBCol>
                                    <MDBCol size="2">
                                        <MDBInput
                                            label="CVV"
                                            id="form6"
                                            type="password"
                                            size="lg"
                                            placeholder="CVV"
                                        />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="packages__infor packages__infor2">
                <div className="package__content2">
                    <div className="header-recurring">
                        <div className="Package__Description">
                            <p><b>Bill</b></p>
                        </div>
                        <hr />
                        <div className="Package__Description">
                            <p><b>Freelancer </b><br /> {createOrderNewResponse.FreelancerID}</p>
                        </div>
                        <div className="Package__Description">
                            <p><b>Customer </b><br /> {createOrderNewResponse.customerID}</p>
                        </div>
                        <div className="Package__Description">
                            <p><b>SIMPLE BUT PERFECT</b><br /> 1 concepts of professional logo for your new outlook!</p>
                        </div>
                        <div className="Article">
                            <div className="Package__Description">
                                <FontAwesomeIcon icon={faClock} size="1x" color="#62646a" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                                <span >Delivery: {createOrderNewResponse.deliveryTime} days</span>
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
                            <div className="totalPrice">
                                <span>Total</span>
                                <h3 className="Package__price">
                                    $ {createOrderNewResponse.totalPrice}
                                </h3>

                            </div>
                        </div>
                    </div>
                    <div className="Footer__Package">
                        <Button onClick={handleOnclickPayment} className='package__Btn'>Confirm & Pay</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ConfirmAndPay