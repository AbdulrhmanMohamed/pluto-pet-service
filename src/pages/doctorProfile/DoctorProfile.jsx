import React, { useEffect } from 'react'
import Layout from '../../component/layout/Layout'
import { Form ,Row,Col,Input,TimePicker,Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorProfile } from '../../store/getDoctorProfileSlice';
import { updateDoctorProfile } from '../../store/updateDoctorProfileSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import moment from 'moment';

function DoctorProfile() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const{doctorProfileData}=useSelector(state =>state.getDoctorProfileSlice)
    const {res}=useSelector(state =>state.updateDoctorProfileSlice)
    const onFinish=(values)=>{
        // dispatch(applyDoctor(values))
       

        //     if(applyDoctorSuccess){

        //         toast.success(applyDoctorMessage)
        //         navigate('/')
                
        //     }
        //     else  {
        //         toast.error(applyDoctorMessage || "Doctor Account Already Exist")
        //     }
        dispatch(updateDoctorProfile(values))
        setTimeout(()=>{
            dispatch(getDoctorProfile('dummy'))
        },500)
        if(res?.success){
            toast.success(res?.message)
            navigate('/')
        }
      
    }
    useEffect(()=>{
        dispatch(getDoctorProfile('dummy'))
    },[dispatch,getDoctorProfile])
  return (
    
    <Layout  >
        <div className="doctorProfile p-5">

        <h2 style={{color:'black'}}>Doctor Profile</h2>

        <hr />
       {
        doctorProfileData && <Form layout='vertical' onFinish={onFinish} initialValues={doctorProfileData}>
        <h2 style={{
            fontSize:'20px',
            color:'var(--soDarkColor)',
            marginTop:'20px',
        }}>Personal Information</h2>
        <Row gutter={20} className="my-4">
            <Col xs={24} md={8}>
            <Form.Item name="firstName" label="FirstName" rules={
                    [
                        {
                            required: true,
                            message: "This Field is Required"
                        }, 
                    ]
            }>
                <Input  placeholder="First Name"  className='text-input' />
            </Form.Item>
            </Col>
           
            <Col xs={24} md={8}>
            <Form.Item name="lastName" label="lastName" rules={
                    [
                        {
                            required: true,
                            message: "This Field is Required"
                        }, 
                    ]
            }>
                <Input  className="text-input" placeholder="Last Name" />
            </Form.Item>
            </Col>
           
           
            <Col xs={24} md={8}>
            <Form.Item name="whatsApp" label="WhatsNumber" rules={
                    [
                        {
                            required: true,
                            message: "This Field is Required"
                        }, 
                    ]
            }>
                <Input  className="text-input" placeholder="+201201392000" />
            </Form.Item>
            </Col>
           
           
            <Col xs={24} md={8}>
            <Form.Item name="email" label="Email" rules={
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
                <Input  className="text-input" placeholder="Enter Your Gmail Account" />
            </Form.Item>
            </Col>
           
            <Col xs={24} md={8}>
            <Form.Item name="address" label="Address" rules={
                    [
                        {
                            required: true,
                            message: "This Field is Required"
                        }, 
                    ]
            }>
                <Input  className="text-input" placeholder="Your Address" />
            </Form.Item>
            </Col>
            <Col xs={24} md={8}>
            <Form.Item name="website" label="website" rules={
                    [
                        {
                            required: true,
                            message: "This Field is Required"
                        }, 
                    ]
            }>
                <Input  className="text-input" placeholder="website" />
            </Form.Item>
            </Col>
           
            
           
        </Row>
        <hr />
        <h2 style={{
            fontSize:'20px',
            color:'var(--soDarkColor)',
            marginTop:'20px',

        }}>Proffesional Information</h2>
        <Row gutter={20} className="my-4">
            
           
            <Col xs={24} md={8}>
            <Form.Item name="specializatioin" label="specializatioin" rules={
                    [
                        {
                            required: true,
                            message: "This Field is Required"
                        }, 
                    ]
            }>
                <Input  className="text-input" placeholder="specializatioin" />
            </Form.Item>
            </Col>
           
           
            <Col xs={24} md={8}>
            <Form.Item name="expirence" label="expirence" rules={
                    [
                        {
                            required: true,
                            message: "This Field is Required"
                        }, 
                    ]
            }>
                <Input  className="text-input" placeholder="How Many Years"  type='number'/>
            </Form.Item>
            </Col>
           
          
            <Col xs={24} md={8}>
            <Form.Item name="feePerConsultation" label="feePerConsultation" rules={
                    [
                        {
                            required: true,
                            message: "This Field is Required"
                        }, 
                    ]
            }>
                <Input  className="text-input" type="number" placeholder="How Much for Consultation session" />
            </Form.Item>
            </Col>
            {/* <Col xs={24} md={8}>
            <Form.Item name="timings" label="Timings" rules={
                    [
                        {
                            required: true,
                            message: "This Field is Required"
                        }, 
                    ]
            }>
                <TimePicker.RangePicker format="HH:mm"/>
            </Form.Item>
            </Col>
            */}
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
           
    </Form>
       }
        </div>
    </Layout>
  )
}

export default DoctorProfile