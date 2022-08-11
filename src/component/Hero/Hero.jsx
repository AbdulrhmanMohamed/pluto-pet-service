import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { images } from "./SliderImages";
import "./Hero.css"
const Hero = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img className="w-100" src={images[0]} alt="First slide" />
      <Carousel.Caption id="HeroCentarizedContent">
        <div id="HeroContent">
          <h1 className="HeroH1">Welcome to Pluto</h1>
          <p>Cat sitting & dog home boarding</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="w-100" src={images[1]} alt="Second slide" />

      <Carousel.Caption id="HeroCentarizedContent">
        <div id="HeroContent">
          <h1 className="HeroH1">Welcome to Pluto</h1>
          <p>Cat sitting & dog home boarding</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="w-100" src={images[2]} alt="Third slide" />

      <Carousel.Caption id="HeroCentarizedContent">
        <div id="HeroContent">
          <h1 className="HeroH1">Welcome to Pluto</h1>
          <p>Cat sitting & dog home boarding</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Hero