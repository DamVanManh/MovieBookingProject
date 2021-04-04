import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import useStyles from './style'
import SeatList from './SeatList'
import PayMent from './PayMent'
import bookingApi from '../../api/bookingApi'

export default function Index() {
  const [dataTicket, setDataTicket] = useState({ loading: false, error: null, danhSachPhongVe: {}, refreshKey: Date.now() })
  const param = useParams();
  const classes = useStyles();

  useEffect(() => { // lấy thông tin phim và danh sách ghế
    setDataTicket(dataTicket => ({ ...dataTicket, loading: true, error: null }))
    bookingApi.getDanhSachPhongVe(param.maLichChieu)
      .then(result => {
        setDataTicket(dataTicket => ({ ...dataTicket, loading: false, danhSachPhongVe: result.data }))
      }
      )
      .catch(result => {
        setDataTicket(dataTicket => ({ ...dataTicket, loading: false, error: result.response.data }))
      })
  }, [])
  // console.log('danhSachPhongVe', dataTicket.danhSachPhongVe)

  const onRefresh = () => {
    console.log("trước", dataTicket.refreshKey)
    setDataTicket((dataTicket) => ({ ...dataTicket, refreshKey: Date.now() }))
    console.log("sau", dataTicket.refreshKey)
  }

  if (dataTicket.loading) {
    return <h1 style={{ paddingTop: 300 }}>loading</h1>
  }
  if (dataTicket.error) {
    return <div>{dataTicket.error}</div>
  }
  return (
    <div style={{ paddingTop: 64 }} className={classes.bookTicked}>
      <div className={classes.seatList} >
        <SeatList key={dataTicket.refreshKey} danhSachPhongVe={dataTicket.danhSachPhongVe} onRefresh={onRefresh} />
      </div>
      <div className={classes.payMent} >
        <PayMent key={dataTicket.refreshKey} danhSachPhongVe={dataTicket.danhSachPhongVe} />
      </div>
    </div>
  )
}
