import React from 'react'
import { useHistory } from "react-router-dom";
import useStyles from './style'

export default function BtnGoToCheckout({ lichChieuTheoPhim }) {
  const classes = useStyles()
  const history = useHistory()

  const calculateTimeout = (ngayChieuGioChieu) => {
    const fakeThoiLuong = 120
    const timeInObj = new Date(ngayChieuGioChieu);
    const timeOutObj = new Date(timeInObj.getTime() + fakeThoiLuong * 60 * 1000);
    return timeOutObj.toLocaleTimeString([], { hour12: false }).slice(0, 5)
  }

  return (
    <button className={classes.button} onClick={() => history.push(`/datve/${lichChieuTheoPhim.maLichChieu}`, `/datve/${lichChieuTheoPhim.maLichChieu}`)}>
      <span className={classes.inTime}>{lichChieuTheoPhim.ngayChieuGioChieu.slice(11, 16)}</span>
      <span className={classes.outTime}>{` ~ ${calculateTimeout(lichChieuTheoPhim.ngayChieuGioChieu)}`}</span>
    </button>
  )
}
