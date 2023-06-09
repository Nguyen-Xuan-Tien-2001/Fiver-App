import React from "react"
import { Card,ListGroup,Row,Col } from "react-bootstrap"

import Footer from "../../../components/Footer/footer"
import UserHeader from "../../../components/user/userHeader/userHeader"
import { OrderItem } from "../../../components/OrderItem/OrderItem"
import { OwnerOrderItem } from "../../../components/OwnerOder/OwnerOrderItem"
import './OwnerOrders.css'

//Call API get List Orders
import { GetOrderByCustomerService } from "../../../ApiServices/GetDataApi/getOrderByCustomer" 

const OwnerOrders = () => {

    const {getOrderByCustomerResponse, getOrderByCustomerIsLoading, getOrderByCustomerError,getOrderByCustomerRefetch} = GetOrderByCustomerService();

    return (
        <div className="gigs">
            <UserHeader/>
            <div className="container">
                <Row>
                    <Col sm='9'>
                        <h1 className="font">Owner's Order</h1>
                    </Col>
                </Row>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item >
                            <Row>
                                
                                <Col sm='2'><b>Post Name</b></Col>
                                <Col sm='2'><b>Freelancer Name</b></Col>
                                <Col sm='2'><b>Package Name</b></Col>
                                <Col sm='2'><b>Delivery Day</b></Col>
                                <Col sm='1'><b>Total Price</b></Col>
                                <Col sm='2'><b>Status</b></Col>      
                            </Row>
                        </ListGroup.Item>
                        <div className="table_gigs">
                            {getOrderByCustomerResponse ? getOrderByCustomerResponse.map((orderItem) => {
                                return <OwnerOrderItem key={orderItem.order_id} orderItem={orderItem} /> 
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
export default OwnerOrders