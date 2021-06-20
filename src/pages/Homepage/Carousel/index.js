
import React from 'react';

import Slider from "react-slick";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { useHistory } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import homeCarouselData from "../../../constants/homeCarouselData";
import SearchStickets from "./SearchTickets";
import './carousel.css';
import useStyles from "./styles";
import BtnPlay from '../../../components/BtnPlay';

export default function Carousel() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const history = useHistory();
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000, //speed per sence
    autoplay: false,
    speed: 500,
    swipeToSlide: true,
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
              {isDesktop && <BtnPlay cssRoot={"play"} urlYoutube={banner.trailer} />}
            </div>
          )
        })}
      </Slider>
      <SearchStickets />
    </div>
  );
}
