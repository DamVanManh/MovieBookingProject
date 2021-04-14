import React, { Fragment } from 'react'

import { useHistory } from "react-router-dom";

import formatDate from '../../../../../utilities/formatDate'
import useStyles from './style'

export default function LstGioChieu(props) {
  const { lstLichChieuTheoPhim } = props;
  const classes = useStyles()
  const history = useHistory();
  const mangChiChuaNgay = lstLichChieuTheoPhim.map(item => {  // tạo mảng mới chỉ chứa ngày
    return item.ngayChieuGioChieu.slice(0, 10);// item là "2020-12-17" cắt ra từ 2020-12-17T10:10:00
  })
  const MangNgayKhongTrungLap = [...new Set(mangChiChuaNgay)] // xóa đi ngày trùng lặp > dùng mảng này để render số phần tử

  const filterByDay = (date) => { // lọc ra item từ mảng gốc
    const gioChieuRenDer = lstLichChieuTheoPhim.filter(item => {
      if (item.ngayChieuGioChieu.slice(0, 10) === date) {
        return true
      }
      return false
    })
    return gioChieuRenDer;
  }

  const calculateTimeout = (ngayChieuGioChieu) => {
    const fakeThoiLuong = 120
    const timeInObj = new Date(ngayChieuGioChieu);
    const timeOutObj = new Date(timeInObj.getTime() + fakeThoiLuong * 60 * 1000);
    return timeOutObj.toLocaleTimeString([], { hour12: false }).slice(0, 5)
  }

  return (
    <div className={classes.lstNgayChieu}>
      {MangNgayKhongTrungLap.map(date => (
        <Fragment key={date}>
          <p className={classes.ngayChieu}>{formatDate(date).dateFull}</p> {/*in ra ngày hiện tại*/}
          {filterByDay(date).map(lichChieuTheoPhim => (
            <Fragment key={lichChieuTheoPhim.maLichChieu} >
              <button className={classes.button} onClick={() => history.push(`/datve/${lichChieuTheoPhim.maLichChieu}`)}>
                <span className={classes.inTime}>{lichChieuTheoPhim.ngayChieuGioChieu.slice(11, 16)}</span>
                <span className={classes.outTime}>{` ~ ${calculateTimeout(lichChieuTheoPhim.ngayChieuGioChieu)}`}</span>
              </button>
            </Fragment>
          ))}
        </Fragment>
      ))
      }
    </div >
  )
}
