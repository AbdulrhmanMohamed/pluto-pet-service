import React, { useState } from 'react'
import {Button, Form, Input} from 'antd'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import PetRegist from "../../assets/petRegist.png";
function Register() {
  const [showPassword,setShowPassword]=useState(true)
  const navigate=useNavigate();
  const handleShowPassword=()=>{
    setShowPassword(!showPassword);
    const passInput=document.querySelector('.wrapper #password');
    const i=document.querySelector('i')
    i.classList=""
    if(showPassword){
      i.classList.add('fa-solid','fa-eye')
     
      passInput.type='text'

    }else{passInput.type='password'; i.classList.add('fa-solid','fa-eye-slash')
    
  }
  }
  const onFinish=async(values)=>{
    try{

      const {data}=await axios.post('/api/user/register',values)
       if(data.success){
         toast.success(data.message);
          navigate('/login')
       }
       else{
        toast.error(data.message)
       }
    }catch(e){
      toast.error('Some Thing Went Wrong')
    }
    console.log('all the form Values',values)
    
  }
  const onFinishFailed=(errors)=>{
    console.log('errors',errors)
  }
  return (
    <div className='authentication'>
        <div className="authentication-form card">
         {/* <h1 className="card-register-title my-3">Nice To Meet You All</h1> */}
         <Form layout='vertical' onFinish={onFinish}  onFinishFailed={onFinishFailed}>
          <Form.Item label="Name" name="userName" rules={[{ required: true, message: 'Please input your username!' },{min:3,message:"you should add more than 3"}]}>
            <Input placeholder='Enter Your Name' />
          </Form.Item>  
          <Form.Item label="Email" name="email" rules={[{required:true,message:"This Field is Required"},{
            pattern:new RegExp( /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),message:"Invalid Email Address"
          }]}>
            <Input placeholder='Enter Your Email' />
          </Form.Item>  
          <Form.Item label="Password" name="password"  rules={[{required:true,message:"Required Field is Empty"}]}>
          <div className="wrapper">

            <Input placeholder='Enter Your Password'  id="password" type="password"/>
            
            <i className="fa-solid fa-eye-slash" onClick={handleShowPassword} style={{cursor:'pointer'}}></i>
            {/* <i className="fa-solid fa-eye-slash" onClick={handleShowPassword}></i> */}
          </div>
          </Form.Item>  
          <div className='d-flex justify-content-center mb-2'>
          <Button className='button-primary mt-2 w-25' htmlType='submit'>Register</Button>
          </div>
         </Form>
         <div className='d-flex justify-content-center'>
          <Link to='/login' className="link" style={{backgroundColor:'var(--maincolor)'}}>Click Here to <span style={{textDecoration:"underLine", paddingLeft:7}}>Log in</span></Link>
         </div>        
        </div>
        <div>
          <img src={PetRegist} alt="register image"/>
        </div>
    </div>
  )
}

export default Register