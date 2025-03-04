import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import carousel1 from "../assets/carousel1.jpg"
import carousel2 from "../assets/carousel2.jpg"
import carousel3 from "../assets/carousel3.jpg"
import carousel4 from "../assets/carousel4.jpg"
import carousel5 from "../assets/carousel5.jpg"



const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "400px", // Adjust height
              borderRadius: "20px", // Rounded corners
            }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel4}
            alt="Second slide"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "400px",
              borderRadius: "20px",
            }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel5}
            alt="Third slide"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "400px",
              borderRadius: "20px",
            }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;




