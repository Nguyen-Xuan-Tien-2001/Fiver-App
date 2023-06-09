import React from "react"
import { Link } from "react-router-dom"
import { Button, Card, ListGroup, Row, Col } from "react-bootstrap"

import "./Gigs.css"
import Footer from "../../components/Footer/footer"
import UserHeader from "../../components/user/userHeader/userHeader.js"
import { GigItem } from "../../components/GigItems/GigItem"

//Call API get Post by User
import { GetPostByUserService } from "../../ApiServices/GetDataApi/getPostByUser";


const Gigs = () => {

    const { getPostByUserResponse, getPostByUserIsLoading, getPostByUserError, getRefetch } = GetPostByUserService();


    return (
        <div className="gigs">
            <UserHeader />
            <div className="container">
                <Row>
                    <Col sm='9'>
                        <h1 className="font">Gigs</h1>
                    </Col>
                    <Col className="Btn-CreateGigs">
                        <Link to="/user/gigs/create-gig" ><Button className="Creategig" variant="success">Create a New Gigs</Button></Link>
                    </Col>
                </Row>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item >
                            <Row rowSpan={2}>
                                <Col sm='1'><b>Image</b></Col>
                                <Col sm='3'><b>Job Name</b></Col>
                                <Col sm='3'><b>Category</b></Col>
                                <Col sm='3'><b>Price</b></Col>
                                <Col sm='1'><b>Action</b></Col>
                            </Row>
                            <Row rowSpan={2}>
                                <Col sm='1'><b></b></Col>
                                <Col sm='3'><b></b></Col>
                                <Col sm='2'><b></b></Col>
                                <Col sm='1'>Basic</Col>
                                <Col sm='1'>Standard</Col>
                                <Col sm='1'>Premium</Col>

                                <Col sm='1'><b></b></Col>
                            </Row>
                        </ListGroup.Item>
                        <div className="table_gigs">
                            {
                                getPostByUserResponse ? getPostByUserResponse.map((gigItem)=>{
                                    return <GigItem test key={gigItem.post_id} gigItem={gigItem} />
                                }): <Col sm='12' style={{padding:20 + 'px' }} > <i>You don't have any Job Post yet !!!</i> </Col>

                            }

                        </div>
                    </ListGroup>
                </Card>
            </div>
            <Footer />
        </div>
    )
}
export default Gigs