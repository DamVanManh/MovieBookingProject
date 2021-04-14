import React, { useEffect } from 'react'

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { getListSeat } from '../../reducers/actions/BookTicket'
import { SET_ISMOBILE, INIT_DATA } from '../../reducers/constants/BookTicket';
import Mobile from './Mobile';
import Desktop from './Desktop';
import { DISPLAY_MOBILE_BOOKTICKET } from '../../constants/config';
import Modal from './Modal';

export default function Index() {
  const { refreshKey, timeOut, isMobile, danhSachPhongVe, loadingGetListSeat, errorGetListSeatMessage } = useSelector(state => state.bookTicketReducer)
  const { currentUser } = useSelector(state => state.authReducer)
  const param = useParams()
  const dispatch = useDispatch()
  const mediaQuery = useMediaQuery(DISPLAY_MOBILE_BOOKTICKET)

  useEffect(() => { // lấy thongTinPhim và danhSachGhe
    dispatch(getListSeat(param.maLichChieu))
  }, [])

  useEffect(() => { // sau khi lấy được danhSachPhongVe thì khởi tạo data
    let initCode = 64;
    const danhSachGheEdit = danhSachPhongVe.danhSachGhe?.map((seat, i) => { // thêm label A01, thêm flag selected: false
      if (i % 16 === 0) initCode++
      const txt = String.fromCharCode(initCode)
      const number = ((i % 16) + 1).toString().padStart(2, 0)
      return ({ ...seat, label: txt + number, selected: false })
    })
    dispatch({
      type: INIT_DATA,
      payload: {
        listSeat: danhSachGheEdit,
        maLichChieu: danhSachPhongVe?.thongTinPhim?.maLichChieu,
        taiKhoanNguoiDung: currentUser?.taiKhoan,
        email: currentUser?.email,
        phone: currentUser?.soDT,
      }
    })
  }, [danhSachPhongVe, currentUser, timeOut])

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
      <div style={{ display: isMobile ? 'block' : 'none' }}>
        <Mobile key={refreshKey} />
      </div>
      <div style={{ display: isMobile ? 'none' : 'block' }}>
        <Desktop key={refreshKey + 1} />
      </div>
      <Modal />
    </>
  )
}


