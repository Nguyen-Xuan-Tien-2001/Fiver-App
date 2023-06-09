import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { LoginService } from '../../ApiServices/AuthService/loginService';

const SignIn = () => {


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    //Call API Login 
    const { loginResponse, loginIsLoading, loginError, callLoginRefetch } = LoginService();

    useEffect(() => {
        if (loginResponse) {
            console.log(loginResponse);
            localStorage.setItem('token', loginResponse.access_token);
            navigate('/user');
        }
        else if (loginError) {
            console.log(loginError);
            alert('Login Failed');
        }
    }, [loginResponse, loginError])

    const handleOnSubmit = (e) => {

        
        e.preventDefault();

        callLoginRefetch(formData);

    }
    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <div className='background-Login'>
            <div className='signin-layout'>
                <Form onSubmit={handleOnSubmit}>
                    <h3>Sign in to Fiverr</h3>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleChange} name='email' type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handleChange} name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button type='submit' variant='success' className='SignIn--btn' size='md' block='true'>Sign In</Button>
                </Form>
            </div>
        </div>
    )
}

export default SignIn;