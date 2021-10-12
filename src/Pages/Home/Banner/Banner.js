import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>
                            {" "}
                            HONEST, QUALITY WORK AT AFFORDABLE PRICES
                        </h1>
                        <p>
                            We provide top-notch service for import and <br />{" "}
                            Exhaust, Tune Ups, Engine Repairs, Electrical and
                            A.C Systems.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>
                            {" "}
                            COMPETITIVE PRICES LONG TERM WARRANTIES
                        </h1>
                        <p>
                            We provide top-notch service for import and <br />{" "}
                            Exhaust, Tune Ups, Engine Repairs, Electrical and
                            A.C Systems.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>
                            {" "}
                            MASTER MAINTENANCE & QUALIFIED TECHNICIANS
                        </h1>
                        <p>
                            We provide top-notch service for import and <br />{" "}
                            Exhaust, Tune Ups, Engine Repairs, Electrical and
                            A.C Systems.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
