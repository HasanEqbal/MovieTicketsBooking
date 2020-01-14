import React from 'react';
import { Carousel } from 'react-bootstrap';
import movieOne from '../movie1.png';
import movieTwo from '../movie2.png';
import movieThree from '../movie3.png';
import './Carosuel.css';

export default function Carosuel() {
    return (
        <div>
            <Carousel className="carouselContainer">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={movieOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={movieTwo}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={movieThree}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
