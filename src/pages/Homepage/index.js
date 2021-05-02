import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getMovieList } from '../../reducers/actions/Movie';
import { getTheaters } from '../../reducers/actions/Theater';
import News from "./News";
import Carousel from "./Carousel";
import HomeApp from './HomeApp'
import Theaters from './Theaters'
import Loading from '../../components/Loading';
import Showtime from './Showtime'
import "slick-carousel/slick/slick.css"; // npm install slick-carousel --save
import "slick-carousel/slick/slick-theme.css";

export default function Homepage() {
  const { loadingMovieList } = useSelector((state) => state.movieReducer)
  const { loadingTheaterList } = useSelector((state) => state.theaterReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList())
    dispatch(getTheaters())
  }, [])

  // loadingMovieList || loadingTheaterList : chỉ cần 1 trong 2 là true thì > true, cả 2 phải đều là false thì > false
  return (
    <div >
      <Loading loading={loadingMovieList || loadingTheaterList}></Loading>
      <Carousel />
      <Showtime />
      <Theaters />
      <News />
      <HomeApp />
    </div>
  )
}

