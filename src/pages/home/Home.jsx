import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useDispatch,useSelector} from 'react-redux'
import { hideLoader, showLoader } from '../../store/loaderSlice';
import Layout from '../../component/layout/Layout';
import { useNavigate } from 'react-router-dom';
import getAllApprovedDoctor from '../../store/getAllApprovedDoctor';
import { Form ,Row,Col,Input,TimePicker,Button} from 'antd';

import DoctorCardComponent from '../../component/doctorCardComponent/DoctorCardComponent';
function Home() {
  const dispatch=useDispatch();
  const {loader}=useSelector(state=>state.loaderSlice)

  const navigate=useNavigate();
  // const {res}=useSelector(state => state.getAllApprovedDoctorSlice)
  const [doctors,setDoctors]=useState(null)
  const [searchedDoctor,setSearchedDoctor]=useState([])
  const [searchSuccess,setSearchSuccess]=useState(null)
  const handleRequest=async()=>{

    try{

      const {data}=await axios.get('/api/user/getAllApprovedDoctor')
      if(data.success){
        // toast.success(data.message)
        setDoctors(data.doctors)
      }
      else{
        toast.error(data.message)
      }

    }catch(error){
      toast.error('some Thing is Wrong')
    }
      
      
      
  }
  
//   const onFinish=(values)=>{
//     // dispatch(applyDoctor(values))
//   //  handleErrorState(values);

  
  
    
// }

const searchDoctors=async(searchData)=>{
  const {data}=await axios.post('/api/user/searchDoctors',searchData)
  if(data.searchSuccess){
    
    setSearchedDoctor(data.searchDoctors)
  }
  
  setSearchSuccess(data.searchSuccess)
}
let obj={}
const handleOnChange=(e)=>{
  
 
 obj[e.target.name]=e.target.value;
//  setFormData({obj})

 searchDoctors(obj)

}

  useEffect(()=>{
    handleRequest();
    
  },[])
  return (
    <div className=''>
      <Layout>
        <div className="home  p-4">


       
        {/* creating Search component */}

        {/* <Form layout='vertical' onFinish={onFinish} onValuesChange={onChange}>
                
                <h2 style={{
                    fontSize:'20px',
                    color:'#777',
                    marginTop:'20px',
                }}>Choose YOur Doctor</h2>
                
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
                        <Input  placeholder="specializatioin" />
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
                        <Input  placeholder="How Many Years"  type='number'/>
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
                        <Input  type="number" placeholder="How Much for Consultation session" />
                    </Form.Item>
                    </Col>
                    
                   
                </Row>
                    <div className="d-flex justify-content-end " >
                        <Button htmlType='submit' style={{
                            background:'#005555',
                            color:'white',
                            fontSize:'20px',
                            maxWidth:'fit-content',
                            height:'50px',
                            borderRadius:'5px',
                        }}>Search</Button>
                    </div>
                   
            </Form>
         */}

        <form action="">
          <div className="row">
            <h2>Search Your Doctor</h2>
            <div className="col-xs-12 col-md-4">
              <div className="from-group">
                <input type="text" className="form-control"  placeholder='specializatioin' name='specializatioin' onChange={e=>handleOnChange(e)}/>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="from-group">
                <input type="text" className="form-control"  placeholder='Expirenence' name="expirence" onChange={e=>handleOnChange(e)}/>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="from-group">
                <input type="text" className="form-control"  placeholder='Fee Per Serivice' name='feePerConsultation' onChange={e=>handleOnChange(e)}/>
              </div>
            </div>
          </div>
        </form>

       {
        searchSuccess?<h2> "SearchSUccess"</h2>:
        <div className="allDoctors">
       <Row gutter={20}>
         
         {doctors?.length>0 && doctors?.map((doctor,index)=>{
           return (
             <Col span={8} xs={24} sm={24} lg={8} className='mb-3'>
             <DoctorCardComponent doctor={doctor} key={index}/>
            </Col>
           )
         })}
    
     </Row>
       </div>
       }
        </div>
      </Layout>
    </div>
  )
}

export default Home