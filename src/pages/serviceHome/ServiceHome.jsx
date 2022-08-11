import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useDispatch,useSelector} from 'react-redux'
import { hideLoader, showLoader } from '../../store/loaderSlice';
import Layout from '../../component/layout/Layout';
import { useNavigate } from 'react-router-dom';
import getAllApprovedDoctor from '../../store/getAllApprovedDoctor';
import { Form ,Row,Col,Input,TimePicker,Button} from 'antd';
import ServiceCardComponent from '../../component/serviceCardComponent/ServiceCardComponent';
function ServiceHome() {

  const dispatch=useDispatch();
  const {loader}=useSelector(state=>state.loaderSlice)

  const navigate=useNavigate();
  // const {res}=useSelector(state => state.getAllApprovedDoctorSlice)
  const [services,setServices]=useState(null)
  const [searchedServices,setSearchedServices]=useState([])
  const [searchSuccess,setSearchSuccess]=useState(null)
  const handleRequest=async()=>{

    try{

      const {data}=await axios.get('/api/service/getAllApprovedService')
      if(data.success){
        // toast.success(data.message)
        setServices(data.services)
      }
      else{
        toast.error(data.message)
      }

    }catch(error){
      toast.error('some Thing is Wrong')
    }
      
      
      
  }
  
  const searchServices=async(searchData)=>{
    const {data}=await axios.post('/api/service/searchService',searchData)
    if(data.searchSuccess){
      
      setSearchedServices(data.searchService)
    }
    
    setSearchSuccess(data.searchSuccess)
  }
  let obj={}
  const handleOnChange=(e)=>{
    
   
   obj[e.target.name]=e.target.value;
  //  setFormData({obj})
  
   searchServices(obj)
  
  }
  
useEffect(()=>{
    handleRequest();
    
  },[])
  return (
    <div className=''>
    <Layout>
      <div className="home  p-4">


     
      {/* creating Search component */}

      
      <form action="" className='searchForm'>
          <h2>Search Your Doctor</h2>
        <div className="row my-4">
          <div className="col-xs-12 col-md-4">
            <div className="from-group">
              <input type="text" className="form-control text-input"  placeholder='Service' name='service' onChange={e=>handleOnChange(e)}/>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="from-group">
              <input type="text" className="form-control text-input"  placeholder='Location' name="location" onChange={e=>handleOnChange(e)}/>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="from-group">
              <input type="text" className="form-control text-input"  placeholder='Fee Per Serivice' name='feePerService' onChange={e=>handleOnChange(e)}/>
            </div>
          </div>
        </div>
      </form>

     {
      searchSuccess?
      <div className="searchedService">
     <Row gutter={20}>
       
       {searchedServices?.length>0 && searchedServices?.map((service,index)=>{
         return (
           <Col key={index} span={8} xs={24} sm={24} lg={8} className='mb-3'>
           {/* <DoctorCardComponent doctor={doctor} key={index}/> */}
           <ServiceCardComponent key={index} service={service}/>
          </Col>
         )
       })}
  
   </Row>
     </div>:
      <div className="allServices">
     <Row gutter={20}>
       
       {services?.length>0 && services?.map((service,index)=>{
         return (
           <Col key={index} span={8} xs={24} sm={24} lg={8} className='mb-3'>
           {/* <DoctorCardComponent doctor={doctor} key={index}/> */}
           <ServiceCardComponent key={index} service={service}/>
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

export default ServiceHome