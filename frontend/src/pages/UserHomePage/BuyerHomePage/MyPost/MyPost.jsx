import React from 'react'

import './MyPost.css'
import Footer from '../../../../components/Footer/footer'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import UserHeader from '../../../../components/user/userHeader/userHeader'


 const MyPost = () => {
  return (
    <>
        <UserHeader/>

            <Container style={{marginBottom: 40 + 'px'}}>
                <br/>
                <Card>
                    <ListGroup>
                        <ListGroup.Item><h6>ACTIVE POST</h6></ListGroup.Item>
                        <ListGroup.Item> 
                            <Row>
                                <Col sm='2'><b>Date</b></Col>
                                <Col sm='4'><b>Request</b></Col>
                                <Col sm='2'><b>Duration</b></Col>
                                <Col sm='2'><b>Budget</b></Col>
                                <Col sm='2'><b>Recived</b></Col>
                            </Row>
                        </ListGroup.Item>
                        <div>
                            <ListGroup.Item>
                                <Row>
                                    <Col sm='2'>Feb,0,2021</Col>
                                    <Col sm='4'>Title</Col>
                                    <Col sm='2'>Days</Col>
                                    <Col sm='2'>Price</Col>
                                    <Col sm='2'>Num of Recived Request</Col>
                                </Row>
                            </ListGroup.Item>
                        </div>
                    </ListGroup>  
                </Card>
            </Container>

        <Footer/>
        </>
  )
}
export default MyPost