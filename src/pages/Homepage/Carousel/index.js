
import React from 'react';

import { useDispatch } from 'react-redux';
import Slider from "react-slick";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { useHistory } from "react-router-dom";

import homeCarouselData from "../../../constants/homeCarouselData";
import SearchStickets from "./SearchTickets";
import './carousel.css';
import useStyles from "./styles";
import BtnPlay from '../../../components/BtnPlay';

export default function Carousel() {
  const dispatch = useDispatch()
  const history = useHistory();
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
    <div id='carousel' className={classes.carousel}>
      <Slider {...settings}  >
        {homeCarouselData.map((banner) => {
          return (
            <div key={banner.maPhim} className={classes.itemSlider}>
              <img src={banner?.hinhAnh} alt="banner" className={classes.img} />
              <div className={classes.backgroundLinear} onClick={() => history.push(`/phim/${banner.maPhim}`)} />
              <BtnPlay cssRoot={"play"} urlYoutube={banner.trailer} />
            </div>
          )
        })}
      </Slider>
      <SearchStickets />
    </div>
  );
}
