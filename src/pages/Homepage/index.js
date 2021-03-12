import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from '../../reducers/actions/Movie';

import { Link } from "react-router-dom";
import News from "../../components/News";
<<<<<<< HEAD
import Theaters from '../../components/Theaters';
=======
import Carousel from "../../components/Carousel";

>>>>>>> 24a61869985578237b6efebd13b8b260056fb3c1
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
<<<<<<< HEAD

    <div className='container'>
=======
    // bỏ container vì không fluid được component con: <div className='container'>
    <div>
      <Carousel />
>>>>>>> 24a61869985578237b6efebd13b8b260056fb3c1
      <div className='row'>
        {movieList.map((movie) => {
          return (
            <div className="card col-sm-3" key={movie.maPhim}>
              <img className="card-img-top" src={movie.hinhAnh} alt="movie" />
              <div className="card-body">
                <h4 className="card-title">{movie.tenPhim}</h4>
                <p className="card-text">{movie.moTa}</p>
              </div>
              <div className="card-footer">
                {/* --edit here */}
                {/* <button className="btn btn-danger">Đặt vé</button> */}
                <Link to={`/phim/${movie.maPhim}`} className="btn btn-danger">Đặt vé</Link>
                {/* ---------------- */}
              </div>

            </div>
          )
        })
        }
      </div>
<<<<<<< HEAD
      <Theaters />
=======

>>>>>>> 24a61869985578237b6efebd13b8b260056fb3c1
      <News />
    </div>


  )
}

