import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Groom from "../../assets/petGrooming.jpg"
import Sitter from "../../assets/PetSitting.jpg"
import Training from "../../assets/PetTraining.jpg"
import "./Services.css"
const Services = () => {
  return (
    <div className="container-fluid py-5">
    <Container>
    <h3 className="d-flex justify-content-center" id="ServiceSectionH3">Services</h3>
      <Row className="d-flex justify-content-between" style={{paddingBottom : "7rem", paddingTop : "4rem"}}>
        <Col className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pb-sm-3">
        <Card style={{ width: '23rem', borderColor:"transparent"}}>
      <Card.Img variant="top" src={Groom} />
      <Card.Body>
        <Card.Title>Pet Grooming</Card.Title>
        <Card.Text>
        We offer complete bath, haircut & walk-in grooming services at PetCare.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-sm-3">
        <Card style={{ width: '23rem' , borderColor:"transparent"}}>
      <Card.Img variant="top" src={Sitter} />
      <Card.Body>
        <Card.Title>Pet Sitting & Dog Walking</Card.Title>
        <Card.Text>
        Our sitters will be glad to visit your pets and walk your dogs on a daily basis.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-sm-3">
        <Card style={{ width: '23rem' , borderColor:"transparent"}}>
      <Card.Img variant="top" src={Training} />
      <Card.Body>
        <Card.Title>Dog Training</Card.Title>
        <Card.Text>
        No matter what dog you have, our training classes can help them learn how to behave.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    
    </div>
  )
}

export default Services