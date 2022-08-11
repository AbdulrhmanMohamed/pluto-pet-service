import React from 'react'
import {useNavigate} from 'react-router-dom'
import { FaWhatsapp , FaFirefoxBrowser} from "react-icons/fa";
import { FiMail} from "react-icons/fi";
function DoctorCardComponent({doctor}) {
    const navigate = useNavigate();

    const generateRandomImage = () => { // const baseImageUrl='https://picsum.photos/200/300?random='

        const random = Math.round(Math.random() * 101);
        return `https://picsum.photos/200/300?random=${random}`
    }
    return (

        <div className="card my-5"
            style={
                {cursor: 'pointer',border:'2px solid transparent',borderRadius:'13px',  width:"33rem"}
        }>
            <div className="" style={{background:'#FFF6E6',padding:'0px 30px',borderRadius:'6px',border:'2px solid #f1f1f1'}}>
                <h4 style={{color:'var(--soDarkColor)'}} className="my-1"> <span style={{color:'#777'}}>Name | </span>{
                    doctor.firstName
                }&nbsp; {
                    doctor.lastName
                }</h4>
            </div>
            <div className="card-body p-0 mt-2">
               <div className="flexDoctor d-flex align-items-center pt-3">
               <img src={
                        generateRandomImage()
                    }
                    className=''
                    alt=""
                    style={
                        {height: '250px',width:'12rem',border:'2px solid black',borderRadius:'6px'}
                    }/>

                <div className="content-wrapper ms-3">
                    <p style={
                        {
                            margin: ' 10px',
                            fontSize: '18px',
                            color: 'black'
                        }
                    }>Expirence:<span style={{color:"#777"}}> {
                        doctor.expirence
                    }</span></p>

                    <p style={
                        {
                            margin: ' 10px',
                            fontSize: '18px',
                            color: '#000'
                        }
                    }>Specilization:<span style={{color:"#777"}}> {
                        doctor.specializatioin
                    }</span></p>
                    <p style={
                        {
                            margin: ' 10px',
                            fontSize: '18px',
                            color: '#000'
                        }
                    }>FeePer Visit:<span style={{color:"#777"}}> {
                        doctor.feePerConsultation
                    } Egp</span></p>
                    <div className="">
                    <div className="icon-wrapper d-flex align-items-center justify-content-between">
                        {
                        doctor.whatsApp && <a href={`https://wa.me/${doctor.whatsApp}`} className='whatsapp_float' target="_blank" rel='noopenner noreferrer'><FaWhatsapp size={30} color="black"/></a>
                    }
                        {
                        doctor.website && <a href='#'><FaFirefoxBrowser size={30} color="black"/></a>
                    }
                        {
                        doctor.email && <a href={`mailto:${doctor.email}`} target="_blank"><FiMail size={30} color="black"/></a>
                    } </div>

                </div>
                </div>
               </div>
                {/* <p style={{margin:'0',fontSize:'18px',color:'#777'}}>timings:{doctor.timings[0]}: &nbsp; {doctor.timings[1]}</p> */} </div>
        </div>
    )
}

export default DoctorCardComponent
