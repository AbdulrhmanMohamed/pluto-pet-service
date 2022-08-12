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
  const [location,setlocation]=useState(null)
  const [feePerService,setFeePerService]=useState(null)
  const [service,setService]=useState(null)
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
    
   
  
    // const temp={}
    // temp[e.target.name]=e.target.value;
    // obj={...obj,...temp}
    // console.log('sended Search Input',obj)
   searchServices(obj)
  
  }
  
useEffect(()=>{
    handleRequest();
    searchServices({location,service,feePerService})
    
  },[location,service,feePerService])
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
              <input type="text" className="form-control text-input"  placeholder='Service' name='service' onChange={e=>setService(e.target.value)}/>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="from-group">
              <input type="text" className="form-control text-input"  placeholder='Location' name="location"  onChange={e=>setlocation(e.target.value)}/>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="from-group">
              <input type="text" className="form-control text-input"  placeholder='Fee Per Serivice' name='feePerService' onChange={e=>setFeePerService(e.target.value)}/>
            </div>
          </div>
        </div>
      </form>

     {
      searchSuccess?
      <div className="searchedService py-5">
     <div className='d-flex flex-wrap justify-content-center'>
       
       {searchedServices?.length>0 && searchedServices?.map((service,index)=>{
         return (
           <div key={index}  className='mb-3'>
           {/* <DoctorCardComponent doctor={doctor} key={index}/> */}
           <ServiceCardComponent key={index} service={service}/>
          </div>
         )
       })}
  
   </div>
     </div>:
      <div className="allServices py-5">
     <div className='d-flex flex-wrap justify-content-center'>
       
       {services?.length>0 && services?.map((service,index)=>{
         return (
           <div key={index}  className='mb-3'>
           {/* <DoctorCardComponent doctor={doctor} key={index}/> */}
           <ServiceCardComponent key={index} service={service}/>
          </div>
         )
       })}
  
   </div>
     </div>
     }
      </div>
    </Layout>
  </div>
  )
}

export default ServiceHome