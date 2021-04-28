import React, { useState } from 'react'

import { useParams } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';
import formatDate from '../../../utilities/formatDate';
import useApiThoiLuongDanhGia from '../../../utilities/useApiThoiLuongDanhGia';
import Tap from '../Tap';
import getVideoId from '../../../utilities/getVideoIdFromUrlyoutube';
const BtnPlay = '/img/carousel/play-video.png';

export default function Mobile({ movieDetailShowtimes: data, isMobile }) {
  const [openVideo, setopenVideo] = useState(false)
  const param = useParams()
  const { thoiLuong, danhGia } = useApiThoiLuongDanhGia(param.maPhim)
  const classes = useStyles({ bannerImg: data?.hinhAnh, openVideo })

  return (
    <div className={classes.mobile}>
      <div className={classes.info}>
        <div className={classes.banner}>
        </div>
        <div className={classes.gradient}>
        </div>
        <iframe className={classes.iframe} width="100%" height="100%" src={`https://www.youtube.com/embed/${getVideoId(data.trailer)}?autoplay=0`} frameBorder="0" title="trailer movie"></iframe>
        {openVideo || <img src={BtnPlay} className={classes.btnPlay} onClick={() => setopenVideo(true)} alt="play" />}
      </div>
      <div className={classes.shortInfo}>
        <p>{formatDate(data.ngayKhoiChieu?.slice(0, 10)).dDMmYy}</p>
        <p className={classes.movieName}><span className={classes.c18}>C18</span>{data.tenPhim}</p>
        <p>{`${thoiLuong} phút - ${danhGia} Txt`} - 2D/Digital</p>
      </div>
      <Tap data={data} isMobile={isMobile} />
    </div>
  )
}
