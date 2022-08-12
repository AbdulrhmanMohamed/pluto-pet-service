import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../component/layout/Layout'
import {Table} from 'antd'
import { getAllServices } from '../../store/getAllServicesSlice';
import { changeServiceStatus } from '../../store/changeServiceStatusSlice';

// import { changeDoctorStatus } from '../../store/changeDoctorStatusSlice';
function ServicesList() {
    const dispatch=useDispatch();
  
  const{services}=useSelector(state =>state.getAllServicesSlice)
  const handleApproval=(record)=>{
    
    dispatch(changeServiceStatus({actualUserId:record.userId,status:record.status}))
    setTimeout(()=>{

        // dispatch(getAllServices('dummy'))
     dispatch(getAllServices('dummy'))

    },500)
  }

  useEffect(()=>{
    dispatch(getAllServices('dummy'))
  },[])

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
    title:'Service',
    dataIndex:'service'
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
    <Layout style={{overflow: 'hidden'}}>
       <div className="doctors-list">

        <h2 className='p-4'>Service List</h2>
        <Table columns={columns} dataSource={services}/>
       </div>
    </Layout>
  )
}

export default ServicesList