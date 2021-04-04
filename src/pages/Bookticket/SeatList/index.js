import React, { useEffect, useState, useMemo } from 'react'

import Dialog from '@material-ui/core/Dialog';
import SeatIcon from '@material-ui/icons/CallToActionRounded';
import Countdown, { zeroPad } from "react-countdown";

import useStyles from './style'
import { colorTheater, logoTheater } from '../../../constants/theaterData'
import formatDate from '../../../utilities/formatDate'

export default function Index({ danhSachPhongVe, onRefresh }) {
  const { danhSachGhe, thongTinPhim } = danhSachPhongVe

  const classes = useStyles({ color: colorTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()] })
  const [open, setOpen] = useState(false);

  const [seatList, setSeatList] = useState([])
  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  const [objDatVe, setObjDatVe] = useState({
    maLichChieu: thongTinPhim?.maLichChieu,
    danhSachVe: [],
    taiKhoanNguoiDung: currentUser.taiKhoan || ""
  })

  useEffect(() => {
    let initCode = 64;
    const danhSachGheEdit = danhSachGhe?.map((seat, i) => { // thêm label A1, thêm flag selected: false
      if (i % 16 === 0) initCode++
      return ({ ...seat, label: String.fromCharCode(initCode) + ((i % 16) + 1), selected: false })
    })
    setSeatList(danhSachGheEdit)
  }, [])

  const color = (seat) => {
    let color;
    if (seat.daDat) {
      color = '#e7eaec'
    }
    if (seat.loaiGhe === 'Thuong') {
      color = '#3e515d'
    }
    if (seat.loaiGhe === 'Vip') {
      color = '#f7b500'
    }
    if (seat.selected) {
      color = '#44c020'
    }
    return color;
  }
  const handleSelected = (seat) => {
    if (seat.daDat) { // click vào ghế đã có người chọn
      return;
    }
    if (seat.selected) { // click vào ghế đã chọn thì: selected: false, remove danhSachVe
      let newSeatList = seatList.map(seatPrevious => {
        if (seat.maGhe === seatPrevious.maGhe) {
          return ({ ...seatPrevious, selected: false })
        }
        return seatPrevious
      })
      setSeatList(newSeatList)
      setObjDatVe({ ...objDatVe, danhSachVe: [...objDatVe.danhSachVe.filter(item => item.maGhe !== seat.maGhe)] })
    }
    if (!seat.selected) { // click vào ghế chưa chọn thì: selected: true, add danhSachVe
      let newSeatList = seatList.map(seatPrevious => {
        if (seat.maGhe === seatPrevious.maGhe) {
          return ({ ...seatPrevious, selected: true })
        }
        return seatPrevious
      })
      setSeatList(newSeatList)
      setObjDatVe({ ...objDatVe, danhSachVe: [...objDatVe.danhSachVe, { maGhe: seat.maGhe, giaVe: seat.giaVe }] })
    }
  }
  const preventRender = useMemo(() => {
    return Date.now() + 300000
  }, [])
  console.log('objDatVe: ', objDatVe, seatList, preventRender)
  return (
    <>
      {/* stepcheckout */}
      <div>step chekout</div>

      {/* thông tin phim */}
      <div className={classes.info}>
        <div className={classes.infoTheater}>
          <img src={logoTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()]} alt="phim" style={{ width: 50, height: 50 }} />
          <div className={classes.text}>
            <p className={classes.text__first}><span>{thongTinPhim?.tenCumRap.split("-")[0]}</span><span className={classes.text__second}>-{thongTinPhim?.tenCumRap.split("-")[1]}</span></p>
            <p className={classes.textTime}>{`${formatDate(thongTinPhim?.ngayChieu ?? '31/3/2021').dayToday} - ${thongTinPhim?.gioChieu} - ${thongTinPhim?.tenRap}`}</p>
          </div>
        </div>
        <div className={classes.countDown}>
          <p className={classes.timeTitle}>Thời gian giữ ghế</p>
          <Countdown
            date={preventRender}
            renderer={({ minutes, seconds }) => (
              <span className={classes.timeCount}>
                {zeroPad(minutes)}:{zeroPad(seconds)}
              </span>)
            }
            onComplete={() => setOpen(true)}
          />
        </div>
      </div>

      {/* mô phỏng màn hình */}
      <div className={classes.screen}>
        <img className={classes.logo} src="/img/screen.png" />
      </div>

      {/* danh sách ghế */}
      <div className={classes.listSeat}>
        {seatList?.map((seat, i) => (
          <div className={classes.seat} key={seat.maGhe}>
            {(i === 0 || (i % 16) === 0) && <p className={classes.label}>{seat.label.slice(0, 1)}</p>}
            <p style={{ display: seat.selected && 'block' }} className={classes.seatName}>{seat.label.slice(1)}</p>
            <SeatIcon style={{ color: color(seat) }} className={classes.seatIcon} />
            {seat.label == 'E8' && <img className={classes.viewCenter} src="/img/seatcenter.png" alt="''" />}
            <div className={classes.areaClick} onClick={() => handleSelected(seat)}></div>
          </div>
        ))}
      </div>

      {/* thông tin các loại ghế */}
      <div className={classes.noteSeat}>
        <div className={classes.typeSeats}>
          <div>
            <SeatIcon style={{ color: '#3e515d', fontSize: "2.1vw" }} />
            <p>Ghế thường</p>
          </div>
          <div>
            <SeatIcon style={{ color: '#f7b500', fontSize: "2.1vw" }} />
            <p>Ghế vip</p>
          </div>
          <div>
            <SeatIcon style={{ color: '#44c020', fontSize: "2.1vw" }} />
            <p>Ghế đang chọn</p>
          </div>
          <div>
            <SeatIcon style={{ color: '#e7eaec', fontSize: "2.1vw" }} />
            <p>Ghế đã có người chọn</p>
          </div>
        </div>

        <div className={classes.positionView}>
          <span>
            <span className={classes.linecenter} />
            <span>Ghế trung tâm</span>
          </span>
          <span className={classes.line}>
            <span className={classes.linebeautiful} />
            <span>Ghế Đẹp</span>
          </span>
        </div>


      </div>

      {/* popup */}
      <Dialog
        open={open}
        classes={{ paper: classes.popup }}
        maxWidth='md'
      >
        <p>Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút.
          <span className={classes.refresh} onClick={() => onRefresh()}>Đặt vé lại</span></p>
      </Dialog>
    </>
  )
}
