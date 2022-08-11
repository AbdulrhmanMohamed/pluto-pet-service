import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  userInfoById } from '../store/userSlice';
import { hideLoader, showLoader } from '../store/loaderSlice';

function PrivateRoute(props) {
  
   
   return  <Navigate to="/"/>
  
   
}

export default PrivateRoute