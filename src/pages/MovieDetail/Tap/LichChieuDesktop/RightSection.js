// import React, { useState } from 'react'

// import useStyles from './style'
// import formatDate from '../../../../utilities/formatDate';
// import ListCumRapChieu from './ListCumRapChieu';

// export default function RightSection({ currentSelectedHeThongRapChieu }) {
//   const [indexSelected, setindexSelected] = useState(0)
//   const classes = useStyles()

//   // lọc ra tất cả lichChieuPhim và add thêm props tenCumRap để nhận biết lichChieuPhim này thuộc cụm rạp nào
//   const arrayAllLichChieuPhim = currentSelectedHeThongRapChieu.cumRapChieu.reduce((colect, item) => {
//     return [...colect,
//     ...item.lichChieuPhim.map(lichChieu => ({
//       ...lichChieu, tenCumRap: item.tenCumRap
//     }))
//     ]
//   }, [])

//   // tạo mảng chỉ chứa ngày
//   const arrayAllDay = arrayAllLichChieuPhim.map(item => {
//     return item.ngayChieuGioChieu.slice(0, 10);// tạo mảng mới với item là "2020-12-17" cắt ra từ 2020-12-17T10:10:00
//   })
//   const arrayDay = [...(new Set(arrayAllDay))].sort() // xóa đi phần tử trùng lặp

//   // [ [{},{},{}], [{},{},{}], [{},{},{}]] : mỗi item chứa mảng LichChieuPhim của ngày
//   const allArrayLichChieuPhimFilterByDay = arrayDay.map((item, i, arrayDay) => {
//     const arrayLichChieuPhimFilterByDay = arrayAllLichChieuPhim.filter(item => {
//       if (item.ngayChieuGioChieu.slice(0, 10) === arrayDay[i]) {
//         return true
//       }
//       return false
//     })
//     return arrayLichChieuPhimFilterByDay
//   })

//   const handleSelectDay = (i) => {
//     setindexSelected(i)
//   }

//   return (
//     <div>
//       <div className={classes.listDay}>
//         {arrayDay?.map((day, i) => (
//           <div className={classes.dayItem} key={day} style={{ color: i === indexSelected ? "#fb4226" : "#000" }} onClick={() => handleSelectDay(i)}>
//             <p>{formatDate(day).dayToday}</p>
//             <p style={{ fontSize: i === indexSelected ? "18px" : "16px" }}>{formatDate(day).dDMmYy}</p>
//           </div>
//         ))}
//       </div>
//       {allArrayLichChieuPhimFilterByDay?.map((arrayLichChieuPhimFilterByDay, i) =>
//         <div style={{ display: indexSelected === i ? "block" : "none" }} key={i}>
//           <ListCumRapChieu arrayLichChieuPhimFilterByDay={arrayLichChieuPhimFilterByDay} />
//         </div>
//       )}
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react'

import useStyles from './style'
import formatDate from '../../../../utilities/formatDate';
import ItemCumRap from '../../../../components/ItemCumRap';

export default function RightSection({ currentSelectedHeThongRapChieu }) {
  const [indexSelected, setindexSelected] = useState(0)
  const [dataLCPMobile, setDataLCPMobile] = useState({ arrayDay: [], allArrayCumRapChieuFilterByDay: [] })
  const classes = useStyles()

  useEffect(() => {
    // lọc ra tất cả lichChieuPhim và add thêm props tenCumRap để nhận biết lichChieuPhim này thuộc cụm rạp nào
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
    const arrayDay = [...(new Set(arrayAllDay))].sort() // xóa đi phần tử trùng lặp

    // [ [{},{},{}], [{},{},{}], [{},{},{}]] : array chứa dữ liệu theo ngày, array con: [{ tenCumRap, maLichChieu, lichChieuPhim },{}]
    const allArrayCumRapChieuFilterByDay = arrayDay.map((day) => {

      // tạo mảng chứa lichchieuphim filter theo ngày
      const arrayLichChieuPhimFilterByDay = arrayAllLichChieuPhim.filter(item => {
        if (item.ngayChieuGioChieu.slice(0, 10) === day) {
          return true
        }
        return false
      })

      // loại bỏ cumRapChieu trùng lặp
      const arrayCumRapChieuRemoveDup = arrayLichChieuPhimFilterByDay?.filter((itemIncrease, indexIncrease, arr) => {
        const indexFirstFounded = arr.findIndex((t) => (
          t.tenCumRap === itemIncrease.tenCumRap
        ))
        return indexIncrease === indexFirstFounded
      })

      // tạo mảng cumRapChieu
      const arrayCumRapChieu = arrayCumRapChieuRemoveDup.map(cumRapChieu => {
        const tenCumRap = cumRapChieu.tenCumRap
        const maLichChieu = cumRapChieu.maLichChieu
        // tạo mảng lichChieuPhim: trùng tenCumRap
        const lichChieuPhim = arrayLichChieuPhimFilterByDay.filter(lichChieuPhim => lichChieuPhim.tenCumRap === tenCumRap)
        return { tenCumRap, maLichChieu, lichChieuPhim }
      })

      return arrayCumRapChieu
    })
    setDataLCPMobile({ arrayDay, allArrayCumRapChieuFilterByDay })
  }, [])

  const handleSelectDay = (i) => {
    setindexSelected(i)
  }

  return (
    <div>
      <div className={classes.listDay}>
        {dataLCPMobile.arrayDay?.map((day, i) => (
          <div className={classes.dayItem} key={day} style={{ color: i === indexSelected ? "#fb4226" : "#000" }} onClick={() => handleSelectDay(i)}>
            <p>{formatDate(day).dayToday}</p>
            <p style={{ fontSize: i === indexSelected ? "18px" : "16px" }}>{formatDate(day).dDMmYy}</p>
          </div>
        ))}
      </div>
      {dataLCPMobile.allArrayCumRapChieuFilterByDay?.map((arrayCumRapChieuFilterByDay, i) =>
        <div style={{ display: indexSelected === i ? "block" : "none" }} key={i}>
          {arrayCumRapChieuFilterByDay.map((item) => (
            <ItemCumRap key={item.tenCumRap} tenCumRap={item.tenCumRap} maLichChieu={item.maLichChieu} lichChieuPhim={item.lichChieuPhim} />
          ))}
        </div>
      )}
    </div>
  )
}
