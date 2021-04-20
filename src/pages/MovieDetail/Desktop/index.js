import React from 'react'

import { useParams } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';
import formatDate from '../../../utilities/formatDate';
import useApiThoiLuongDanhGia from '../../../utilities/useApiThoiLuongDanhGia';
import Tap from '../Tap';

export default function Desktop({ movieDetailShowtimes: data }) {
  const param = useParams()
  const { thoiLuong, danhGia } = useApiThoiLuongDanhGia(param.maPhim)
  const classes = useStyles({ bannerImg: data?.hinhAnh })

  return (
    <div className={classes.desktop}>
      <div className={classes.top}>
        <div className={classes.gradient}>
        </div>
        <div className={classes.bannerBlur}>
        </div>
        <div className={classes.topInfo}>
          <div className={classes.imgTrailer}>
            <img className={classes.img} src={data?.hinhAnh} alt="movie" />
          </div>
          <div className={classes.shortInfo}>
            <p>{formatDate(data.ngayKhoiChieu?.slice(0, 10)).dDMmYy}</p>
            <p className={classes.movieName}><span className={classes.c18}>C18</span>{data.tenPhim}</p>
            <p>{`${thoiLuong} phút - ${danhGia} Txt`} - 2D/Digital</p>
            <button className={classes.btnMuaVe}>Mua vé</button>
          </div>
          <div className={classes.rate}>
            <CircularProgressbar value={danhGia * 10} text={danhGia} />
            <div className={classes.rateStar}>
              <Rating name="half-rating-read" value={(danhGia * 5) / 10} precision={0.5} readOnly />
            </div>
            <span>31 người đánh giá</span>
          </div>
        </div>
      </div>
      <Tap data={data} />
    </div>
  )
}
