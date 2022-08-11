import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

function PublicRoute(props) {
    const {token}=useSelector(state=>state.loginSlice);
    if(token){
        return  <Navigate to="/"/>
    }else{
        return props.children;
    }

    

}

export default PublicRoute