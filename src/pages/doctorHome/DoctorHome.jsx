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
function DoctorHome() {

    const dispatch=useDispatch();
  const {loader}=useSelector(state=>state.loaderSlice)

  const navigate=useNavigate();
  // const {res}=useSelector(state => state.getAllApprovedDoctorSlice)
  const [doctors,setDoctors]=useState(null)
  const [searchedDoctor,setSearchedDoctor]=useState([])
  const [searchSuccess,setSearchSuccess]=useState(null)
  const [specializatioin,setSpecializatioin]=useState(null)
  const [expirence,setExpirence]=useState(null)
  const [feePerConsultation,setFeePerConsultation]=useState(null)
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
  

const searchDoctors=async(searchData)=>{
    const {data}=await axios.post('/api/user/searchDoctors',searchData)
    if(data.searchSuccess){
      
      setSearchedDoctor(data.searchDoctors)
    }
    
    setSearchSuccess(data.searchSuccess)
  }
  let obj={}
  // const handleOnChange=(e)=>{
    
   
  //  obj[e.target.name]=e.target.value;
  // //  setFormData({obj})
  
  //  searchDoctors(obj)
  
  // }
  
useEffect(()=>{
    handleRequest();
    searchDoctors({expirence,feePerConsultation,specializatioin})
  },[expirence,feePerConsultation,specializatioin])
  return (
    <div className=''>
    <Layout>
      <div className="home  p-4">


     
      {/* creating Search component */}

      
      <form action="" className='searchForm'>
          <h2 className=''>Search Your Doctor</h2>
          <div className="row align-items-center justify-content-center my-4">
          <div className="col-xs-12 col-md-4  ">
            <div className="from-group">
              <input type="text" className="form-control text-input "  placeholder='specializatioin' name='specializatioin' onChange={e=>setSpecializatioin(e.target.value)}/>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="from-group">
              <input type="text" className="form-control text-input "  placeholder='Expirenence' name="expirence" onChange={e=>setExpirence(e.target.value)}/>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="from-group">
              <input type="text" className="form-control text-input"  placeholder='Fee Per Serivice' name='feePerConsultation' onChange={e=>setFeePerConsultation(e.target.value)}/>
            </div>
          </div>
        </div>
        
      </form>

     {
      searchSuccess?<div className="searchedDoctors py-5">
      <div className='d-flex flex-wrap justify-content-center'>
        
        {searchedDoctor?.length>0 && searchedDoctor?.map((doctor,index)=>{
          return (
            <di  className='mb-3'>
            <DoctorCardComponent doctor={doctor} key={index}/>
           </di>
          )
        })}
   
    </div>
      </div>:
      <div className="allDoctors py-5" >
     <div className='d-flex flex-wrap justify-content-center'>
       
       {doctors?.length>0 && doctors?.map((doctor,index)=>{
         return (
           <div className='mb-3'>
           <DoctorCardComponent doctor={doctor} key={index}/>
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

export default DoctorHome