import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from '../../reducers/actions/Movie';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import News from "../../components/News";
import Carousel from "./Carousel";
import Theaters from '../../components/Theaters';

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


  const ArrowLeft = (props) => (
    <button
      {...props}
      className={'prev'}
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        position: 'absolute',
        left: '-80px',
        top: '38%',
      }}>
      <span className="material-icons" style={{ fontSize: '100px' }} >
        keyboard_arrow_left
      </span>
    </button>
  );
  const ArrowRight = (props) => (

    <button
      {...props}
      className={'next'}
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        position: 'absolute',
        right: '-80px',
        top: '38%',
      }}>
      <span className="material-icons" style={{ fontSize: '100px' }} >
        keyboard_arrow_right
    </span>
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    rows: 2,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (

    // bỏ container vì không fluid được component con: <div className='container'>
    <div>
      <Carousel />

      <div className='showTime container' style={{ marginTop: 100 }}>
        <h2 className="text-center">Đang Chiếu</h2>
        <Slider {...settings}>

          {movieList.map((movie) => {
            return (
              <div className="item " key={movie.maPhim} style={{ padding: '20px' }}  >
                <div className="card" style={{ minHeight: '350px', padding: '20px', border: 'none' }}>
                  <img style={{ width: '100%', height: '300px' }} className="card-img-top" src={movie.hinhAnh} alt="movie" />
                  {/* <div className="card-body">
                    <h4 className="card-title">{movie.tenPhim}</h4>
                  </div> */}

                  <div className="card-footer" style={{ minHeight: '70px' }}>
                    <p style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '0px' }} className="card-title">{movie.tenPhim}</p>
                  </div>
                  {/* <div className="card-footer">
                    <Link to={`/phim/${movie.maPhim}`} className="btn btn-danger">Đặt vé</Link>
                  </div> */}
                </div>

              </div>
            )
          })}
        </Slider>
      </div>
      <Theaters />
      <News />
    </div>


  )
}

