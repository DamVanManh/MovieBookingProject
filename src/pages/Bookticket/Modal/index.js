import React from 'react'

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import { useHistory } from "react-router-dom";

import useStyles from './style'
import { RESET_DATA } from '../../../reducers/constants/BookTicket'
import { getListSeat } from '../../../reducers/actions/BookTicket'
import { colorTheater } from '../../../constants/theaterData'
import ResultBookticket from '../ResultBookticket'

export default function Modal() {
  const { isMobile, timeOut, successBookingTicketMessage, errorBookTicketMessage, danhSachPhongVe } = useSelector((state) => state.bookTicketReducer)
  const dispatch = useDispatch()
  const param = useParams() // lấy dữ liệu param từ URL
  const history = useHistory();
  const { thongTinPhim } = danhSachPhongVe
  const classes = useStyles({ thongTinPhim, color: colorTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()] })
  const isBookticket = (successBookingTicketMessage || errorBookTicketMessage) ? true : false

  const handleReBooking = () => {
    if (successBookingTicketMessage) {
      dispatch({ type: RESET_DATA })
      dispatch(getListSeat(param.maLichChieu))
    }
    if (errorBookTicketMessage) {
      dispatch({ type: RESET_DATA })
    }
    if (timeOut) {
      dispatch({ type: RESET_DATA })
    }
  }
  const handleCombackHome = () => {
    dispatch({ type: RESET_DATA })
    history.push('/')
  }
  return (
    <Dialog open={timeOut || (isBookticket && !isMobile)} classes={{ paper: classes.modal }} maxWidth='md'>

      {timeOut &&
        <div className={classes.timeOut}>
          <p>Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút.
      <span className={classes.txtClick} onClick={handleReBooking}>Đặt vé lại</span></p>
        </div>
      }
      {(!isMobile && isBookticket) && // chỉ open modal khi là desktop và đã đạt vé
        <div>
          <ResultBookticket />
          <div className={classes.spaceEvenly}>
            <span className={classes.txtClick} onClick={handleReBooking}>
              {successBookingTicketMessage && 'Mua thêm vé phim này'}
              {errorBookTicketMessage && 'Thử mua lại'}
            </span>
            <span className={classes.txtClick} onClick={handleCombackHome} >Quay về trang chủ</span>
          </div>
        </div>
      }

    </Dialog>
  )
}
