import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import ScrollToTop from 'react-scroll-up';

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

  const styleScrollToTop = {
    position: 'fixed',
    bottom: 30,
    right: 10,
    transitionTimingFunction: 'linear',
    width: 50,
    transform: "rotate(180deg)",
    zIndex: 1000,
  }

  return (
    <div >
      <Loading loading={loadingMovieList || loadingTheaterList}></Loading>
      <Carousel />
      <Showtime />
      <Theaters />
      <News />
      <HomeApp />
      <ScrollToTop showUnder={160}>
        <img src="/img/logoTixLoading.png" alt="totop" style={styleScrollToTop} />
      </ScrollToTop>
    </div>
  )
}

