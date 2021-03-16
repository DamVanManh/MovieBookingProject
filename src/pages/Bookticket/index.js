import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getRoomTicketList } from '../../reducers/actions/Movie';
import { useParams } from "react-router-dom";
import { bookTicket } from '../../reducers/actions/BookTicket';

export default function Bookticket() {
  // mảng chứa các ghế được chọn
  const [seatReserved, setSeatReserved] = useState([])
  // console.log(seatReserved)
  // mảng chứa danh sách ghế ngồi đẩy lên server
  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  const [danhSachVe, setDanhSachVe] = useState({
    maLichChieu: "",
    danhSachVe: [],
    taiKhoanNguoiDung: currentUser.taiKhoan || ""
  })

  // cập nhập lại danhSachGhe sau mỗi lần danh sách ghế đang chọn bị thay đổi
  useEffect(() => {
    setDanhSachVe((currentData) => ({ ...currentData, danhSachVe: seatReserved }))
  }, [seatReserved])
  // console.log(danhSachVe)

  // console.log(seatReserved)

  const [total, setTotal] = useState(0)

  // LẤY MÃ LỊCH CHIẾU DƯỚI MATCH VÀ GỌI API
  const param = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    // lấy mã lịch chiếu gán vào object danhSachVe
    setDanhSachVe((danhSachVe) => ({ ...danhSachVe, maLichChieu: param.maLichChieu }))

    dispatch(getRoomTicketList(param.maLichChieu))
  }, [param.maLichChieu])


  // LẤY DATA TỪ STORE VỀ
  const { seatList, loading, error, message } = useSelector((state) => state.movieReducer);
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
      // console.log(seatReserved)
      // setDanhSachVe((danhSachVe) => ({ ...danhSachVe, danhSachGhe: seatReserved })) // cập nhập danh sách ghế để đẩy lên server
    } else {
      setSeatReserved(pre => [...pre, seat])      // thêm vào res
      setTotal(total + seat.giaVe)      // cộng thêm tiền của ghế vừa đặt
      // console.log(seatReserved)
      // setDanhSachVe((danhSachVe) => ({ ...danhSachVe, danhSachGhe: seatReserved })) // cập nhập danh sách ghế để đẩy lên server
    }
  }



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <p>Ghế đã chọn:</p>
            <ul>
              {seatReserved.map((item, index) => {
                return (
                  <li key={index}>Ghế số:{item.tenGhe}</li>
                )
              })}
            </ul>
          </div>
          <div className="col-sm-5">
            <div className="mb-3">
              <h3 className="d-inline">Thành tiền:</h3>
              <h3 className="d-inline">{total}đ</h3>
            </div>
            <div className="d-flex">
              <div>
                <button disabled={loading} className="btn btn-success mb-4" onClick={() => dispatch(bookTicket(danhSachVe))}>Đặt vé</button>
              </div>

              <h4>
                {message}
              </h4>
            </div>

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
