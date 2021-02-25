import PropTypes from "prop-types";
import React from "react";
// import SliderSlick from "../SliderSlick";
import SliderSlick from "./../SliderSlick";

import homeCarouselData from "../../constants/homeCarouselData";
import CarouselItem from "./CarouselItem";

function Carousel(props) {
  const { isHero } = props;

  const renderCarousel = () => {
    return homeCarouselData.map((item, index) => {
      return <CarouselItem key={index} detailMovie={item} />;
    });
  };
  return (
    <section className={`carousel ${isHero ? "hero" : ""}`}>
      {!isHero && (
        <SliderSlick>
          {/* map here */}
          {renderCarousel()}
        </SliderSlick>
      )}
      {props.children}
    </section>
  );
}

Carousel.propTypes = {
  isHero: PropTypes.bool,
};
Carousel.defaultProps = {
  isHero: false,
};

export default Carousel;
