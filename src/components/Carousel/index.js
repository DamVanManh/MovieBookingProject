
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import useStyles from "./styles";

import moviesApi from "../../api/moviesApi";

import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import homeCarouselData from "../../constants/homeCarouselData";
const play = './img/play-video.png';

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
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIosRoundedIcon style={{ right: "15px" }} onClick={onClick} className={classes.Arrow} />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIosRoundedIcon style={{ left: "15px" }} onClick={onClick} className={classes.Arrow} />
    );
  }
  return (
    <div >
      {/* {console.log("hiển thị", bannerList)} */}
      <Slider {...settings}  >
        {homeCarouselData.map((banner) => {
          return (
            <a href="#" key={banner.maPhim}>
              <img src={banner?.hinhAnh} alt="banner" className={classes.img} />
              <div className={classes.bgl} />
              <button className={classes.button}>
                <img src={play} className={classes.img} />
              </button>
            </a>
          )
        })}

      </Slider>
    </div>
  );
}


