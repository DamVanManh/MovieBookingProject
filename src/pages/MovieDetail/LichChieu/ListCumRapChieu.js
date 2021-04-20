import React, { useEffect, useState, Fragment, useMemo } from 'react'

import useStyles from './style'
import returnRandomImg from '../../../constants/theaterImagesData';
import ListLichChieuPhimFilterByDayAndNameTheater from './ListLichChieuPhimFilterByDayAndNameTheater';
import Address from './Address';


export default function ListCumRapChieu({ data }) {
  const [dataCRC, setDataCRC] = useState({ arrayLichChieuPhimFilterByDay: [], arrayCumRapChieuFilterByDay: [], })
  const classes = useStyles()
  // console.log("truyền ", data);
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
    // console.log("arry ", arrayLichChieuPhimFilterByDay, arrayCumRapChieuFilterByDay);
    setDataCRC(dataCRC => ({ ...dataCRC, arrayLichChieuPhimFilterByDay, arrayCumRapChieuFilterByDay, }))
    return () => {
    }
  }, [data.currentSelectDay])

  // dataCRC?.arrayAllCumRapChieuFilterByDay?.length
  const imgLst = useMemo(() => { // dùng useMemo để hình ảnh cụm rạp không bị render lại khi click chọn cụm rạp khác
    let imgLst = []
    for (let i = 0; i < 10; i++) {
      imgLst.push(returnRandomImg())
    }
    return imgLst
  }, [data.currentSelectDay])


  return (
    <>
      {
        dataCRC.arrayCumRapChieuFilterByDay.map((nameTheater, index) => (
          <div key={nameTheater} className={classes.cumRapItem}>
            <div className={classes.topInfo}>
              <img className={classes.imgTheater} src={imgLst[index]} alt="theater" />
              <div className={classes.wrapInfo}>
                <p className={classes.nameTheater}>{nameTheater}</p>
                <Address nameTheater={nameTheater} arrayLichChieuPhimFilterByDay={dataCRC.arrayLichChieuPhimFilterByDay} />
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <p className={classes.digital}>2D Digital</p>

            {/* từ arrayLichChieuPhimFilterByDay, filter ra item trùng  nameTheater*/}
            <div>
              <ListLichChieuPhimFilterByDayAndNameTheater nameTheater={nameTheater} arrayLichChieuPhimFilterByDay={dataCRC.arrayLichChieuPhimFilterByDay} />
            </div>

          </div>

        ))
      }

    </>
  )
}
