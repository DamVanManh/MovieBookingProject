import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getMovieList } from '../../reducers/actions/Movie';
import { getTheaters } from '../../reducers/actions/Theater';
import News from "./News";
import Carousel from "./Carousel";
import HomeApp from './HomeApp'
import Theaters from './Theaters'
import Showtime from './Showtime'
import "slick-carousel/slick/slick.css"; // npm install slick-carousel --save
import "slick-carousel/slick/slick-theme.css";

export default function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList())
    dispatch(getTheaters())
  }, [])

  return (
    <div >
      <Carousel />
      <Showtime />
      <Theaters />
      <News />
      <HomeApp />
    </div>
  )
}

