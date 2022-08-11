import React, { useEffect } from 'react'
import Layout from '../../component/layout/Layout'
import {Tabs} from 'antd'
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { markAllAsSeen } from '../../store/markAsSeenSlice';
import { userInfoById } from '../../store/userSlice';
import { deleteAllSeen } from '../../store/deleteAllSeenNotificationSlice';
function Notifications() {
    const {user} =  useSelector(state => state.userSlice)
    const {token}=useSelector(state =>state.loginSlice)

    const dispatch=useDispatch();
    const navigate = useNavigate();
    const handleMarkAsSeen = () => {
        // dispatch
        dispatch(markAllAsSeen())
        setTimeout(()=>{
            dispatch(userInfoById(token))

        },1000)
    }
    const deleteAllSeenNotifications=()=>{
        dispatch(deleteAllSeen())
        setTimeout(()=>{
            dispatch(userInfoById(token))
        },1000)
    }
    useEffect(()=>{

    },[user])
    return (
        <Layout>
            <div className="notifications p-5">
                <h2 className='page-title'>Notifications</h2>
                <Tabs>
                    <Tabs.TabPane key={0}
                        tab="UnSeen">
                        <div className="d-flex justify-content-end">
                            <span style={
                                    {
                                        fontSize: '18px',
                                        color: 'gray',
                                        marginBottom: '15px',
                                        cursor: 'pointer',
                                        textDecoration: 'underline'
                                    }
                                }
                                onClick={handleMarkAsSeen}>MarkAllAsSeen</span>
                        </div>
                        {
                            
                        user && user?.unSeenNotification.map((noti, index) => {
                            return (
                                <div key={index}
                                    class="card p-3 my-2"
                                    style={
                                        {cursor: 'pointer'}
                                    }
                                    onClick={
                                        () => navigate(noti?.onClickPath)
                                }>
                                    <div class="card-header">
                                        <span style={
                                            {
                                                fontSize: '18px',
                                                color: '#777'
                                            }
                                        }>Request | {
                                            noti.message
                                        }</span>
                                    </div>
                                    {/* <div class="card-body">
                                        <h5 style={
                                            {
                                                color: 'gray',
                                                marginTop: '10px'
                                            }
                                        }>professional Information</h5>
                                        <hr style={
                                            {
                                                width: '20%',
                                                height: '2px',
                                                margin: '20px 0'
                                            }
                                        }/>
                                        <p style={
                                            {
                                                fontSize: '18px',
                                                color: 'gray'
                                            }
                                        }>Specialization: {
                                            noti.data?.specializatioin
                                        }</p>
                                        <p style={
                                            {
                                                fontSize: '18px',
                                                color: 'gray'
                                            }
                                        }>Expirence: {
                                            noti.data?.expirence
                                        }</p>
                                        <p style={
                                            {
                                                fontSize: '18px',
                                                color: 'gray'
                                            }
                                        }>Fee: ${
                                            noti.data?.feePerConsultation
                                        }</p>

                                    </div>
                                    <div class="card-footer text-muted"></div> */}
                                </div>
                            )
                        })
                    } </Tabs.TabPane>
                    <Tabs.TabPane key={1}
                        tab="Seen">
                         <div className="d-flex justify-content-end">
                            <span style={
                                    {
                                        fontSize: '18px',
                                        color: 'gray',
                                        marginBottom: '15px',
                                        cursor: 'pointer',
                                        textDecoration: 'underline'
                                    }
                                }
                               onClick={deleteAllSeenNotifications} >Delete All</span>
                        </div>
                        {
                        user && user?.seenNotification.map((noti, index) => {
                            return (
                                <div key={index}
                                    class="card p-3 my-2"
                                    style={
                                        {cursor: 'pointer'}
                                    }
                                    onClick={
                                        () => navigate(noti?.onClickPath)
                                }>
                                    <div class="card-header">
                                        <span style={
                                            {
                                                fontSize: '18px',
                                                color: '#777'
                                            }
                                        }>Request | {
                                            noti.message
                                        }</span>
                                    </div>
                                    {/* <div class="card-body">
                                        <h5 style={
                                            {
                                                color: 'gray',
                                                marginTop: '10px'
                                            }
                                        }>professional Information</h5>
                                        <hr style={
                                            {
                                                width: '20%',
                                                height: '2px',
                                                margin: '20px 0'
                                            }
                                        }/>
                                        <p style={
                                            {
                                                fontSize: '18px',
                                                color: 'gray'
                                            }
                                        }>Specialization: {
                                            noti.data?.specializatioin
                                        }</p>
                                        <p style={
                                            {
                                                fontSize: '18px',
                                                color: 'gray'
                                            }
                                        }>Expirence: {
                                            noti.data?.expirence
                                        }</p>
                                        <p style={
                                            {
                                                fontSize: '18px',
                                                color: 'gray'
                                            }
                                        }>Fee: ${
                                            noti.data?.feePerConsultation
                                        }</p>

                                    </div>
                                    <div class="card-footer text-muted"></div> */}
                                </div>
                            )
                        })
                    }
                    </Tabs.TabPane>
                </Tabs>
            </div>

        </Layout>
    )
}

export default Notifications
