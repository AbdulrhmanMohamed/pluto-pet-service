import React, { useEffect } from 'react'
import Layout from '../../component/layout/Layout'
import { Form ,Row,Col,Input,TimePicker,Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { applyDoctor } from '../../store/applyDoctorSlice';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import moment from 'moment';
function Doctor() {
    const navigate=useNavigate();
    const {token}=useSelector(state=>state.loginSlice);
    // const{applyDoctorSuccess,applyDoctorMessage,applyDoctorErrMessage,applyDoctorError}=useSelector(state =>state.applyDoctorSlice)
    const dispatch=useDispatch()
    const handleErrorState=async(values)=>{
        const { data } = await axios.post('api/user/apply-doctor', values,{
            headers:{
                'authorization':'Bearer'+'  '+ token
            }
        });
        setTimeout(()=>{
            
            if(data.success){
    
                navigate('/')
                toast.success(data.message)
                
            }
            else  {
                toast.error( data.message)
            }
          },500)
    }
    const onFinish=(values)=>{
        // dispatch(applyDoctor(values))
       handleErrorState(values);

            
      
        
    }
    useEffect(()=>{
        
    },[])
  return (
    <Layout >
        <div className="doctor p-4">
            <h2 className='page-title text-black'>Apply Doctor</h2>
            <hr />
            <Form layout='vertical' onFinish={onFinish}>
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
                        <Input  className="text-input" placeholder="First Name" />
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
                        <Input  className="text-input" placeholder="specializatioin"  />
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
                    </Col> */}
                   
                </Row>
                    <div className="d-flex justify-content-end " >
                        <Button htmlType='submit' className='apply-submit' style={{
                            background:'var(--mainColor)',
                            color:'black',
                            fontSize:'20px',
                            maxWidth:'fit-content',
                            height:'50px',
                            borderRadius:'5px',
                            border:'1px solid var(--soDarkColor)'
                        }}>Submit</Button>
                    </div>
                   
            </Form>
        </div>
    </Layout>
  )
}

export default Doctor