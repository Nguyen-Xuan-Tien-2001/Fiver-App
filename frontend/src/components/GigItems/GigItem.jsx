import React from 'react'
import { ListGroup, Row, Col, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan, faEdit } from '@fortawesome/free-solid-svg-icons'


import "../../pages/GigList/Gigs.css"

export const GigItem = ({gigItem}) => {



    return (

        <ListGroup.Item>
            <Row>
                <Col sm='1'>
                    <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/114705069/original/2037e7830d679fac6c59ce219442c5c19ddc8d68/shoot-inspiring-product-photography.jpg" alt="Gigs-item" width="30" height="30" />
                </Col>
                <Col sm='3'>{gigItem.post_name}</Col>
                <Col sm='2'>{gigItem.category_detail_name}</Col>
                <Col sm='1'>{gigItem.post_detail.packages[0].package_detail.unit_price}</Col>
                <Col sm='1'>{gigItem.post_detail.packages[1].package_detail.unit_price}</Col>
                <Col sm='2'>{gigItem.post_detail.packages[2].package_detail.unit_price}</Col>

                <Col sm='2'>
                    <Button className='btnEdit_Update'  type='updateJob'>
                        <FontAwesomeIcon icon={faEdit} size="1x" color="#198754"></FontAwesomeIcon>
                    </Button>
                    <Button className='btnEdit_Update' type='deleteJob'>
                        <FontAwesomeIcon icon={faTrashCan} size="1x" color="red"></FontAwesomeIcon>
                    </Button>
                </Col>
            </Row>
        </ListGroup.Item>

    )
}
