import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  userInfoById } from '../store/userSlice';
import { hideLoader, showLoader } from '../store/loaderSlice';

function PrivateRoute(props) {
   const {token}=useSelector(state=>state.loginSlice);
   if(token){
       return  props.children;
   }else{
       return  <Navigate to="/login"/>
   }
   
   
  
   
}

export default PrivateRoute