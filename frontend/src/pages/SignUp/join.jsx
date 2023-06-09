import React from "react";
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';

const JoinForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        let register = {
            email: data.email,
            password: data.password,
        }


        console.log(register);
    };

    return (
        <Container className='ContainerFormEdit'>
            <div className="headerForm"><h2>JOIN FIVERR</h2></div>
            <div className="ContentForm">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="">Email</label>
                    <input type='email' defaultValue="example@mail.com"  {...register("email",{ required: true })} />
                    {errors.email && <span>Please enter your Email</span>}

                    <label htmlFor="">Password</label>
                    <input type='password' {...register("password",{ required: true })} />
                    {errors.password && <span>Please enter your Password</span>}


                    <input name='BtnSaveInformation' type="submit" />
                </form>
            </div>
        </Container>
    )
}
export default JoinForm