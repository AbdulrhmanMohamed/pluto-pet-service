import React from 'react'
import Layout from '../../component/layout/Layout'
import { Form ,Row,Col,Input,TimePicker,Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { applyDoctor } from '../../store/applyDoctorSlice';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function ApplyService() {

    const navigate=useNavigate();
    const {token}=useSelector(state=>state.loginSlice);
    // const{applyDoctorSuccess,applyDoctorMessage,applyDoctorErrMessage,applyDoctorError}=useSelector(state =>state.applyDoctorSlice)
    const dispatch=useDispatch()
    const handleErrorState=async(values)=>{
        const { data } = await axios.post('/api/service/apply-service', values,{
            headers:{
                'authorization':'Bearer'+'  '+ token
            }
        
        });
        setTimeout(()=>{
            
            if(data.success){
    
                toast.success(data.message)
                navigate('/')
                
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
  return (
    <Layout >
        <div className="doctor p-4">
            <h2 className='page-title'>Apply Service</h2>
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
                        <Input className="text-input"  placeholder="First Name" />
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
                        <Input className="text-input"  placeholder="Last Name" />
                    </Form.Item>
                    </Col>
                   
                   
                    <Col xs={24} md={8}>
                    <Form.Item name="whatsApp" label="WhatsNumber" >
                        <Input className="text-input"  placeholder="+201201392000" />
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
                        <Input className="text-input"  placeholder="Enter Your Gmail Account" />
                    </Form.Item>
                    </Col>
                   
                    <Col xs={24} md={8}>
                    <Form.Item name="facebook" label="FacebookAccount" 
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
                    <Form.Item name="service" label="Service" rules={
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
                    <Form.Item name="location" label="location" rules={
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
                    <Form.Item name="feePerService" label="feePerService" rules={
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
                        }}>Submit</Button>
                    </div>
                   
            </Form>
        </div>
    </Layout>
  )
}

export default ApplyService