import { Box } from '@mui/material';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import PlutoLogo from "../../assets/logo.png";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light navbar-custom">
    <div  className='container'>
      <Link className="navbar-brand d-flex justify-content-center w-50 m-auto" to="/"  >
          <div className="row align-items-center">
              <img src={PlutoLogo} alt="logo" className="col-5 pe-1"/>
              <h3 className="col-6" style={LogoName}>Pluto</h3>
          </div>
      </Link>     
    </div>
  </nav>
  )
}
const LogoName = {
    fontFamily : "Montserrat",
    fontWeight : 500,
    fontSize : '2rem',
    paddingLeft : 0, 
    color : "var(--blackColor)"
  }
export default NavBar