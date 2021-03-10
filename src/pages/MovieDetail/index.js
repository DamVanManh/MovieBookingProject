import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetail } from '../../reducers/actions/Movie';
import { Link, useParams } from "react-router-dom";
import useStyles from './style'
export default function MovieDetail() {
  const classes = useStyles()
  const param = useParams()
  // console.log(param.movieId)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetail(param.movieId))
  }, [param.movieId])

  const { movieDetail, loading, error } = useSelector((state) => state.movieReducer);
  // console.log(loading)
  if (loading) {
    return <h1>loading</h1>
  }
  if (error) {
    return <div>{error}</div>
  }


  // console.log(movieDetail)
  // useEffect(() => {
  //   movieDetail = movieDetail.data
  //   console.log(movieDetail)
  // }, [param.movieId])
  // console.log(array)
  // console.log(movie)
  return (
    <div>

      <div className={classes.movie__detail}>
        <div className={classes.movie__img}>
          <img className="w-100 h-100" src={movieDetail?.hinhAnh} alt="movieDetail" />
        </div>
        <div className={classes.movie__name}>
          <h3>Tên phim: {movieDetail?.tenPhim}</h3>
        </div>
        <div className={classes.movie__rating}>
          <h3>Đánh giá: {movieDetail?.danhGia}</h3>
        </div>
      </div>

      <div className="movie__booking">
        <div className="row">
          {movieDetail?.lichChieu.map((item, index) => {
            return (
              <div key={index} className="col-sm-2 pb-2 ml-2">
                {/* <p>{item.maLichChieu}</p> */}
                <Link to={`/datve/${item.maLichChieu}`} className="btn btn-success">{item.maLichChieu}</Link>
              </div>
            )
          })}
        </div>
      </div>

    </div>

  )
}
