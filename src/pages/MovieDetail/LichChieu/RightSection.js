import React, { useEffect, Fragment, useState } from 'react'

import useStyles from './style'
import formatDate from '../../../utilities/formatDate';
import ListCumRapChieu from './ListCumRapChieu';

export default function RightSection({ currentSelectedHeThongRapChieu, maHeThongRap }) {
  const [data, setData] = useState({ arrayAllLichChieuPhim: [], arrayDay: [], arrayCumRapChieu: [], currentSelectDay: "", currentMaHeThongRap: maHeThongRap })
  const classes = useStyles()
  useEffect(() => {

    // currentSelectedHeThongRapChieu: chứa lichChieuPhim chia theo từng cumRapChieu, ta cần filter lichChieuPhim theo ngày và cumRapChieu
    // lọc ra tất cả lichChieuPhim và add thêm props tenCumRap để nhận biết lichChieuPhim này thuộc cụm rạp nào
    let ismounted = false
    const arrayAllLichChieuPhim = currentSelectedHeThongRapChieu.cumRapChieu.reduce((colect, item) => {
      return [...colect,
      ...item.lichChieuPhim.map(lichChieu => ({
        ...lichChieu, tenCumRap: item.tenCumRap
      }))
      ]
    }, [])

    // tạo mảng chỉ chứa ngày
    const arrayAllDay = arrayAllLichChieuPhim.map(item => {
      return item.ngayChieuGioChieu.slice(0, 10);// tạo mảng mới với item là "2020-12-17" cắt ra từ 2020-12-17T10:10:00
    })
    const arrayDay = [...(new Set(arrayAllDay))] // xóa đi phần tử trùng lặp

    // 
    const arrayCumRapChieu = currentSelectedHeThongRapChieu.cumRapChieu.map(item => (// danh sách cụm rạp chiếu 
      item.tenCumRap
    ))
    // mặc định ngày đầu tiên là ngày đang chọn
    const currentSelectDay = arrayDay[0]

    if (!ismounted) {
      setData(data => ({ ...data, arrayAllLichChieuPhim, arrayDay, arrayCumRapChieu, currentSelectDay }))
    }
    return () => {
      ismounted = true
    }
  }, [])

  const handleSelectDay = (e) => {
    const currentSelectDay = e.currentTarget?.getAttribute('day')
    setData(data => ({ ...data, currentSelectDay }))
  }
  // console.log(" maHeThongRap:  ", maHeThongRap);
  return (
    <div>
      <div className={classes.listDay}>
        {data?.arrayDay?.map(day => (
          <div className={classes.dayItem} key={day} style={{ color: day === data.currentSelectDay ? "#fb4226" : "#000" }} onClick={(e) => handleSelectDay(e)} day={day}>
            <p>{formatDate(day).dayToday}</p>
            <p style={{ fontSize: day === data.currentSelectDay ? "18px" : "16px" }}>{formatDate(day).dDMmYy}</p>
          </div>
        ))}
      </div>
      <ListCumRapChieu data={data} />
    </div>
  )
}
