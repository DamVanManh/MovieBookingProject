import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getRoomTicketList } from '../../reducers/actions/Movie';
import { useParams } from "react-router-dom";

export default function Bookticket() {
  // mảng chứa các ghế được chọn
  const [seatReserved, setSeatReserved] = useState([])
  // console.log(seatReserved)

  const [total, setTotal] = useState(0)

  // LẤY MÃ LỊCH CHIẾU DƯỚI MATCH VÀ GỌI API
  const param = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomTicketList(param.maLichChieu))
  }, [param.maLichChieu])


  // LẤY DATA TỪ STORE VỀ
  const { seatList, loading, error } = useSelector((state) => state.movieReducer);
  if (loading) {
    return <h1>loading</h1>
  }
  if (error) {
    return <div>{error}</div>
  }

  // ĐẶT VÉ VÀ THÀNH TIỀN
  const handleSelect = (seat) => {
    if (seatReserved.indexOf(seat) > -1) {
      setTotal(total - seat.giaVe)       // trừ đi tiền của ghế vừa bỏ
      setSeatReserved(seatReserved?.filter(res => res !== seat))    // xóa khỏi res
    } else {
      setSeatReserved(pre => [...pre, seat])      // thêm vào res
      setTotal(total + seat.giaVe)      // cộng thêm tiền của ghế vừa đặt
    }
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <p>Ghế đã chọn:</p>
            <ul>
              {seatReserved.map((item, index) => {
                return (
                  <li key={index}>Ghế số:{item.tenGhe}</li>
                )
              })}
            </ul>
          </div>
          <div className="col-sm-3">
            <h1>Thành tiền:</h1>
            <h1>{total}đ</h1>


          </div>
        </div>
        <div className="row">
          {seatList.danhSachGhe?.map((seat, index) => {
            return (
              <div key={index} className="col-sm-2 pb-2 ml-2">

                <button className={`btn ${seat.daDat ? 'btn-danger' : `${seatReserved.indexOf(seat) > -1 ? 'btn-warning' : 'btn-success'} `} `} disabled={seat.daDat} onClick={() => handleSelect(seat)} >Ghế {seat.tenGhe}</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}
