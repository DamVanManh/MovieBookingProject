import React, { useEffect } from 'react'

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'

import { getListSeat } from '../../reducers/actions/BookTicket'
import { CHANGE_LISTSEAT } from '../../reducers/constants/BookTicket';

import Mobile from './Mobile';
import Desktop from './Desktop';

export default function Index() {
  const { danhSachPhongVe, loadingGetListSeat, errorGetListSeatMessage } = useSelector((state) => state.bookTicket)
  const param = useParams()
  const dispatch = useDispatch()
  const theme = useTheme()
  const horizontal = useMediaQuery(theme.breakpoints.down(768))

  useEffect(() => { // lấy thongTinPhim và danhSachGhe
    dispatch(getListSeat(param.maLichChieu))
  }, [])

  useEffect(() => { // Chỉnh sửa data danhSachGhe
    let initCode = 64;
    const danhSachGheEdit = danhSachPhongVe.danhSachGhe?.map((seat, i) => { // thêm label A01, thêm flag selected: false
      if (i % 16 === 0) initCode++
      const txt = String.fromCharCode(initCode)
      const number = ((i % 16) + 1).toString().padStart(2, 0)
      return ({ ...seat, label: txt + number, selected: false })
    })
    dispatch({
      type: CHANGE_LISTSEAT,
      payload: {
        listSeat: danhSachGheEdit
      }
    })
  }, [danhSachPhongVe])

  if (loadingGetListSeat) {
    return <h1 style={{ paddingTop: 300 }}>loading</h1>
  }
  if (errorGetListSeatMessage) {
    return <div>{errorGetListSeatMessage}</div>
  }
  return (
    <>
      {horizontal ?
        <Mobile horizontal={horizontal} /> :
        <Desktop horizontal={horizontal} />
      }
    </>
  )
}


