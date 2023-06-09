import './App.css';
import Home from './pages/HomePage/home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import JoinForm from './pages/SignUp/join.jsx';
import User from './pages/UserHomePage/user.js';
import Header from "./components/Header/header.js";
import Gigs from './pages/GigList/gigs';
import PrivateRoute from './components/hook/PrivateRoute';
import SignIn from './pages/SignIn/signin.jsx';
import DetailProduct from './pages/DetailProduct/DetailProduct.jsx';
import CreateGig from "./pages/GigList/CreateGig/createGig.jsx"
import DetailProjectCart from './pages/DetailProjectCart/DetailProjectCart';
import Message from './pages/UserHomePage/MessagePage/message';
import Orders from './pages/UserHomePage/OrderPage/orders';
import PostARequest from './pages/UserHomePage/BuyerHomePage/PostRequest/PostARequest';
import { UserProfile } from './pages/UserHomePage/UserProfile/UserProfile';
import MyPost from './pages/UserHomePage/BuyerHomePage/MyPost/MyPost';
import OwnerOrders from './pages/UserHomePage/OwnerOrder/OwnerOrder';

import { createContext,useEffect,useState } from "react";
import ProductsByCat from './pages/AllProducts/ProductsByCat/ProductsByCat';
export const UserContext = createContext()


function App() {
 const [ idCatDetail, setIdCatDetail ] = useState(1);
 const [ postId, setPostId ] = useState(0);

 const handleOnclickSetPostId = (id) =>{
    setPostId(id);
 }

 const handleOnclickCatDetail = (id) =>{
  setIdCatDetail(id);
 }

  return (
    <UserContext.Provider value={{handleOnclickCatDetail,idCatDetail,handleOnclickSetPostId,postId}} >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/join' element={<JoinForm />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/detailProject' element={<DetailProjectCart />} />
        <Route path='/Products' element={<ProductsByCat />} />
        <Route path='/user/ProductDetail' element={<DetailProduct />} />


        <Route path='/user' element={<PrivateRoute />}>
          <Route path='/user' element={<User />} />
          <Route path='/user/myProfile' element={<UserProfile />} />
          <Route path='/user/gigs' element={<Gigs />} />
          <Route path='/user/gigs/create-gig' element={<CreateGig />} />
          <Route path='/user/message' element={<Message />} />
          <Route path='/user/order' element={<Orders />} />
          <Route path='/user/OwnerOrder' element={<OwnerOrders />} />
          <Route path='/user/ProductDetail' element={<DetailProduct />} />
          <Route path='/user/postRequest' element={<PostARequest />} />
          <Route path='/user/myPost' element={<MyPost />} />


        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
