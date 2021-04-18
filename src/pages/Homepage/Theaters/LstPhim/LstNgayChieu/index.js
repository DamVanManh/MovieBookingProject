import React, { Fragment } from 'react'

import formatDate from '../../../../../utilities/formatDate'
import BtnGoToCheckout from './btnGoToCheckout';
import useStyles from './style'

export default function LstGioChieu(props) {
  const { lstLichChieuTheoPhim } = props;
  const classes = useStyles()
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

  return (
    <div className={classes.lstNgayChieu}>
      {MangNgayKhongTrungLap.map(date => (
        <Fragment key={date}>
          <p className={classes.ngayChieu}>{formatDate(date).dateFull}</p> {/*in ra ngày hiện tại*/}
          {filterByDay(date).map(lichChieuTheoPhim => (
            <Fragment key={lichChieuTheoPhim.maLichChieu} >
              <BtnGoToCheckout lichChieuTheoPhim={lichChieuTheoPhim} />
            </Fragment>
          ))}
        </Fragment>
      ))
      }
    </div >
  )
}
