import React from "react"
import { Card,ListGroup,Row,Col } from "react-bootstrap"

import Footer from "../../../components/Footer/footer"
import UserHeader from "../../../components/user/userHeader/userHeader"
import { OrderItem } from "../../../components/OrderItem/OrderItem"
import './orders.css'

//Call API get List Orders
import { GetOrderByFreelancerService } from "../../../ApiServices/GetDataApi/getOrderByFreelancer"

const Orders = () => {

    const {getOrderByFreelanceResponse, getOrderByFreelanceIsLoading, getOrderByFreelanceError,getOrderByFreelanceRefetch} = GetOrderByFreelancerService();

    return (
        <div className="gigs">
            <UserHeader/>
            <div className="container">
                <Row>
                    <Col sm='9'>
                        <h1 className="font">Order</h1>
                    </Col>
                </Row>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item >
                            <Row>
                                
                                <Col sm='2'><b>Post Name</b></Col>
                                <Col sm='2'><b>Customer Name</b></Col>
                                <Col sm='2'><b>Delivery Day</b></Col>
                                <Col sm='2'><b>Total Price</b></Col>
                                <Col sm='2'><b>Status</b></Col>      
                            </Row>
                        </ListGroup.Item>
                        <div className="table_gigs">
                            {getOrderByFreelanceResponse ? getOrderByFreelanceResponse.map((orderItem) => {
                                return <OrderItem key={orderItem.order_id} orderItem={orderItem} /> 
                            })
                                : <Col sm='12' style={{padding:20 + 'px' }} > <i>You don't have any orders yet !!!</i> </Col>}
                            
                        </div>
                    </ListGroup>
                </Card>
            </div>
            <Footer/>
        </div>
    )
}
export default Orders