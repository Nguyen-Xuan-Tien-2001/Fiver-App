import React, { useState,useEffect } from 'react'
import { ListGroup, Row, Col, Button } from "react-bootstrap"

import { ConfirmOderService } from '../../ApiServices/OrderService/confirmOrder'
import { CancelOderService } from '../../ApiServices/OrderService/cancelOrder'
import { DeliveryOderService } from '../../ApiServices/OrderService/deliveryOrder'

import "../../pages/GigList/Gigs.css"

export const OrderItem = ({ orderItem }) => {
    const [reRender, setRerender] = useState(true);
    const { confirmOrderResponse, confirmOrderIsLoading, confirmOrderError, callConfirmOrderRefetch } = ConfirmOderService();
    const { deliveryOrderResponse, deliveryOrderIsLoading, deliveryOrderError, callDeliveryOrderRefetch } = DeliveryOderService();
    const { cancelOrderResponse, cancelOrderIsLoading, cancelOrderError, callCancelOrderRefetch } = CancelOderService();

    useEffect(() => {

        if (confirmOrderResponse) {
            if (reRender) {
                setRerender(false);
            }
        }
        if (deliveryOrderResponse) {
            if (reRender) {
                setRerender(false);
            }
        }
        if (cancelOrderResponse) {
            if (reRender) {
                setRerender(false);
            }
        }
        
    });

    const handleConfirmOrder = (id) => {
        callConfirmOrderRefetch(id)
    }

    const handleCancelOrder = (id) => {
        callCancelOrderRefetch(id)

    }

    const handleDeliveryOrder = (id) => {
        callDeliveryOrderRefetch(id)

    }

    return (

        <ListGroup.Item>
            <Row>
                <Col sm='2'>{orderItem.post_name}</Col>
                <Col sm='2'>{orderItem.customer_name}</Col>
                <Col sm='2'>{orderItem.delivery_day}</Col>
                <Col sm='2'>{orderItem.total_price}</Col>
                <Col sm='2'>{orderItem.status_order}</Col>

                <Col sm='2'>
                    {
                        orderItem.status_order === 'Offer' ?
                            <>
                                <Button onClick={() => { handleConfirmOrder(orderItem.order_id) }} className='btnConfirm' type='Confirm'>
                                    Confirm
                                </Button>
                                <Button onClick={() => { handleCancelOrder(orderItem.order_id) }} className='btnCancel' type='cancel'>
                                    Cancel
                                </Button>
                            </>
                            : null
                    }
                    {
                        orderItem.status_order === 'Inprogress' ?
                            <>
                                <Button onClick={() => { handleDeliveryOrder(orderItem.order_id) }} className='btnDelivery' type='Delivery'>
                                    Delivery
                                </Button>
                            </>
                            : null
                    }
                    {
                        orderItem.status_order === 'Completed' || orderItem.status_order === 'Cancel' ?
                            <>
                                <Button disabled className='btnComplete' type='Complete' >
                                    Completed
                                </Button>
                            </>
                            : null
                    }
                </Col>
            </Row>
        </ListGroup.Item>

    )
}
