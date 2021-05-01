import React from 'react'
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import Slider from "react-slick";

import MovieItem from './MovieItem';
import useStyles from './style';

export function SampleNextArrow(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <ArrowForwardIosRoundedIcon style={{ right: "-82px" }} onClick={onClick} className={classes.Arrow} />
  );
}

export function SamplePrevArrow(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <ArrowBackIosRoundedIcon style={{ left: "-100px" }} onClick={onClick} className={classes.Arrow} />
  );
}

export default function SimpleTabs({ arrayData, value }) {
  const classes = useStyles();
  const settings = {
    className: "center",
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className={classes.container}>
      <Slider {...settings}>
        {value.value === 0 ?
          arrayData.dailyMovieList?.map((item) => {
            return (
              <div className="px-1" key={item.maPhim}>
                <MovieItem
                  item={item}
                />
              </div>
            )
          }) :
          arrayData.comingMovieList?.map((item) => {
            return (
              <div className="px-1" key={item.maPhim}>
                <MovieItem
                  item={item}
                />
              </div>
            )
          })
        }
      </Slider>
    </div >
  );
}

