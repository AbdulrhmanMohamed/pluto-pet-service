import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logOut } from '../../store/loginSlice';
import { userInfoById } from '../../store/userSlice';
import Loader from '../loader';
import {Badge} from 'antd'
import './layout.css'
function Layout({children}) {
    
    const location=useLocation();
    const [collapse,setCollapse]=useState(true)
    const dispatch=useDispatch();
    const {user,inofLoading}=useSelector(state => state.userSlice)
    const navigate=useNavigate()
    
    const handleLogout=()=>{
        dispatch(logOut())
        setTimeout(()=>{
            navigate('/login')
        },1000 )
    }
    const userMenu=[
        {
            name:'Doctors',
            path:'/doctorHome',
            icon:'ri-home-2-fill'
        },
        {
            name:'Services',
            path:'/serviceHome',
            icon:'fa-solid fa-paw'
        },
        
        {
            name:'ApplyDoctor',
            path:'/doctor',
            icon:'ri-hospital-fill'
        },
        {
            name:'ApplyService',
            path:'/service',
            icon:'ri-service-fill'
        },
        // {
        //     name:'Profile',
        //     path:'/profile',
        //     icon:'ri-profile-fill'
        // },
       
        
    ]
    const adminMenu=[
        // {
        //     name:'Home',
        //     path:'/',
        //     icon:'ri-home-2-fill'
        // },
        // {
        //     name:'Users',
        //     path:'/usersList',
        //     icon:'ri-shield-user-line'
        // },
        {
            name:'Doctors',
            path:'/doctorsList',
            icon:'ri-hospital-line'
        },
        {
            name:'Services',
           
            path:'/servicesList',
            icon:'fa-solid fa-paw'
        },
        
        
        
    ]
    const doctorMenu=[
        {
            name:'Doctors',
            path:'/doctorHome',
            icon:'ri-home-2-fill'
        },
        // {
        //     name:'Appotiment',
        //     path:'appiotment/',
        //     icon:'ri-calendar-todo-line'
        // },
       
        {
            name:'Profile',
            path:'/doctorProfile',
            icon:'ri-profile-fill'
        },
        
        
    ]
    const serviceMenu=[
        // {
        //     name:'Home',
        //     path:'/',
        //     icon:'ri-home-2-fill'
        // },
        // {
        //     name:'Appotiment',
        //     path:'appiotment/',
        //     icon:'ri-calendar-todo-line'
        // },
        {
            name:'Services',
            path:'/serviceHome',
            icon:'fa-solid fa-paw'
        },
       
        {
            name:'Profile',
            path:'/serviceProfile',
            icon:'ri-bear-smile-line'
        },
        
        
    ]
    const menue=user?.isAdmin? adminMenu:user?.isADoctor?doctorMenu:user?.isASitter?serviceMenu: userMenu;

    useEffect(()=>{
        dispatch(userInfoById(localStorage.getItem('token')))
    },[])
  return (
    <>
    {inofLoading?<Loader/>:
     <div className='main'>
        <div className="layout ">
            <div className="sidebar ">
            <div className="sidebar-title d-flex justify-content-between align-items-center">
            <h5 className='sidebar__item-name' style={{color:"rgb(255 255 255 /0.7)",fontSize:'16px'}}>{user?.userName}</h5>
                        
                        <Badge count={user?.unSeenNotification.length} className='px-2'>
                        <i className="fa-solid fa-bell fa-2x" style={{color:'rgb(255 255 255 /0.7)',cursor:'pointer'}} onClick={()=>{
                            navigate('/notifications')
                        }}></i>
                        </Badge>
                        
                       
                        
                    </div>
                    <div className="sidebar-menu ">
                        {
                            menue && menue.map((item,index)=>{
                                
                              const isActive=location.pathname==item.path;
                             
                                return (
                                    <div key={index} className={`menu-item d-flex align-items-center ${isActive&& 'active-menu-item'}`} >
                                        <Link to={ item.path}><i className={`${item.icon} sidebar__item-icon`}></i></Link> 
                                        {collapse &&
                                         <Link to={item.path} className="sidebar__item-name" >{item.name}</Link>}
                                    </div>
                                )
                            })

                        }
                            <div  className='menu-item d-flex align-items-center ' >
                            <span className='ri-logout-circle-r-line fa-2x sidebar__item-icon' style={{color:'rgb(255 255 255 /0.7)',fontSize:'18px'}} onClick={handleLogout}>
                            <span style={{color:'rgb(255 255 255 /0.7)',fontSize:'18px',marginLeft:'20px'}}    className="sidebar__item-name" >Logout</span>
                            </span>
                            
                        </div>
                        
                    </div>
            </div>
            <div className="content">
                {/* <div className="header">
                 <i className={`${!collapse? `fa-solid fa-close fa-2x`:'ri-menu-line fa-2x'} hide-small`}  style={{marginLeft:'20px',color:'gray',cursor:'pointer'}} onClick={()=>setCollapse(!collapse)}></i>
                 <div className="d-flex header__user">
                
                 </div>
                </div> */}
                <div className="body">
                    {children}
                </div>
            </div>
        </div>
    </div>
    }
    </>
  )

}

export default Layout