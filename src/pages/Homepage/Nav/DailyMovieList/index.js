import React, { useEffect } from 'react'
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from '../../../../reducers/actions/Movie';
import MovieItem from '../MovieItem';
import useStyles from "./styles";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

export function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
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


function DailyMovieList() {

  // useSelector lấy data từ reducer về
  const { movieList, loading, error } = useSelector((state) => state.movieReducer);
  // useDispatch: dispatch action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList())
  }, [])

  const shuffledMovieList = shuffleArray(movieList);

  const settings = {
    className: "center",
    // centerMode: true,
    // infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  if (loading) {
    return <div>loading</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
    <div >
      <Slider className="container" {...settings}>
        {shuffledMovieList.map((item, index) => {
          return (
            <div key={item.maPhim}>
              <MovieItem
                item={item}
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )


}



export default (DailyMovieList)
