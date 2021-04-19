import React, { useEffect, Fragment, useState } from 'react'

import useStyles from './style'
import formatDate from '../../../utilities/formatDate';
import ListCumRapChieu from './ListCumRapChieu';

export default function RightSection({ itemHeThongRapChieu, maHeThongRap }) {
  const [data, setData] = useState({ arrayAllLichChieuPhim: [], arrayAllDay: [], arrayCumRapChieu: [], currentSelectDay: "", currentMaHeThongRap: maHeThongRap })
  const classes = useStyles()
  useEffect(() => {

    // lọc ra tất cả lịchchiếuphim và add thêm props tenCumRap để nhận biết lichChieuPhim này thuộc cụm rạp nào
    let ismounted = false
    const arrayAllLichChieuPhim = itemHeThongRapChieu.cumRapChieu.reduce((colect, item) => {
      return [...colect,
      ...item.lichChieuPhim.map(lichChieu => ({
        ...lichChieu, tenCumRap: item.tenCumRap
      }))
      ]
    }, [])

    let arrayAllDay = arrayAllLichChieuPhim.map(item => {
      return item.ngayChieuGioChieu.slice(0, 10);// tạo mảng mới với item là "2020-12-17" cắt ra từ 2020-12-17T10:10:00
    })
    arrayAllDay = [...(new Set(arrayAllDay))] // xóa đi phần tử trùng lặp để có danh sách các ngày chiếu

    const arrayCumRapChieu = itemHeThongRapChieu.cumRapChieu.map(item => (// danh sách cụm rạp chiếu 
      item.tenCumRap
    ))

    const currentSelectDay = arrayAllDay[0]

    if (!ismounted) {
      setData(data => ({ ...data, arrayAllLichChieuPhim, arrayAllDay, arrayCumRapChieu, currentSelectDay }))
    }
    return () => {
      ismounted = true
    }
  }, [])


  const handleSelectDay = (e) => {
    const currentSelectDay = e.currentTarget?.getAttribute('day')
    setData(data => ({ ...data, currentSelectDay }))
  }
  console.log(" maHeThongRap ", data);
  return (
    <div>
      <div className={classes.listDay}>
        {data?.arrayAllDay?.map(day => (
          <div className={classes.dayItem} key={day} onClick={(e) => handleSelectDay(e)} day={day}>
            <p>{formatDate(day).dayToday}</p>
            <p>{formatDate(day).dDMmYy}</p>
          </div>
        ))}
      </div>
      <ListCumRapChieu data={data} />
    </div>
  )
}
