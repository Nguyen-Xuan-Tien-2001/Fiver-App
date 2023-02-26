import React from "react";
import { Form,Button, FormLabel } from 'react-bootstrap'

const JoinForm = () =>{
    return (
        <div className="logonForm">
            <Form>
                <h3>
                    Sign In to Fiverr
                </h3>
                <br></br>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="FormBasicName">
                    <FormLabel>UserName</FormLabel>
                    <Form.Control type="Name" placeholder="Choose a UserName"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check size='md' type="checkbox" label="Join as a Buyer" />
                </Form.Group>
                <Button variant="success" size="md" block='true' className='SignIn--btn'  type="submit">Submit</Button>
               
            </Form>
        </div>
    )
}
export default JoinForm