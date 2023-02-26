import React from 'react';
import { Form,Button } from 'react-bootstrap'

const SignIn =()=>{
    
    return (
        <div>
                    <Form>
                        <h3>Sign in to Fiverr</h3>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button type='submit' variant='success' className='SignIn--btn' size='md' block='true'>Sign In</Button>
                    </Form>
               
        </div>
    )
}

export default SignIn;