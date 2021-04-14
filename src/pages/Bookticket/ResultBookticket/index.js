import React from 'react'

import { useSelector } from 'react-redux'

import useStyles from './style'
import { colorTheater } from '../../../constants/theaterData'

export default function SuccessBooking() {
  const { amount, email, phone, paymentMethod, listSeatSelected, successBookingTicketMessage, errorBookTicketMessage, danhSachPhongVe } = useSelector((state) => state.bookTicketReducer)
  const { currentUser } = useSelector((state) => state.authReducer)
  const { thongTinPhim } = danhSachPhongVe
  const classes = useStyles({ thongTinPhim, color: colorTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()] })

  return (
    <div className={classes.resultBookticket}>
      <div className={classes.infoTicked} >
        <div className={classes.infoTicked__img}>
        </div>
        <div className={classes.infoTicked__txt}>
          <p className={classes.tenPhim}>
            {thongTinPhim?.tenPhim}
          </p>
          <p className={classes.text__first}><span>{thongTinPhim?.tenCumRap.split("-")[0]}</span><span className={classes.text__second}>-{thongTinPhim?.tenCumRap.split("-")[1]}</span></p>
          <p className={classes.diaChi} >{thongTinPhim?.diaChi}</p>
          <table className={classes.table}>
            <tbody>
              <tr>
                <td valign='top' width={90}>Suất chiếu:</td>
                <td>{`${thongTinPhim?.gioChieu} ${thongTinPhim?.ngayChieu}`}</td>
              </tr>
              <tr>
                <td valign='top'>Phòng:</td>
                <td>{thongTinPhim?.tenRap}</td>
              </tr>
              <tr>
                <td valign='top'>Ghế:</td>
                <td>{listSeatSelected?.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <div width={300}>
          <h3>Thông tin đặt vé</h3>
          <table>
            <tbody>
              <tr>
                <td valign='top' width={80}>Họ tên:</td>
                <td>{currentUser?.hoTen}</td>
              </tr>
              <tr>
                <td valign='top'>Điện thoại:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td valign='top'>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td valign='top'>Trạng thái:</td>
                <td>
                  {successBookingTicketMessage && <span>Đặt vé thành công qua <span className={classes.paymentColor}>{paymentMethod}</span></span>}
                  {errorBookTicketMessage && <span>Đặt vé thất bại: <span className={classes.errorColor}>{errorBookTicketMessage}</span></span>}
                </td>
              </tr>
              <tr>
                <td valign='top' width={120}>Tổng tiền:</td>
                <td><span>{`${amount.toLocaleString('vi-VI')} đ`}</span></td>
              </tr>
            </tbody>
          </table>
          {successBookingTicketMessage && <p className={classes.noteresult}>Mã vé sẽ được gửi qua số điện thoại và email đặt vé của bạn !</p>}
        </div>
      </div>
    </div>
  )
}
