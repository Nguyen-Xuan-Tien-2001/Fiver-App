import React from 'react'
import { Link } from 'react-router-dom'
import { Form,Button } from 'react-bootstrap'
import { useState } from 'react'

import './PostARequest.css'
import Footer from '../../../../components/Footer/footer'
import img_postARequest from '../../../../accets/img_form/img_postRequest.jpg'
import { data } from '../../../../data.js'
import UserHeader from '../../../../components/user/userHeader/userHeader'

const PostARequest = () => {
    const [hidden,setHidden] = useState(true);
    const handleClickNext =() =>{
        setHidden(!hidden);
    }

  return (
    <>
        <UserHeader />
        <div className="container">
            <div className="step">
                <div className="step_detail active">
                    <span className="step_number">
                        1
                    </span>
                    <span className="step_description">
                        Share brief description
                    </span>
                </div>
                <div className={hidden ? "step_detail color-gray" : "step_detail color-gray active"}>
                    <span className={hidden ? "step_number step_number2" : "step_number "}>
                        2
                    </span>
                    <span className="step_description">
                        Add timeline and budget
                    </span>
                </div>
            </div>

            <div className="content">
                <div className="title">
                    <h1>Let the matching begin...</h1>
                    <p className="content_description">
                        This is where you fill us in on the big picture.
                    </p>
                    <img src={img_postARequest} alt="Img" />
                </div>
                <div className="form">
                    <div className="form_header">
                        <span>Are you a Freelancer?</span>
                        <Link to="">Become a seller</Link>
                    </div>
                    <Form>
                        {hidden ? <>
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label><h5>Give your project brief a title</h5></Form.Label>
                                <Form.Label>Keep it short and simple - this will help us match you to the right category.</Form.Label>
                                <Form.Control type="text" placeholder="Example: Create a Wordpress website for my company" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDetail">
                                <Form.Label><h5>What are you looking to get done?</h5></Form.Label>
                                <Form.Label>This will help get your brief to the right talent. Specifics help here.</Form.Label>
                                <Form.Control type="text" placeholder="I need ..." />
                                <Form.Text> <Link>How to write a great description</Link> </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="AttachFile"> 
                                <Form.Control style={{marginTop: 10 + 'px',marginBottom : 10 + 'px'}} type="file" id="AttachFile" label="Attach File" custom/>
                            </Form.Group>

                            
                            <Form.Group className="mb-3" controlId="formSelect_Category">
                                    <Form.Control as="select">
                                        {
                                            data.map(function (value){
                                                return (<option key={value.id}>{value.name}</option>)
                                            })
                                        }
                                    </Form.Control>
                            </Form.Group>


                            <Button style={{float: 'right'}} variant="success" onClick={handleClickNext}>
                                Next
                            </Button>
                        </> : ''}

                        {hidden ? '' : <>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label><h5>I'm looking to spend...</h5></Form.Label>
                                <Form.Control type="text" placeholder="Up to" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label><h5>Let’s talk timing</h5></Form.Label>
                                <Form.Control type="date" />
                                <Form.Text>We’ll find available freelancers.</Form.Text>
                            </Form.Group>
                            <Button variant="warning" onClick={handleClickNext}>
                                Prev
                            </Button>
                            <Button style={{float: 'right'}} variant="success" type="submit">
                                Submit
                            </Button>
                        </>}
                    </Form>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default PostARequest
