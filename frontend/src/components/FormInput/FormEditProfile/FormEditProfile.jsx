import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"


//Call API Create Profile ,create Information
import { CreateProfileService } from '../../../ApiServices/PostDataApi/createProfile'
import { CreateInforService } from '../../../ApiServices/PostDataApi/createInformation'
import { GetInforUserService } from "../../../ApiServices/AuthService/getInforUser"


import './FormEditProfile.css'

const FormEditProfile = (editProfile) => {
    const { getInforUserResponse, getInforUserIsLoading, getInforUserError, getRefetch } = GetInforUserService();
    const navigate = useNavigate()


    const { createProfileResponse, createProfileIsLoading, createProfileError, callCreateProfileRefetch } = CreateProfileService();
    const { createInforResponse, createInforIsLoading, createInforError, callCreateInforRefetch } = CreateInforService();

    useEffect(() => {
        if (createProfileResponse) {
            console.log(createProfileResponse);

        } else if (createProfileError) {
            console.log(createProfileError);
        }
    }, [createProfileResponse, createProfileError]);

    useEffect(() => {
        if (createInforResponse) {
            console.log(createInforResponse);
            alert('Edit Success!!!');
            navigate('/user')

        } else if (createInforError) {
            console.log(createInforError);
        }
    }, [createInforResponse, createInforError])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const createProfile = {
            mySkill: data.mySkill,
            avatar: data.avatar,
            occupation: data.occupation,
            level: data.level,
        }

        const createInformation = {
            first_name: data.first_name,
            last_name: data.last_name,
            gender: data.gender,
            birthday: data.birthday,
            address: data.address,
            phone: data.phone,
            education: data.education,
        }
        callCreateProfileRefetch(createProfile);
        callCreateInforRefetch(createInformation);
    };
    return (
        <>{getInforUserResponse ?
            <Container className='ContainerFormEdit'>
                <div className="headerForm"><h2>EDIT MYPROFILE</h2></div>
                <div className="ContentForm">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="">Email</label>
                        <input type='text' readOnly defaultValue={getInforUserResponse ? getInforUserResponse.email : ''}  {...register("email")} />

                        <label htmlFor="">First Name</label>
                        <input defaultValue={getInforUserResponse ? getInforUserResponse.first_name : ''} {...register("first_name", { required: true })} />
                        {errors.first_name && <span>Please enter your First Name</span>}

                        <label htmlFor="">Last Name</label>
                        <input defaultValue={getInforUserResponse ? getInforUserResponse.last_name : ''} {...register("last_name", { required: true })} />
                        {errors.last_name && <span>Please enter your Last Name</span>}

                        <label htmlFor="">Gender</label>
                        <select defaultValue={getInforUserResponse ? getInforUserResponse.gender : ''} {...register("gender", { required: true })} >
                            <option value="Nam">Male</option>
                            <option value="Nữ">Female</option>
                        </select>
                        {errors.gender && <span>Please enter your Gender</span>}

                        <label htmlFor="">Birthday</label>
                        <input type='date' defaultValue={getInforUserResponse ? getInforUserResponse.birthday : ''} {...register("birthday", { required: true })} />
                        {errors.birthday && <span>Please enter your Birthday</span>}

                        <label htmlFor="">Address</label>
                        <input defaultValue={getInforUserResponse ? getInforUserResponse.address : ''} {...register("address", { required: true })} />
                        {errors.address && <span>Please enter your Address</span>}

                        <label htmlFor="">Phone Number</label>
                        <input defaultValue={getInforUserResponse ? getInforUserResponse.phone : ''} {...register("phone", { required: true })} />
                        {errors.phone && <span>Please enter your Phone Number</span>}

                        <label htmlFor="">Education</label>
                        <input defaultValue={getInforUserResponse ? getInforUserResponse.education : ''} {...register("education", { required: true })} />
                        {errors.education && <span>Please enter your Education</span>}

                        <label htmlFor="">Skill</label>
                        <input defaultValue={getInforUserResponse ? getInforUserResponse.profileDetail.my_skill : ''} {...register("mySkill", { required: true })} />
                        {errors.mySkill && <span>Please enter your Skill</span>}

                        <label htmlFor="">Occupation</label>
                        <input defaultValue={getInforUserResponse ? getInforUserResponse.profileDetail.occupation : ''} {...register("occupation", { required: true })} />
                        {errors.occupation && <span>Please enter your Occupation</span>}

                        <label htmlFor="">Level</label>
                        <input defaultValue={getInforUserResponse ? getInforUserResponse.profileDetail.level : ''} {...register("level", { required: true })} />
                        {errors.level && <span>Please enter your level</span>}



                        <Button className='BtnSaveInformation' type="submit" > Submit </Button>
                    </form>
                </div>

            </Container>
            : ''}
        </>
    )
}

export default FormEditProfile