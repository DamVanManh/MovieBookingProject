import React, { useEffect, useState, Fragment, useMemo } from 'react'
import useStyles from './style'
import returnRandomImg from '../../../constants/theaterImagesData';
import ListLichChieuPhimFilterByDayAndNameTheater from './ListLichChieuPhimFilterByDayAndNameTheater';

export default function ListCumRapChieu({ data }) {
  const [dataCRC, setDataCRC] = useState({ arrayLichChieuPhimFilterByDay: [], arrayCumRapChieuFilterByDay: [], })
  const classes = useStyles()
  // console.log("truyền ", data);
  useEffect(() => {

    // tạo mảng chứa tất cả LichChieuPhim trùng ngày đang chọn
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
    console.log("arry ", arrayLichChieuPhimFilterByDay, arrayCumRapChieuFilterByDay);
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
  }, [data.currentMaHeThongRap, data.arrayCumRapChieu])
  console.log("imgLst ", imgLst);

  return (
    <>
      {
        dataCRC.arrayCumRapChieuFilterByDay.map((nameTheater, index) => (
          <Fragment key={nameTheater}>
            <div>
              <img className={classes.imgTheater} src={imgLst[index]} alt="theater" />
              <div>
                <p>{nameTheater}</p>
                <p>dịa chỉ</p>
              </div>
            </div>
            <p>2D Digital</p>

            {/* danh sách maLichChieu đã filter theo ngày và rap */}
            <div>
              <ListLichChieuPhimFilterByDayAndNameTheater nameTheater={nameTheater} arrayLichChieuPhimFilterByDay={dataCRC.arrayLichChieuPhimFilterByDay} />
            </div>

          </Fragment>
        ))
      }

    </>
  )
}
