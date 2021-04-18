import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux';
import { SampleNextArrow, SamplePrevArrow, shuffleArray } from '../DailyMovieList';
import { useEffect } from 'react'
import { getMovieList } from '../../../../reducers/actions/Movie';
import MovieItem from '../MovieItem';

function ComingMovieList() {

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
      <Slider className="flex-container" {...settings}>
        {shuffledMovieList.map((item, index) => {
          return (
            <div className="col-3" key={item.maPhim}>
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
export default (ComingMovieList)
