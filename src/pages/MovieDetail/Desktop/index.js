import React, { useState } from 'react'

import { useParams } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './style';
import formatDate from '../../../utilities/formatDate';
import useApiThoiLuongDanhGia from '../../../utilities/useApiThoiLuongDanhGia';
import Tap from '../Tap';
import BtnPlay from '../../../components/BtnPlay';

export default function Desktop({ movieDetailShowtimes: data }) {
  const [onClickBtnMuave, setOnClickBtnMuave] = useState(0)
  const param = useParams()
  const { thoiLuong, danhGia } = useApiThoiLuongDanhGia(param.maPhim)
  const classes = useStyles({ bannerImg: data?.hinhAnh })

  const handleBtnMuaVe = () => {
    setOnClickBtnMuave(Date.now())
  }

  return (
    <div className={classes.desktop}>
      <div className={classes.top}>
        <div className={classes.gradient}>
        </div>
        <div className={classes.bannerBlur}>
        </div>
        <div className={classes.topInfo}>
          <div className={classes.imgTrailer}>
            <BtnPlay urlYoutube={data?.trailer} />
          </div>
          <div className={classes.shortInfo}>
            <p>{formatDate(data.ngayKhoiChieu?.slice(0, 10)).dDMmYy}</p>
            <p className={classes.movieName}><span className={classes.c18}>C18</span>{data.tenPhim}</p>
            <p>{`${thoiLuong} phút - ${danhGia} Txt`} - 2D/Digital</p>
            <button className={classes.btnMuaVe} onClick={handleBtnMuaVe}>Mua vé</button>
          </div>
          <div className={classes.rate}>
            <div className={classes.circular}>
              <span className={classes.danhGia}>{danhGia}</span>
              <CircularProgress variant="determinate" size="100%" value={100} className={classes.behined} color="secondary" />
              <CircularProgress variant="determinate" size="100%" value={danhGia * 10} className={classes.fabProgress} color="secondary" />
            </div>
            <div className={classes.rateStar}>
              <Rating name="half-rating-read" value={(danhGia * 5) / 10} precision={0.5} readOnly />
            </div>
            <span>31 người đánh giá</span>
          </div>
        </div>
      </div>
      <Tap data={data} onClickBtnMuave={onClickBtnMuave} />
    </div>
  )
}
