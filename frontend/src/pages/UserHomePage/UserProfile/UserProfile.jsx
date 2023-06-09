import React, { useState } from 'react'

import UserDetail from '../../../components/user/userProfile/userdetail'
import UserHeader from '../../../components/user/userHeader/userHeader'
import Footer from '../../../components/Footer/footer'
import FormEditProfile from '../../../components/FormInput/FormEditProfile/FormEditProfile'

//call API User
import { GetInforUserService } from "../../../ApiServices/AuthService/getInforUser"

export const UserProfile = () => {

  const { getInforUserResponse, getInforUserIsLoading, getInforUserError, getRefetch } = GetInforUserService();


  const [editProfile,setEditProfile] = useState(false);

  const handleOnclickEditProfile = () =>{
    setEditProfile(!editProfile);
  }

  return (
    <>
      <UserHeader />

      {
        editProfile ? 
        <FormEditProfile editProfile = {setEditProfile}/> : 
        <UserDetail editProfile = {handleOnclickEditProfile} getInforUserResponse={getInforUserResponse} />
      }
      
      <Footer />
    </>
  )
}
