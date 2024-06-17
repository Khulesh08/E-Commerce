import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Advertisement = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://odia-ray.in/images/Vijay_Sales_Grand_Sale.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5 >Slider One Item</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
            nulla, tempore. Deserunt excepturi quas vero.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.pikbest.com/wp/202346/black-friday-banner-ads-sale-3d-render-design-with-ample-copy-space-for-promotions-and_9747846.jpg!bw700"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Slider One Item</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
            nulla, tempore. Deserunt excepturi quas vero.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.pikbest.com/wp/202347/essential-typography-black-friday-and-shopping-essentials-in-3d-design_9750313.jpg!bw700"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Slider One Item</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
            nulla, tempore. Deserunt excepturi quas vero.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Advertisement;
