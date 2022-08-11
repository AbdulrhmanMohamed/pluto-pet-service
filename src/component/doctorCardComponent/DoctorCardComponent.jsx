import React from 'react'
import {useNavigate} from 'react-router-dom'

function DoctorCardComponent({doctor}) {
    const navigate = useNavigate();

    const generateRandomImage = () => { // const baseImageUrl='https://picsum.photos/200/300?random='

        const random = Math.round(Math.random() * 101);
        return `https://picsum.photos/200/300?random=${random}`
    }
    return (

        <div className="card my-5"
            style={
                {cursor: 'pointer',border:'2px solid var(--mainColor)',borderRadius:'13px'}
        }>
            <div className="" style={{background:'#FFF6E6',padding:'0px 30px',borderRadius:'6px',border:'2px solid #f1f1f1'}}>
                <h4 style={{color:'var(--soDarkColor)'}}> <span style={{color:'#777'}}>Name | </span>{
                    doctor.firstName
                }&nbsp; {
                    doctor.lastName
                }</h4>
            </div>
            <div className="card-body p-0 my-2">
               <div className="flexDoctor d-flex align-items-center justify-content-center py-3">
               <img src={
                        generateRandomImage()
                    }
                    className='w-100'
                    alt=""
                    style={
                        {height: '150px',width:'12rem',border:'2px solid black',borderRadius:'6px'}
                    }/>

                <div className="content-wrapper ms-3">
                    <p style={
                        {
                            margin: ' 10px',
                            fontSize: '18px',
                            color: '#777'
                        }
                    }>Expirence:{
                        doctor.expirence
                    }</p>

                    <p style={
                        {
                            margin: ' 10px',
                            fontSize: '18px',
                            color: '#777'
                        }
                    }>Specilization:{
                        doctor.specializatioin
                    }</p>
                    <p style={
                        {
                            margin: ' 10px',
                            fontSize: '18px',
                            color: '#777'
                        }
                    }>FeePer Visit:&nbsp; ${
                        doctor.feePerConsultation
                    }</p>
                </div>
               </div>
                <div className="">
                    <div className="icon-wrapper d-flex align-items-center justify-content-around">
                        {
                        doctor.whatsApp && <i class="fa-brands fa-whatsapp  fa-3x"></i>
                    }
                        {
                        doctor.website && <i class="fa-brands fa-firefox-browser fa-3x "></i>
                    }
                        {
                        doctor.email && <i class="fa-solid fa-envelope fa-3x"></i>
                    } </div>

                </div>

                {/* <p style={{margin:'0',fontSize:'18px',color:'#777'}}>timings:{doctor.timings[0]}: &nbsp; {doctor.timings[1]}</p> */} </div>
        </div>
    )
}

export default DoctorCardComponent
