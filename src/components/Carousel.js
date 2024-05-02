import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../src/componentes.css';
import estudiante from "../images/estudiante.png";
import imgcarrousel from "../images/imgcarrousel.png";
import calendario from "../images/calendario.jpg";

const CarouselComponent = () => {
  return (
    <div className="carousel-container"> {/* Contenedor para centrar el carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={estudiante}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgcarrousel}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={calendario}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
