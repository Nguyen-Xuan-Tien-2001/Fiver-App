import React from "react"
import { Link } from "react-router-dom"
import { Col, Row, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faEdit } from "@fortawesome/free-solid-svg-icons"


import User_img from '../../../accets/img_form/user.jpg'
import BecomeASeller_Img from '../../../accets/BecomeAseller.jpg'
import './userdetail.css'


const UserDetail = ({ editProfile,getInforUserResponse }) => {

    return (
        <div className="userdetail">
            {getInforUserResponse ? <div className="container">
                <div className="userInfo">
                    <div className="user_rate">
                        <Row>
                            <Col xs lg='3'>
                                <img width='60px' height="60px" alt="userImg" src={User_img} />
                            </Col>
                            <Col xs lg='6'>
                                <h5>{getInforUserResponse.first_name} {getInforUserResponse.last_name}</h5>
                                <Button onClick={editProfile} className="editProfile">
                                    <FontAwesomeIcon style={{ marginRight: 4 + 'px' }} icon={faEdit} size="1x" color="##74767e"></FontAwesomeIcon>
                                    Edit Profile
                                </Button>
                            </Col>
                            <Col xs lg='3'>
                                <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                                N/A
                            </Col>
                        </Row>
                        <br />
                        <div className="line"></div>
                        <Row>
                            <Col xs lg="10">Response Rate</Col>
                            <Col xs lg="2">100%</Col>
                        </Row>
                        <Row>
                            <Col xs lg="10">Delivered on Time</Col>
                            <Col xs lg="2">100%</Col>
                        </Row>
                        <Row>
                            <Col xs lg="10">Order Completion</Col>
                            <Col xs lg="2">100%</Col>
                        </Row>
                        <div className="line"></div>
                        <Row>
                            <Col xs lg="10">Earned in Feb</Col>
                            <Col xs lg="2">$1000</Col>
                        </Row>
                        <Row>
                            <Col xs lg="10">Response Time</Col>
                            <Col xs lg="2">5Hrs</Col>
                        </Row>
                    </div>
                    <div className="user_contact">
                        <div className="line"></div>
                        <div className="line"></div>
                        <Row style={{ marginTop: 30 + 'px' }}>
                            <h5>Description</h5>
                            <span>I was born and grew up in Ha Tinh province I was born and grew up in Ha Tinh province</span>
                        </Row>
                        <div className="line"></div>
                        <div className="line"></div>
                        <Row style={{ marginTop: 30 + 'px' }}>
                            <h5>Languages</h5>
                            <ul className="List_language">
                                <li>English</li>
                                <li>Tieng Viet</li>
                                <li>Japanese</li>
                            </ul>
                        </Row>
                        <div className="line"></div>
                        <div className="line"></div>
                        <Row style={{ marginTop: 30 + 'px' }}>
                            <h5>Skills</h5>
                            <ul className="List_language">
                                <li>{getInforUserResponse.profileDetail.mySkill}</li>
                                
                            </ul>
                        </Row><div className="line"></div>
                        <div className="line"></div>
                        <Row style={{ marginTop: 30 + 'px' }}>
                            <h5>Levels</h5>
                            <ul className="List_language">
                                <li>{getInforUserResponse.profileDetail.level}</li>

                            </ul>
                        </Row><div className="line"></div>
                        <div className="line"></div>
                        <Row style={{ marginTop: 30 + 'px' }}>
                            <h5>Occupation</h5>
                            <ul className="List_language">
                                <li>{getInforUserResponse.profileDetail.occupation}</li>
                            </ul>
                        </Row>
                        <div className="line"></div>
                        <div className="line"></div>
                        <Row style={{ marginTop: 30 + 'px' }}>
                            <h5>Education</h5>
                            <ul className="List_language">
                                <li>{getInforUserResponse.education}</li>

                            </ul>
                        </Row><div className="line"></div>
                        <div className="line"></div>
                        <Row style={{ marginTop: 30 + 'px' }}>
                            <h5>Certification</h5>
                            <ul className="List_language">
                                <li>Add your Certification.</li>
                            </ul>
                        </Row>
                    </div>
                </div>

                <div className="Seller">
                    <img src={BecomeASeller_Img} alt="BecomeASeller_Img"></img>
                    <h5 style={{ marginBottom: 26 + 'px' }}>Ready to earn on your own terms?</h5>
                    <Link to=""><Button variant="success">Become A Seller</Button></Link>
                </div>
            </div> : ''}
        </div>
    )
}

export default UserDetail