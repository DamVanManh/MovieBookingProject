import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { getMovieShowtimes } from '../../reducers/actions/MovieDetail';
import useStyles from './style';
import { DISPLAY_MOBILE_HOMEPAGE } from '../../constants/config'
import Mobile from './Mobile';
import Desktop from './Desktop';

export default function Index() {
  const isMobile = useMediaQuery(DISPLAY_MOBILE_HOMEPAGE)
  const { movieDetailShowtimes, loadingMovieDetailShowtimes, errorMovieDetailShowtimes } = useSelector((state) => state.movieDetailReducer);
  const param = useParams()
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(getMovieShowtimes(param.maPhim))
  }, [])

  const classes = useStyles()

  if (errorMovieDetailShowtimes) {
    return <div>{errorMovieDetailShowtimes}</div>
  }
  return (
    <>
      {  isMobile ? <Mobile /> : <Desktop movieDetailShowtimes={movieDetailShowtimes} />}
    </>
  )
}
