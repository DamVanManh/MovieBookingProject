import React, { useEffect } from 'react'

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { getListSeat } from '../../reducers/actions/BookTicket'
import { SET_ISMOBILE, INIT_DATA, RESET_DATA, SET_STEP } from '../../reducers/constants/BookTicket';
import Mobile from './Mobile';
import Desktop from './Desktop';
import { DISPLAY_MOBILE_BOOKTICKET } from '../../constants/config';
import Modal from './Modal';

export default function Index() {
  const { refreshKey, timeOut, isMobile, danhSachPhongVe, danhSachPhongVe: { thongTinPhim, danhSachGhe }, loadingGetListSeat, errorGetListSeatMessage, successBookingTicketMessage, errorBookTicketMessage } = useSelector(state => state.bookTicketReducer)
  const { currentUser } = useSelector(state => state.authReducer)
  const param = useParams()
  const dispatch = useDispatch()
  const mediaQuery = useMediaQuery(DISPLAY_MOBILE_BOOKTICKET)

  console.log("danhSachPhongVe: ", danhSachPhongVe);

  useEffect(() => { // chuyển sang step 2 nếu đã nhấn đặt vé
    if (successBookingTicketMessage || errorBookTicketMessage) {
      dispatch({ type: SET_STEP, payload: { activeStep: 2, } })
    }
  }, [successBookingTicketMessage, errorBookTicketMessage])

  useEffect(() => { // lấy thongTinPhim và danhSachGhe
    dispatch(getListSeat(param.maLichChieu))
    return () => { // xóa dữ liệu khi đóng hủy component
      dispatch({ type: RESET_DATA })
    }
  }, [])

  useEffect(() => { // sau khi lấy được danhSachPhongVe thì khởi tạo data
    let initCode = 64;
    const danhSachGheEdit = danhSachGhe?.map((seat, i) => { // thêm label A01, thêm flag selected: false
      if (i % 16 === 0) initCode++
      const txt = String.fromCharCode(initCode)
      const number = ((i % 16) + 1).toString().padStart(2, 0)
      return ({ ...seat, label: txt + number, selected: false })
    })
    dispatch({
      type: INIT_DATA,
      payload: {
        listSeat: danhSachGheEdit,
        maLichChieu: thongTinPhim?.maLichChieu,
        taiKhoanNguoiDung: currentUser?.taiKhoan,
        email: currentUser?.email,
        phone: currentUser?.soDT,
      }
    })
  }, [danhSachGhe, currentUser, timeOut])

  useEffect(() => {
    dispatch({ type: SET_ISMOBILE, payload: { isMobile: mediaQuery } })
  }, [mediaQuery])

  if (loadingGetListSeat) {
    return <h1 style={{ paddingTop: 300 }}>loading</h1>
  }
  if (errorGetListSeatMessage) {
    return <div>{errorGetListSeatMessage}</div>
  }
  return (
    <>
      {
        isMobile ? <Mobile key={refreshKey} /> : <Desktop key={refreshKey + 1} />
      }
      <Modal />
    </>
  )
}


