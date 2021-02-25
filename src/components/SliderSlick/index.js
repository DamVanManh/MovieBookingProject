import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosRoundedIcon style={{ fontSize: 45 }} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosRoundedIcon style={{ fontSize: 45 }} />
    </div>
  );
}
export default function SliderSlick(props) {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 600, //speed transition animate
    autoplaySpeed: 5000, //speed per sence
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,

    responsive: [
      {
        //less than
        breakpoint: 1065,
        settings: {
          arrows: false,
          // autoplay: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} {...props.customSlick}>
      {props.children}
    </Slider>
  );
}

SliderSlick.propTypes = {
  customSlick: PropTypes.object,
};
SliderSlick.defaultProps = {
  customSlick: {},
};
