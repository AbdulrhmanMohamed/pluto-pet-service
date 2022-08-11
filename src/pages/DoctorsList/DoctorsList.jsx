import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../component/layout/Layout'
import {Table} from 'antd'
import { getAllDoctors } from './../../store/getAllDoctorsSlice';
import { changeDoctorStatus } from '../../store/changeDoctorStatusSlice';
function DoctorsList() {
  const dispatch=useDispatch();
  
  const{doctors}=useSelector(state =>state.getAllDoctorsSlice)
  const handleApproval=(record)=>{
    
    dispatch(changeDoctorStatus({actualUserId:record.userId,status:record.status}))
    setTimeout(()=>{

        dispatch(getAllDoctors('dummy'))
    },500)
  }
//   const handlePending=(record)=>{
//     dispatch(changeDoctorStatus({actualUserId:record.userId,status:'pending',isADoctor:false}))
//     setTimeout(()=>{

//         dispatch(getAllDoctors('dummy'))
//     },500)
//   }
  useEffect(()=>{
    dispatch(getAllDoctors('dummy'))
  },[dispatch,getAllDoctors])
  const columns=[
    {title:'Name',
  dataIndex:'userName',
render:(text,record)=>{
    return <span style={{fontSize:"20px",color:'gray',}}>{record.firstName} {record.lastName}</span>
}},
  {
    title:'Email',
    dataIndex:'email',
  },
  {
    title:'specialization',
    dataIndex:'specializatioin',
  },
  
  {title:'Status',
  dataIndex:'status',
  
    }

  ,{
    title:'Actions',
    dataIndex:'actions',
    render:(text,record)=>{
      return (
        <div className='d-flex'>
          <span className='underline-link' onClick={()=>handleApproval(record)}>{record.status=='approved'?'Block':"pending"}</span>
        </div>
      )
    }
  }
  ]
  return (
    <Layout>
       <div className="doctors-list">

        <h2 className='p-4'>Doctors List</h2>
        <Table columns={columns} dataSource={doctors}/>
       </div>
    </Layout>
  )
}

export default DoctorsList