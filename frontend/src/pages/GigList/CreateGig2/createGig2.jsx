import React, { useEffect } from "react"
import { Table, Form, Row, Col, Button } from "react-bootstrap"
import { useForm } from "react-hook-form";

import "./CreateGig2.css"
//call API
import { CreatePostService } from '../../../ApiServices/PostDataApi/createPost'
import { useNavigate } from "react-router";




const CreateGig2 = ({ dataInput_Step1, setNextForm }) => {
    const navigate = useNavigate();

    const { createPostResponse, createPostIsLoading, createPostError, callCreatePostRefetch } = CreatePostService();

    useEffect(() => {
        if (createPostResponse) {
            console.log(createPostResponse);
            navigate('/user/gigs');

        } else if (createPostError) {
            console.log(createPostError);
        }

    }, [createPostResponse, createPostError]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        let dataInput_StepFinal = {
            "post_name": dataInput_Step1.post_name,
            "category_detail_name": dataInput_Step1.category_detail_name,
            "post_detail": {
                "profile_user": "",
                "description": data.description,
                "FAQ": "No refunds",
                "packages": [
                    {
                        "package_id": 0,
                        "package_name": "Basic",
                        "package_detail": {
                            "revision": data.revisionBasic,
                            "delivery_day": data.deliveryBasic,
                            "unit_price": data.PriceBasic
                        }
                    },
                    {
                        "package_id": 1,
                        "package_name": "Standard",
                        "package_detail": {
                            "revision": data.revisionStandard,
                            "delivery_day": data.deliveryStandard,
                            "unit_price": data.PriceStandard
                        }
                    },
                    {
                        "package_id": 2,
                        "package_name": "Premium",
                        "package_detail": {
                            "revision": data.revisionPremium,
                            "delivery_day": data.deliveryStandard,
                            "unit_price": data.PriceStandard
                        }
                    }
                ]
            }
        }


        callCreatePostRefetch(dataInput_StepFinal);
    }

    return (
        <div className="CreateGig">
            <div className="container">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="gig2">
                        <h3>Scope & Pricing</h3>
                        <div className="gig2line"></div>
                        <h5>Packages</h5>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Titles</th>
                                    <th>BASIC</th>
                                    <th>STANDARD</th>
                                    <th>PREMIUM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >Description</td>
                                    <td colSpan={3}>
                                        <Form.Control as="textarea" {...register("description", { required: true })} />
                                        {errors.description && <span className="ValidationMessage">Please enter Description!!!</span>}

                                    </td>
                                </tr>


                                <tr>
                                    <td>Revision</td>
                                    <td>
                                        <Form.Control as="select" {...register("revisionBasic", { required: true })} >
                                            <option value="one" >One</option>
                                            <option value="two" >Two</option>
                                            <option value="three" >Three</option>
                                            <option value="unlimited" >Unlimited</option>
                                        </Form.Control>
                                        {errors.revisionBasic && <span className="ValidationMessage">Please enter Description!!!</span>}
                                    </td>
                                    <td>
                                        <Form.Control as="select" {...register("revisionStandard", { required: true })} >
                                            <option value="one" >One</option>
                                            <option value="two" >Two</option>
                                            <option value="three" >Three</option>
                                            <option value="unlimited" >Unlimited</option>
                                        </Form.Control>
                                        {errors.revisionStandard && <span className="ValidationMessage">Please enter Description!!!</span>}
                                    </td>
                                    <td>
                                        <Form.Control as="select" {...register("revisionPremium", { required: true })} >
                                            <option value="one" >One</option>
                                            <option value="two" >Two</option>
                                            <option value="three" >Three</option>
                                            <option value="unlimited" >Unlimited</option>
                                        </Form.Control>
                                        {errors.revisionPremium && <span className="ValidationMessage">Please enter Description!!!</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Delivery day</td>


                                    <td><input type="number" step="5" min="5" max="10000" style={{ width: 90 + '%', border: 'none' }} {...register("deliveryBasic", { required: true })} />
                                        {errors.deliveryBasic && <span className="ValidationMessage">Please enter Delivery day!!!</span>}</td>
                                    <td><input type="number" step="5" min="5" max="10000" style={{ width: 90 + '%', border: 'none' }} {...register("deliveryStandard", { required: true })} />
                                        {errors.deliveryStandard && <span className="ValidationMessage">Please enter Delivery day!!!</span>}</td>
                                    <td><input type="number" step="5" min="5" max="10000" style={{ width: 90 + '%', border: 'none' }} {...register("deliveryPremium", { required: true })} />
                                        {errors.deliveryPremium && <span className="ValidationMessage">Please enter Delivery day!!!</span>}</td>

                                </tr>

                                <tr className="hkl">
                                    <td>Price</td>
                                    <td><input type="number" step="5" min="5" max="10000" style={{ width: 90 + '%', border: 'none' }} {...register("PriceBasic", { required: true })} />
                                        {errors.PriceBasic && <span className="ValidationMessage">Please enter Price!!!</span>}</td>
                                    <td><input type="number" step="5" min="5" max="10000" style={{ width: 90 + '%', border: 'none' }} {...register("PriceStandard", { required: true })} />
                                        {errors.PriceStandard && <span className="ValidationMessage">Please enter Price!!!</span>}</td>
                                    <td><input type="number" step="5" min="5" max="10000" style={{ width: 90 + '%', border: 'none' }} {...register("PricePremium", { required: true })} />
                                        {errors.PricePremium && <span className="ValidationMessage">Please enter Price!!!</span>}</td>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <Form.Group controlId="image">
                                            <Form.Control style={{ marginTop: 10 + 'px' }} type="file" label="Choose image" />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr></tr>
                            </tbody>
                        </Table>
                    </div>
                    <Row>
                        <Col sm="10">
                            <Button onClick={() => setNextForm(false)} className="btn-cancel" variant="cancel" type="cancel">Back</Button>
                        </Col>
                        <Col sm="2">
                            <Button className="btn-submit" type="submit" variant="success">Save</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default CreateGig2