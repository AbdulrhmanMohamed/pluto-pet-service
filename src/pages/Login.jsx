import React, {useState} from 'react'
import {Button, Form, Input} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoader, showLoader } from '../store/loaderSlice'
import { loginUser } from '../store/loginSlice'
import Loader from '../component/loader'
import LoginImage from "../assets/petLogin.png";
import { motion } from "framer-motion";
function Login() {
    

    const navigate = useNavigate()
    const dispatch=useDispatch();
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        const passInput = document.querySelector('.wrapper #password');
        const i = document.querySelector('i')
        i.classList = ""
        if (showPassword) {
            i.classList.add('fa-solid', 'fa-eye')

            passInput.type = 'text'

        } else {
            passInput.type = 'password';
            i.classList.add('fa-solid', 'fa-eye-slash')

        }
    }
   
    const onFinish = async (values) => {
        
        dispatch(loginUser(values))
    
        
        setTimeout(()=>{
            if(localStorage.getItem('token')){
                console.log('localStorate',localStorage.getItem('token'))
                navigate('/')
            }
            else{
                toast.error('Invalid Email or Password')
            }
        },1500)
        

    }
    const onFinishFailed = (errors) => {
        console.log('errors', errors)
    }
    return (
        <div className='authentication'>
            <div className="authentication-form card">
                <h1 className="card-title my-3">Welcome Back</h1>
                <Form layout='vertical'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>

                    <Form.Item label="Email" name="email"
                        rules={
                            [
                                {
                                    required: true,
                                    message: "This Field is Required"
                                }, {
                                    pattern: new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
                                    message: "Invalid Email Address"
                                }
                            ]
                    }>
                        <Input placeholder='Enter Your Email'/>
                    </Form.Item>
                    <Form.Item label="Password" name="password"
                        rules={
                            [{
                                    required: true,
                                    message: "Required Field is Empty"
                                }]
                    }>
                        <div className="wrapper">

                            <Input placeholder='Enter Your Password' id="password"/>

                            <i className="fa-solid fa-eye"
                                onClick={handleShowPassword}
                                style={
                                    {cursor: 'pointer'}
                            }></i>
                            {/* <i className="fa-solid fa-eye-slash" onClick={handleShowPassword}></i> */} </div>
                    </Form.Item>
                    <div className='d-flex justify-content-center'>
                    <Button className='button-primary mt-2 w-25'  htmlType='submit'>Log in</Button>
                    </div>
                </Form>
                <div className='d-flex justify-content-center'>
                <Link to='/register' className="link">Click Here to<span style={{textDecoration:"underLine", paddingLeft:7}}>Register</span></Link>
            </div>
            </div>
            <div>
          <img src={LoginImage} alt="register image"/>
        </div>
        </div>
    )
}

export default Login
