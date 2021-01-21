// import React, { Component } from 'react'

// export default class Homepage extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <h1>hompage</h1>
//         <button onClick={() => this.props.history.push('/admin/users')}>ADmin</button>
//       </div>
//     )
//   }
// }

// test git

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from '../../actions/Movie';

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
    <div className='container'>
      
      <div className='row'>
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
      </div>
    </div>
  )
}

