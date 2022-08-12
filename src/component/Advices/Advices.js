import React from 'react'
import {AdvicesQues } from "../../pages/Advices/AdviceData";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion";
import "./Advices.css"
import { Link } from "react-router-dom";
const Advices = () => {
    const blogs = AdvicesQues.slice(6, 9);
    return (
      <div className="py-5 container-fluid bg-light mx-0">
        <h3 id="LastBlogH3">Latest Blog Posts</h3>
        <Row className="d-flex justify-content-between" style={{paddingBottom : "7rem", paddingTop : "4rem"}}>
        {blogs.map((elem, index) => (
          
            <Col key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-sm-3">
              <Card style={{ width: '23rem' , borderWidth:0}} className="h-100">
              <motion.div whileHover={{scale:1.03}}>
                <Card.Img variant="top" src={elem.image} style={{height:200}}/>
                </motion.div>
                <Card.Body>
                <motion.div whileHover={{color : "var(--mainColor)"}}>
                  <Card.Title style={{height : 50 , textAlign:'center', fontSize:21 , lineHeight:1.5 , fontWeight:600}} className="h-100">{elem.title}</Card.Title>
                  </motion.div>
                </Card.Body>
              </Card>
            </Col>
          
        ))}
        <Link aria-current="page" to="/advices" id="AllServicesNavigation">
      <p>All Blogs</p></Link>
        </Row>
      </div>
    );
}

export default Advices