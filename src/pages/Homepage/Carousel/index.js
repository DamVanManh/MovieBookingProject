
import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import homeCarouselData from "../../../constants/homeCarouselData";
import SearchStickets from "./SearchTickets";

import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './carousel.css';
import useStyles from "./styles";
const play = './img/carousel/play-video.png';

export default function Carousel() {
  const [openDialog, setOpenDialog] = React.useState({ toggel: false, trailer: '' });
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));

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

  const handleClickOpen = (trailer) => {
    setOpenDialog({ ...openDialog, toggel: true, trailer })
  };

  const handleClose = () => {
    setOpenDialog({ ...openDialog, toggel: false })
  };

  return (
    <div id='carousel' className={classes.carousel}>
      <Slider {...settings}  >
        {homeCarouselData.map((banner) => {
          return (
            <a href="#" key={banner.maPhim} className={classes.a}>
              <img src={banner?.hinhAnh} alt="banner" className={classes.img} />
              <div className={classes.backgroundLinear} />
              <div className={`${classes.button} play`}>
                <img src={play} className={`${classes.imgPlay}`} onClick={() => handleClickOpen(banner.trailer)} />
              </div>
            </a>
          )
        })}
      </Slider>

      <Dialog open={openDialog.toggel} onClose={handleClose} maxWidth='md' >
        <iframe className={`${sm && classes.downRangeSm} ${md && classes.upKeyMd}`} src={`${openDialog.trailer}?autoplay=1`} frameBorder="0" allow='autoplay'></iframe>
        <IconButton className={classes.closeButton} onClick={handleClose} >
          <CloseIcon style={{ color: 'white' }} fontSize='small' />
        </IconButton>
      </Dialog>

      <SearchStickets />
    </div>
  );
}
