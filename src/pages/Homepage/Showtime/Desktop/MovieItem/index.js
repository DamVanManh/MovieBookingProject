import React from 'react'

import { Link, useHistory } from 'react-router-dom'

import BtnPlay from '../../../../../components/BtnPlay';
import BlockRating from '../../../../../components/BlockRating';
import useStyles from './styles';
import './movie.scss'

function MovieItem(props) {
  const classes = useStyles({ bg: props.item.hinhAnh });
  const history = useHistory();
  return (
    <div style={{
      padding: '7px',
      cursor: 'pointer',
    }} >
      <div className="film">
        <div className="film__img">
          <div className={`film__poster ${classes.addbg}`}>
            <div className="film__overlay" onClick={() => history.push(`/phim/${props.item.maPhim}`)} />
            <div className="play__trailer">
              {/* class play lấy từ Carousel component*/}
              <BtnPlay cssRoot={"play"} width={48} height={48} urlYoutube={props.item.trailer} />
            </div>
          </div>
          <BlockRating danhGia={props.item.danhGia} />
        </div>
        <div className="film__content">
          <p className="film__name">{props.item.tenPhim}</p>
          <div className="film__button">
            {/* <a href="#">MUA VÉ</a> */}
            <Link to={`/phim/${props.item.maPhim}`} >MUA VÉ</Link>
          </div>
        </div>
      </div>
    </div>
  )

}
export default MovieItem
