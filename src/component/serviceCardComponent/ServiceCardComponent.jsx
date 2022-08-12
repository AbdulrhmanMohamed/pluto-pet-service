import { useNavigate } from 'react-router-dom'
import { FaWhatsapp , FaFirefoxBrowser} from "react-icons/fa";
import { FiMail} from "react-icons/fi";

function ServiceCardComponent({service}) {
  const generateRandomImage = () => { // const baseImageUrl='https://picsum.photos/200/300?random='

    const random = Math.round(Math.random() * 101);
    return `https://picsum.photos/200/300?random=${random}`
}
    const navigate=useNavigate();
  
  return (
    <div className="card m-3"
            style={
                {cursor: 'pointer',border:'2px solid transparent',borderRadius:'13px',}
        }>
            <div className="" style={{background:'#FFF6E6',padding:'0px 30px',borderRadius:'6px',border:'2px solid #f1f1f1'}}>
                <h4 style={{color:'var(--soDarkColor)'}} className="my-1"> <span style={{color:'#777'}}>Name | </span>{
                    service.firstName
                }&nbsp; {
                    service.lastName
                }</h4>
            </div>
            <div className="card-body p-0 mt-2">
               <div className="flexservice d-flex align-items-center pt-3">
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
                    }>Service:<span style={{color:"#777"}}> {
                        service.service
                    }</span></p>

                    <p style={
                        {
                            margin: ' 10px',
                            fontSize: '18px',
                            color: 'black'
                        }
                    }>Location: <span style={{color:"#777"}}>{
                        service.location
                    }</span> </p>
                    <p style={
                        {
                            margin: ' 10px',
                            fontSize: '18px',
                            color: 'black'
                        }
                    }>Fees: <span style={{color:"#777"}}> {
                        service.feePerService
                    } Egp</span></p>
                    <div className="">
                    <div className="icon-wrapper d-flex align-items-center justify-content-between">
                        {
                        service.whatsApp && <a href={`https://wa.me/${service.whatsApp}`} className='whatsapp_float' target="_blank" rel='noopenner noreferrer'><FaWhatsapp size={30} color="black"/></a>
                    }
                        {
                        service.facebook && <a href='#'><FaFirefoxBrowser size={30} color="black"/></a>
                    }
                        {
                        service.email && <a href={`mailto:${service.email}`} target="_blank"><FiMail size={30} color="black"/></a>
                    } </div>

                </div>

                </div>
               </div>
                {/* <p style={{margin:'0',fontSize:'18px',color:'#777'}}>timings:{service.timings[0]}: &nbsp; {doctor.timings[1]}</p> */} </div>
        </div>
  )
}

export default ServiceCardComponent;