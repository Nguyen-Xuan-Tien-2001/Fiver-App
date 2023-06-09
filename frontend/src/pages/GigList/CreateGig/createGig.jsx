import React, { useState } from "react"
import { Form, Card, Col, Container, Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import UserHeader from "../../../components/user/userHeader/userHeader.js"
import "./CreateGig.css"
import Footer from "../../../components/Footer/footer.jsx"
import CreateGig2 from "../CreateGig2/createGig2.jsx";

//call API Category Detail
import { GetCategoryDetailService } from "../../../ApiServices/GetDataApi/getCategoryDetailService.js";


const CreateGig = () => {

    //call API Category Detail
    const { getCatDetailResponse } = GetCategoryDetailService();

    const [dataInput, setDataInput] = useState({});
    const [nextForm, setNextForm] = useState(false);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setDataInput({ ...dataInput, ...data });
        setNextForm(!nextForm);
    }

    return (
        <div className="CreateGig">
            <UserHeader />
            {nextForm ? <CreateGig2 dataInput_Step1={dataInput} setNextForm={setNextForm} /> :
                <div className="container">
                    <h3>Create New Job</h3>
                    <div className="gig2line"></div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Container>
                            <Card>
                                <Card.Body >
                                    <Row>
                                        <Col sm="3">Gig Title</Col>
                                        <Col>
                                            <Form.Control id="post_name" placeholder="Data Science for EveryOne" {...register("post_name", { required: true })}></Form.Control>
                                            {errors.post_name && <span className="ValidationMessage">Please enter title!!!</span>}

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="3">Category</Col>
                                        <Col>
                                            <Form.Group as={Col}>
                                                <Form.Control id="category_detail_name" as="select" {...register("category_detail_name", { required: true })}>
                                                    <option value=''>---------Category---------</option>
                                                    {getCatDetailResponse ? getCatDetailResponse.map((value) => {
                                                        return (
                                                            <option value={value.category_detail_name} key={value.category_detail_id}>{value.category_detail_name}</option>
                                                        )
                                                    }) : null}
                                                </Form.Control>
                                                {errors.category_detail_name && <span className="ValidationMessage">Please enter title!!!</span>}

                                            </Form.Group>
                                        </Col>

                                    </Row>

                                </Card.Body>
                            </Card>
                            <Row>
                                <Col sm="10">
                                    <Link to="/user/gigs">
                                        <Button className="btn-cancel" variant="cancel" type="cancel">Cancel</Button>
                                    </Link>
                                </Col>
                                <Col sm="2">
                                    <Button className="btn-submit" type="submit" variant="success">Next</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </div>
            }

            <Footer />
        </div >
    )
}

export default CreateGig