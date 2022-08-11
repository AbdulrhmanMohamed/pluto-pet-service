import React from 'react'
import "./ChooseUS.css";
import { FaFirstAid, FaPaw, FaHeart} from "react-icons/fa";
const ChooseUS = () => {
  return (
    <div className='container-fluid bg-light m-auto p-5'>
    <h3 className="d-flex justify-content-center mb-4" id="ServiceSectionH3">Why Choose Us</h3>
    <p className="col-12 text-center mb-5 mx-2" id="ServiceSectionParagraph">
      As a leading pet setting service provider, we aim to enable your pets to
      live life to its fullest. Here are some reasons why our clients choose
      us over other pet sitters.
    </p>
    <div className="row d-flex justify-content-between pb-5">
      <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center" style={{width: "22rem"}}>
          <div className="row d-flex justify-content-center align-items-center">
              <div className="col-4 mx-0 WhyChooseUsImageStyle" style={{backgroundColor:"rgb(255 154 36)", width:76 , height:76 , borderRadius:40 , display:'flex' , justifyContent:"center" , alignItems:"center"}} ><FaFirstAid style={{fontSize:35}} color="#fff"/></div>
              <div className="col-8 CardsWhyStyle">
                  <h4>We Heal Pets</h4>
                  <p>PetCare provides qualified veterinarian services.</p>
              </div>
          </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center" style={{width: "22rem"}}>
      <div className="row d-flex justify-content-center align-items-center">
              <div className="col-4 mx-0 WhyChooseUsImageStyle" style={{backgroundColor:"rgb(57 127 232)", width:76 , height:76 , borderRadius:40 , display:'flex' , justifyContent:"center" , alignItems:"center"}}><FaPaw style={{fontSize:35}}  color="#fff"/></div>
              <div className="col-8 CardsWhyStyle">
                  <h4>We Care for Pets</h4>
                  <p>We also provide care for your pets where they are most comfortable.</p>
              </div>
          </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center" style={{width: "22rem"}}>
      <div className="row d-flex justify-content-center align-items-center">
              <div className="col-4 mx-0 WhyChooseUsImageStyle" style={{backgroundColor:"rgb(109 211 73)", width:76 , height:76 , borderRadius:40 , display:'flex' , justifyContent:"center" , alignItems:"center"}}><FaHeart style={{fontSize:35}}  color="#fff"/></div>
              <div className="col-8 CardsWhyStyle">
                  <h4>We Love Pets</h4>
                  <p>Our sitters will gladly come and spend time with all your pets.</p>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default ChooseUS