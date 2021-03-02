import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CarouselSlide = () => {
  return (
    <Carousel showThumbs={false} autoPlay>
      <div>
        <img alt="" src="https://picsum.photos/400/200" />
      </div>
      <div>
        <img alt="" src="https://picsum.photos/400/200" />
      </div>
      <div>
        <img alt="" src="https://picsum.photos/400/200" />
      </div>
    </Carousel>
  );
};
export default CarouselSlide;
