
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from '../../reducers/actions/Movie';

import Carousel from "../../components/Carousel";
export default function Homepage() {

  // useSelector lấy data từ reducer về
  const { movieList, loading, error } = useSelector((state) => state.movieReducer);
  // useDispatch: dispatch action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList())
  }, [])

  if (loading) {
    return <div>loading</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <div style={{ minHeight: '64px', backgroundColor: "red" }}></div>

      {/* <div className='row'>
        {movieList.map((movie) => {
          return (
            <div className="card col-sm-3" key={movie.maPhim}>
              <img className="card-img-top" src={movie.hinhAnh} alt="movie" />
              <div className="card-body">
                <h4 className="card-title">{movie.tenPhim}</h4>
                <p className="card-text">{movie.moTa}</p>
              </div>
            </div>
          )
        })
        }
      </div> */}
      <Carousel />
    </>
  )
}

