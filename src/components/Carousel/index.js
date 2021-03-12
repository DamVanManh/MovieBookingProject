
import React, { useState, useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import homeCarouselData from "../../constants/homeCarouselData";

import PopupTrailer from "./popup";
import './carousel.css';
import useStyles from "./styles";

export default function Carousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000, //speed per sence
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slickdotsbanner", // đổi tên class để dùng css chỉnh sửa riêng cho dot trong trường hợp dùng 2 Slider
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <ArrowForwardIosRoundedIcon style={{ right: "15px" }} onClick={onClick} className={classes.Arrow} />
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <ArrowBackIosRoundedIcon style={{ left: "15px" }} onClick={onClick} className={classes.Arrow} />
    );
  }
  return (
    <div >
      {/* {console.log("hiển thị", bannerList)} */}
      <div style={{ minHeight: '64px', backgroundColor: "red" }}></div>
      <Slider {...settings}  >
        {homeCarouselData.map((banner) => {
          return (
            <a href="#" key={banner.maPhim} className={classes.a}>
              <img src={banner?.hinhAnh} alt="banner" className={classes.img} />
              <div className={classes.backgroundLinear} />
              <div className={`${classes.button} play`}>
                <PopupTrailer banner={banner} classImg={classes.img} />
              </div>

            </a>
          )
        })}
      </Slider>
    </div>
  );
}
