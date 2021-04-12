import React from 'react'

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import { Link } from "react-router-dom"

import useStyles from './style'
import { INIT_DATA_REBOOKING } from '../../../reducers/constants/BookTicket'
import { getListSeat } from '../../../reducers/actions/BookTicket'
import SuccessBooking from '../SuccessBooking';

export default function Modal() {
  const { openModal, paymentMethod, successBookingTicketMessage, errorBookTicketMessage, danhSachPhongVe } = useSelector((state) => state.bookTicket)
  const dispatch = useDispatch()
  const param = useParams() // lấy dữ liệu param từ URL
  const { thongTinPhim } = danhSachPhongVe
  const classes = useStyles({ thongTinPhim })

  console.log('thông tin phim', thongTinPhim);
  const handleBuyMoreTicket = () => {
    dispatch(getListSeat(param.maLichChieu))
    dispatch({
      type: INIT_DATA_REBOOKING
    })
  }
  const handleReBooking = () => {
    dispatch({
      type: INIT_DATA_REBOOKING
    })
  }
  return (
    <Dialog open={openModal.byTimeOut || openModal.byBookingTicket} classes={{ paper: classes.modal }} maxWidth='md'>

      {openModal.byTimeOut &&
        <div>
          <p>Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút.
      <span className={classes.txtClick} onClick={handleReBooking}>Đặt vé lại</span></p>
        </div>
      }
      {openModal.byBookingTicket && // đặt vé thành công hoặc thất bại
        <div>
          {successBookingTicketMessage &&
            // <div>
            //   <p>{`Đặt vé thành công qua: `}<span className={classes.paymentColor}>{paymentMethod}</span></p>
            //   <p>Chi tiết vé đã mua vui lòng xem trong thông tin tài khoản</p>
            // </div>
            <div className="infotop ng-scope" >
              <div className={classes.imgFlim}>
              </div>
              <div className="block-info">
                <p className="filmname ng-binding">
                  <span ng-class="{'ageType': true, 'ageType-general': film_age==0}" className="ng-binding ageType">C13</span>
                  <span className="label version ng-binding">2D</span>
                  <span className="label version digital ng-binding">Digital</span>Bố Già
                </p>
                <h3>
                  <span className="pcinema ng-binding" style={{ color: '#8bc541' }}>BHD Star</span>
                  <span className="cinemaname ng-binding"> - Bitexco</span>
                </h3>
                <p style={{ color: '#9B9B9B!important' }} className="ng-binding">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                <table style={{ marginTop: 10 }}>
                  <tbody>
                    <tr className="rowinfo">
                      <td valign="top" className="titlecontent" width={90}>Suất chiếu:</td>
                      <td className="contentfull ng-binding">10:30 13/04</td>
                    </tr>
                    <tr className="rowinfo">
                      <td valign="top" className="titlecontent">Phòng:</td>
                      <td className="contentfull ng-binding">RẠP 6</td>
                    </tr>
                    <tr className="rowinfo ng-scope" ng-if="pCinemaId!=1">
                      <td valign="top" className="titlecontent">Ghế:</td>
                      <td className="contentfull ng-binding">F04</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ clear: 'both' }} />
            </div>
          }
          {errorBookTicketMessage && <div>
            <p>Đặt vé thất bại</p>
            <p>{`Error: `}<span className={classes.paymentColor}>{errorBookTicketMessage}</span></p>
          </div>
          }
          <div className={classes.spaceEvenly}>
            <span className={classes.txtClick} onClick={handleBuyMoreTicket}>
              {successBookingTicketMessage && 'Mua thêm vé phim này'}
              {errorBookTicketMessage && 'Thử mua lại'}
            </span>
            <Link className={classes.txtClick} to="/" >Quay về trang chủ</Link>
          </div>
        </div>
      }

    </Dialog>
  )
}
