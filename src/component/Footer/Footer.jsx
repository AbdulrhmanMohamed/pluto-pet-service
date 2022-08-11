import React from 'react'
import "./Footer.css"
import { motion } from "framer-motion"
import { Box } from "@mui/material";
import { Link } from "react-router-dom"
import { FaFacebookSquare, FaInstagram, FaPaw , FaTwitter } from "react-icons/fa";
import PlutoLogo from "../../assets/logo.png"
const Footer = () => {
  return (
    <>
        <hr className="container m-auto"/>
        <div className="container-fluid row col-12 mx-auto py-5 bg-white">
        <div className="col-12 mt-2 col-sm-6 col-md-6 col-lg-3">
        <div className="row align-items-center" style={{width:"19rem"}}>
            <img src={PlutoLogo} alt="logo" className="col-5 pe-1"/>
            <h3 className="col-6" style={LogoName}>Pluto</h3>
        </div>
       
            </div>
            
            <div className="col-12 mt-2 col-sm-6 col-md-6 col-lg-3">
                <h5 className="FooterH5Style">About us</h5>
                <p id="FooterMainParagraph">We are seeking to connect you with other pet lovers who are ready to help you take care of your pets like it were part of their family, belly rubs and hugs included.</p>
            </div>
            <div className="col-12 mt-2 col-sm-6 col-md-6 ps-lg-5 col-lg-3">
                <h5 className="FooterH5Style">For Pet Owner</h5>
                <p><Link className="FooterPetOwnerItems" to="/">Services</Link></p>
                <p><Link className="FooterPetOwnerItems" to="/advices">Blogs</Link></p>
            </div>
            <div className="col-12 mt-2 col-sm-6 col-md-6 col-lg-3">
                <h5 className="FooterH5Style">Contact us</h5>
                <Box display="flex">
                <motion.div whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }}>
                <a href="https://www.facebook.com/"><FaFacebookSquare size={27} color="#4267B2" /></a>
                </motion.div>
                <motion.div whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }}>
                <a href="https://www.instagram.com/" className="mx-4"><FaInstagram size={27} color="#fe4164"/></a>
                </motion.div>
                <motion.div whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }}>
                <a href="https://twitter.com/"><FaTwitter size={27} color="#00acee"/></a>
                </motion.div> 
                </Box>
            </div>
            <hr className="w-50 m-auto my-4"/>
            <h5 style={H5StyleAdd}>Copyright &copy; 2022 Pluto 
            <FaPaw color="rgb(255 154 36)"/>
            </h5>
        </div>
        </>
  )
}
const LogoName = {
    fontFamily : "Montserrat",
    fontWeight : 500,
    fontSize : '2.3rem',
    paddingLeft : 0, 
}
const H5Style ={
    fontFamily:"Montserrat",
    fontWeight:500,
    fontSize: '1.7rem',
    color: "black"
}
const H5StyleAdd = {
    H5Style,
    textAlign : 'center',
}
export default Footer