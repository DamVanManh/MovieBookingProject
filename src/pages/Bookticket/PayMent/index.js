import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import useStyles from './style';
import formatDate from '../../../utilities/formatDate';
import { bookTicket } from '../../../reducers/actions/BookTicket'
import { SET_PAYMENT_METHOD } from '../../../reducers/constants/BookTicket';
import { ADD_DATA_MALICHCHIEU_TAIKHOANNGUOIDUNG } from '../../../reducers/constants/BookTicket';

export default function PayMent({ horizontal }) {
  const { danhSachPhongVe, maLichChieu, listSeat, taiKhoanNguoiDung, isSelectedSeat, paymentMethod, loadingBookingTicket, successBookingTicketMessage, errorBookTicketMessage } = useSelector(state => state.bookTicket)
  const { currentUser } = useSelector(state => state.authReducer);
  const dispatch = useDispatch()
  const { thongTinPhim } = danhSachPhongVe
  const isReadyPayment = paymentMethod && isSelectedSeat
  const classes = useStyles({ isSelectedSeat, isReadyPayment, horizontal })

  useEffect(() => {
    dispatch({ // set data booking
      type: ADD_DATA_MALICHCHIEU_TAIKHOANNGUOIDUNG,
      payload: {
        maLichChieu: thongTinPhim?.maLichChieu,
        taiKhoanNguoiDung: currentUser.taiKhoan
      }
    })
  }, [currentUser])

  const onSelectPayment = (e) => {
    dispatch({
      type: SET_PAYMENT_METHOD,
      payload: {
        paymentMethod: e.target.value
      },
    })
  }
  const danhSachVe = listSeat?.reduce((danhSachVe, seat) => {
    if (seat.selected) {
      return [...danhSachVe, { maGhe: seat.maGhe, giaVe: seat.giaVe }]
    }
    return danhSachVe
  }, [])
  const handleBookTicket = () => {
    if (!loadingBookingTicket && !successBookingTicketMessage && !errorBookTicketMessage) {
      dispatch(bookTicket({ maLichChieu, danhSachVe, taiKhoanNguoiDung }))
    }
  }
  const getAmount = () => danhSachVe?.reduce((total, item) => total += item.giaVe, 0)
  const listSeatSelected = listSeat?.reduce((listSeatSelected, seat) => {
    if (seat.selected) {
      return [...listSeatSelected, seat.label]
    }
    return listSeatSelected
  }, [])

  return (
    <aside className={classes.payMent}>

      <div>
        {/* tổng tiền */}
        <p className={`${classes.amount} ${classes.payMentItem}`}>
          {`${getAmount()?.toLocaleString('vi-VI')} đ`}
        </p>

        {/* thông tin phim và rạp */}
        <div className={classes.payMentItem}>
          <p className={classes.tenPhim}>{thongTinPhim?.tenPhim}</p>
          <p>{thongTinPhim?.tenCumRap}</p>
          <p>{`${thongTinPhim && formatDate(thongTinPhim.ngayChieu).dayToday} ${thongTinPhim?.ngayChieu} - ${thongTinPhim?.gioChieu} - ${thongTinPhim?.tenRap}`}</p>
        </div>

        {/* ghế đã chọn */}
        <div className={`${classes.seatInfo} ${classes.payMentItem}`}>
          <span>{`Ghế ${listSeatSelected?.join(", ")}`}</span>
          <p className={classes.amountLittle}>
            {`${getAmount()?.toLocaleString('vi-VI')} đ`}
          </p>
        </div>

        {/* email */}
        <div className={classes.payMentItem}>
          <p className={classes.label} >E-Mail</p>
          <input type="text" defaultValue={currentUser.email} className={classes.fillIn} />
        </div>

        {/* phone */}
        <div className={classes.payMentItem}>
          <p className={classes.label} >Phone</p>
          <input type="text" defaultValue={currentUser.soDT} className={classes.fillIn} />
        </div>

        {/* Mã giảm giá */}
        <div className={classes.payMentItem}>
          <p className={classes.label} >Mã giảm giá</p>
          <input type="text" defaultValue='Nhập tại đây...' className={classes.fillIn} />
          <button className={classes.btnDiscount}>Áp dụng</button>
        </div>

        {/* hình thức thanh toán */}
        <div className={classes.selectedPayMentMethod}  >
          <p>Hình thức thanh toán</p>
          <p className={classes.toggleNotice}>Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.</p>

          <div className={classes.formPayment} >
            <div className={classes.formPaymentItem}>
              <input className={classes.input} type="radio" name="payment" value="ZaloPay" onChange={onSelectPayment} checked={paymentMethod === "ZaloPay"} />
              <img className={classes.img} src="/img/bookticket/zalo.jpg" alt="zalopay" />
              <label >Thanh toán qua ZaloPay</label>
            </div>
            <div className={classes.formPaymentItem}>
              <input className={classes.input} type="radio" name="payment" value="Visa, Master, JCB" onChange={onSelectPayment} checked={paymentMethod === "Visa, Master, JCB"} />
              <img className={classes.img} src="/img/bookticket/visa.png" alt="visa" />
              <label >Visa, Master, JCB</label>
            </div>
            <div className={classes.formPaymentItem}>
              <input className={classes.input} type="radio" name="payment" value="ATM nội địa" onChange={onSelectPayment} checked={paymentMethod === "ATM nội địa"} />
              <img className={classes.img} src="/img/bookticket/atm.png" alt="atm" />
              <label >Thẻ ATM nội địa</label>
            </div>
            <div className={classes.formPaymentItem}>
              <input className={classes.input} type="radio" name="payment" value="Cửa hàng tiện ích" onChange={onSelectPayment} checked={paymentMethod === "Cửa hàng tiện ích"} />
              <img className={classes.img} src="/img/bookticket/cuahang.png" alt="cuahang" />
              <label >Thanh toán tại cửa hàng tiện ích</label>
            </div>
          </div>
        </div>
      </div>

      {/* notice */}
      <div className={classes.notice}>
        <img className={classes.imgNotice} src="/img/bookticket/exclamation.png" alt="notice" />
        <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
        <p>Mã vé sẽ được gửi qua tin nhắn <span className={classes.contactColor}>ZMS</span> (tin nhắn Zalo) và <span className={classes.contactColor}>Email</span> đã nhập.</p>
      </div>

      {/* buy ticket */}
      <div className={classes.bottomSection}>
        <button className={classes.btnDatVe} disabled={!isReadyPayment} onClick={() => handleBookTicket()}>
          <p className={classes.txtDatVe}>Đặt Vé</p>
        </button>
      </div>

    </aside>
  )
}
