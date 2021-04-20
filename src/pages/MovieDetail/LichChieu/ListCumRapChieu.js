import React, { useEffect, useState } from 'react'

import useStyles from './style'
import ListLichChieuPhimFilterByDayAndNameTheater from './ListLichChieuPhimFilterByDayAndNameTheater';
import Address from './Address';
import FakeImgTheater from '../../../components/FakeImgTheater/fakeImgTheater';

export default function ListCumRapChieu({ data }) {
  const [dataCRC, setDataCRC] = useState({ arrayLichChieuPhimFilterByDay: [], arrayCumRapChieuFilterByDay: [], })
  const classes = useStyles()

  useEffect(() => {

    // lọc ra item LichChieuPhim theo ngày đang chọn
    const arrayLichChieuPhimFilterByDay = data.arrayAllLichChieuPhim.filter(item => {
      if (item.ngayChieuGioChieu.slice(0, 10) === data.currentSelectDay) {
        return true
      }
      return false
    })
    // tạo mảng chỉ chứa tên các cụm rạp và không bị trùng lặp
    const arrayAllCumRapChieuFilterByDay = arrayLichChieuPhimFilterByDay.map(item =>
      item.tenCumRap
    )
    const arrayCumRapChieuFilterByDay = [...(new Set(arrayAllCumRapChieuFilterByDay))] // loại bỏ trùng

    setDataCRC(dataCRC => ({ ...dataCRC, arrayLichChieuPhimFilterByDay, arrayCumRapChieuFilterByDay, }))
    return () => {
    }
  }, [data.currentSelectDay])

  return (
    <>
      {
        dataCRC.arrayCumRapChieuFilterByDay.map((nameTheater) => (
          <div key={nameTheater} className={classes.cumRapItem}>
            <div className={classes.topInfo}>
              <FakeImgTheater nameTheater={nameTheater} imgStyle={classes.imgTheater} />
              <div className={classes.wrapInfo}>
                <p className={classes.nameTheater}>{nameTheater}</p>
                <Address nameTheater={nameTheater} arrayLichChieuPhimFilterByDay={dataCRC.arrayLichChieuPhimFilterByDay} />
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <p className={classes.digital}>2D Digital</p>

            {/* từ arrayLichChieuPhimFilterByDay, filter ra item trùng  nameTheater*/}
            <ListLichChieuPhimFilterByDayAndNameTheater nameTheater={nameTheater} arrayLichChieuPhimFilterByDay={dataCRC.arrayLichChieuPhimFilterByDay} />


          </div>

        ))
      }

    </>
  )
}
