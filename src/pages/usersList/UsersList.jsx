import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../component/layout/Layout'
import { getAllUsers } from '../../store/getAllusersSlice';
import {Table} from 'antd'
function UsersList() {
  const dispatch=useDispatch();
  const {token}=useSelector(state => state.loginSlice)
  const{users}=useSelector(state =>state.getAllusersSlice)
  useEffect(()=>{
    dispatch(getAllUsers('dummy'))
  },[dispatch,getAllUsers])
  const columns=[
    {title:'Name',
  dataIndex:'userName'},
  {
    title:'Email',
    dataIndex:'email',
  },
  {
    title:'CreatedAt',
    dataIndex:'createdAt'
  },{
    title:'Actions',
    dataIndex:'actions',
    render:(text,record)=>{
      return (
        <div className='d-flex'>
          <span  style={{textDecoration:'underline',color:'#777',fontSize:'16px',cursor:'pointer'}}>Block</span>
        </div>
      )
    }
  }
  ]
  return (
    <Layout>
       <div className="users-list">

        <h2 className='p-4'>Users List</h2>
        <Table columns={columns} dataSource={users}/>
       </div>
    </Layout>
  )
}

export default UsersList