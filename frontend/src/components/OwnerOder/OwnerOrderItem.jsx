import React, { useState } from 'react'
import { ListGroup, Row, Col, Button } from "react-bootstrap"

import { CompleteOderService } from '../../ApiServices/OrderService/completeOrder'

import "../../pages/GigList/Gigs.css"

export const OwnerOrderItem = ({ orderItem }) => {
    const { completeOrderResponse, completeOrderIsLoading, completeOrderError, callCompleteOrderRefetch } = CompleteOderService()

    const [reRender, setRerender] = useState(true);

    const handleCompleteOrder = (id) => {
        callCompleteOrderRefetch(id)
    }
    if (completeOrderResponse) {
        if (reRender) {
            setRerender(false);
        }
    }

    return (

        <ListGroup.Item>
            <Row>
                <Col sm='2'>{orderItem.post_name}</Col>
                <Col sm='2'>{orderItem.freelancer_name}</Col>
                <Col sm='2'>{orderItem.package_name}</Col>
                <Col sm='2'>{orderItem.delivery_day}</Col>
                <Col sm='1'>{orderItem.total_price}</Col>
                <Col sm='1'>{orderItem.status_order}</Col>

                <Col sm='1'>
                    {
                        orderItem.status_order === 'Delivery' ?

                            <Button onClick={() => { handleCompleteOrder(orderItem.order_id) }} className='btnComplete' type='Complete'>
                                Completed
                            </Button>

                            :

                            <Button disabled className='btnComplete' type='Complete'>
                                Completed
                            </Button>
                    }

                </Col>
            </Row>
        </ListGroup.Item>

    )
}
