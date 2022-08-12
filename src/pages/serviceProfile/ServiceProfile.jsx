import React, { useEffect, useState } from 'react'
import Layout from '../../component/layout/Layout'
import { Form ,Row,Col,Input,TimePicker,Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getServiceProfile from '../../store/getServiceProfile';
import axios from 'axios';
import toast from 'react-hot-toast';
import { updateServiceProfile } from '../../store/updateServiceProfileSlice';

function ServiceProfile() {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    // const{serviceProfileData}=useSelector(state =>state.getServiceProfileSlice)
    const {res}=useSelector(state =>state.updateServiceProfileSlice)
    const {token}=useSelector(state=>state.loginSlice)
    let [serviceProfileData,setServiceProfileData]=useState({})
    const getServiceProfile=async()=>{
        const {data}=await axios.get('/api/service/getServiceProfile',{
            headers:{
                'authorization':'Bearer' +'  ' +token
            }
        })
        if(data.success){
            const serviceProfileData={...data.res};

            // toast.success(data.message)
            setServiceProfileData({...serviceProfileData})
        }
    }
    const onFinish=(values)=>{
      
        dispatch(updateServiceProfile(values))
        setTimeout(()=>{
            dispatch(getServiceProfile())
        },500)
        if(res?.success){
            toast.success(res?.message)
            setTimeout(()=>{

                navigate('/')
            },500)
        }
      
    }
    useEffect(()=>{
        getServiceProfile();
    },[])
  return (
    <Layout >
    <div className="doctor p-4">
        <h2 className='page-title'>Your Service Profile</h2>
        <hr />
       { Object.keys(serviceProfileData).length>0&& <Form layout='vertical' onFinish={onFinish} initialValues={serviceProfileData}>
            <h2  style={{
                fontSize:'20px',
                color:'var(--soDarkColor)',
                marginTop:'20px',

            }}>Personal Information</h2>
            <Row gutter={20} className="my-4">
                <Col xs={24} md={8}>
                <Form.Item  name="firstName" label="FirstName" rules={
                        [
                            {
                                required: true,
                                message: "This Field is Required"
                            }, 
                        ]
                }>
                    <Input className="text-input"  placeholder="First Name" />
                </Form.Item>
                </Col>
               
                <Col xs={24} md={8}>
                <Form.Item  name="lastName" label="lastName" rules={
                        [
                            {
                                required: true,
                                message: "This Field is Required"
                            }, 
                        ]
                }>
                    <Input className="text-input"  placeholder="Last Name" />
                </Form.Item>
                </Col>
               
               
                <Col xs={24} md={8}>
                <Form.Item  name="whatsApp" label="WhatsNumber" >
                    <Input className="text-input"  placeholder="+201201392000" />
                </Form.Item>
                </Col>
               
               
                <Col xs={24} md={8}>
                <Form.Item  name="email" label="Email" rules={
                        [
                            {
                                required: true,
                                message: "This Field is Required"
                            }, 
                            {
                                pattern: new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
                                message: "Invalid Email Address"
                            }
                        ]
                }>
                    <Input className="text-input"  placeholder="Enter Your Gmail Account" />
                </Form.Item>
                </Col>
               
                <Col xs={24} md={8}>
                <Form.Item  name="facebook" label="FacebookAccount" 
                >
                    <Input className="text-input"  placeholder="Your Address" />
                </Form.Item>
                </Col>
               
                
               
            </Row>
            <hr />
            <h2 style={{
                fontSize:'20px',
                color:'var(--soDarkColor)',
                marginTop:'20px',
            }}>Service Information</h2>
            <Row gutter={20} className="my-4">
                
               
                <Col xs={24} md={8}>
                <Form.Item  name="service" label="Service" rules={
                        [
                            {
                                required: true,
                                message: "This Field is Required"
                            }, 
                        ]
                }>
                    <Input className="text-input"  placeholder="What Type Of Service" />
                </Form.Item>
                </Col>
               
               
                <Col xs={24} md={8}>
                <Form.Item  name="location" label="location" rules={
                        [
                            {
                                required: true,
                                message: "This Field is Required"
                            }, 
                        ]
                }>
                    <Input className="text-input"  placeholder="Where Do You live"  type='text'/>
                </Form.Item>
                </Col>
               
              
                <Col xs={24} md={8}>
                <Form.Item  name="feePerService" label="feePerService" rules={
                        [
                            {
                                required: true,
                                message: "This Field is Required"
                            }, 
                        ]
                }>
                    <Input className="text-input"  type="number" placeholder="How Much for your Service" />
                </Form.Item>
                </Col>
               
               
            </Row>
                <div className="d-flex justify-content-end apply-submit" >
                    <Button htmlType='submit' style={{
                        background:'var(--mainColor)',
                        color:'black',
                        fontSize:'20px',
                        maxWidth:'fit-content',
                        height:'50px',
                        borderRadius:'5px',
                    }}>Update</Button>
                </div>
               
        </Form>}
    </div>
</Layout>
  )
}

export default ServiceProfile