import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getRoomTicketList } from '../../reducers/actions/Movie';
import { useParams } from "react-router-dom";

export default function Bookticket() {

  const param = useParams()
  // console.log(param)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomTicketList(param.maLichChieu))
  }, [param.maLichChieu])


  const { seatList, loading, error } = useSelector((state) => state.movieReducer);
  // console.log(loading)
  if (loading) {
    return <h1>loading</h1>
  }
  if (error) {
    return <div>{error}</div>
  }

  // console.log(seatList.danhSachGhe)
  return (
    <div>
      <div className="container">
        <div className="row">
          {seatList.danhSachGhe?.map((seat, index) => {
            return (
              <div className="col-sm-2 pb-2 ml-2">
                <button className="btn btn-success">Ghế {seat.tenGhe}</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}
