
import React, { useState, useEffect, useRef } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import useStyles from './style';
import formatDate from '../../../utilities/formatDate';
import { bookTicket } from '../../../reducers/actions/BookTicket'
import { SET_DATA_PAYMENT, SET_READY_PAYMENT } from '../../../reducers/constants/BookTicket';

const makeObjError = (name, value, dataSubmit) => {
  let newErrors = { ...dataSubmit.errors, [name]: value.trim() === '' ? `${name.charAt(0).toUpperCase() + name.slice(1)} không được bỏ trống` : '' }
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexNumber = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
  if (name === 'email' && value) { // nếu đang onChange email và đang có dữ liệu
    if (!regexEmail.test(value)) {
      newErrors[name] = 'Email không đúng định dạng';
    }
  }
  if (name === 'phone' && value) {
    if (!regexNumber.test(value)) {
      newErrors[name] = 'Phone không đúng định dạng';
    }
  }
  return newErrors
}

export default function PayMent() {
  const { amount, activeStep, email, phone, paymentMethod, isReadyPayment, isMobile, danhSachVe, danhSachPhongVe, maLichChieu, listSeat, taiKhoanNguoiDung, isSelectedSeat, listSeatSelected, loadingBookingTicket, successBookingTicketMessage, errorBookTicketMessage } = useSelector(state => state.bookTicketReducer)
  const dispatch = useDispatch()
  const { thongTinPhim } = danhSachPhongVe
  const classes = useStyles({ isSelectedSeat, isReadyPayment, isMobile })
  const emailRef = useRef();
  const phoneRef = useRef();
  const [dataSubmit, setdataSubmit] = useState({
    values: {
      email: email,
      phone: phone,
      paymentMethod: paymentMethod,
    },
    errors: {
      email: '',
      phone: '',
    },
  })
  // set data khi nhập email, phone, paymentMethod
  useEffect(() => {
    dispatch({
      type: SET_DATA_PAYMENT,
      payload: {
        email: dataSubmit.values.email,
        phone: dataSubmit.values.phone,
        paymentMethod: dataSubmit.values.paymentMethod,
      },
    })
    // khi không có lỗi và đủ dữ liệu thì sẵn sàng đặt vé và ngược lại
    if (!dataSubmit.errors.email && !dataSubmit.errors.phone && dataSubmit.values.email && dataSubmit.values.phone && dataSubmit.values.paymentMethod && isSelectedSeat) {
      dispatch({ type: SET_READY_PAYMENT, payload: { isReadyPayment: true, activeStep: 1, } })
      console.log('step buoc 2: ', activeStep);
    } else {
      dispatch({ type: SET_READY_PAYMENT, payload: { isReadyPayment: false, activeStep: activeStep, } })
      console.log('step buoc 3: ', activeStep);
    }
  }, [dataSubmit.values.email, dataSubmit.values.phone, dataSubmit.values.paymentMethod, isSelectedSeat, dataSubmit.errors.email, dataSubmit.errors.phone])

  useEffect(() => { // thực hiện lại validation khi chuyển từ desktop sang mobile
    let emailErrors = makeObjError(emailRef.current.name, emailRef.current.value, dataSubmit)
    let phoneErrors = makeObjError(phoneRef.current.name, phoneRef.current.value, dataSubmit)
    setdataSubmit({ ...dataSubmit, errors: { email: emailErrors.email, phone: phoneErrors.phone } })
    console.log('step buoc 1: ', activeStep);
  }, [])
  console.log('step buoc 4: ', activeStep);

  const handleChange = (e) => { // set dataSubmit khi onChange
    let { name, value } = e.target
    let newValues = { ...dataSubmit.values, [name]: value };
    let newErrors = makeObjError(name, value, dataSubmit)
    setdataSubmit({ ...dataSubmit, values: newValues, errors: newErrors })
  }

  const handleBookTicket = () => {
    if (isReadyPayment && !loadingBookingTicket && !successBookingTicketMessage && !errorBookTicketMessage) {
      dispatch(bookTicket({ maLichChieu, danhSachVe, taiKhoanNguoiDung }))
    }
  }

  return (
    <aside className={classes.payMent}>

      <div>
        {/* tổng tiền */}
        <p className={`${classes.amount} ${classes.payMentItem}`}>
          {`${amount.toLocaleString('vi-VI')} đ`}
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
            {`${amount.toLocaleString('vi-VI')} đ`}
          </p>
        </div>

        {/* email */}
        <div className={classes.payMentItem}>
          <label className={classes.label} >E-Mail</label>
          <input type="text" name="email" ref={emailRef} value={dataSubmit.values.email} className={classes.fillIn} onChange={handleChange} />
          <p className={classes.error}>{dataSubmit.errors.email}</p>
        </div>

        {/* phone */}
        <div className={classes.payMentItem}>
          <label className={classes.label} >Phone</label>
          <input type="text" name="phone" ref={phoneRef} value={dataSubmit.values.phone} className={classes.fillIn} onChange={handleChange} />
          <p className={classes.error}>{dataSubmit.errors.phone}</p>
        </div>

        {/* Mã giảm giá */}
        <div className={classes.payMentItem}>
          <label className={classes.label} >Mã giảm giá</label>
          <input type="text" value='Tạm thời không hỗ trợ...' readOnly className={classes.fillIn} />
          <button className={classes.btnDiscount} disabled>Áp dụng</button>
        </div>

        {/* hình thức thanh toán */}
        <div className={classes.selectedPayMentMethod}  >
          <label className={classes.label}>Hình thức thanh toán</label>
          <p className={classes.toggleNotice}>Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.</p>

          <div className={classes.formPayment} >
            <div className={classes.formPaymentItem}>
              <input className={classes.input} type="radio" name="paymentMethod" value="ZaloPay" onChange={handleChange} checked={dataSubmit.values.paymentMethod === "ZaloPay"} />
              <img className={classes.img} src="/img/bookticket/zalo.jpg" alt="zalopay" />
              <label >Thanh toán qua ZaloPay</label>
            </div>
            <div className={classes.formPaymentItem}>
              <input className={classes.input} type="radio" name="paymentMethod" value="Visa, Master, JCB" onChange={handleChange} checked={dataSubmit.values.paymentMethod === "Visa, Master, JCB"} />
              <img className={classes.img} src="/img/bookticket/visa.png" alt="visa" />
              <label >Visa, Master, JCB</label>
            </div>
            <div className={classes.formPaymentItem}>
              <input className={classes.input} type="radio" name="paymentMethod" value="ATM nội địa" onChange={handleChange} checked={dataSubmit.values.paymentMethod === "ATM nội địa"} />
              <img className={classes.img} src="/img/bookticket/atm.png" alt="atm" />
              <label >Thẻ ATM nội địa</label>
            </div>
            <div className={classes.formPaymentItem}>
              <input className={classes.input} type="radio" name="paymentMethod" value="Cửa hàng tiện ích" onChange={handleChange} checked={dataSubmit.values.paymentMethod === "Cửa hàng tiện ích"} />
              <img className={classes.img} src="/img/bookticket/cuahang.png" alt="cuahang" />
              <label >Thanh toán tại cửa hàng tiện ích</label>
            </div>
          </div>
        </div>

        {/* đặt vé */}
        <div className={classes.bottomSection}>
          <button className={classes.btnDatVe} disabled={!isReadyPayment} onClick={handleBookTicket}>
            <p className={classes.txtDatVe}>Đặt Vé</p>
          </button>
        </div>
      </div>

      {/* notice */}
      <div className={classes.notice}>
        <img className={classes.imgNotice} src="/img/bookticket/exclamation.png" alt="notice" />
        <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
        <p>Mã vé sẽ được gửi qua tin nhắn <span className={classes.contactColor}>ZMS</span> (tin nhắn Zalo) và <span className={classes.contactColor}>Email</span> đã nhập.</p>
      </div>



    </aside>
  )
}
